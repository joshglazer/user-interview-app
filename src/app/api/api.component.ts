import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
    styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
    vacancies = [];
    totalVacancies = 0;
    error = false;

    constructor(private service: ConfigService) { }
    
    showConfig() {
        this.service.getConfig('https://data.baltimorecity.gov/resource/qqcv-ihn5.json')
            .subscribe(
            (data) => {
                this.newArray(data);
            },
            error => { this.error = true; } // error path
        );
    }

    ngOnInit() {
        this.showConfig();
    }
    
    newArray(data){
        for (let i = 0; i < data.length; i++) {
            this.totalVacancies++;
            const item = data[i];
            const currentNeighborhoods = this.vacancies.filter(word => word.neighborhood === item['neighborhood']);
            if (currentNeighborhoods.length) {
                currentNeighborhoods[0].total += 1;
            } else {
                this.vacancies.push({
                    neighborhood: item['neighborhood'],
                    total: 1,
                })
            }
        }
    }
}
