import { Plato } from "./Plato";
import { Chef } from "./Chef";
import { Mesa } from "./Mesa";
export class Restaurante {

    nombre: string
    menu: Set<Plato>
    chefs: Set<Chef>
    mesas: Set<Mesa>

    constructor(nombre: string, menu: Set<Plato>, chefs: Set<Chef>, mesas: Set<Mesa>){
        this.nombre = nombre
        this.menu = menu;
        this.chefs = chefs;
        this.mesas = mesas
    }

    getNombre(): string{
        return this.nombre;
    } 

    setNombre(nombre: string): void{
        this.nombre = nombre;
    } 

    getMenu(): Set<Plato>{
        return this.menu;
    } 

    setMenu(menu: Set<Plato>): void{
        this.menu = menu;
    } 

    getChefs(): Set<Plato>{
        return this.menu;
    } 

    setChefs(chefs: Set<Chef>): void{
        this.chefs = chefs;
    }
    

    getMesa(): Set<Mesa>{
        return this.mesas
    } 

    setMesa(mesas: Set<Mesa>): void{
        this.mesas = mesas;
    } 


    
    agregarPlato(plato: Plato): boolean{
        if(this.verificarChef(plato.getChef()) && this.verificarPlato(plato)){
            this.menu.add(plato);
            return true;
        }
        return false;
    }

    verificarChef(chef1: Chef): boolean{
        this.chefs.forEach(chef => {
            if(chef==chef1){
                return true;
            }
        });
        return false;
    }

    verificarPlato(plato1: Plato): boolean{
        this.menu.forEach(plato => {
            if(plato==plato1){
                return false;
            }
        });
        return true;
    }


    agregarChef(chef: Chef): boolean{
        if(chef.getEdad()>=18 && chef.getExpCulinaria()){
            this.chefs.add(chef);
            return true;
        }
        return false;
    }


    mesasOcupadas(){
        for (let mesa of this.mesas){
            if(!mesa.disponible){
                console.log ("La mesa " + mesa.getNumero + " esta ocupada")
            }
        }
    }
}