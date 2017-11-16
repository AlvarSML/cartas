const COSTES = [20,5,5,6,4,2,1];
const OPCIONES = [null, [[1,1],[0,2]] , [[2,1],[1,2],[0,3]] , [[2,2],[3,1],[1,3],[0,4]] , [[3,2],[2,3],[0,5]] , [[4,2],[2,4],[1,5]] , [[4,3],[3,4],[1,6]] ];

barajap1 = [];
manop1 = [];
mesap1 = [];

barajap2 = [];
manop2 = [];
mesap2 = [];

function generarMazos(){
	barajap1.push.apply(barajap1,genMana());
	barajap2.push.apply(barajap2,genMana());

	for (let i = 1; i < COSTES.length; i++) {
		barajap1.push.apply(barajap1,genClase(i));
		barajap2.push.apply(barajap2,genClase(i));
	}
}

function genClase(coste){
	let tmpCartas = []
	let tAtk;
	let tDef;

	for (let i = 0; i < COSTES[coste]; i++) {
		let j = Math.floor(Math.random() * (OPCIONES[coste].length));
		tAtk = OPCIONES[coste][j][0]
		tDef = OPCIONES[coste][j][1]

		tmpCartas.push(new Carta(coste,tAtk,tDef));
	}

	return tmpCartas;
}

function genMana(){
	let tmpCartas = []
	for (let i = 0; i < COSTES[0]; i++){
		tmpCartas.push(new Carta(0,null,null));
	}
	return tmpCartas;
}
