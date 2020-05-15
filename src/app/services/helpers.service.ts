import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {
  public static cleanArray(arr: any[]): any[] {
    return (!Array.isArray(arr))
      ? arr
      : (arr.length > 0)
      ? arr.splice(0, arr.length)
      : arr;
  }
}
