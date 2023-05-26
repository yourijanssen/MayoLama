export class sub{
    // private _lamaid: string;
    
    private _title: string;
    
    private _benefits: string;
    
    private _price: string;
    
    
    constructor(title:string, benefits:string, price: string){
        this._title = title;
        // this._lamaid = lamaid;
        this._benefits = benefits;
        this._price = price;
    }

    // public get lamaid(): string {
    //     return this._lamaid;
    // }
    // public set lamaid(value: string) {
    //     this._lamaid = value;
    // }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get benefits(): string {
        return this._benefits;
    }
    public set benefits(value: string) {
        this._benefits = value;
    }

    public get price(): string {
        return this._price;
    }
    public set price(value: string) {
        this._price = value;
    }
}

export class lama{
    private _name: string;
    private _age: number;
    private _gender: string;
    private _bioText: string;
    private _userid: string;
    
    // private _profilePicture: string;
    // private _pictures: string[];
    // private _subscriptions: sub[];

    constructor(name: string, age: number, gender: string, bioText: string, userid: string){
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._bioText = bioText;
        this._userid = userid;
        // this._profilePicture = profilePicture;
        // this._pictures = pictures;
        // this._subscriptions = subscriptions;
    }

    // public get subscriptions(): sub[] {
    //     return this._subscriptions;
    // }
    // public set subscriptions(value: sub[]) {
    //     this._subscriptions = value;
    // }
    // public get pictures(): string[] {
    //     return this._pictures;
    // }
    // public set pictures(value: string[]) {
    //     this._pictures = value;
    // }
    // public get profilePicture(): string {
    //     return this._profilePicture;
    // }
    // public set profilePicture(value: string) {
    //     this._profilePicture = value;
    // }
    public get bioText(): string {
        return this._bioText;
    }
    public set bioText(value: string) {
        this._bioText = value;
    }
    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get lamaName(): string {
        return this._name;
    }
    public set lamaName(value: string) {
        this._name = value;
    }

    public get userid(): string {
        return this._userid;
    }
    public set userid(value: string) {
        this._userid = value;
    }
}