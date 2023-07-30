import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

// import the book interface
import { Book } from '../../types/book.interface';

// import the book service
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  standalone: true,
})
export class BookDetailsComponent implements OnInit {

  isLoading = true;
  book: Book | any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.getBook()
  }

  // Get Book by id
  getBook(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBook(id).subscribe((book) => this.book = book)
    this.isLoading = false
  }

  onDeleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(() => {
      // navigates back to home page
      this.router.navigateByUrl('/')
    })
  }

  goHome() {
    // navigates back to homepage
    this.router.navigateByUrl('/')
  }

  onEditBook() {
    alert('Edit Book')
  }
}
