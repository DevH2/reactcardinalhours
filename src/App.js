import './App.css';
import {Component} from 'react'
import PasswordInput from './Components/PasswordInput'
import DisplayUsers from './Components/DisplayUsers'
import bg from './Images/redgearbg (2).jpg'
import settingIcon from './Images/output-onlinepngtools (3).png'
import mobilebg from './Images/redgearbgmobile.PNG'
import SignInSignOut from './Components/SignInSignOut';
import CreateNewUser from './Components/CreateNewUser';
import SearchBar from './Components/SearchBar.jsx';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import SlideTransition from './Components/Transitions/SlideTransition'
import getMobile from './DetectMobile'
import SignedInNotif from './Components/Notifications/SignedInNotif';
import EmptyPassNotif from './Components/Notifications/EmptyPassNotif';
import EmptyFieldNotif from './Components/Notifications/EmptyFieldNotif';
import CreatedUserNotif from './Components/Notifications/CreatedUserNotif'
import User from './Components/User';
import InvalidPasswordNotif from './Components/Notifications/InvalidPasswordNotif';
import InvalidUsernameNotif from './Components/Notifications/InvalidUsernameNotif';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isOpen: false,
      createUserIsOpen: false,
      sOutisOpen:false,
      addUserIsOpen:false,
      invalidPassIsOpen: false,
      searchText: "",
      currentUser: null, //Last existing user
      lastCreatedUser: null,
      invalidUsernameIsOpen:false
    }
    
    this.handleSearchText = this.handleSearchText.bind(this) 
  }
  //Snackbar functions
  handleOnClose = () => {this.setState({isOpen: false})}
  handleOnOpen = () => {this.setState({isOpen: true})}

  createUserHandleOnClose = () => {this.setState({createUserIsOpen: false})} //For empty fields, will rename later
  createUserHandleOnOpen = () => {this.setState({createUserIsOpen: true})}

  addUserHandleOpen = () => this.setState({addUserIsOpen: true})
  addUserHandleClose = () => this.setState({addUserIsOpen: false})

  sOutHandleOpen = () => this.setState({sOutisOpen:true})
  sOutHandleClose = () => this.setState({sOutisOpen: false})

  invalidPassHandleOpen = () => this.setState({invalidPassIsOpen: true})
  invalidPassHandleClose = () => this.setState({invalidPassIsOpen: false})

  handleSearchText = text => this.setState({searchText: text})

  //the state key currentUser includes the user's sign in status.
  setCurrentUser = username => this.setState({currentUser: username }, () => this.sOutHandleOpen())
  setLastCreatedUser = username => this.setState({lastCreatedUser: username}, () => this.addUserHandleOpen())
  
  invalidUserHandleOpen = () => this.setState({invalidUsernameIsOpen: true})
  invalidUserHandleClose = () => this.setState({invalidUsernameIsOpen: false})
  componentDidMount(){
    console.log(getMobile())
  }
  
  render(){
    return (
      !getMobile() ? 
      <div className="container">
          <div className={"split left"}>
            <h1>Users</h1>
            <SearchBar handleSearchText={this.handleSearchText}/>
            <DisplayUsers searchText={this.state.searchText}/>
          </div>

          <div className={"split right"}>
            <img src={bg} alt={"background"} className={"leftbg"}/>
            <img src={settingIcon} alt={"settingsIcon"} className={"settingsIcon"}/>
            {/*<button className={"settingsIcon"}>S</button>*/}

            <h1>Team 4159 Login</h1>
            <div className={"center"}>      
              <div className="test">
                <CreateNewUser 
                  createUserHandleOnOpen={this.createUserHandleOnOpen} 
                  setLastCreatedUser={this.setLastCreatedUser}
                  handleInvalidUsernameOpen={this.invalidUserHandleOpen}
                />
                <SignInSignOut 
                  handleOpen={this.handleOnOpen} 
                  sOutHandleOpen={this.sOutHandleOpen} 
                  setCurrentUser={this.setCurrentUser}
                  invalidPassHandleOpen={this.invalidPassHandleOpen}
                  />
              </div>
            </div> 

            <EmptyPassNotif
              isOpen={this.state.isOpen}
              handleOnClose={this.handleOnClose}/> 
            <EmptyFieldNotif
              isOpen={this.state.createUserIsOpen}
              createUserHandleOnClose={this.createUserHandleOnClose}/>
            <SignedInNotif
              isOpen={this.state.sOutisOpen}
              sOutHandleClose={this.sOutHandleClose}
              currentUser={this.state.currentUser}/>
            <CreatedUserNotif
              isOpen={this.state.addUserIsOpen}
              addUserHandleClose={this.addUserHandleClose}
              lastCreatedUser={this.state.lastCreatedUser}/>
            <InvalidPasswordNotif
              isOpen={this.state.invalidPassIsOpen}
              invalidPassHandleClose={this.invalidPassHandleClose}/>
            <InvalidUsernameNotif
              isOpen={this.state.invalidUsernameIsOpen}
              invalidUsernameHandleClose={this.invalidUserHandleClose}
            />
          </div> 
      </div>
      
      
      : 
      
      <div>
        <img src={mobilebg} alt={"background"} className={"leftbg"}/>
        <div>
          <h1 style={{color:"whitesmoke", position:"absolute" }}>Team 4159 Login</h1>
          <div className={"sout-mobile"}>
            <SignInSignOut handleOpen={this.handleOnOpen} sOutHandleOpen={this.sOutHandleOpen} setCurrentUser={this.setCurrentUser}/>
          </div>
            <div className={"user-card-mobile"}>
              
            </div>
        </div>
      </div>
    )
  }
}

export default App;
