import React from 'react';
import {Link} from "react-router-dom";


export const Home =() => {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  export const Rules =() =>{
    return (
      <div>
        <h2>Rules</h2>
      </div>
    );
  }
  
  export const NoMatch =() =>{
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }