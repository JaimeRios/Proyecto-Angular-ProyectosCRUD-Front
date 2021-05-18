import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
	
	@Input() anchura: number;
	@Output() conseguirAutor = new EventEmitter();

	public autor: any;

  	constructor() {
  		this.anchura = 0;
  		this.autor = {
  			nombre: "Jaime Rios",
  			website: "JaimeRiosWeb.jp",
  			youtube: "El cuarto de piano de Jshuin"
  		};
  	}

  	ngOnInit(): void {
  	}

  	lanzar(event: any){
  		console.log(event);
  		this.conseguirAutor.emit(this.autor);
  	}

}
