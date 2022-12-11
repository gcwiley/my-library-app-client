// interfaces can be used to create your own types - define fields and values
export interface Book {
    _id: string;
    title: string,
    author: string,
    isbn: number,
    publicationDate: string;
    pageCount: number;
    genre: string;
    summary: string;
    createdAt: string,
    updatedAt: string,
}

// Book Genre Data Type
export interface BookGenre {
    view: string;
    viewValue: string;
}

// Book Genre Data Values
export const BOOK_GENRES: BookGenre[] = [
    { view: 'test', viewValue: 'Test' },
    { view: 'test', viewValue: 'Test' },
    { view: 'test', viewValue: 'Test' },
]

