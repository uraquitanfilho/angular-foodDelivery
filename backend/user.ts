export class User {
    constructor(public email: string, 
                public name: string,
                private password: string) {}
    
                
   matches(another: User): boolean {
       return another !== undefined &&
       another.email === this.email &&
       another.password === this.password;
   }        
}

export const users:{[key:string]:User} = {
    "uraquitan@syx.com.br": new User("uraquitan@syx.com.br","Uraquitan", "123456"),
    "abutroviski@gmail.com": new User("abutroviski@gmail.com","Abutroviski", "123456"),
}