export interface Pokemon {
    name: string
    order: number
    sprites: {
        front_default: string
        back_default: string
    }
    types: PokemonType[]
}

export interface PokemonType {
    slot: number
    type: {
        name: string
    }
}

const headers = { 'Content-type': 'application/json' };
const endpoint = 'https://pokeapi.co/api/v2/pokemon/';

export function fetchPokemonByIndex(index: number): Promise<Pokemon> {
    return fetch(`${endpoint}${index}`, {
        headers,
      }).then(res => res.json());
}

export function fetchPokemonByName(name: string): Promise<Pokemon> {
    return fetch(`${endpoint}${name}`, {
        headers,
      }).then(res => res.json());
}