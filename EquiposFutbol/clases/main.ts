import { Jugador } from "./Jugador"
import { JugadorCampo } from "./jugadorCampo"
import { Arquero } from "./Arquero"
import { Posiciones } from "./Posiciones"
import { Equipo } from "./Equipo"
import { Partido } from "./Partido"


let jug1= new JugadorCampo("Juan", new Date("2012-01-31"), Posiciones.DELANTERO, "CABA", new Set<Equipo>, 5, 20, 10, 10)
let jug2= new JugadorCampo("Jose", new Date("2011-01-31"), Posiciones.DELANTERO, "CABA", new Set<Equipo>, 7, 2, 9, 2)
let jug3= new JugadorCampo("Lucas", new Date("2010-01-31"), Posiciones.DELANTERO, "CABA", new Set<Equipo>, 5, 20, 5, 7)
let jug4= new JugadorCampo("Ian", new Date("2009-01-31"), Posiciones.DELANTERO, "CABA", new Set<Equipo>, 5, 20, 2, 8)
let arq1= new Arquero("Mateo", new Date("2008-01-31"), "CABA", new Set<Equipo>, 1, 0, 41)

let jug5= new JugadorCampo("Julian", new Date("1980-01-31"), Posiciones.DELANTERO, "CABA", new Set<Equipo>, 9, 20, 9, 0)
let jug6= new JugadorCampo("Ciro", new Date("1990-01-31"), Posiciones.DELANTERO, "CABA", new Set<Equipo>, 5, 4, 15, 8)
let jug7= new JugadorCampo("Thiago", new Date("2000-01-31"), Posiciones.DELANTERO, "CABA", new Set<Equipo>, 2, 20, 34, 10)
let jug8= new JugadorCampo("Ian", new Date("2005-01-31"), Posiciones.DELANTERO, "CABA", new Set<Equipo>, 5, 7, 12, 1)
let arq2= new Arquero("Santi", new Date("2002-01-31"), "CABA", new Set<Equipo>, 2, 56, 2)

let equipo1= new Equipo("Panchieri", new Set<Jugador>, new Set<Partido>)
equipo1.getJugadores.add(jug1)
equipo1.getJugadores.add(jug2)
equipo1.getJugadores.add(jug3)
equipo1.getJugadores.add(jug4)
equipo1.getJugadores.add(arq1)

let equipo2= new Equipo("Dorsalo", new Set<Jugador>, new Set<Partido>)
equipo2.getJugadores.add(jug5)
equipo2.getJugadores.add(jug6)
equipo2.getJugadores.add(jug7)
equipo2.getJugadores.add(jug8)
equipo2.getJugadores.add(arq2)

let partido= new Partido(equipo1, equipo2, 2, 1)

partido.getEstadisticas.set(jug1, [1,4,3])
partido.getEstadisticas.set(jug2, [1,2,1])
partido.getEstadisticas.set(jug3, [0,1,0])
partido.getEstadisticas.set(jug4, [0,3,0])
partido.getEstadisticas.set(arq1, [1,4])
partido.getEstadisticas.set(jug5, [1,1,3])
partido.getEstadisticas.set(jug6, [0,3,0])
partido.getEstadisticas.set(jug7, [0,4,2])
partido.getEstadisticas.set(jug8, [0,4,1])
partido.getEstadisticas.set(arq2, [2,6])

partido.getTarjetas.set(jug3, [4,0])
partido.getTarjetas.set(jug2, [2,0])
partido.getTarjetas.set(jug4, [1,1])

equipo1.mostrarSancionados()

console.log(jug1.getCantTiros)
equipo1.agregarPartido(partido)
equipo2.agregarPartido(partido)
console.log(jug1.cantTiros)


equipo1.renovar(jug1)
equipo1.renovar(jug6)

equipo2.renovar(jug5)

let jug10= new JugadorCampo("alberto", new Date("2012-01-31"), Posiciones.DELANTERO, "CABA", new Set<Equipo>, 20, 20, 20, 20)

equipo1.contratar(jug10)

equipo1.mostrarSancionados()
