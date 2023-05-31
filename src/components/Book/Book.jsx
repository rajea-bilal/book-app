import React from 'react';

function Book({ result }) {
  const { book_image, title, author, description } = result
  return (
        <article className="search-result">
          <div className="image-container">
            <img
              alt=""
              src={result.book_image}
            />
          </div>
          <div className="description">
            <p className="name">
              {result.title}
            </p>
            <p className="author">
              By <b>{result.author}</b>
            </p>
            <p className="abstract">
              {result.description}
            </p>
          </div>
        </article>
  )

}

export default Book;
