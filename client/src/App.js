import React, { useState } from 'react';
import { Route } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSaveList] = useState([]);
  
  const addToSavedList = movie => {
    setSaveList([...savedList, movie]);
  };
  console.log('a')
  return (
    <div>
      <SavedList list={savedList} />
      
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={Movie} />
    </div>
  );

}

export default App;
