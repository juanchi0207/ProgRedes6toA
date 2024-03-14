import { Equipo } from "./Equipo"
import { Jugador } from "./Jugador"
export class Partido{
    equipoLocal: Equipo
    equipoVisitante: Equipo
    golesLocal: number
    golesVisitante: number
    estadisticas: Map<Jugador, number[]>
    tarjetas: Map<Jugador, number[]>

    constructor(equipoLocal: Equipo, equipoVisitante: Equipo, golesLocal: number, golesVisitantes: number){
        this.equipoLocal=equipoLocal
        this.equipoVisitante=equipoVisitante
        this.golesLocal=golesLocal
        this.golesVisitante=golesVisitantes
        this.estadisticas= new Map<Jugador, number[]>
        this.tarjetas= new Map<Jugador, number[]>
    }

    get getEquipoLocal(): Equipo {
        return this.equipoLocal
    }
    set setEquipoLocal(value: Equipo) {
        this.equipoLocal = value
    }

    get getEquipoVisitante(): Equipo {
        return this.equipoVisitante
    }
    set setEquipoVisitante(value: Equipo) {
        this.equipoVisitante = value
    }

    get getGolesLocal(): number {
        return this.golesLocal
    }
    set setGolesLocal(value: number) {
        this.golesLocal = value
    }

    get getEstadisticas(): Map<Jugador, number[]> {
        return this.estadisticas
    }
    set setEstadisticas(value: Map<Jugador, number[]>) {
        this.estadisticas = value
    }

    get getTarjetas(): Map<Jugador, number[]> {
        return this.tarjetas
    }
    set setTarjetas(value: Map<Jugador, number[]>) {
        this.tarjetas = value
    }

}