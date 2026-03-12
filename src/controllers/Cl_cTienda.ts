
/*9. GANANCIA ARTÍCULOS
conociendo el código, costo y el precio de venta de los artículos que vende una tienda, 
se desea hacer un procesamiento que determine la ganancia total que tendría la empresa 
al venderlos todos, y también el código del artículo con mayor precio de venta.
El encargado de la tienda informa que dispone de los siguientes artículos: 888 
(costo $10, precio venta $15), 777 (costo $20, precio $25), 999 ($15, $25), 666 
($25, $35), 111 ($50, $70), 333 ($40, $50), 444 ($80, $100) y 222 ($5, $10)

Ganancia Total: 85$
Código del artículo con mayor precio de venta: 444*/



import Cl_mArticulo from "../models/Cl_mArticulo.js";
import Cl_mTienda from "../models/Cl_mTienda.js";
import Cl_vArticulo from "../views/Cl_vArticulo.js";
import Cl_vTienda from "../views/Cl_vTienda.js";

export default class Cl_cTienda {
private modelo: Cl_mTienda;
private vista: Cl_vTienda;

constructor(modelo: Cl_mTienda, vista: Cl_vTienda) {
    this.modelo = modelo;
    this.vista = vista;

    this.vista.onClickAgregar = () => {
    let vArticulo = new Cl_vArticulo();
    vArticulo.onClickAceptar = () => {
    let mArticulo = new Cl_mArticulo(
        vArticulo.codigo,
        vArticulo.costo,
        vArticulo.precioVenta
        );
    this.modelo.procesarArticulo(mArticulo);
    this.vista.reportar(
        this.modelo.totalGanancia(),
        this.modelo.articuloMasCaro()
        );
    };
    };
  }
}