import React from "react";
import './index.css';
import './components/SoundCloud'
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Merch from './components/Merch';
import Videos from './components/Videos';
import Audio from './components/Audio';
import Events from "./components/Events";
import IG from "./components/IG";
import TT from "./components/TT";





function App() {
 
  return (
  <BrowserRouter>
    <>
      <Navbar />  
	  <Route  strict path='/'  />
      <Route  strict path='/home' component={Home} />
      <Route strict path='/merch' component={Merch} />
      <Route strict path='/videos' component={Videos} />
      <Route strict path='/audio' component={Audio} />
      <Route strict path='/events' component={Events}/>
      <Route strict path='/IG' component={IG}/>
      <Route strict path='/TT' component={TT}/>

    </>
  </BrowserRouter>
  );
}



export default App;
