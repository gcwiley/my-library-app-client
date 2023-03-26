import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import pipes
import { SimpleTruncatePipe } from './simple-truncate.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SimpleTruncatePipe, TruncatePipe],
  exports: [SimpleTruncatePipe, TruncatePipe],
})
export class PipesModule {}
