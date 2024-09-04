import React from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author} ({book.publicationYear})
        </li>
      ))}
    </ul>
  );
};

export default BookList;