import React from 'react';
import { Book } from '../../data/books';

interface SmallBookListItemProps {
  book: Book;
}

export const SmallBookListItem: React.FC<SmallBookListItemProps> = ({ book }) => {
  const { name, title } = book;
  
  return (
    <p>
      {name} - {title}
    </p>
  );
}; 