import { Pipe, PipeTransform } from '@angular/core';
import { filter, includes, map } from 'lodash';

@Pipe({
  name: 'showSelected'
})
export class ShowSelectedPipe implements PipeTransform {

  transform(value: any[], args?: any[]): any {
    return filter(value, function (obj) {
      if (includes(args, obj.name)) {
        return obj
      }
    });
  }

}
