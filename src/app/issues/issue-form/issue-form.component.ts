import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// import angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// import the issue service
import { IssueService } from 'src/app/services/issue.service';

// import the issue interfaces
import { Issue, IssueCategory, IssueStatus } from 'src/app/types/issue.interface';

// import the issue data values
import { ISSUE_CATEGORY, ISSUE_STATUS } from '../../../assets/data/issue-data';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class IssueFormComponent implements OnInit {
  public mode = 'create';
  private id!: string | null;
  private issue!: Issue;

  statues: IssueStatus[] = ISSUE_STATUS;
  categories: IssueCategory[] = ISSUE_CATEGORY;

  constructor(private formBuilder: FormBuilder, private router: Router, public route: ActivatedRoute, private issueService: IssueService) {}

  // create the issue form
  issueForm = this.formBuilder.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    status: ['', Validators.required],
    description: ['', Validators.required],
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
            category: this.issue.category,
            status: this.issue.status,
            description: this.issue.description,
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
