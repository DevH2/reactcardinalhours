import './App.css';
import {Component} from 'react'
import PasswordInput from './Components/PasswordInput'
import DisplayUsers from './Components/DisplayUsers'
import bg from './Images/redgearbg (2).png'
import settingIcon from './Images/output-onlinepngtools (3).png'
import SignInSignOut from './Components/SignInSignOut';
import CreateNewUser from './Components/CreateNewUser';
import SearchBar from './Components/SearchBar.jsx';
import { Snackbar, SnackbarContent } from '@material-ui/core';

class App extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  updateUserList = () => this.setState({updater: this.state.updater+1})
  
  componentDidMount(){
    
  }

  render(){
    return (
      <div className="container">
          <div className={"split left"}>
            <h1>Users</h1>
            <SearchBar/>
            <DisplayUsers/>
          </div>

          <div className={"split right"}>
            <img src={bg} alt={"background"} className={"leftbg"}/>
            <img src={settingIcon} alt={"settingsIcon"} className={"settingsIcon"}/>

            <h1> Team 4159 Login</h1>
            <div className={"center"}>      
              <div className="test">
                <CreateNewUser />
                <SignInSignOut />
              </div>
            </div> 
          </div>
      </div>
    )
  }
}

export default App;
