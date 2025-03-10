import React from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import './index.css';
function App() {
  return (
    <>
      <div class="App">
        <Navbar/>
        <BookList/>
      </div>
    </>
  )
}

export default App;
