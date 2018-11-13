
/*

Teste de functionamento de Operações com jason e object
// ID  NomeAoe TrechoAoe LocalRodovai_km UfOae AltitudeOae LatitudeOae LongitudeOae  LarguraOae  TipoEstrutura NaturezaTrasposicao SistemaConstrutivo
// 1 Terceira Ponte  BR200 vila velha  ES  2000  -20.3203023 -40.2847483 2000  Ponte peninsula Ponte "Sistema construtivo

//Percorre uma matriz
//Ideia colocar caracter ; pra separar os dados que vem do banco assim posso explodir pra dentro de uma variavel matriz;

*/
function RowList() {
	var list = new Array();
	list[0] = "1 Terceira Ponte  BR200 vila velha  ES  2000  -20.3203023 -40.2847483 2000  Ponte peninsula Ponte 'Sistema construtivo'";
	list[1] = "2 Terceira Ponte  BR200 vila velha  ES  2000  -20.3203023 -40.2847483 2000  Ponte peninsula Ponte 'Sistema construtivo'";
	/*
	for (var i = list.length - 1; i >= 0; i--) {
		//list[i] ="2 Terceira Ponte  BR200 vila velha  ES  2000  -20.3203023 -40.2847483 2000  Ponte peninsula Ponte 'Sistema construtivo'";
		console.log(i,list[i]);
	}*/


	var myJsonString = JSON.stringify(list);
	return myJsonString;
}


//Class teste
function Aluno() {
	var nome;
	var idade;
	var curso;

	this.setNome = function (vNome) {
		this.nome = vNome;
	}

	this.setIdade = function (vIdade) {
		this.idade = vIdade;
	}

	this.setCurso = function (vCurso) {
		this.curso = vCurso;
	}

	this.getNome = function () {
		return this.nome;
	}

	this.getIdade = function () {
		return this.idade;
	}

	this.getCurso = function () {
		return this.curso;
	}

	this.mostraDados = function () {
		console.log("Nome do aluno: " + this.nome + "\nIdade: " + this.idade + "\nCurso: " + this.curso);
	}


}

function Obra() {
	var Id;
	var NomeAoe;
	var TrechoAoe;
	var LocalRodovai_km;
	var UfOae;
	var AltitudeOae;
	var LatitudeOae;
	var LongitudeOae
	var LarguraOae;
	var TipoEstrutura;
	var NaturezaTrasposicao;
	var SistemaConstrutivo;

	this.setid = function (_id) {
		this.Id = _id;
		//console.log(this.Id);
	}
	this.getid = function () {
		return this.Id;
	}

	this.setLarguraOae = function (_larguraOae) {
		this.LarguraOae = _larguraOae;
	}

	this.getLarguraOae = function () {
		return this.LarguraOae;
	}

	this.setNomeAoe = function (_NomeAoe) {
		this.NomeAoe = _NomeAoe;
	}
	this.setTrechoAoe = function (_trechoAoe) {
		this.TrechoAoe = _trechoAoe;
	}
	this.setUfOae = function (_ufOae) {
		this.UfOae = _ufOae;
	}
	this.setAltitudeOae = function (_altitudeOae) {
		this.AltitudeOae = _altitudeOae;
	}
	this.setLatitudeOae = function (_latitudeOae) {
		this.LatitudeOae = _latitudeOae;
	}
	this.setLongitudeOae = function (_longitudeOae) {
		this.LongitudeOae = _longitudeOae;
	}
	this.setLocalRodovai_km = function (_localRodovai_km) {
		this.LocalRodovai_km = _localRodovai_km;
	}

	this.getLocalRodovai_km = function () {
		return this.LocalRodovai_km;
	}

	this.setTipoEstrutura = function (_tipoEstrutura) {
		this.TipoEstrutura = _tipoEstrutura;
	}
	this.SetNaturezaTrasposicao = function (_naturezaTrasposicao) {
		this.NaturezaTrasposicao = _naturezaTrasposicao;
	}
	this.setSistemaConstrutivo = function (_sistemaConstrutivo) {
		this.SistemaConstrutivo = _sistemaConstrutivo;
	}
	this.getNomeAoe = function () {
		return this.NomeAoe;
	}
	this.getTrechoAoe = function () {
		return this.TrechoAoe;
	}
	this.getUfOae = function () {
		return this.UfOae;
	}
	this.getAltitudeOae = function () {
		return this.AltitudeOae;
	}
	this.getLatitudeOae = function () {
		return this.LatitudeOae;
	}
	this.getLongitudeOae = function () {
		return this.LongitudeOae;
	}
	this.getTipoEstrutura = function () {
		return this.TipoEstrutura;
	}
	this.getNaturezaTrasposicao = function () {
		return this.NaturezaTrasposicao;
	}
	this.getSistemaConstrutivo = function () {
		return this.SistemaConstrutivo;
	}
	this.mostraDados = function () {
		var ObraResult = "Id" + this.Id +
			"NomeAoe" + this.NomeAoe +
			"TrechoAoe" + this.TrechoAoe +
			"LocalRodovai_km" + this.LocalRodovai_km +
			"UfOae" + this.UfOae +
			"AltitudeOae" + this.AltitudeOae +
			"LatitudeOae" + this.LatitudeOae +
			"LongitudeOae" + this.LongitudeOae +
			"LarguraOae" + this.LarguraOae +
			"TipoEstrutura" + this.TipoEstrutura +
			"NaturezaTrasposicao" + this.NaturezaTrasposicao +
			"SistemaConstrutivo" + this.SistemaConstrutivo;


	}


}
Array.prototype.isItAnArray = true; // give this property only to real arrays
function getLength(thing) {




	if (typeof thing == "object" && !thing.isItAnArray) {
		var count = 0;
		for (var test in thing) {
			count++;
		}
		return count;
	} else {
		return thing.length;
	}
}





//Modelo pra exibir lista de obras | Objeto obra 
function ObjetoListaModel(id, NomeAoe, TrechoAoe, LocalRodovai_km, UfOae, AltitudeOae, LatitudeOae, LongitudeOae, LarguraOae, TipoEstrutura, NaturezaTrasposicao, SistemaConstrutivo) {

	var obraAux = new Obra();
	
	obraAux.setid(id);
	obraAux.setNomeAoe(NomeAoe);
	obraAux.setTrechoAoe(TrechoAoe);
	obraAux.setUfOae(UfOae);
	obraAux.setAltitudeOae(AltitudeOae);
	obraAux.setLatitudeOae(LatitudeOae);
	obraAux.setLongitudeOae(LongitudeOae);
	obraAux.setLocalRodovai_km(LocalRodovai_km);
	obraAux.setLarguraOae(LarguraOae);
	obraAux.SetNaturezaTrasposicao(NaturezaTrasposicao);
	obraAux.setTipoEstrutura(TipoEstrutura);
	obraAux.setSistemaConstrutivo(SistemaConstrutivo);
	//console.log(obraAux);

	return obraAux;
}



function ListaObras() {
	
	var myConnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\v_teste_map\\db_sioa.mdb;Jet OLEDB:Database Password=123456";
	var ConnectObj = new ActiveXObject("ADODB.Connection");
	var RS = new ActiveXObject("ADODB.Recordset");
	var sql = "SELECT  * FROM  ObraArteEspecial";
	ConnectObj.Open(myConnect);
	RS.Open(sql, ConnectObj);

	var ListaObjeto = new Array();
	var aObjeto = new Object();
	var clonedArray;
	var i = 0;
	while (!RS.EOF) {
		i++;
			//ListaObjeto[i] += ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value);
			//aObjeto[i] += ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value),aObjeto;
			clonedArray = JSON.parse(JSON.stringify(ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value)));
			
			//console.log(clonedArray);		
		RS.MoveNext();
	

	}
	return clonedArray;
}






//Map





//Old


function Dictionary() {
	var associativeArray = {};
	associativeArray["one"] = "First";
	associativeArray["two"] = "Second";
	associativeArray["three"] = "Third";
	console.log(associativeArray);

	//dictionary

	var myMap = new Map();
	var keyObj = {},
		keyFunc = function () { },
		keyString = "a string";

	myMap.set(keyString, "value associated with 'a string'");
	myMap.set(keyObj, "value associated with keyObj");
	myMap.set(keyFunc, "value associated with keyFunc");

	myMap.size; // 3

	myMap.get(keyString);    // "value associated with 'a string'"
	myMap.get(keyObj);       // "value associated with keyObj"
	myMap.get(keyFunc);      // "value associated with keyFunc"
	console.log(myMap.get(keyObj));
	console.log(myMap.get(keyFunc));

}


function JasonParse() {

	var jsonArg1 = new Object();
	jsonArg1.name = 'calc this';
	jsonArg1.value = 3.1415;
	var jsonArg2 = new Object();
	jsonArg2.name = 'calc this again';
	jsonArg2.value = 2.73;

	var pluginArrayArg = new Array();
	pluginArrayArg.push(jsonArg1);
	pluginArrayArg.push(jsonArg2);

	var jsonArray = JSON.parse(JSON.stringify(pluginArrayArg));
	console.log(jsonArray);
}


