import { Injectable } from '@angular/core';
import {addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class ServiceDateService {
  getDiffToNow(diff: string|number|Date): string {
    const result: string [] = [];
    const now = new Date();
    diff = new Date(diff);
    const years = differenceInYears(now, diff);
    if (years > 0){
      result.push(`${years} years`);
      diff = addYears(diff , years);
    }
    const month = differenceInMonths(now, diff);
    result.push(`${month} months`);
    if (month > 0) {
      diff = addMonths(diff, month);
    }
    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
    }
    return result.join('');
  }

  constructor() { }
}
