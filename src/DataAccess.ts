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
            return users as any[];
        } catch {
            console.log("Could not get users")
            return []
        }
    }

    public async get(password:string):Promise<any>{
        try {
            const res = await fetch(`https://hours.team4159.org/users/getuserdata?password=${password}`)
            const userData = await res.json();
            console.log(userData)
            return userData;
        } catch(e:unknown) {
            console.log(e)
            return console.log("Could not get users")
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
}
export default DataAccess