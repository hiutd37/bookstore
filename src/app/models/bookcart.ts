export class Book {

  constructor() {
    this.id = 0;
    this.bookName = '';
    this.price = 0;
    this.quantity = 0;
    this.publicationDate = '';
    this.description = '';
    this.mainImage = '';
  }

  id: number;
  bookName: string;
  price: number;
  quantity: number;
  publicationDate: any;
  description: string;
  mainImage: string;
}

export class BookCart {


  constructor() {
    this.id = 0;
    this.userId = 0;
    this.bookId = 0;
    this.book = new Book();
    this.amount = 0;
  }

  id: number;
  userId: number;
  bookId: number;
  book: Book;
  amount: number;
}
