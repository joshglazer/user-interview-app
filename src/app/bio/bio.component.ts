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
    bio: string = "My name is Jack Lopez, I have been developing for 7 years and I love JS. My favorite framework is Angular. My experience is mostly front end, but I would love to work in back end technologies like Node";

}
