export class celular {


    marca:string;
    sistemaOperativo:string;
    ram:number;
    modelo:string;
    almacenamiento:number;
    encendido:boolean;

    constructor(pmarca: string, pmodelo: string, psistemaOperativo: string, pram: number = 4, palmacenamiento: number = 64, pencendido: boolean = false) {
        this.marca = pmarca;
        this.modelo = pmodelo;
        this.sistemaOperativo = psistemaOperativo;
        this.ram = pram;
        this.almacenamiento = palmacenamiento;
        this.encendido = false;


    }
    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getSistemaoperativo(): string {
        return this.sistemaOperativo;
    }

    getRam(): number {
        return this.ram;
    }

    getAlmacenamiento(): number {
        return this.almacenamiento;
    }

    getEncendido(): boolean {
        return this.encendido;
    }

    
    setRam(memoriaRam: number): void {
        this.ram = memoriaRam;
    }

    setAlmacenamiento(almacenamiento: number): void {
        this.almacenamiento = almacenamiento;
    }
    encenderApagar(): void {
        this.encendido = !this.encendido;
    }


    mostrarInfo(): string {
        const estado = this.encendido ? "Encendido" : "Apagado";
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nSistema Operativo: ${this.sistemaOperativo}\nMemoria RAM: ${this.ram}GB\nAlmacenamiento: ${this.almacenamiento}GB\nEstado: ${estado}`;
    }
}