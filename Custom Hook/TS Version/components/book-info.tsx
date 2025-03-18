import { useResource } from "./resource.hook";

interface Book {
  name: string;
  price: number | string;
  title: string;
  pages: number;
}

interface BookInfoProps {
  bookId: string;
}

export const BookInfo: React.FC<BookInfoProps> = ({ bookId }) => {
  const book = useResource<Book>(`/books/${bookId}`);
  const { name, price, title, pages } = book || {};

  return book ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Title: {title}</h3>
      <p>Number of Pages: {pages}</p>
    </>
  ) : (
    <h1>Loading</h1>
  );
};