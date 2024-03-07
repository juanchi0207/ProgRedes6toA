import { Chef } from "./Chef";
import { Tipo } from "./Tipo";
export class Plato {
    nombre: string;
    descripcion: string;
    precio: number;
    tipo: Tipo;
    chef: Chef;

    constructor(nombre: string, descripcion: string, precio: number, tipo: Tipo, chef: Chef){
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=descripcion;
        this.tipo=tipo;
        this.chef=chef;
    }
    
    getNombre(): string{
        return this.nombre;
    } 

    setNombre(nombre: string): void{
        this.nombre = nombre;
    } 

    getDescripcion(): string{
        return this.descripcion;
    } 

    setDescripcion(descripcion: string): void{
        this.descripcion = descripcion;
    } 


    getPrecio(): number{
        return this.precio;
    } 

    setPrecio(precio: number): void{
        this.precio = precio;
    } 

    getTipo(): Tipo{
        return this.tipo;
    } 

    setTipo(tipo: Tipo): void{
        this.tipo = tipo;
    }
    
    getChef(): Chef{
        return this.chef;
    }

    setChef(chef: Chef): void{
        this.chef=chef;
    }

}