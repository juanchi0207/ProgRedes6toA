import { Equipo } from "./Equipo"
import { estadisticas } from "./Estadisticas"
export abstract class Jugador implements estadisticas{
    nombre: string    
    fechaNacimiento: Date 
    provincia: string
    histEquipos: Set<Equipo>   
    numCamiseta: number
    tarjAmarillas: number
    tarjRojas: number
    
    
    constructor(nombre: string, fechaNac: Date, provincia: string, histEquipos: Set<Equipo>, numCamiseta: number){
        this.nombre= nombre
        this.fechaNacimiento=fechaNac
        this.provincia=provincia
        this.histEquipos=histEquipos
        this. numCamiseta=numCamiseta
        this.tarjAmarillas=0
        this.tarjRojas=0
    }
    


    get getNombre(): string {
        return this.nombre
    }
    set setNombre(value: string) {
        this.nombre = value
    }

    get getFechaNacimiento(): Date {
        return this.fechaNacimiento
    }
    set setFechaNacimiento(value: Date) {
        this.fechaNacimiento = value
    }

    get getProvincia(): string {
        return this.provincia
    }
    set setProvincia(value: string) {
        this.provincia = value
    }

    get getHistEquipos(): Set<Equipo> {
        return this.histEquipos
    }
    set setHistEquipos(value: Set<Equipo>) {
        this.histEquipos = value
    }

    get getnumCamiseta(): number {
        return this.numCamiseta
    }
    set setnumCamiseta(value: number) {
        this.numCamiseta = value
    }

    get getTarjAmarillas(): number {
        return this.tarjAmarillas
    }
    set setTarjAmarillas(value: number) {
        this.tarjAmarillas = value
    }

    get getTarjRojas(): number {
        return this.tarjRojas
    }
    set setTarjRojas(value: number) {
        this.tarjRojas = value
    }

    modificarEstadisticas(stats: number[]|undefined): void {
        throw new Error("Method not implemented.")
    }

    modificarTarjeta(stat: number[] | undefined): void {
        throw new Error("Method not implemented.")
    }

}