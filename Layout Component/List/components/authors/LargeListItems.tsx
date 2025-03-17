import React from 'react';
import { Author } from '../../data/authors';

interface LargeAuthorListItemProps {
  author: Author;
}

export const LargeAuthorListItem: React.FC<LargeAuthorListItemProps> = ({ author }) => {
  const { name, age, country, books } = author;
  
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h3>Books</h3>
      <ul>
        {books.map(book => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
}; 