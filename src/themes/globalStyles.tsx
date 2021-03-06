import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  text-size-adjust: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  @import url(${({ theme }) => theme.fonts.atImportUrl});
  font-family: ${({ theme }) => theme.fonts.family};
  margin: 0;
  font-size: 16px;
  color:  ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
}

small{
  font-size: 0.8rem
}

h1{
  font-size: 2rem;
}

h2{
  font-size: 1.8rem
}

h3{
  font-size: 1.6rem
}

h4{
  font-size: 1.4rem
}

h5{
  font-size: 1.2rem
}

h6{
  font-size: 1rem
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
template {
  display: none;
}

a {
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:active {
    outline: 0;
  }

  &:hover {
    outline: 0;
  }
}

abbr[title],
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted;
}

b,
strong {
  font-weight: bold;
}

dfn {
  font-style: italic;
}

mark {
  background: #ff0;
  color: #000;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  border: none;
  vertical-align: middle;
}

svg:not(:root) {
  overflow: hidden;
}

figure {
  margin: 0 0 10px;
}

hr {
  box-sizing: content-box;
  height: 0;
}

pre {
  overflow: auto;
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
}

select {
  text-transform: none;
}

button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
}

button[disabled],
html input[disabled] {
  cursor: not-allowed;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: none;
  padding: 0;
}

input {
  line-height: normal;
}

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

input[type="search"] {
  -webkit-appearance: textfield;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

legend {
  border: none;
  padding: 0;
}

textarea {
  overflow: auto;
}

optgroup {
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 5px;
}
::selection {
  background: #b3d4fc;
  text-shadow: none;
}
`;
