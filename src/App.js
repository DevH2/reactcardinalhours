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
import credentials from "./credentials.json"
const {GoogleSpreadsheet} = require('google-spreadsheet')
let doc;

class App extends Component {
  constructor(){
    super()
    this.state = {
      
    }
    this.initAuth = this.initAuth.bind(this)
  }
  updateUserList = () => this.setState({updater: this.state.updater+1})
  
  async initAuth(){
    doc = new GoogleSpreadsheet('19VR1hQZj9ZJww4AnM6xfGCgST5Bf5M4dJqZW0O28Vik')
    doc.useServiceAccountAuth({
      client_email: 'cardinal-spreadsheet-sync-test@read-data-325820.iam.gserviceaccount.com',
      private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDTF6/FLFVK2XqE\np1MHHGsz2Cxwj8wXzGpY+duj6a0m87I/77qB84dG1KRTGt+fzHXpm4tjThRMEQ21\nEbZhdzUwX1qm6ZAsLU3GjdpLxJLdt9A+omJ1u8PE8XMTTVNSWmsD+MONRMaUC5EX\nDqXUadIzNqSH+BmS/jIX0zT9i2XZRvd3IR3WbDrgXfgYdxG76YkdhRzOJBK1heYW\nv0Cj52SAN1LSiM+OSyRNYcmntl14DCeAPkkwPXBRICeDHLOiA7jfHVG3oQXzu9uf\n3Ohb5mWZ7O097ClLzW5LH32vcvJSTFoLOYIY/HseKBTcN9YmT0WlE33gvOU6s51E\nVVNs5O31AgMBAAECggEAEnK1/k3fEGEMR46V/3+Y0NmaHKY8iHHpc2g2rU8NPmO6\n1sKdMqE1V9fampa1J3KHdYiN+HpI5NLytznajg8Me3NB6WdtHadB7lHUW53M1gqr\n7OVlJHPp6orNa0jtOLvFMX4qnOx/TE3seq7hiDxNTgN/ApEIryN+/j0LmwL1PjVA\nSjMsPCCt8DqycadTgTxXc2FoX0zrtZoiMpeA3VmGXd67RXajcFtmHZKvCXfM+mEB\ngsKRem0ZlLaGVZ3AmmBgliKdN+vGrUbHbNND2X5O4r2ytoptkUc3BoY7kriHSt7F\nXnn6QdNFrfQpAplo2wUgnJ1oXgd3YC/dgClkwpQXSwKBgQD6O8X4psEmBS4gvhI+\nbPE32r4UdmFL2tRZ/1QpiI+INYiWMd8nJWVeEy6WtZlrzkv8XLfSXD8JoEtayjnN\nD0Xo9AzblotDchnrxabQc+2w1hs7V+frssMOECEopFyfxL9N+mjrFV4wx1O9R6KK\n0YAZwcwxavNnqHSMyLJchL2mawKBgQDX9QFUjRxF01Bwjri2xFPv7IqokiqP2qIu\nN+0XplUUZAVrbWwMQyLaf59zCLEuzNDeHVTLqZ4rQKkKIQxHq8AGvPNkj9fwoYaN\nHOPjcW3RE/qScZkNoQ0LS89rMUxcMIjQBuvd47Qf3gWIScO8cHR0JsUCPoE4ZXjN\n1szTjZUVHwKBgB0o3AAGxpk8n0x3eb7GiTF+DwppZRsmy/oU0+TnIfq4aks+UofI\nRtC4oYQ0c0Vpy9cDovQjhcEEaeORjzzDG91ymxD3sRDR+g1MggzmhXtG5/N5YfBI\na4x2+rY2uQhxL+3RUWqbmddLUwnKkDlnAmt99uKHWQfqTHKfbJF1cngzAoGBANDX\nvSuZMyhLjNTtELCe+FVjuUv/3m0zj/eGWiCu2ERZ3evf68eH/WK0XOyQEVki9TJ3\nxxMVu0I0y8Rh5VBCRfe+LtqnSLsKWeaJc9D2Vq8E1SNd/Bd0EftEmxgcmq3kucoD\nh4ITvJO80DjWrRXE4rmY7JiY/boeV08oVPiZSP0dAoGBALOnrreMXPlPqxw0IR9z\n+/lTVU9p3CbmrcUsNbW7AUcu8z2wb8hFUhm9wpchoOOUaR2eJUdAMS5xlCgayHEe\nL66LZja+v2Wz9qQ+jNgeMVEpldxsBhhHuZnBc+I7jzOfMtfqColxsWJiAfQOo2ES\ngqvTjmuQFF0Em57GDAUWObqy\n-----END PRIVATE KEY-----\n'
      
    })
    await doc.loadInfo()
    console.log(doc.title)
  }
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
