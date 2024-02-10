// define the book type
export interface Book {
   _id?: string;
   title: string;
   author: string;
   isbn: number;
   publicationDate: string;
   pageCount: number;
   genre: string;
   summary: string;
   createdAt: string;
   updatedAt: string;
}

// book genre
export interface BookGenre {
   value: string;
   viewValue: string;
}
