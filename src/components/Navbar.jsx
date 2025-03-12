import React, { Component } from "react";
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <AuthContext>{(authContext) => (
      <ThemeContext.Consumer>{(themeContext) => {
        const { isAuthenticated, toggleAuth } = authContext;
        const { isLightTheme, light, dark } = themeContext;
        const theme = isLightTheme ? light : dark;
        return (
      <header class="text-white-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-green-500">
      <a class="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0"><span class="ml-3 text-xl">ContextApp</span></a>
      
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center" style={{ background: theme.ui, color: theme.syntax }}>
        <div onClick={() => toggleAuth()}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
              </div>
                <a class="mr-5 hover:text-white-900">Home</a>
                <a class="mr-5 hover:text-white-900">About</a>
                <a class="mr-5 hover:text-white-900">Contact</a>
      </nav>
      </div>
      </header>
    )
  }}</ThemeContext.Consumer>
)}</AuthContext>
    );
}
}
export default Navbar;
