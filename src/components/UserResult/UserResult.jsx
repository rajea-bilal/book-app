import React from 'react';
import UserBook from '../UserBook'

function UserResult({ books }) {
  // console.log(books)
  return (
    <>
    <section className="best-seller-container">
        {books?.map((item) => { 
        return <UserBook result={item} key={item.id}/>
      })}
    </section>
    </>
  );
}

export default UserResult;
