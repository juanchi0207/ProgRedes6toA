import { Plato } from "./Plato";
import { Chef } from "./Chef";
export class Restaurante {

    nombre: string;
    menu: Set<Plato>;
    chefs: Set<Chef>;

    constructor(nombre: string, menu: Set<Plato>, chefs: Set<Chef>){
        this.nombre = nombre
        this.menu = menu;
        this.chefs = chefs;
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

}