import React from "react";
import './index.css';
import './components/SoundCloud'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Home2 from './components/home.component';
import Merch from './components/Merch';
import Videos from './components/Videos';
import Audio from './components/Audio';
import Events from "./components/Events";
import IG from "./components/IG";
import TT from "./components/TT";
import Nav from './components/nav'
import Chat from './components/Chat';
import Join from './components/Join';
import PayPal from "./components/PayPal";




function App() {
 
  return (
  <BrowserRouter>
    <>
       <Route path="/" exact component={Join} />
      <Route path="/chat"  component={Chat} />
      {/* <Navbar />   */}
      <Route  path='/home' component={Home} />
      {/* <Route  path='/home' component={Home2} /> */}
      <Route  path='/merch' component={Merch} />
      <Route  path='/videos' component={Videos} />
      <Route  path='/audio' component={Audio} />
      <Route  path='/events' component={Events}/>
      <Route  path='/IG' component={IG}/>
      <Route  path='/TT' component={TT}/>
    </>
  </BrowserRouter>
  );
}



export default App;
