export class Token {
    /** Les meme nome qui exist dans la couche Back-End Pour Faire Data Bainding */

    constructor(public username:string, public jwttoken:string, public roles:string[]) {}
}
