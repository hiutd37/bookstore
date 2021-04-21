export interface Product{
  id: number;
  bookName: string;
  price: number;
  quantity: number;
  // @ts-ignore
  publicationDate;
  description: string;
  mainImage: string;
  categoryId: number;
  categoryName: string;
  private: boolean;
  authorId: number;
  authorName: string;
  comments: [];
  bookImageViewModel: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
  };
}
