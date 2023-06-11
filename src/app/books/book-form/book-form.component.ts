import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// import the book service
import { BookService } from '../../services/book.service';

// import the book interface
import { Book } from '../../types/book.interface';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
})
export class BookFormComponent implements OnInit {
  public mode: string = 'create';
  private id!: string | any;
  private book!: Book;

  // create the book form fix this
  bookForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    isbn: ['', Validators.required],
    publicationDate: ['', Validators.required],
    pageCount: ['', Validators.required],
    genre: ['', Validators.required],
    summary: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    // find out if we have an "id" or not
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.id = paramMap.get('id');
        this.bookService.getBook(this.id).subscribe((book) => {
          this.book = book;
          // overrides values of initial form controls
          this.bookForm.setValue({
            // set value for every form control
            title: this.book.title,
            author: this.book.author,
            isbn: this.book.isbn,
            publicationDate: this.book.publicationDate,
            pageCount: this.book.pageCount,
            genre: this.book.genre,
            summary: this.book.summary,
          });
        });
      } else {
        this.mode = 'create';
        this.id = null;
      }
    });
  }

  onSaveBook(): void {
    if (this.mode === 'create') {
      this.bookService.addBook(this.bookForm.value).subscribe(() => {
        console.log(this.bookForm.value);
        // navigates back to homepage
        this.router.navigateByUrl('/');
      });
    } else {
      this.bookService.updateBook(this.id, this.bookForm.value).subscribe(() => {
        // navigates back to homepage
        this.router.navigateByUrl('/');
      });
    }
  }
}
