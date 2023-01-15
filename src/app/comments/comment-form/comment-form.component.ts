import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Import Comment Service
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  // create comment form
  commentForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    submittedBy: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
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
