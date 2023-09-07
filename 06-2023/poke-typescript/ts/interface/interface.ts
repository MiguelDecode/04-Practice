export interface listPokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface pokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
}
