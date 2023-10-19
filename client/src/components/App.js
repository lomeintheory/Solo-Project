import React, { useEffect, useState, Button } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar';
import Layout from './Layout';
import Favorites from './Favorites'
import Results from './Results';
import Users from './User';


function App() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s')
  const [events, setEvents] = useState([]);
  const [favorites, setFavorites] = useState([]);

  function filterEvents(events, query) {
    if (!query) {
        return events;
    }
    return events.filter((event) => {
        const eventName = event.name.toLowerCase();
        return eventName.includes(query);
    });
};

const filteredEvents = filterEvents(events, query);

  useEffect(() => {
    fetch('api')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setEvents(data)
      })
  }, [])

  function addToFavs(event) {
    setFavorites([...favorites, event])
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/favorites" element={<Favorites favorites={favorites}/>}/>
          <Route path="/" element={<Layout/>}/>
        </Routes>
      </Router>
      <SearchBar />
      <ul>
        {filteredEvents.map((musicEvent) => (
          <li key={musicEvent.ObjectId}>{musicEvent.name} 
          <form method='POST' action='/favorites' onSubmit={ (e) => {
            e.preventDefault()
            addToFavs(musicEvent.name)
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