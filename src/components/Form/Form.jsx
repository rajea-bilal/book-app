import React from 'react';

function Form({ addSearch }) {
  const [ inputValue, setInputValue ] = React.useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addSearch(inputValue)
    setInputValue('')
  }
    
  return (
  <>
  <form className="form" onSubmit={handleSubmit}>
    <div className='form-control'>
    <input 
    className="form-input search-input"
    type="text"
    placeholder="Search by title, author or ISBN"
    value={inputValue}
    onChange={(event) => setInputValue(event.target.value)}
    />
    <button type="submit" className="btn search-btn">Search</button>
    </div>
  </form>
  </>
  )


}

export default Form;
