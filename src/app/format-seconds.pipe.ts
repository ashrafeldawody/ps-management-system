import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'formatSeconds'
})
export class FormatSecondsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return moment.utc(value).format('HH:mm:ss');
  }

}
