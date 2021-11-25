import { Pipe, PipeTransform } from '@angular/core';
import { kebabCase } from "lodash";

@Pipe({
  name: 'kebabCase'
})
export class KebabCasePipe implements PipeTransform {

  transform(v: string): string {
    console.log('kebabCase');
    return kebabCase(v);
  }

}
