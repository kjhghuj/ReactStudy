import React from 'react';

export const themes = {
    light: {
      foreground: '#000000',
      background: '#00FF00',
    },
    dark: {
      foreground: '#ffffff',
      background: '#FFFF00',
    },
};

export const ThemeContext = React.createContext(themes.dark)