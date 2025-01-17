import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSaveList] = useState([]);
  
  const addToSavedList = movie => {
      if(!savedList.map(movie => movie.id).includes(movie.id))
      {
        setSaveList([...savedList, movie]);
      }
      else console.log("you already saved that!")
  };
  
  return (
    <div>
      <SavedList list={savedList} />
      
      <Route exact path="/" component={MovieList} />
      <Route 
        path="/movies/:id" 
        render={(props) => <Movie {...props} addToSavedList={addToSavedList} />} 
      />
    </div>
  );

}

export default App;
