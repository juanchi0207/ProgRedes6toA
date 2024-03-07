export class Chef{

    nombre: string;
    edad: number;
    expCulinaria: boolean;

    constructor(nombre: string, edad: number, expCulinaria: boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.expCulinaria = expCulinaria;
    }

    getNombre(): string{
        return this.nombre;
    } 

    setNombre(nombre: string): void{
        this.nombre = nombre;
    } 

    getEdad(): number{
        return this.edad;
    } 

    setEdad(edad: number): void{
        this.edad = this.edad;
    } 

    getExpCulinaria(): boolean{
        return this.expCulinaria;
    } 

    setExpCulinaria(expCulinaria: boolean): void{
        this.expCulinaria = this.expCulinaria;
    }
}