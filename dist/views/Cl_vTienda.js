export default class Cl_vTienda {
    constructor() {
        this.btAgregar = document.getElementById("vTienda_btAgregar");
        this.lblGananciaTotal = document.getElementById("vTienda_lblGananciaTotal");
        this.lblCodigoMayor = document.getElementById("vTienda_lblCodigoMayor");
        this.seccionArticulo = document.getElementById("vArticulo");
    }
    set onClickAgregar(callback) {
        this.btAgregar.onclick = () => {
            this.seccionArticulo.hidden = false;
            callback();
        };
    }
    reportar(ganancia, mayor) {
        this.lblGananciaTotal.innerHTML = ganancia.toFixed(2);
        this.lblCodigoMayor.innerHTML = mayor.toString();
        this.seccionArticulo.hidden = true;
    }
}
