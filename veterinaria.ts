class Veterinaria {
    private nombre: string;
    private direccion: string;
    private id: number;

    constructor(nombre: string, direccion: string, id: number) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
    }
    // metodo que genera un numero aleatorio para el id
    numeroAleatorio(min: number, max: number): number {
        return Math.floor(Math.random() * (min - max)) + min;
    }
}
