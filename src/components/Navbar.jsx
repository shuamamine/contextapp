import React, { Component } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <header class="text-white-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" style={{ background: theme.ui, color: theme.syntax }}>
      <a class="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0"><span class="ml-3 text-xl">ContextApp</span></a>
      
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center p-1">
        <div class="mr-5 cursor-pointer hover:text-white-900" onClick={() => toggleAuth()}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
              </div>
              <ul class="p-0 flex space-x-5">
                <li class="p-0 flex space-x-5"><a class="mr-5 hover:text-white-900">Home</a></li>
                <li class="p-0 flex space-x-5"><a class="mr-5 hover:text-white-900">About</a></li>
                <li class="p-0 flex space-x-5"><a class="mr-5 hover:text-white-900">Contact</a></li>
              </ul>
      </nav>
      </div>
      </header>
          )
        }}</ThemeContext.Consumer>
      )}</AuthContext.Consumer>
    );
  }
}
export default Navbar;
