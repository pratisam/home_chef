import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ChefList from './Components/Menu/ChefList';
import Logo from './Components/Logo/Logo';
import Menu from './Components/MenuPage/Menu';
import Lastpage from './Components/LastPageOrdering/Lastpage';
import Loginpage from './Components/LoginPage/Loginpage';
import MenuHamburger from './Components/MenuHamburger/MenuHamburger';
import ChefMenu from './Components/ChefPage/ChefMenu';
import ChefProfile from './Components/ChefPage/ChefProfile';


function App() {

  return (
    <div className="App">
      {<ChefProfile/>}
      {<ChefMenu/>}
      <Router>
        <Routes>
          <Route path="/" element={<Logo/>}/>
          <Route path="/" element={<Loginpage/>}/>
          <Route path="/" element={<Lastpage/>}/>
          <Route path="/" element={<MenuHamburger/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/home/Menu" element={<Menu/>}/>
          <Route path="/home/:id/ChefList" element={<ChefList/>} />
        </Routes>
       
      </Router>
      
    </div>
  );
}

export default App;