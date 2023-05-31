import React from 'react';

function UserBook({ result }) {
console.log(result)

let description = result.volumeInfo.description

console.log(description?.slice(0, 300))
  return (
        <article className="search-result">
          <div className="image-container">
            <img
              alt=""
              src={result.volumeInfo?.imageLinks?.thumbnail}
            />
          </div>
          <div className="description">
            <p className="name">
              {result.volumeInfo.title}
            </p>
            <p className="author">
              By <b>{result.volumeInfo.authors?.[0]}</b>
            </p>
            <p className="abstract">
              {description?.slice(0, 150)}
            </p>
          </div>
        </article>
  );
}

export default UserBook;
