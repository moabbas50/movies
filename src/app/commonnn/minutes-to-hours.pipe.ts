import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(value: number): string {
    if (!value || isNaN(value)) return '';

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    if (hours === 0) {
      return `${minutes} m`;
    } else if (minutes === 0) {
      return `${hours} h`;
    } else {
      return `${hours} h ${minutes} m`;
    }
  }

}
