const ingresos = [
    new Ingreso('salario',21),
    new Ingreso('Venta', 5)
];
const egresos =[
    new Egreso('ropa',5),
    new Egreso('arriendo',5)
];
let cargarApp  = () => {
    cargarCabecero();
}

let totalIngreso = () => {
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}
let totalEgreso = ()=> {
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}
let cargarCabecero = () =>{
    let presupuesto = totalIngreso() - totalEgreso();
    let portcentajeEgrreso = totalEgreso()/totalIngreso();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(portcentajeEgrreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngreso());
    document.getElementById('egreso').innerHTML = formatoMoneda(totalEgreso());
}
const formatoMoneda = (valor) =>{
   return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2});
}
const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US',{style:'percent',  minimumFractionDigits:2})
}