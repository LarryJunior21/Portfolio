export interface PokeCard {
  id: number;
  name: string;
  hp: number;
  image?: string;
  attackName?: string;
  energyCost?: string;
  damage?: number;
  damageType?: string;
  description?: string;
}
