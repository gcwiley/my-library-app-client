// define the issue interface
export interface Issue {
  _id?: string;
  title: string;
  category: string;
  status: string;
  description: string;
  createdBy: string;
  updatedBy: string;
}

// define the issue "category" interface
export interface IssueCategory {
  value: string;
  viewValue: string;
}

// define the issue "status" interface
export interface IssueStatus {
  value: string;
  viewValue: string;
}
