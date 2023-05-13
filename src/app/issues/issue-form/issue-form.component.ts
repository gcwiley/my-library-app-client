import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import the issue service
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss']
})
export class IssueFormComponent {

  // create issue form
  issueForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    submittedBy: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private issueService: IssueService
  ) { }

  onSubmitIssue() {
    this.issueService.addIssue(this.issueForm.value).subscribe(() => {
      // navigates back to homepage
      this.router.navigateByUrl('/')
    })
  }
}
