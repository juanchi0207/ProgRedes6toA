class JugadorCampo extends Jugador{
    porcentajeGoles: number;
    cantidadAsists: number;
    cantidadGoles: number;
    cantTiros: number;
    posicion: Posiciones;
  
  
    constructor(nombre: string, fechaDeNacimiento: Date, posicion: Posiciones, provincia: string, historialDeEquipos: Set<Equipo>, porcentajeGoles: number, cantidadAsists: number, cantTiros: number, numCamiseta: number, cantGoles: number){
      super(nombre, fechaDeNacimiento, provincia, historialDeEquipos, numCamiseta);
      this.porcentajeGoles = porcentajeGoles;
      this.cantidadAsists = cantidadAsists;
      this.cantTiros = cantTiros;
      this.posicion = posicion;
      this.cantidadGoles=cantGoles
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
  
  
    modificarEstadisticas(goles:number, asistencias: number, cantTiros: number): void {
      this.setCantTiros =(this.getCantTiros + cantTiros);
      this.setCantidadAsists =(this.getCantidadAsists + asistencias);
      this.setCantidadGoles =(this.cantidadGoles+goles)
      this.setPorcentajeGoles =((this.cantidadGoles * 100) / cantTiros)
    }
  }