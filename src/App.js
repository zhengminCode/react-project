import React from 'react';
import  MyRouter  from './router/index'; 
import BaseLayout from './pages/layout'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyRouter/>
      <BaseLayout/>
    </BrowserRouter>
  );
}

export default App;

