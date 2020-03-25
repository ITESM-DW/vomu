import { Component, OnInit } from '@angular/core';
import { NgbNavConfig, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    constructor(config: NgbNavConfig) {
        config.destroyOnHide = false;
        config.roles = false;
    }

    ngOnInit() {}

}
