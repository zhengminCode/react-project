import React from 'react';
import  MyRouter  from './router/index'; 
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyRouter/>
    </BrowserRouter>
  );
}

export default App;

