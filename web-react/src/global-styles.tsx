import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-background: #242424;
    --main-text: rgba(255, 255, 255, 0.87);
    --link-color: #ffffff;
    --link-hover-color: #858585;
    --button-background: #1a1a1a;
    --button-border-hover: #2d2d2d;
    --button-background-hover: #f9f9f9;
    --button-text: #ffffff;
    --button-text-hover: #000000;
    --black-theme: black;
    --white-theme: white;
  }

  body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    background-color: ${({ theme }) => (theme.mode === 'light' ? 'var(--white-theme)' : 'var(--black-theme)')};
    color: ${({ theme }) => (theme.mode === 'light' ? 'var(--black-theme)' : 'var(--white-theme)')};
    transition: background-color 0.25s, color 0.25s;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    font-weight: 500;
    font-size: 1.5em;
    color: var(--link-color);
    text-decoration: inherit;

    &:hover {
      transform: translateY(-3px);
      color: var(--link-hover-color);
    }
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s, background-color 0.25s, color 0.25s;
  }

  button:hover {
    border-color: var(--button-border-hover);
    background-color: var(--button-background-hover);
    color: var(--button-text-hover);
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  p {
    font-size: 1.2rem;
  }
`

export const themeFirstColors = css`
  color: ${({ theme }) => (theme.mode === 'light' ? 'var(--white-theme)' : 'var(--black-theme)')};
  background-color: ${({ theme }) => (theme.mode === 'light' ? 'var(--black-theme)' : 'var(--white-theme)')};
  transition: background-color 0.25s, color 0.25s, transform 0.3s ease;
`

export const themeSecondColors = css`
  background-color: ${({ theme }) => (theme.mode === 'light' ? 'var(--white-theme)' : 'var(--black-theme)')} !important;
  color: ${({ theme }) => (theme.mode === 'light' ? 'var(--black-theme)' : 'var(--white-theme)')} !important;
  transition: background-color 0.25s, color 0.25s;
`

export default GlobalStyle;