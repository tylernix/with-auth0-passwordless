module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'imperial-red': '#E63946',
        'light-steel-blue': '#635DFF',
        'prussian-blue': '#1D3557',
        'mild-gray': '#FAFAFA',
        background: '#F7F8FD',
        success: '#0070f3',
        cyan: '#79FFE1',
        linkedin: '#2867B2',
        github: '#24292e'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              fontWeight: '400',
              color: theme('colors.prussian-blue'),
              borderBottomWidth: '2px',
              borderColor: theme('colors.imperial-red')
            },
            mark: {
              backgroundColor: theme('colors.light-steel-blue.highlight'),
              color: theme('colors.prussian-blue'),
              padding: '3px'
            }
          }
        }
      }),
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
