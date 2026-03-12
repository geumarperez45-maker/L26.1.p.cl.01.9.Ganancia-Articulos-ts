export default class Cl_mArticulo {
    constructor(codigo, costo, precioVenta) {
        this._codigo = codigo;
        this._costo = costo;
        this._precioVenta = precioVenta;
    }
    set codigo(c) { this._codigo = +c; }
    get codigo() { return this._codigo; }
    set costo(co) { this._costo = +co; }
    get costo() { return this._costo; }
    set precioVenta(pV) { this._precioVenta = +pV; }
    get precioVenta() { return this._precioVenta; }
}
