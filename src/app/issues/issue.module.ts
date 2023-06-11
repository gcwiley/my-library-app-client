import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // forms

// import the material module
import { MaterialModule } from '../material.module';

// import issue components
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueHeaderComponent } from './issue-header/issue-header.component';
// add new issue components here

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [IssueFormComponent, IssueListComponent, IssueHeaderComponent],
  exports: [IssueFormComponent, IssueListComponent],
})
export class IssueComponentsModule {}
