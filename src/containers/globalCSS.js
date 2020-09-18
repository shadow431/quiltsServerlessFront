import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  font-weight: ${({ theme }) => theme.navFontWeight};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-family: PT Serif, serif;
}

select.form-control,
textarea.form-control,
input.form-control {
  font-size: 16px;
}
input[type=file] {
  width: 100%;
}

.App {
  margin-top: 15px;
}

.App .navbar-brand {
  font-weight: bold;
}

.categorySelector {
  top: 120px;
  z-index: 100;
  position: fixed;
  width: 60%;
}

.control-label {
  font-size: 18px;
}

.freeShip {
  color: blue;
  font-size: 20pt;
  font-weight: bold;
  text-decoration: underline;
}

.headerLogoNav {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.sideNavText};
  font-weight: ${({ theme }) => theme.navFontWeight};
  top: 10px;
  z-index: 100;
  position: fixed;
  width: 85%;
}

.headerNav {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.sideNavText};
  font-weight: ${({ theme }) => theme.navFontWeight};
  top: 65px;
  z-index: 100;
  position: fixed;
  width: 85%;
}

.HomeBlurb {
  text-align: justify;
}

.Home .lander {
  padding: 80px 0;
  text-align: center;
}

.Home .lander h1 {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
}

.Home .lander p {
  color: #999;
}

.HomePhotos {
  align-items: center;
  height: 450px;
}

.Home .notes h4 {
  font-family: Open Sans, sans-serif;
  font-weight: 600;
  overflow: hidden;
  line-height: 1.5;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.Home .notes p {
  color: #666;
}

.letterNav {
  font-size: 22pt;
  top: 175px;
  z-index: 100;
  position: fixed;
  width: 60%;
}

.letterNav li {
  width: 3.5%;
}

li.active {
  background-color: green;
}

.logoutLink {
  color: red;
}

.mainNav {
  top: 120px;
  x-index 100;
  position: fixed;
  width: 15%;
}

.mainNav a {
  color: ${({ theme }) => theme.sideNavText};
  font-size: 18pt;
}

.MainSection {
  margin-left: 28%;
  margin-top: 190px;
}

.NavHeaderBarLogo {
  margin-top: -28px;
  width: 400px;
}

//   .navbar {
//   min-height: 80px;
// }

// .navbar-brand {
//   padding: 0 15px;
//   height: 80px;
//   line-height: 80px;
// }

// .navbar-toggle {
//   /* (80px - button height 34px) / 2 = 23px */
//   margin-top: 23px;
//   padding: 9px 10px !important;
// }

.renderThumb {
  background: ${({ theme }) => theme.thumbBackground};
  text-align: center;
}

.thumbnail img {
  height: 200px;
}
`
