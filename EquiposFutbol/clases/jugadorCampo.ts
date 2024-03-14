import { Posiciones } from "./Posiciones";
import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";
export class JugadorCampo extends Jugador{
    porcentajeGoles: number;
    cantidadAsists: number;
    cantidadGoles: number;
    cantTiros: number;
    posicion: Posiciones;
  
  
    constructor(nombre: string, fechaDeNacimiento: Date, posicion: Posiciones, provincia: string, historialDeEquipos: Set<Equipo>, cantidadAsists: number, cantTiros: number, numCamiseta: number, cantGoles: number){
      super(nombre, fechaDeNacimiento, provincia, historialDeEquipos, numCamiseta);
      this.cantidadAsists = cantidadAsists;
      this.cantTiros = cantTiros;
      this.posicion = posicion;
      this.cantidadGoles=cantGoles
      this.porcentajeGoles = (cantGoles*100)/cantTiros
    }
  
  
    get getPorcentajeGoles(): number{
      return this.porcentajeGoles;
    }
  
    set setPorcentajeGoles(porcentajeGoles: number){
      this.porcentajeGoles = porcentajeGoles;
    }
  
  
    get getCantidadAsists(): number{
      return this.cantidadAsists;
    }
  
    set setCantidadAsists(cantidadAsists: number){
      this.cantidadAsists = cantidadAsists;
    }
  
  
    get getCantTiros(): number{
      return this.cantTiros;
    }
  
    set setCantTiros(cantTiros: number){
      this.cantTiros = cantTiros;
    }
  
  
    get getPosicion(): Posiciones{
      return this.posicion;
    }
  
    set setPosicion(posicion: Posiciones){
      this.posicion = posicion;
    }

    get getCantidadGoles(): number {
        return this.cantidadGoles;
    }
    set setCantidadGoles(value: number) {
        this.cantidadGoles = value;
    }
  
  
    modificarEstadisticas(stats: number[]): void {
      this.setCantTiros =(this.getCantTiros + stats[2]);
      this.setCantidadAsists =(this.getCantidadAsists + stats[1]);
      this.setCantidadGoles =(this.cantidadGoles+stats[0])
      this.setPorcentajeGoles =((this.cantidadGoles * 100) / this.cantTiros)
    }

    modificarTarjeta(stat: number[]): void {
      this.setTarjAmarillas = (this.getTarjAmarillas + stat[0])
      this.setTarjRojas = (this.getTarjRojas + stat[1])
    }
  }