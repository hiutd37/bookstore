export interface Book {
  id: number;
  bookName: string;
  price: number;
  quantity: number;
  publicationDate: any;
  description: string;
  mainImage: string;
}

export interface BookCart {
  id: number;
  userId: number;
  bookId: number;
  book: Book;
  amount: 4;
}
