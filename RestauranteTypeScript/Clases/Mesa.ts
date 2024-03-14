import { Plato } from "./Plato"

export class Mesa{
    numero: number
    platosPedidos: Map<Plato, boolean>
    disponible: boolean

    constructor(numero: number){
        this.numero = numero
        this.platosPedidos = new Map<Plato, boolean>
        this.disponible = true
    }

    getNumero(): number{
        return this.numero;
    } 

    setNumero(numero: number): void{
        this.numero = numero;
    } 

    getPlatosPedidos(): Map<Plato, boolean>{
        return this.platosPedidos;
    } 

    setPlatosPedidos(platosPedidos: Map<Plato, boolean>): void{
        this.platosPedidos = platosPedidos;
    } 

    getDisponible(): boolean{
        return this.disponible;
    } 

    setDisponible(disponible: boolean): void{
        this.disponible = disponible;
    } 


    totalAPagar(): number{
        let total: number = 0
        for (let plato of this.platosPedidos.keys()){
            total = total + plato.getPrecio();
        }
        return total
    }

    platosPendientes(){
        for(let plato of this.platosPedidos.keys()){
            if (!this.platosPedidos.get(plato)){
                console.log("El plato "+ plato.getNombre() + " fue pedido pero no entregado")
            }
        }
    }
}