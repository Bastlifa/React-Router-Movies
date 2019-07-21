import React, { useState } from 'react';
import {Route, Link } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSaveList] = useState([]);
  
  const addToSavedList = movie => {
    setSaveList([...savedList, movie]);
  };

  
    return (
      <div>
        <SavedList list={savedList} />
        <div>Replace this Div with your Routes</div>
        <Route exact path="/" component={MovieList} />
      </div>
    );
  
}

export default App;
