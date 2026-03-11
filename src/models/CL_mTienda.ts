import CL_mArticulo from "./CL_mArticulo.js";

export default class Cl_tienda {
    private acGanancia: number;
    private mayorPrecioVenta: number;
    private codigoMayor: number | string;

    constructor() {
        this.acGanancia = 0.0;
        this.mayorPrecioVenta = 0.0;
        this.codigoMayor = "";
    }

    procesarArticulo(articulo: CL_mArticulo): void {
    // Calcular ganancia del artículo y acumularla
        this.acGanancia += (articulo.precioVenta - articulo.costo);

    // Determinar el mayor precio de venta
    if (articulo.precioVenta > this.mayorPrecioVenta) {
        this.mayorPrecioVenta = articulo.precioVenta;
        this.codigoMayor = articulo.codigo;
    }
    }

    totalGanancia(): number {
        return this.acGanancia;
    }

    articuloMasCaro(): number | string {
        return this.codigoMayor;
    }
}