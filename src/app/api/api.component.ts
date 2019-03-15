import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
    styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
    
    constructor(private service: ConfigService) { }
    
    showConfig() {
        // Call API here
    }

    ngOnInit() {
        this.showConfig();
    }
    
    newArray(data){
        // Get distinct Array for manipulation here
    }
}
