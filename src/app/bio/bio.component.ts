import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {

    constructor() { }

    profile_name: string = "Josh Glazer";
    profile_pic = 'https://scontent.fphl2-4.fna.fbcdn.net/v/t1.0-1/c99.0.466.466a/s320x320/44905_442018907996_5836329_n.jpg?_nc_cat=106&_nc_ht=scontent.fphl2-4.fna&oh=1ae6401d14fafd4792afb9aa35146aaf&oe=5D38ECAF';
    bio = `Hi, my name is Josh.  I'm a software developer at Bellese.  This is my test, I hope I pass!`;
}
