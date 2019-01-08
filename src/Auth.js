import auth0 from 'auth0-js'

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "ivangonzalezg.auth0.com",
        clientID: "xOO4aLgj7i4FVtQYNJwtt0gDLpD5kyLZ",
        redirectUri: "http://auth0-ig.herokuapp.com/callback",
        audience: "https://ivangonzalezg.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"
    });

    login = () => {
        this.auth0.authorize();
    }   
    
}
