interface Book {
    name: string;
    price: string | number;
    title: string;
    pages: number;
  }
  
  interface BookInfoProps {
    book?: Book;
  }
  
  export const BookInfo = ({ book } : BookInfoProps) => {
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