// define the issue type
export interface Issue {
  _id?: string;
  title: string;
  category: string;
  status: string;
  description: string;
  createdBy: string;
  updatedBy: string;
}

// define the issue categories
export interface Categories {
  value: string;
  viewValue: string;
}

// define the data values for issue categories
export const categories: Categories[] = [{ value: 'test', viewValue: 'Test' }];
