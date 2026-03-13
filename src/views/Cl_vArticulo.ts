export default class Cl_vArticulo {
private inCodigo: HTMLInputElement;
private inCosto: HTMLInputElement;
private inPrecioVenta: HTMLInputElement;
private btAceptar: HTMLButtonElement;

constructor() {
    this.inCodigo = document.getElementById("vArticulo_inCodigo") as HTMLInputElement;
    this.inCosto = document.getElementById("vArticulo_inCosto") as HTMLInputElement;
    this.inPrecioVenta = document.getElementById("vArticulo_inPrecioVenta") as HTMLInputElement;
    this.btAceptar = document.getElementById("vArticulo_btAceptar") as HTMLButtonElement;
}

get codigo(): number { 
    return +this.inCodigo.value; }
get costo(): number { 
    return +this.inCosto.value; }
get precioVenta(): number { 
    return +this.inPrecioVenta.value; }

set onClickAceptar(callback: () => void) {
    this.btAceptar.onclick = callback;
}
reportar(inCodigo: number, inCosto: number, inPrecioVenta: number) {
    this.inCodigo.innerHTML = inCodigo.toFixed(2);
    this.inCosto.innerHTML = inCosto.toString();
    this.inPrecioVenta.innerHTML = inPrecioVenta.toFixed()}

}