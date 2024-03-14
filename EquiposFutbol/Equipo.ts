class Equipo{
    nombre: string
    jugadores: Set<Jugador>
    histPartidos: Set<Partido>

    constructor(nombre: string, jugadores: Set<Jugador>, histPartidos: Set<Partido>){
        this.nombre=nombre
        this.jugadores=jugadores
        this.histPartidos=histPartidos
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

    set setHistPartidos(histPartidos: Set<Partido>){
        this.histPartidos=histPartidos
    }

    agregarPartido(partido: Partido): void{
        this.histPartidos.add(partido)
    }
}

