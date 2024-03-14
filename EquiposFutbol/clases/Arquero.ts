import { Jugador } from "./Jugador";
import { Equipo } from "./Equipo";
export class Arquero extends Jugador{
    porcentajeAtajadas: number;
    cantGolesRecibidos: number;
    cantAtajadas: number;
  
  
    constructor(nombre:string, fechaNac: Date, provincia: string, histEquipos: Set<Equipo>, numCam:number, cantGolesRecibidos: number, cantAtajadas: number){
        super(nombre,fechaNac,provincia,histEquipos,numCam)    
        this.cantGolesRecibidos = cantGolesRecibidos;
        this.cantAtajadas = cantAtajadas;
        this.porcentajeAtajadas = cantAtajadas*100/(cantAtajadas+cantGolesRecibidos)
    }
  
  
    get getPorcentajeAtajadas (): number{
        return this.porcentajeAtajadas;
    } 
  
    set setPorcentajeAtajadas (porcentajeAtajadas: number){
        this.porcentajeAtajadas = porcentajeAtajadas;
    }
  
    get getCantGolesRecibidos (): number{
        return this.cantGolesRecibidos;
    } 
  
    set setCantGolesRecibidos (cantGolesRecibidos: number){
        this.cantGolesRecibidos = cantGolesRecibidos;
    }
  
  
    get getCantAtajadas (): number{
        return this.cantAtajadas;
    } 
  
    set setCantAtajadas (cantAtajadas: number){
        this.cantAtajadas = cantAtajadas;
    }

    modificarEstadisticas(stats: number[]){
        this.cantGolesRecibidos=this.cantGolesRecibidos+stats[0]
        this.cantAtajadas=this.cantAtajadas+stats[1]
        this.porcentajeAtajadas=(this.cantAtajadas*100)/(this.cantAtajadas+this.cantGolesRecibidos)
    }

    modificarTarjeta(stat: number[]): void {
        this.setTarjAmarillas = (this.getTarjAmarillas + stat[0])
        this.setTarjRojas = (this.getTarjRojas + stat[1])
      }
  }