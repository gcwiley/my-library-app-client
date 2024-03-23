import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import the angular material modules
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import the issue service
import { IssueService } from '../../services/issue.service';

// import the issue type
import { Issue } from '../../types/issue.interface';

@Component({
   selector: 'app-issue-list',
   templateUrl: './issue-list.component.html',
   styleUrl: './issue-list.component.scss',
   standalone: true,
   imports: [
      CommonModule,
      MatRippleModule,
      MatTableModule,
      MatIconModule,
      MatButtonModule,
      MatTooltipModule,
      MatProgressSpinnerModule,
      RouterModule,
   ],
})
export class IssueListComponent implements OnInit {
   // set the data source
   dataSource = new MatTableDataSource<Issue>();

   // columns to display
   columnsToDisplay = ['title', 'category', 'status', 'createdAt', 'editIssue', 'deleteIssue'];

   constructor(private issueService: IssueService, private router: Router) {}

   ngOnInit(): void {
      this.getIssues();
   }

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
