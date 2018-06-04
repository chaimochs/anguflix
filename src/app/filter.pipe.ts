import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';


@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Movie[], searchText: string): Movie[] {
    
    if(!items) {
      return [];
    }
    if(!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter(it => {
    return it.title.toLowerCase().includes(searchText);
    });
  }
}
