import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(dob?: Date): number {

    if (dob != undefined) {
      console.log(dob + "jjjjj");
      var res = new Date(dob).getTime()
      let timeDiff = Math.abs(Date.now() - res);
      let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
      return age;
    }
    return 0;
  }

}
