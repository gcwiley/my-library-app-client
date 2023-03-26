import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // forms
import { RouterModule } from '@angular/router';

// import material module
import { MaterialModule } from '../material.module';

// import post components
import { PostFormComponent } from './post-form/post-form.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [PostFormComponent, PostListComponent],
  exports: [PostFormComponent, PostListComponent],
})
export class PostComponentsModule {}
