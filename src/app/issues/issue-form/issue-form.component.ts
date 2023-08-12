import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// import angular material modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

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
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule]
})
export class IssueFormComponent {}
