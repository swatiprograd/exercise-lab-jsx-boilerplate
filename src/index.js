import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement("div", null,
  React.createElement("header", null,
  React.createElement("img", {
  src: "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png",
  alt: ""
}),React.createElement("h3", null, "Kalvium Education")),React.createElement("div", null,
React.createElement("p", null, `It is a long established fact that a reader will
 be distracted by the readablecontent of a page when looking at its layout. The point of using Lorem 
 Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
 content here', making it look like readable English. Many desktop publishing packages and web page editors 
 now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites 
 still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on 
 purpose (injected humour and the like).`))));
