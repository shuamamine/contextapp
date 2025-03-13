import React from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import './index.css';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
function App() {
  return (
      <div className="App max-w-md mx-auto mt-8 text-center">
      <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar/>
        <BookList/> 
        <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
      </div>
  )
}

export default App;
