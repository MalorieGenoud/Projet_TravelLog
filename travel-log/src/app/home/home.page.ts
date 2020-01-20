import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/auth/auth.service';

// TODO: add an interface to represent a tab.
export interface HomePageTab {
    title: string; // The title of the tab in the tab bar
    icon: string; // The icon of the tab in the tab bar
    path: string; // The route's path of the tab to display
}

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

    tabs: HomePageTab[];
    constructor(
        // TODO: inject the authentication provider.
        private auth: AuthService,
        // TODO: inject the router
        private router: Router
    ) {
        this.tabs = [
            {title: 'Account', icon: 'contact', path: 'account'},
            {title: 'Trips', icon: 'list', path: 'trip-list'},
            {title: 'Places', icon: 'list', path: 'place-list'},
            {title: 'Map', icon: 'map', path: 'maps'},
            {title: 'Stats', icon: 'stats', path: 'stats'}
        ];
    }

    ngOnInit() {
    }

    // TODO: add a method to log out.
    logOut() {
        console.log('logging out...');
        this.auth.logOut();
        this.router.navigateByUrl('/login');
    }
}
