import { Subscriber, Observable } from 'rxjs';

export class AuthService {
    private loggedIn = false;

    
    isAuth() : Promise<boolean> {
        // Let's simulate an auth verifier
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            }, 800);
        });
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}