import { Jugador } from "./Jugador"
import { Partido } from "./Partido"
import { Contratos } from "./Contratos"
import { Arquero } from "./Arquero"
import { isTypeElement } from "typescript"
import { JugadorCampo } from "./jugadorCampo"
export class Equipo implements Contratos{
    nombre: string
    jugadores: Set<Jugador>
    histPartidos: Set<Partido>
    suspendidos: Set <Jugador>

    constructor(nombre: string, jugadores: Set<Jugador>, histPartidos: Set<Partido>){
        this.nombre=nombre
        this.jugadores=jugadores
        this.histPartidos=histPartidos
        this.suspendidos = new Set;
    }

    get getNombre():string{
        return this.nombre
    }

    get getJugadores():Set<Jugador>{
        return this.jugadores
    }
    
    get getHistPartidos(): Set<Partido>{
        return this.histPartidos
    }

    set setNombre(nombre: string){
        this.nombre=nombre
    }

    set setJugadores(jugadores: Set<Jugador>){
        this.jugadores=jugadores
    }

    get getSuspendidos(): Set<Jugador>{
        return this.suspendidos
    }

    set setSuspendidos(suspendido: Set<Jugador>){
        this.suspendidos=suspendido
    }

    agregarPartido(partido: Partido): void{
        this.histPartidos.add(partido)
        for(let jugador of partido.getEstadisticas.keys()) {
            if(this.jugadores.has(jugador)){
                jugador.modificarEstadisticas(partido.getEstadisticas.get(jugador))
            }
        }
        for(let jugador of partido.getTarjetas.keys()) {
            if(this.jugadores.has(jugador)){
                jugador.modificarTarjeta(partido.getTarjetas.get(jugador))
            }
        }
    }

    contratar(jugador: Jugador): void {
        if(!jugador.getHistEquipos.has(this)){
            if(jugador instanceof Arquero && jugador.getPorcentajeAtajadas > 60 && jugador.getCantGolesRecibidos < 10){
                this.jugadores.add(jugador)
                console.log("El jugador " + jugador.getNombre + " se contrato en el club " + this.nombre)
                jugador.getHistEquipos.add(this)
            }
            else if (jugador instanceof JugadorCampo && jugador.getPorcentajeGoles >= 30 && jugador.getCantidadAsists >= 10){
                this.jugadores.add(jugador)
                console.log("El jugador " + jugador.getNombre + " se contrato en el club " + this.nombre)
                jugador.getHistEquipos.add(this)
            }
            else{
                console.log("El jugador no cumple los requisitos")
            }
        }
        else{
            console.log("el jugador " + jugador.getNombre + " ya jugo en el club por lo que no se puede volver a contratar")
        }
    }



    renovar(jugador: Jugador): void {
        let ahora = new Date
        if(this.jugadores.has(jugador) && ahora.getFullYear()-jugador.getFechaNacimiento.getFullYear() < 35){
            console.log("El jugador " + jugador.getNombre + "  se renovó en el club " + this.nombre)
        }
        else if (this.jugadores.has(jugador)){ 
            console.log("No se puede renovar el jugador " + jugador.getNombre + " porque tiene mas de 35 años")
        }
        else {
            console.log("No se puede renovar el jugador " + jugador.getNombre + " porque no pertenece al equipo")
        }
    }


    mostrarSancionados(): void{
        for (let jugador of this.jugadores){
            if(jugador.getTarjAmarillas > 3 || jugador.getTarjRojas >= 1){
                console.log("El jugador " + jugador.getNombre + " esta suspendido")
                this.getSuspendidos.add(jugador)
            }
        }
    }
}

