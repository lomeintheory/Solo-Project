import React from 'react';



function Favorites({ favorites }) {
  return (
      <div style={{float: "right"}}>
        <p>List of favorites:</p>
        <ul>
        {favorites.map((favEvent) => (
          <li>{favEvent}</li>      
        ))}
        </ul>
      </div>
    
  )
}





export default Favorites;