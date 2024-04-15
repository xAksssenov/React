import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

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

export default GlobalStyle

export const PaginationContainer = styled.div`
  max-width: 60vw;
  margin: 0 auto;
`

export const Pagination = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
`

export const LoadingText = styled.div`
  text-align: center;
  font-size: 1.4em;
  margin: 1em 0;
  color: var(--theme);
`

export const LoadingInView = styled.div`
  height: 3em;
  background-color: var(--theme-text);
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--theme);
`

export const Contacts = styled.div`
    margin: 1vw 33vw;
    border-radius: 2em;
    padding: 0.2em;
    background-color: var(--theme-text);
    color: var(--theme);
    transition: background-color 0.25s, color 0.25s;
`

export const ContactsButton = styled.button`
   background-color: var(--theme);
   color: var(--theme-text);
   transition: background-color 0.25s, color 0.25s;
`

export const ContactsInputLabel = styled.label`
    background-color: var(--theme);
    color: var(--theme-text);
    transition: background-color 0.25s, color 0.25s;
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 2em;
    display: inline-block;
    position: relative;
    width: fit-content;

    input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export const ContactsInput = styled.input`
   background-color: var(--theme);
   color: var(--theme-text);
   transition: background-color 0.25s, color 0.25s;
   margin-bottom: 1em;
   padding: 1em;
   font-size: 1em;
   border-radius: 2em;
`

export const Card = styled.div`
    padding: 1em;
    margin: 1em;
    border: 1px solid #ddd;
    border-radius: 1em;
    background-color: var(--theme-text);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-4px);
    }
`

export const CardTitle = styled.div`
    font-size: 1.3em;
    font-weight: 700;
    padding: 0.4em;
    color: var(--theme);
`

export const CardText = styled.div`
    font-size: 1em;
    color: var(--theme);
    font-weight: 500;
`

export const Home = styled.div`
    margin: 0 8vw;
    .home__p {
        background-color: var(--theme-text);
        color: var(--theme);
        transition: background-color 0.25s, color 0.25s;
        padding: 1em;
        border-radius: 2em;
    }
`

export const Review = styled.div`
    border: 1px solid #ddd;
    padding: 0.5em;
    margin: 1rem 10rem;
    border-radius: 1rem;
    background-color: var(--theme-text);
    color: var(--theme);
    transition: background-color 0.25s, color 0.25s;

    .review__comment {
    margin-top: 0;
    }

    .review__author {
    font-weight: bold;
    margin-bottom: 0.5em;
    }
`

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100vw;
  padding: 1rem;
  background-color: var(--theme-text);
  color: var(--theme);
  transition: background-color 0.25s, color 0.25s;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  background-color: var(--theme-text);
  color: var(--theme);
  transition: background-color 0.25s, color 0.25s, transform 0.3s ease;
  font-weight: bold;
`

export const NavButton = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: var(--theme);
  color: var(--theme-text);
  transition: background-color 0.25s, color 0.25s;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.buttonBorderHover};
    background-color: ${({ theme }) => theme.buttonBackgroundHover};
    color: ${({ theme }) => theme.buttonTextHover};
  }
`
