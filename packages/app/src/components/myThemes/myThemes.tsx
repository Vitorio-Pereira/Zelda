import {
  createBaseThemeOptions,
  createUnifiedTheme,
  palettes,
  shapes,
  genPageTheme,
} from '@backstage/theme';

export const myTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      text: {
        primary: '#FFFFFF',
        secondary: '#D4AF37',
        disabled: '#AAAAAA',
        hint: '#CCCCCC',
      },
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
      success: {
        main: '#228B22',
      },
      background: {
        default: '#F4F1E6',
        paper: '#FFFFFF',
      },
      banner: {
        info: '#2B6F9C',
        error: '#8B0000',
        link: '#1E90FF',
        text: '#2E2E2E',
      },
      errorBackground: '#FFE5E5',
      warningBackground: '#FFF5CC',
      infoBackground: '#E6F0FA',
      navigation: {
        background: '#2E2E2E',
        color: '#FFFFFF',
        indicator: '#D4AF37',
        selectedColor: '#3E7C17',
      },
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: 'arial', // Fonte pixelada estilo retrô Zelda
      h1: {
        fontSize: 32,
        fontWeight: 900,
        marginBottom: 16,
      },
      h2: {
        fontSize: 24,
        fontWeight: 800,
        marginBottom: 12,
      },
      h3: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 10,
      },
      h4: {
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 10,
      },
      h5: {
        fontSize: 15,
        fontWeight: 700,
        marginBottom: 10,
      },
      h6: {
        fontSize: 13,
        fontWeight: 700,
        marginBottom: 10,
      },
    },
  }),
  defaultPageTheme: 'home',
  /* Cores do cabecalho */

  pageTheme: {
    home: genPageTheme({
      colors: ['#1E4D0A', '#122A05'],
      shape: shapes.wave,
    }),
    documentation: genPageTheme({
      colors: ['#173B64', '#0D243F'],
      shape: shapes.wave,
    }),
    tool: genPageTheme({
      colors: ['#A67C00', '#5C4600'],
      shape: shapes.wave,
    }),
    service: genPageTheme({
      colors: ['#194D13', '#194D13'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#14518B', '#0A2A4E'],
      shape: shapes.wave,
    }),
    libary: genPageTheme({
      colors: ['#4E2F06', '#2A1702'],
      shape: shapes.wave,
    }),
    other: genPageTheme({
      colors: ['#4B3F8C', '#2D2761'],
      shape: shapes.wave,
    }),
    app: genPageTheme({
      colors: ['#255C0B', '#173B06'],
      shape: shapes.wave,
    }),
    apis: genPageTheme({
      colors: ['#1D4D78', '#152F4A'],
      shape: shapes.wave,
    }),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#2c3e50',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#3E7C17',
          color: '#FFFFFF',
        },
      },
    },
    BackstageHeader: {
      styleOverrides: {
        title: {
          color: '#FFFFFF',
        },
        subtitle: {
          color: '#D4AF37',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: '#D4AF37',
          fontWeight: 'bold',
          fontSize: '1rem',
        },
      },
    },
    // ...existing code...
    MuiListItem: {
      styleOverrides: {
        root: {
          color: '#D4AF37',
          transition: 'background 0.2s, color 0.2s',
          '&:hover': {
            backgroundColor: '#5b88a6ff',
          },
          '&.Mui-selected': {
            backgroundColor: '#3E7C17',
            color: '#D4AF37',
            '& .MuiListItemText-primary': {
              color: '#D4AF37', // força dourado no texto selecionado
            },
            '&:hover': {
              backgroundColor: '#194D13',
              '& .MuiListItemText-primary': {
                color: '#D4AF37', // força dourado no texto selecionado + hover
              },
            },
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#D4AF37',
        },
      },
    },
    // ...existing code...
  },
});
