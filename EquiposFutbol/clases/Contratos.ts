import { Jugador } from "./Jugador";
export interface Contratos{
    contratar(jugador: Jugador): void;
    renovar(jugador: Jugador): void; 
  }