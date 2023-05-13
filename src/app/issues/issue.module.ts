import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import the hmaterial module
import { MaterialModule } from '../material.module';

// import issue components
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueListComponent } from './issue-list/issue-list.component';
// add new issue components here

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [IssueFormComponent, IssueListComponent],
  exports: [IssueFormComponent, IssueListComponent],
})
export class IssueComponentsModule {}
