import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(dob?: Date): number {

    if (dob != undefined) {

      var yearOfBirth = new Date(dob).getFullYear();
      var currentYear = new Date().getFullYear();
      let age = Math.abs(currentYear - yearOfBirth);
      return age;
    }
    return 0;
  }

}
