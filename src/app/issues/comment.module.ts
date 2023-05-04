import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import material module
import { MaterialModule } from '../material.module';

// import comment components
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';
// add new comment components here

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [CommentFormComponent, CommentListComponent],
  exports: [CommentFormComponent, CommentListComponent],
})
export class CommentComponentsModule {}
