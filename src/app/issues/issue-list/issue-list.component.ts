import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

// import angular material modules
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';

// import the issue service
import { IssueService } from 'src/app/services/issue.service';

// import the issue type
import { Issue } from 'src/app/types/issue.interface';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTableModule],
})
export class IssueListComponent implements OnInit {
  // set the data source
  dataSource = new MatTableDataSource<Issue>();

  // columns to display
  columnsToDisplay = ['title', 'category', 'status'];

  // colums to display with expand
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];

  expandedIssue!: Issue | null;

  constructor(private issueService: IssueService, private router: Router) {}

  // this method executes right away
  ngOnInit(): void {
    this.getIssues();
  }

  // gets all issues from service
  getIssues(): void {
    this.issueService.getIssues().subscribe((issues) => {
      this.dataSource.data = issues;
    });
  }

  onDeleteIssue(id: string) {
    this.issueService.deleteIssue(id).subscribe(() => {
      // navigates admin back to the admin page
      this.router.navigateByUrl('/admin');
    });
  }
}
