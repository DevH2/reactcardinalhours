import './App.css';
import {Component} from 'react'
import PasswordInput from './Components/PasswordInput'
import DisplayUsers from './Components/DisplayUsers'
import bg from './Images/redgearbg (2).png'
import settingIcon from './Images/output-onlinepngtools (3).png'
import mobilebg from './Images/redgearbgmobile.PNG'
import SignInSignOut from './Components/SignInSignOut';
import CreateNewUser from './Components/CreateNewUser';
import SearchBar from './Components/SearchBar.jsx';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import SlideTransition from './Components/Transitions/SlideTransition'
import getMobile from './DetectMobile'

class App extends Component {
  constructor(){
    super()
    this.state = {
      isOpen: false,
      createUserIsOpen: false,
      sOutisOpen:false,
      searchText: "",
      currentUser: null
      
    }
    this.handleOnClose = this.handleOnClose.bind(this)
    this.handleOnOpen = this.handleOnOpen.bind(this)
    this.createUserHandleOnClose = this.createUserHandleOnClose.bind(this)
    this.createUserHandleOnOpen = this.createUserHandleOnOpen.bind(this)
    this.handleSearchText = this.handleSearchText.bind(this)
    this.sOutHandleOpen = this.sOutHandleOpen.bind(this)
    this.sOutHandleClose = this.sOutHandleClose.bind(this)
  }
  //Snackbar functions
  handleOnClose = () => {this.setState({isOpen: false})}
  handleOnOpen = () => {this.setState({isOpen: true})}

  createUserHandleOnClose = () => {this.setState({createUserIsOpen: false})}
  createUserHandleOnOpen = () => {this.setState({createUserIsOpen: true})}

  sOutHandleOpen = () => this.setState({sOutOpen:false})
  sOutHandleClose = () => this.setState({sOutClose: true})


  handleSearchText = text => {this.setState({searchText: text})}

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

            <h1> Team 4159 Login</h1>
            <div className={"center"}>      
              <div className="test">
                <CreateNewUser createUserHandleOnOpen={this.createUserHandleOnOpen}/>
                <SignInSignOut handleOpen={this.handleOnOpen} sOutHandleOpen={this.sOutHandleOpen}/>
              </div>
            </div> 

            <Snackbar 
              autoHideDuration={1000} 
              open={this.state.isOpen} 
              onClose={this.handleOnClose} 
              className={"empty-field-snackbar"}
              TransitionComponent={SlideTransition}
              >
                <SnackbarContent message={"No empty or duplicate passwords."}/>
            </Snackbar>
            <Snackbar 
              open={this.state.createUserIsOpen} 
              className={"empty-field-snackbar"} 
              autoHideDuration={1000} 
              onClose={this.createUserHandleOnClose}
              TransitionComponent={SlideTransition}>
              <SnackbarContent message={"No empty or duplicate fields."}/>
            </Snackbar>

            <Snackbar
              open={this.state.sOutisOpen} 
              className={"empty-field-snackbar"} 
              autoHideDuration={1000} 
              onClose={this.sOutHandleClose}
              TransitionComponent={SlideTransition}
            >
              <SnackbarContent message={`Signed in ${this.state.currentUser}`} />
            </Snackbar>
          </div> 
      </div>
      
      
      : 
      
      <div>
        <img src={mobilebg} alt={"background"} className={"leftbg"}/>
        <div>
          <h1 style={{color:"whitesmoke", position:"absolute", }}>Team 4159 Login</h1>
          <div className={"sout-mobile"}>
            <SignInSignOut handleOpen={this.handleOnOpen}/>
          </div>
        </div>

        <Snackbar 
              autoHideDuration={1000} 
              open={this.state.isOpen} 
              onClose={this.handleOnClose} 
              className={"empty-field-snackbar"}
              TransitionComponent={SlideTransition}
              >
              <SnackbarContent message={"No empty or duplicate passwords."}/>
        </Snackbar>
      </div>
    )
  }
}

export default App;
