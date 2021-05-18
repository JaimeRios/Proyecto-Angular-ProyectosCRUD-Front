import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public widthSlider: number;
	public anchuraToSlider: number;
	public autor: any;
	//@ViewChild('textos') textos: ElementRef;

	constructor() {
		this.widthSlider=0;
		this.anchuraToSlider = 0;
		this.autor = {};
		//this.textos = {};
	}

  	ngOnInit(): void {
  		//$("header").css("background","green");
  		//var opcion_clasica = document.querySelector("#texto").innerHTML;
  		//console.log(this.textos);
  		
	}

	cargarSlider(){
		this.anchuraToSlider = this.widthSlider;
	}

	resetearSlider(){
		this.anchuraToSlider = 0;
	}

	getAutor(event: any){
		this.autor = event;
	}

}
