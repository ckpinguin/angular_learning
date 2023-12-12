import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ck-admin-page',
    templateUrl: './admin-page.component.html'
})
export class AdminPageComponent implements OnInit {
    private title: string;

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
    }
}
