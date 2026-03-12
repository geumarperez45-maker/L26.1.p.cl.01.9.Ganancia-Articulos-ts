import Cl_mArticulo from "./Cl_mArticulo.js";

export default class Cl_mTienda {
private acGanancia: number;
private mayorPrecioVenta: number;
private codigoMayor: number;

constructor() {
    this.acGanancia = 0.0;
    this.mayorPrecioVenta = 0.0;
    this.codigoMayor = 0;
}

procesarArticulo(articulo: Cl_mArticulo): void {
// Acumular la ganancia (Precio Venta - Costo)
    this.acGanancia += (articulo.precioVenta - articulo.costo);

// Determinar el artículo con mayor precio de venta
if (articulo.precioVenta > this.mayorPrecioVenta) {
    this.mayorPrecioVenta = articulo.precioVenta;
    this.codigoMayor = articulo.codigo;
    }
}

totalGanancia(): number {
    return this.acGanancia;
}

articuloMasCaro(): number {
    return this.codigoMayor;
}
}