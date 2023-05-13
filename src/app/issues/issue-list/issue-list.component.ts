import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

// import the issue service
import { IssueService } from 'src/app/services/issue.service';

@Component({
	selector: 'app-issue-list',
	templateUrl: './issue-list.component.html',
	styleUrls: ['./issue-list.component.scss'],
})
export class IssueListComponent implements OnInit {
	// set the data source
	dataSource = new MatTableDataSource();

	// columns to display
	columnsToDisplay = ['title', 'category', 'status'];

	constructor(private issueService: IssueService, private router: Router) {}

	ngOnInit(): void {
		this.getIssues();
	}

	getIssues(): void {
		this.issueService.getIssues().subscribe((issues) => {
			this.dataSource.data = issues;
		});
	}

	onDeleteIssue(id: string) {
		this.issueService.deleteIssue(id).subscribe(() => {
			// navigates admin user back to the issues page
			this.router.navigateByUrl('/support');
		});
	}
}
