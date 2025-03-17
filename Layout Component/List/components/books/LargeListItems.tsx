import React from 'react';
import { Book } from '../../data/books';

interface LargeBookListItemProps {
  book: Book;
}

export const LargeBookListItem: React.FC<LargeBookListItemProps> = ({ book }) => {
  const { name, title, pages, price } = book;
  
  return (
    <>
      <h2>{name}</h2>
      <p>Title: {title}</p>
      <p>Pages: {pages}</p>
      <p>Price: ${price}</p>
    </>
  );
}; 