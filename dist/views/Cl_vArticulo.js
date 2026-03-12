export default class Cl_vArticulo {
    inCodigo;
    inCosto;
    inPrecioVenta;
    btAceptar;
    constructor() {
        this.inCodigo = document.getElementById("vArticulo_inCodigo");
        this.inCosto = document.getElementById("vArticulo_inCosto");
        this.inPrecioVenta = document.getElementById("vArticulo_inPrecioVenta");
        this.btAceptar = document.getElementById("vArticulo_btAceptar");
    }
    get codigo() { return +this.inCodigo.value; }
    get costo() { return +this.inCosto.value; }
    get precioVenta() { return +this.inPrecioVenta.value; }
    set onClickAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
}
//# sourceMappingURL=Cl_vArticulo.js.map