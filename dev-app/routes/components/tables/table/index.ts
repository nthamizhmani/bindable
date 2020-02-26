/*
Copyright 2020, Verizon Media
Licensed under the terms of the MIT license. See the LICENSE file in the project root for license terms.
*/

import {autoinject} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {Router} from 'aurelia-router';

@autoinject()
export class Tables {
    public routes = [
        {
            redirect: 'properties',
            route: '',
        },
        {
            moduleId: PLATFORM.moduleName('./properties/index'),
            name: 'properties',
            nav: true,
            route: 'properties',
            title: 'Properties',
        },
        {
            moduleId: PLATFORM.moduleName('./cols-and-rows/index'),
            name: 'cols-rows',
            nav: true,
            route: 'cols-rows',
            title: 'Cols & Rows',
        },
        {
            moduleId: PLATFORM.moduleName('./actions/index'),
            name: 'actions',
            nav: true,
            route: 'actions',
            title: 'Actions',
        },
        {
            moduleId: PLATFORM.moduleName('./views-and-view-models/index'),
            name: 'views',
            nav: true,
            route: 'views',
            title: 'Views & View Models',
        },
    ];

    constructor(public router: Router) {}

    public configureRouter(config, router) {
        this.router = router;
        config.map(this.routes);
    }
}