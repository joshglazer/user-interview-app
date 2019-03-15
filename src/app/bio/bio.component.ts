import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {

    constructor() { }

    profile_name: string = "First Last";
    profile_pic = '../../assets/images/user.svg';

}
