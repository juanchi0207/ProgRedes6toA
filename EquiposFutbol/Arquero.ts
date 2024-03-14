class Arquero extends Jugador{
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

    modificarEstadisticas(goles: number, atajadas: number){
        this.cantGolesRecibidos=this.cantGolesRecibidos+goles
        this.cantAtajadas=this.cantAtajadas+atajadas
        this.porcentajeAtajadas=(this.cantAtajadas*100)/(this.cantAtajadas+this.cantGolesRecibidos)
    }
  }