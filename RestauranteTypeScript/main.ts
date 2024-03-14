import { Chef } from "./Clases/Chef";
import { Plato } from "./Clases/Plato";
import { Tipo } from "./Clases/Tipo";
import { Restaurante } from "./Clases/Restaurante";
import { Mesa } from "./Clases/Mesa";


let platosPedidos = new Set<Plato> 

let mesa = new Mesa(1)
let mesa2 = new Mesa(2)
let mesas = new Set<Mesa>

mesas.add(mesa)
mesas.add(mesa2)

let menu= new Set<Plato>;
let chefs= new Set<Chef>;
let resto= new Restaurante("Panchieri", menu, chefs, mesas);

let chef1= new Chef("Lucas", 19, true);
let plato1= new Plato("Albondigas","muchas albondigas", 1000, Tipo.PLATO_PRINCIPAL, chef1);

console.log(resto.agregarPlato(plato1));

console.log(resto.agregarChef(chef1));

console.log(resto.agregarPlato(plato1));

console.log(mesa.totalAPagar())

console.log(mesa.platosPendientes())

console.log(resto.mesasOcupadas())