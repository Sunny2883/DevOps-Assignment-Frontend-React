import { useState, useEffect } from 'react'
import BookList from './components/BookList'
import './App.css'

interface Book {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/api/books`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        return response.json();
      })
      .then(data => setBooks(data))
      .catch(error => {
        console.error('Error fetching books:', error);
        setError('An error occurred while fetching books. Please try again later.');
      });
  }, []);

  return (
    <div className="App">
      <h1>Book List</h1>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <BookList books={books} />
      )}
    </div>
  )
}

export default App
