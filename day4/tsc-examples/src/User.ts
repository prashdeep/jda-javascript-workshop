class User {
    constructor(private _id, private _name, private _username, private _email){}

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }
}

export default User;