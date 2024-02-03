import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

// import the angular material modules
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// import the issue service
import { IssueService } from '../../services/issue.service';

// import the issue type
import { Issue } from '../../types/issue.interface';

@Component({
   selector: 'app-issue-list',
   templateUrl: './issue-list.component.html',
   styleUrl: './issue-list.component.scss',
   standalone: true,
   imports: [MatTableModule, MatIconModule, MatButtonModule, RouterModule],
})
export class IssueListComponent {
   // set the data source
   dataSource = new MatTableDataSource<Issue>();

   columnsToDisplay = ['title', 'category', 'status', 'createdBy', 'updatedBy', 'editIssue', 'deleteIssue'];

   constructor(private issueService: IssueService, private router: Router) {}

   // gets all issues from issue service
   getIssues(): void {
      this.issueService.getIssues().subscribe((issues) => {
         this.dataSource.data = issues;
      });
   }

   // delete issue
   onDeleteIssue(id: string) {
      this.issueService.deleteIssue(id).subscribe(() => {
         // navigates user back to the issue page
         this.router.navigateByUrl('/issues');
      });
   }
}
