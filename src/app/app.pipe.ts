import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myFilter' })
export class MyFilter implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items };

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      let temp = item.id + item.callingCode + item.country.country;
      return temp.toLowerCase().includes(searchText);
    });
  }
}