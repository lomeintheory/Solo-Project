import React, {useEffect, useState, Component} from 'react';
import { useNavigate, Link } from 'react-router-dom';


function SearchBar({ searchQuery, setSearchQuery }) {
  return (
  <form action="/" method="get">
  <label htmlFor="header-search">
      <span className="visually-hidden">Search music events</span>
  </label>
  <input
      value={searchQuery}
      onInput={e => setSearchQuery(e.target.value)}
      type="text"
      id="header-search"
      placeholder="Search music events"
      name="s" 
  />
  <button type="submit">Search</button>
</form>
  )
}


// function SearchBar() {

//   return (
//         <form method="GET" action="/results">
//            <input type="text" id="searchBar"/>
//            <input type="submit" action="results"/>
//         </form>
//       )


// }


// function SearchBar() {

//   // function onFormSubmit(event) {
//   //   event.preventDefault()
//   //   onSubmit(term)
//   // }
//   // const [events, setEvents] = useState([]);
//   // const [searchVal, setSearch] = useState('');
//   const navigate = useNavigate()

//   // useEffect(() => {
//   //   fetch('api/eventsinla')
//   //     .then(response => response.json())
//   //     .then(data => {
//   //       setEvents(data);
//   //     })
//   //   }, [])

//     // const searchAPI = async () => {
//     //   const res = await fetch(`api/eventsinla`);
//     //   const data = await res.json();
//     //   console.log(data);
//     // };

//   function searchEvents(e) {
//     e.preventDefault();
//     // console.log(event);
//     // const eventsToFind = events;
//     // searchAPI();
//     navigate('/results')
//   }


//   return (
//     <form>
//        <input type="text" id="searchBar"/>
//        <button type="submit" onClick={searchEvents}>Search</button>
//     </form>
//   )
// }



// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: '',
//       data: [],
//     }
//   }

//   searchEvents () {
//     // this should connect to TM api and search for events based on query
//     // use query param to do this...refer to unit 9
//     console.log('hello')
//   }


//   componentDidMount() {
//     fetch('api/eventsinla')
//     .then(response => response.json())
//     .then(data => {
//       this.state.events = data;
//       console.log(this.state)
//     })
//   }

//   render() {
//     return (
//       <div>
//         <input type="search" id="searchBar"/>
//         <button onClick={this.searchEvents}>Search</button>
//       </div>
//     )
//   }
// }

export default SearchBar 