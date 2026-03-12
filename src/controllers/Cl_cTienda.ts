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