export class Producto {
  public id: number;
  public nombre: string;
  public categoria: string;
  public subCategoria?: string;
  public precio: number;
  public ancho: number;
  public alto: number;
  public profundo: number;
  public material: string;
  public colores: string;
  public colorAdicional?: string;
  public descripcion: string;
  public aPedido: string;

  constructor() {}
}
