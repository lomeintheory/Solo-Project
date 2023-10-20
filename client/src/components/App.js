import React, { useEffect, useState, Button } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar';
import Layout from './Layout';
import Favorites from './Favorites'
import Users from './User';


function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s')
  const [events, setEvents] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredEvents = filterEvents(events, searchQuery);

  function filterEvents(events, query) {
    if (!query) {
        return events;
    }
    return events.filter((event) => {
        const eventName = event.name.toLowerCase();
        return eventName.includes(query);
    });
};

  useEffect(() => {
    fetch('api')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setEvents(data)
      })
  }, [])

  function addToFavs(eventName) {
    setFavorites([...favorites, eventName])
    fetch('api/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "event": eventName
      })
    })
    .then(response => {
      console.log('First response:' , response)
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      response.json(); 
    })
    .then(data => console.log('Server response: ', data))
    .catch(err => console.error('Error making post request:', err))
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/favorites" element={<Favorites favorites={favorites}/>}/>
          <Route path="/" element={<Layout/>}/>
        </Routes>
      </Router>
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ul>
        {filteredEvents.map((musicEvent, index) => (
          <li key={index}>{musicEvent.name} @ {musicEvent._embedded.venues[0].name} / {musicEvent.dates.start.localDate} / starts at {musicEvent.dates.start.localTime}
          <form action='/favorites' onSubmit={ (e) => {
            e.preventDefault()
            console.log(musicEvent._embedded.venues[0].name)
            addToFavs(`${musicEvent.name} @ ${musicEvent._embedded.venues[0].name} / ${musicEvent.dates.start.localDate} / starts at ${musicEvent.dates.start.localTime}`)
            }}>
            <input type="submit" value="add"></input>
          </form>
          </li>
        )
        )}
      </ul>
    </div>
  )
}


// function App() {
//   return (
//     <Router>
//       <SearchBar />
//       <Routes> 
//         <Route path="/" element={<SearchBar/>}/>
//         <Route path="/results" element={<Results/>}></Route>
//       </Routes>
//     </Router>
//   )
// }

export default App;