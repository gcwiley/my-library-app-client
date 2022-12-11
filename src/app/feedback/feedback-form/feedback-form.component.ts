import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Import Comment Service
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

  // create comment form
  commentForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    submittedBy: ['', Validators.required]
  })

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private commentService: CommentService
  ) { }

  onSubmitComment() {
    this.commentService.addComment(this.commentForm.value).subscribe(() => {
      // navigates back to homepage
      this.router.navigateByUrl('/')
    })
  }
}
