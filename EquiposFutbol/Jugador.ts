class Jugador{
    nombre: string    
    fechaNacimiento: Date 
    provincia: string
    histEquipos: Set<Equipo>   
    numCamiseta: number
    
    constructor(nombre: string, fechaNac: Date, provincia: string, histEquipos: Set<Equipo>, numCamiseta: number){
        this.nombre= nombre
        this.fechaNacimiento=fechaNac
        this.provincia=provincia
        this.histEquipos=histEquipos
        this. numCamiseta=numCamiseta
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

}