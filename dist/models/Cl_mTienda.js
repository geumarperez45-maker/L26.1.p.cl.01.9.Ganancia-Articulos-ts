export default class Cl_mTienda {
    acGanancia;
    mayorPrecioVenta;
    codigoMayor;
    constructor() {
        this.acGanancia = 0.0;
        this.mayorPrecioVenta = 0.0;
        this.codigoMayor = 0;
    }
    procesarArticulo(articulo) {
        // Acumular la ganancia (Precio Venta - Costo)
        this.acGanancia += (articulo.precioVenta - articulo.costo);
        // Determinar el artículo con mayor precio de venta
        if (articulo.precioVenta > this.mayorPrecioVenta) {
            this.mayorPrecioVenta = articulo.precioVenta;
            this.codigoMayor = articulo.codigo;
        }
    }
    totalGanancia() {
        return this.acGanancia;
    }
    articuloMasCaro() {
        return this.codigoMayor;
    }
}
//# sourceMappingURL=Cl_mTienda.js.map