export class Producto {
  constructor(
    private titulo: string,
    private precio: number,
    private descripcion: string,
    private imagen: string) {
    this.titulo = titulo;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}
