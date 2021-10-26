import React from 'react';

// Routing 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// Components
import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movies';
import NotFound from './components/NotFound'; 
import Login from './components/Login';
// Context 

import UserProvider from './context'

// Styles
import { GlobalStyle } from './GlobalStyles'


const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/:movieId' element={<Movie />}></Route>
          <Route path='/*' element={<NotFound/>}></Route>
      </Routes>    
      <GlobalStyle /> 
    </UserProvider>    
  </Router>  
);

export default App;
