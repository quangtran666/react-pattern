import React from 'react';

interface NumberedListProps<T> {
  items: T[];
  sourceName: string;
  ItemComponent: React.ComponentType<any>;
}

export const NumberedList = <T extends Record<string, any>>({ 
  items, 
  sourceName, 
  ItemComponent 
}: NumberedListProps<T>): JSX.Element => {
  return (
    <>
      {items.map((item, i) => (
        <div key={i}>
          <h3>{i + 1}</h3>
          <ItemComponent {...{ [sourceName]: item }} />
        </div>
      ))}
    </>
  );
}; 