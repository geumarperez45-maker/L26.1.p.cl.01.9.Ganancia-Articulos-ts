import Cl_mArticulo from "../models/Cl_mArticulo.js";
import Cl_vArticulo from "../views/Cl_vArticulo.js";
export default class Cl_cTienda {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
        this.vista.onClickAgregar = () => {
            let vArticulo = new Cl_vArticulo();
            vArticulo.onClickAceptar = () => {
                let mArticulo = new Cl_mArticulo(vArticulo.codigo, vArticulo.costo, vArticulo.precioVenta);
                this.modelo.procesarArticulo(mArticulo);
                this.vista.reportar(this.modelo.totalGanancia(), this.modelo.articuloMasCaro());
            };
        };
    }
}
