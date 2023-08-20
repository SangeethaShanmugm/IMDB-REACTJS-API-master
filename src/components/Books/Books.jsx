import React, { useState, useEffect } from "react";
import { API } from "../../global";

function Books() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    fetch(`${API}/books`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setBookList(data));
  }, []);

  return (
    <div className="book-list">
      {bookList.map((bk) => (
        <BookList key={bk.id} book={bk} />
      ))}
    </div>
  );
}

function BookList({ book }) {
  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} />
      <div className="book-spec">
        <h2 className="book-name">{book.name}</h2>
        <h2 className="book-rating">⭐{book.rating}</h2>
      </div>
      <p>{book.summary}</p>
    </div>
  );
}
export default Books;
