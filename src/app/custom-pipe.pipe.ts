import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {
  cvalue:string='';
  transform(value: string, ...args: unknown[]): unknown {
    this.cvalue = value.split('').reverse().join('');
    return this.cvalue;
  }

}