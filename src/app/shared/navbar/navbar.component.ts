import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    isAuth = false;
    open = false
    loc: string;
    constructor(private authService: AuthService, private router: Router) {
    }
    ngOnInit() {
        this.authService.isAuth().then(loggedIn => {
            this.isAuth = loggedIn;
            console.log(loggedIn);
        })
        this.router.setUpLocationChangeListener()
    }

    toggleNavBar() {
        this.open = !this.open;
    }
}
