import React, { Component } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
class BookList extends Component {
 static contextType = ThemeContext;
 render(){
  const { isLightTheme, light, dark } = this.context;  
  const theme = isLightTheme ? light : dark;
    return (
        <div className="booklist" style={{ color: theme.syntax, background: theme.bg }}>
          <ul>
            <li>the way of kings</li>
            <li>the name of the wind</li>
            <li>the final empire</li>
          </ul>
        </div>
    );
 } 
    
};
export default BookList;