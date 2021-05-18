import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	public title: string;
	public subtitle: string;
	public email: string;

	  constructor() {
	  		this.title = "Jaime Rios";
	  		this.subtitle = "Desarrollador web y profesor de catedra";
	  		this.email = "jaimearios1986@gmail.com";
	  }

  ngOnInit(): void {
  }

}
