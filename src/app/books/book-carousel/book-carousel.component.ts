import {
   AfterContentInit,
   Component,
   ContentChildren,
   Directive,
   ElementRef,
   HostBinding,
   Inject,
   Input,
   Optional,
   QueryList,
   ViewChild,
   ViewEncapsulation,
} from '@angular/core';

import { CommonModule } from '@angular/common';

// find out what this is
import { FocusableOption, FocusKeyManager } from '@angular/cdk/a11y';

import { LEFT_ARROW, RIGHT_ARROW, TAB } from '@angular/cdk/keycodes';

import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';

// import angular material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Directive({
   // eslint-disable-next-line @angular-eslint/directive-selector
   selector: 'carouselItem',
   standalone: true,
})
export class CarouselItemDirective implements FocusableOption {
   @HostBinding('attr.role') readonly role = 'listitem';
   @HostBinding('tabindex') tabindex = '-1';

   constructor(readonly element: ElementRef<HTMLElement>) {}

   focus(): void {
      this.element.nativeElement.focus({ preventScroll: true });
   }
}

@Component({
   selector: 'app-book-carousel',
   templateUrl: './book-carousel.component.html',
   styleUrls: ['./book-carousel.component.scss'],
   standalone: true,
   imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class BookCarouselComponent {
   @Input('aria-label') ariaLabel: string | undefined;
   @ContentChildren(CarouselItemDirective) items!: QueryList<CarouselItemDirective>;
   @ViewChild('list') list!: ElementRef<HTMLElement>;
   @HostBinding('class.animations-disabled') readonly animationsDisabled: boolean;
   position = 0;
   showPrevArrow = false;
   showNextArrow = true;
   index = 0;
   private _keyManager!: FocusKeyManager<CarouselItemDirective>;

   onKeydown({ keyCode }: KeyboardEvent) {
      const manager = this._keyManager;
      const previousActiveIndex = manager.activeItemIndex;

      if (keyCode === LEFT_ARROW) {
         manager.setPreviousItemActive();
      } else if (keyCode === RIGHT_ARROW) {
         manager.setNextItemActive();
      } else if (keyCode === TAB && !manager.activeItem) {
         manager.setFirstItemActive();
      }

      if (manager.activeItemIndex != null && manager.activeItemIndex !== previousActiveIndex) {
         this.index = manager.activeItemIndex;
         this._updateItemTabIndices();

         if (this._isOutOfView(this.index)) {
            this._scrollToActiveItem();
         }
      }
   }

   constructor(@Optional() @Inject(ANIMATION_MODULE_TYPE) animationsModule?: string) {
      this.animationsDisabled = animationsModule === 'NoopAnimations';
   }

   ngAfterContentInit(): void {
      this._keyManager = new FocusKeyManager<CarouselItemDirective>(this.items);
   }

   /** Goes to the next set of items */
   next() {
      for (let i = this.index; i < this.items.length; i++) {
         if (this._isOutOfView(i)) {
            this.index = i;
            this._scrollToActiveItem();
            break;
         }
      }
   }

   /** Goes to the previous set of items. */
   previous() {
      for (let i = this.index; i > -1; i--) {
         if (this._isOutOfView(i)) {
            this.index = i;
            this._scrollToActiveItem();
            break;
         }
      }
   }

   /** Updates the `tabindex` of each of the items based on their active state. */
   private _updateItemTabIndices() {
      this.items.forEach((item: CarouselItemDirective) => {
         if (this._keyManager != null) {
            item.tabindex = item === this._keyManager.activeItem ? '0' : '-1';
         }
      });
   }

   /** Scrolls an item into the viewport. */
   private _scrollToActiveItem() {
      if (!this._isOutOfView(this.index)) {
         return;
      }

      const itemsArray = this.items.toArray();
      let targetItemIndex = this.index;

      // Only shift the carousel by one if we're going forwards. This
      // looks better compared to moving the carousel by an entire page.
      if (this.index > 0 && !this._isOutOfView(this.index - 1)) {
         targetItemIndex = itemsArray.findIndex((_, i) => !this._isOutOfView(i)) + 1;
      }

      this.position = itemsArray[targetItemIndex].element.nativeElement.offsetLeft;
      this.list.nativeElement.style.transform = `translateX(-${this.position}px)`;
      this.showPrevArrow = this.index > 0;
      this.showNextArrow = false;

      for (let i = itemsArray.length - 1; i > -1; i--) {
         if (this._isOutOfView(i, 'end')) {
            this.showNextArrow = true;
            break;
         }
      }
   }

   /** Checks whether an item at a specific index is outside of the viewport. */
   private _isOutOfView(index: number, side?: 'start' | 'end') {
      const { offsetWidth, offsetLeft } = this.items.toArray()[index].element.nativeElement;

      if ((!side || side === 'start') && offsetLeft - this.position < 0) {
         return true;
      }

      return (
         (!side || side === 'end') && offsetWidth + offsetLeft - this.position > this.list.nativeElement.clientWidth
      );
   }
}
