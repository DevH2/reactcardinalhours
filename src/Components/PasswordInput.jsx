import { Component } from "react";


class PasswordInput extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <input type="password" className={"input"}/>
                <button className={"buttons"}>Sign in</button>
            </div>
        )
    }
}
export default PasswordInput