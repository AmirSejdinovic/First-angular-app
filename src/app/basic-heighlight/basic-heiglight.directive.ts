//Importing the class from angular core
import { Directive, ElementRef, OnInit } from '@angular/core';
//Declaring the directive basic elements like the selector
@Directive({
    selector: '[appBasicHeighlight]'
})
//Creating and exporting the custom class in which will bee held our logic
export class BasicHeighDirective implements OnInit{
  //Adding the constructor the another argument with name of elementRef which is type of ElementRef
    constructor(private elementRef: ElementRef){
          
    }
    //On initi updating the element style
    ngOnInit(){
      //Selecting the element from constructor and adding it the style of backgorund 
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}