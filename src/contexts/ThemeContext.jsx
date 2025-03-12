import React, { Component, createContext } from "react";

export const ThemeContext = createContext();
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#ffffff", ui: "#00c951", bg: "#c9ff66" },
    dark: { syntax: "#ddd", ui: "#016630", bg: "#555" },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  render() {
    return(
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;
