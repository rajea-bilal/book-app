import { useState } from 'react'
import React from 'react';
import Form from '../Form'
import Book from '../Book'
import BestSellers from '../BestSellers'
import UserResult from '../UserResult'
import useSWR from 'swr'
import Navbar from '../Navbar'




const url = `https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyDY9bFJdLhkjZkhw2iS83bDjMU3MkCs8CU`


function App() {
  const [search, setSearch] = useState()
  const [ books, setBooks ] = useState()
  const [ status, setStatus ] = useState('idle')

  React.useEffect(() => {
    const fetchUserSearch = async() => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDY9bFJdLhkjZkhw2iS83bDjMU3MkCs8CU`)
      const json = await response.json()
      setBooks(json.items)
      // console.log(json.items)
    }
    fetchUserSearch()
      
  }, [search])
  
  // setting the user's search input as the search state variable
  const addSearch = (title) => {
    setSearch(title)
    // console.log(title)
  }

  return (
    <>
    {/* <h2>Gathering Wisdom</h2> */}
    <Navbar />
    <main>
      <section className="container">
      <Form addSearch={addSearch}/>
      {!search && <BestSellers />}
      {search && <UserResult books={books}/>}
      
      </section>
    </main>
    </>
  )
}
 


    
  


        
      


export default App
