import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import DesktopComponent from './Components/DesktopComponent';
import DataAccess from './DataAccess';
type AppProps = {

}
 class App extends Component {
  constructor(props:AppProps){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      <DesktopComponent/>
    )
  }
  componentDidMount():void{
    //Reloading since the timers drastically slow when the tab is inactive; 
    //I am too lazy to do any date subtraction to correct the times.
    document.addEventListener('visibilitychange', () => {
      if(document.visibilityState === "visible") window.location.reload()
    })
  }
  
  componentWillUnmount():void{
    document.removeEventListener('visibilitychange', () => {
      if(document.visibilityState === "visible") window.location.reload()
    })
  }

}

export default App;
