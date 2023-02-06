import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{
  title='child component';
  @Input() parentTitle ='';
  date =new Date();

  ngOnChanges(changes: SimpleChanges) {
    console.log(" This is Onchange");
 }
  ngOnInit() {
  console.log("This is ngOnInit");
}
  ngDoCheck() {
  console.log("This is ngDoCheck");
}
  ngAfterContentInit() {
  console.log("This is ngAfterContentInit");
}
  ngAfterContentChecked() {
  console.log("This is ngAfterContentChecked");
}
  ngAfterViewInit() {
  console.log("This is ngAfterViewInit");
}
ngAfterViewChecked() {
  console.log("This is ngAfterViewChecked");
}
ngOnDestroy() {
  console.log('Component destroyed');
}

 
}
