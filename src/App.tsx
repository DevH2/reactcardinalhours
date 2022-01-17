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
  componentDidMount(){
    DataAccess.getInstance().getAll()
    DataAccess.getInstance().get("bob")
  }

}

export default App;
