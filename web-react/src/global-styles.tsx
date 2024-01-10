import { createGlobalStyle } from 'styled-components';

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
  }

  html[data-theme=light] {
		--theme: white;
    --theme-text: black;
  }

  html[data-theme=dark] {
		--theme: black;
		--theme-text: white;
  }

  body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    background-color: var(--theme);
    color: var(--theme-text);
    transition: background-color 0.25s, color 0.25s, transform 0.3s ease;
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

  button:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`

export default GlobalStyle;