import { lama, sub } from "./lama-class";

export class User{
    private _name!: string;
    private _username: string;
    private _email: string;
    private _address!: string;
    private _password: string;
    private _bioText!: string;
    private _userID!: string;
    private _profileimage!: string;
    private _subscriptions!: sub[];

    constructor(username:string, email: string, password: string){
        this._username = username;
        this._email= email;
        this._password = password;
        
    }

    public get subscriptions(): sub[] {
        return this._subscriptions;
    }
    public set subscriptions(value: sub[]) {
        this._subscriptions = value;
    }
    public get profileimage(): string {
        return this._profileimage;
    }
    public set profileimage(value: string) {
        this._profileimage = value;
    }
    public get bioText(): string {
        return this._bioText;
    }
    public set bioText(value: string) {
        this._bioText = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get userID(): string {
        return this._userID;
    }
    public set userID(value: string) {
        this._userID = value;
    }
}

export class Verkoper extends User {
   constructor(
    // name: string,
    _username:string, 
    _email: string, 
    _password: string)
    // bioText: string, 
    // profileimage: string, 
    // subscriptions: sub[],
    // private _lama: lama[])
    {
        super(  _username, _email, _password)
    }
    // public get lama(): lama[] {
    //     return this._lama;
    // }
    // public set lama(value: lama[]) {
    //     this._lama = value;
    }
