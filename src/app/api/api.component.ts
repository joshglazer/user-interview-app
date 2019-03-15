import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
    styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
    distinctArray = [];
    error;
    total;
    
    constructor(private service: ConfigService) { }
    
    externalLink: string = 'https://data.baltimorecity.gov/resource/qqcv-ihn5.json';
    
    showConfig() {
        this.service.getConfig(this.externalLink)
        .subscribe(
            (data) => { 
                this.newArray(data);
            },
            (error) => {
                this.error = error;
            });
    }

    ngOnInit() {
        this.showConfig();
    }
    
    newArray(data){
        let distinctHood = [...new Set(data.map(x => x.neighborhood))];
        let distinctCount = [];
        
        distinctHood.map( x => {
            let vacancies = data.filter(y => {
                return y.neighborhood === x;
            })
            
            this.distinctArray.push({
                neighborhood: x,
                vacancies: vacancies.length
            })
        });
        
        
        this.total = this.distinctArray.reduce( (acc, val) => {
            return acc + val.vacancies;
        }, 0)
    }
}
