import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// import angular material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

// import the issue service
import { IssueService } from 'src/app/services/issue.service';

// import the issue interface
import { Issue } from 'src/app/types/issue.interface';

@Component({
  selector: 'app-recent-issues',
  templateUrl: './recent-issues.component.html',
  styleUrls: ['./recent-issues.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
})
export class RecentIssueComponent implements OnInit {
  recentIssues!: Issue[];

  constructor(private issueService: IssueService) {}

  ngOnInit(): void {
    this.getRecentIssues()
  }

  getRecentIssues(): void {
    this.issueService.getRecentIssues().subscribe((recentIssues) => (this.recentIssues = recentIssues));
  }
}