import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component
{
    static contextType = ThemeContext;
    render() 
    {
        const {toggleTheme} =  this.context;
        return(
            <>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"  onClick={toggleTheme}>
                    Toggle Theme
                </button>
            </>
        );
    }
}

export default ThemeToggle;