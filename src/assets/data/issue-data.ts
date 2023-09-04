// import the issue category and status interface
import { IssueCategory, IssueStatus } from '../../app/types/issue.interface';

// define the data values for issue "category"
export const ISSUE_CATEGORY: IssueCategory[] = [
  { value: 'bug', viewValue: 'Bug' },
  { value: 'new-feature', viewValue: 'New Feature' },
  { value: 'question', viewValue: 'Question' },
];

// define the data values for issue "status"
export const ISSUE_STATUS: IssueStatus[] = [
  { value: 'open', viewValue: 'Open' },
  { value: 'closed', viewValue: 'Closed' },
];
