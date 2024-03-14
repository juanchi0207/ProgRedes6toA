class Partido{
    equipoLocal: Equipo
    equipoVisitante: Equipo
    golesLocal: number
    golesVisitante: number
    estadisticas: Map<Jugador, number[]>

    constructor(equipoLocal: Equipo, equipoVisitante: Equipo, golesLocal: number, golesVisitantes: number){
        this.equipoLocal=equipoLocal
        this.equipoVisitante=equipoVisitante
        this.golesLocal=golesLocal
        this.golesVisitante=golesVisitantes
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


}