class DataAccess {
    private users: any[]
    private static dataAccess:DataAccess
    //Yeah ik ill put stuff in .env later
    constructor(){
        this.users = []
    }

    public static getInstance():DataAccess{
        if(!this.dataAccess) this.dataAccess = new DataAccess()
        return this.dataAccess;
    }

    public async getAll():Promise<any[]>{
        try {
            const res = await fetch("https://hours.team4159.org/users/getusers")
            const users = await res.json();
            if(res.ok) return users as any[];
            else return []
        } catch {
            console.log("Could not get users")
            return []
        }
    }

    public async get(password:string):Promise<any>{
        try {
            const res = await fetch(`https://hours.team4159.org/users/getuserdata?password=${password}`)
            const userData = await res.json();
            if(res.ok) return userData;
            else console.log("Could not retrieve user data")
            
        } catch(e:unknown) {
            console.log(e)
            return console.log("Could not get user data")
        }
    }

    public async save(firstName:string, lastName:string, password:string):Promise<void>{
        type User = {
            firstName:string;
            lastName:string;
            password:string;
        }
        const user:User = {
            firstName: firstName,
            lastName: lastName,
            password: password
        }
        try {
            const res = await fetch(
                "https://hours.team4159.org/users/adduser",
                {
                    method:"POST",
                    headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    },
                    body: JSON.stringify(user)
                }
            )
        } catch(e:unknown) {
            console.log(e)
        }

    }

    public delete(password:string):void{

    }

    public async signIn(password:string):Promise<number | void> {
        try {
            const res = await fetch(
                "https://hours.team4159.org/users/signin",
                {
                    method:"POST",
                    headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    },
                    body: JSON.stringify({password:password})
                }
            )
            return res.status
        } catch(e:unknown){
            console.log("Could not sign in")
            console.log(e)
        }
    }

    public async signOut(password:string):Promise<number | void> {
        try {
            const res = await fetch(
                "https://hours.team4159.org/users/signout",
                {
                    method:"POST",
                    headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    },
                    body: JSON.stringify({password:password})
                }
            )
            return res.status
        } catch(e:unknown){
            console.log("Could not sign out")
            console.log(e)
        }
    }
}
export default DataAccess