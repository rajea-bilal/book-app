import React from 'react';
import { useState } from 'react'
import Book from '../Book'
import useSWR from 'swr'


const ENDPOINT = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${import.meta.env.VITE_REACT_APP_API_KEY}`

function BestSellers() {

  const [ bestSellers, setBestSellers ] = useState()
  const { data, isLoading, error } = useSWR(ENDPOINT, fetcher)

  async function fetcher(endpoint) {
  const response = await fetch(endpoint)
  const json = await response.json()
  const bestSellerArray = json.results.lists[0].books
  // console.log(json.results.lists[0].books)
  if(!json.status === 'OK') {
    throw json
   
  }
    setBestSellers(bestSellerArray)
   
}

 
  return (
    <>
     <h3 className="bestseller-title">New York Bestellers</h3>
    <section className="best-seller-container">
      
        {bestSellers?.map((item) => { 
        return <Book result={item} key={item.primary_isbn10}/>
      })}
    </section>
    </>
  );
}

export default BestSellers;
