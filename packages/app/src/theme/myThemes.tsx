import React from 'react';
import {
  createBaseThemeOptions,
  createUnifiedTheme,
  palettes,
  shapes,
  genPageTheme,
  pageTheme,
} from '@backstage/theme';

export const myTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      primary: {
        main: '#3E7C17',
      },
      secondary: {
        main: '#D4AF37',
      },
      error: {
        main: '#B22222',
      },
      warning: {
        main: '#DAA520',
      },
      info: {
        main: '#2B6F9C',
      },
      sucess: {
        main: '#228B22',
      },
      background: {
        default: '#F4F1E6',
        paper: '#FFFFFF',
      },
      banner: {
        info: '#2B6F9C',
        error: '#8B0000',
        text: '#2E2E2E',
        link: '#1E90FF',
      },
      errorBackground: '#FFE5E5',
      warningBackground: '#FFF5CC',
      infoBackground: '#E6F0FA',
      navigation: {
        background: '#2E2E2E',
        indicator: '#D4AF37',
        color: '#FFFFFF',
        selectedColor: '#3E7C17',
      },
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: 'Comic Sans MS',
      h1: {
        fontSize: 54,
        fontWeight: 700,
        marginBottom: 10,
      },
    },
    defaultPageTheme: 'home',
  }),
  /* Cores Cabecalho*/

  pageTheme: {
    home: genPageTheme({
      colors: ['#3E7C17', '#F4F1E6'],
      shape: shapes.wave,
    }),
    documentation: genPageTheme({
      colors: ['#2B6F9C', '#E6F0FA'],
      shape: shapes.wave,
    }),
    tool: genPageTheme({
      colors: ['#D4AF37', '#2E2E2E'],
      shape: shapes.wave,
    }),
    service: genPageTheme({
      colors: ['#228B22', '#F4F1E6'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#1E90FF', '#F4F1E6'],
      shape: shapes.wave,
    }),
    libary: genPageTheme({
      colors: ['#8B4513', '#F4EBD0'],
      shape: shapes.wave,
    }),
    other: genPageTheme({
      colors: ['#6A5ACD', '#2E2E2E'],
      shape: shapes.wave,
    }),
    app: genPageTheme({
      colors: ['#3E7C17', '#D4AF37'],
      shape: shapes.wave,
    }),
    apis: genPageTheme({
      colors: ['#2B6F9C', '#343b58'],
      shape: shapes.wave,
    }),
  },
});
