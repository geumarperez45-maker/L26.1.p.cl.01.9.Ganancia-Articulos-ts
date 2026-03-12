export default class Cl_vTienda {
private btAgregar: HTMLButtonElement;
private lblGananciaTotal: HTMLElement;
private lblCodigoMayor: HTMLElement;
private seccionArticulo: HTMLElement;

constructor() {
    this.btAgregar = document.getElementById("vTienda_btAgregar") as HTMLButtonElement;
    this.lblGananciaTotal = document.getElementById("vTienda_lblGananciaTotal") as HTMLElement;
    this.lblCodigoMayor = document.getElementById("vTienda_lblCodigoMayor") as HTMLElement;
    this.seccionArticulo = document.getElementById("vArticulo") as HTMLElement;
}

set onClickAgregar(callback: () => void) {
    this.btAgregar.onclick = () => {
    this.seccionArticulo.hidden = false;
    callback();
    };
}

reportar(ganancia: number, mayor: number) {
    this.lblGananciaTotal.innerHTML = ganancia.toFixed(2);
    this.lblCodigoMayor.innerHTML = mayor.toString();
    this.seccionArticulo.hidden = true;
}
}