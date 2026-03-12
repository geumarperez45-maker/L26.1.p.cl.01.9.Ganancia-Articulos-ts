export default class Cl_mArticulo {
private _codigo: number;
private _costo: number;
private _precioVenta: number;

constructor(codigo: number, costo: number, precioVenta: number) {
    this._codigo = codigo;
    this._costo = costo;
    this._precioVenta = precioVenta;
}

set codigo(c: number) { this._codigo = +c; }
get codigo(): number { return this._codigo; }

set costo(co: number) { this._costo = +co; }
get costo(): number { return this._costo; }

set precioVenta(pV: number) { this._precioVenta = +pV; }
get precioVenta(): number { return this._precioVenta; }
}