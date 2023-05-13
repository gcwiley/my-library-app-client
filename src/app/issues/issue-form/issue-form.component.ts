import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// import the issue service
import { IssueService } from 'src/app/services/issue.service';

// import the issue interface
import { Issue } from 'src/app/types/issue.interface';

@Component({
	selector: 'app-issue-form',
	templateUrl: './issue-form.component.html',
	styleUrls: ['./issue-form.component.scss'],
})
export class IssueFormComponent implements OnInit {
	public mode = 'create';
	private id!: string | null;
	private issue!: Issue;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		public route: ActivatedRoute,
		private issueService: IssueService
	) {}

	// create the issue form
	issueForm = this.formBuilder.group({
		title: ['', Validators.required],
		description: ['', Validators.required],
		category: ['', Validators.required],
		status: ['', Validators.required],
	});

	ngOnInit(): void {
		// find out if we have a "id" or not
		this.route.paramMap.subscribe((paramMap: ParamMap) => {
			if (paramMap.has('id')) {
				this.mode = 'edit';
				this.id = paramMap.get('id');
				this.issueService.getIssue(this.id).subscribe((issue) => {
					this.issue = issue;
					// overrides values of initial form controls
					this.issueForm.setValue({
						// set value for every form control
						title: this.issue.title,
						description: this.issue.description,
						category: this.issue.category,
						status: this.issue.status,
					});
				});
			} else {
				this.mode = 'create';
				this.id = null;
			}
		});
	}

	onSaveIssue(): void {
		if (this.mode === 'create') {
			this.issueService.addIssue(this.issueForm.value).subscribe(() => {
				// navigates user back to homepage
				this.router.navigateByUrl('/');
			});
		} else {
			this.issueService.updateIssue(this.issueForm.value).subscribe(() => {
				// navigates user back to homepage
				this.router.navigateByUrl('/');
			});
		}
	}
}
