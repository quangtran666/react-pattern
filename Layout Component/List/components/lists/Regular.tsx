import React from 'react';

interface RegularListProps<T> {
  items: T[];
  sourceName: string;
  ItemComponent: React.ComponentType<any>;
}

export const RegularList = <T extends Record<string, any>>({ 
  items, 
  sourceName, 
  ItemComponent 
}: RegularListProps<T>): JSX.Element => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
}; 