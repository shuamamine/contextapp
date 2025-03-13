import React, { Component } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
class BookList extends Component {
 static contextType = ThemeContext;
 render(){
  const { isLightTheme, light, dark } = this.context;  
  const theme = isLightTheme ? light : dark;
    return (
        <div className="booklist p-5 mb-5" style={{ color: theme.syntax, background: theme.bg }}>
          <ul class="p-0 list-none">
            <li class="p-3 mx-auto my-2 rounded-lg" style={{ background: theme.ui }}>the way of kings</li>
            <li class="p-3 mx-auto my-2 rounded-lg" style={{ background: theme.ui }}>the name of the wind</li>
            <li class="p-3 mx-auto my-2 rounded-lg" style={{ background: theme.ui }}>the final empire</li>
          </ul>
        </div>
    );
 } 
    
};
export default BookList;