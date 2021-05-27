import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], page: number = 0, search: string = ''): Pokemon[] {
    
    if (search.length === 0) {
      return pokemons.slice(page, page + 5);
    }

    const filteredPokemons = pokemons.filter(p => p.name.includes(search));
    return filteredPokemons.slice(page, page + 5);
   
  }

}
