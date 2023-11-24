import React from 'react';
import './Header.css'; 

function Header() {
    const handleClick = () => {
        console.log('Link clicked!');
      };
  return (
    <div class="container-fluid">
        <div class="row">
            <div class="col-10 bg-danger text-dark text-center"><b>Submit Your news clippings NOW!!!!</b></div>
            <div class="col-2 bg-danger text-dark text-center"><button id="Get"><a href="https://daily-bugle-mern.vercel.app/account" onClick={handleClick}>Submit</a></button> </div>
            <div class="col-12 bg-white text-dark text-center"><img src="News 3.png" alt="BigCo Inc. logo"/></div>
            <div class="col-3 bg-muted"></div>
            <div class="col-2 bg muted text-dark text-center"><a id="link" href="https://daily-bugle-mern.vercel.app/account" onClick={handleClick}><h5>India<div id="box"></div></h5></a></div>            
            <div class="col-2 bg muted text-dark text-center"><a id="link" href="https://daily-bugle-mern.vercel.app/account" onClick={handleClick}><h5>World<div id="box"></div></h5></a></div>
            <div class="col-2 bg muted text-dark text-center"><a id="link" href="https://daily-bugle-mern.vercel.app/account" onClick={handleClick}><h5>Sports<div id="box"></div></h5></a></div>
            <div class="col-3 bg muted"></div>
            <hr/>
        </div>
    </div>
  );
}

export default Header;
