import React from 'react';



function Favorites({ favorites }) {

  // useEffect(() => {
  //   fetch('/api/favorites', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({favorites})
  //   })
  //   .then(data => {
  //     console.log(data)
  //     res.send(data)
  //   })
  // }, [])
  

  return (
      <div style={{float: "right"}}>
        <p>List of favorites:</p>
        <ul>
        {favorites.map((favEvent, index) => (
          <li key={index}>{favEvent}</li>      
        ))}
        </ul>
      </div>
    
  )
}





export default Favorites;