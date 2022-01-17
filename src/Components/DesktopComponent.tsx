import { Box } from "@mui/system";
import { Component, Context, createContext } from "react";
import DataAccess from "../DataAccess";
import Left from "./Left";
import Right from "./Right";
import '../App.css'

const styles = {
    container: {
        display:"flex",
        flexDirection:"row",
    }
}
export const UsersContext:Context<any[]> = createContext<any[]>([])

type DesktopComponentProps = {}
type DesktopComponentState = {
    users: any[] | Promise<any[]>
}
class DesktopComponent extends Component<DesktopComponentProps, DesktopComponentState> {
    constructor(props:DesktopComponentProps){
        super(props)
        this.state = {
            users:[]
        }
    }

    setUsers = (users:any[]):void => this.setState({users:users})

    

    componentDidMount():void {
         DataAccess.getInstance().getAll().then(usersPromise => this.setUsers(usersPromise))
    }

    componentDidUpdate(_:DesktopComponentProps, prevState: DesktopComponentState): void{
        
    }

    render(){
        return (
            <Box sx={styles.container}>
                <UsersContext.Provider value={[this.state.users, this.setUsers]}>
                    <Left/>
                    <Right/>
                </UsersContext.Provider>
            </Box>
        )
    }
}

export default DesktopComponent