  function Pagina(id){
    //  console.log("location.href=C:\\v_teste_map\\index.html?cod = "+id);
    //location.href=C:\\v_teste_map\\index.html?cod = 1
    //var quebra = variaveis[1].split("=");
    //console.log(quebra);
    //window.location = "?id="+id;
    //document.getElementById("firstName1Edit").value,document.getElementById("lastName1Edit").value);
   
   // Update(id,document.getElementById("firstName1Edit").value,document.getElementById("lastName1Edit").value);

  //window.location = "?id="+id;
  var myConnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\v_teste_map\\db_sioa.mdb;Jet OLEDB:Database Password=123456";
                                    var ConnectObj = new ActiveXObject("ADODB.Connection");
                                    var RS = new ActiveXObject("ADODB.Recordset");
                                    var sql = "SELECT  * FROM  usuario";
                                    ConnectObj.Open (myConnect);
                                    RS.Open(sql,ConnectObj);
                                   
           
      var result;
      var i = 0;
      var ar = new Array();
      //window.location = "?id="+id;
      while (!RS.EOF) {
            //i++;
          if(id == RS.fields(0).value){

           // window.open("C:\\v_teste_map\\index.html?id="+id);
               
               
               console.log(RS.fields(0).value);  
               document.getElementById("id_edit_user").value = RS.fields(0).value;
               document.getElementById("firstName1").value = RS.fields(1).value;
               document.getElementById("lastName1").value = RS.fields(2).value;
               document.getElementById("btn_novo").style.display="none";
               document.getElementById("btn_editar").style.display="block";


             // return RS.fields(0).value;

//window.location = "?id="+id;
                /*result = '<div class="modal" id="myModal">'+
                '<div class="modal-dialog">'+
      '<div class="modal-content"> '+
        '<div class="modal-header">'+
          '<h4 class="modal-title">Editar usuário</h4>'+
          '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
        '</div>'+
        '<div class="modal-body">' +
          '<form class="needs-validation" novalidate>'+
            '<div class="row">'+
              '<div class="col-md-6 mb-3">'+
                '<label for="firstName">Nome</label>'+
                '<input type="hidden" id="'+id+'" name="custId" value="'+id+'">'+
                '<input type="text" class="form-control" id="firstName1Edit" placeholder="" value="'+RS.fields(0).value+'" required>'+
                '<input type="text" class="form-control" id="firstName1Edit" placeholder="" value="'+RS.fields(1).value+'" required>'+
                '<div class="invalid-feedback">'+
                  'Este campo é obrigatorio.'+
                '</div>'+
              '</div>'+
              '<div class="col-md-6 mb-3">'+
                '<label for="lastName">Sobrenome</label>'+
                '<input type="text" class="form-control" id="lastName1Edit" placeholder="" value="'+RS.fields(2).value+'" required>'+
                '<div class="invalid-feedback">'+
                  'Este campo é obrigatorio'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<hr class="mb-4">'+
            '<button class="btn btn-primary btn-lg btn-block"  onclick="teste();">Update</button>'+
            '<button class="btn btn-primary btn-lg btn-block"  onclick="Update(27,document.getElementById("firstName1Edit").value,document.getElementById("lastName1Edit").value);">Salvar</button>'+
            '<button type="button" class="btn btn-link" data-toggle="modal" data-target="#myModal" onclick="Pagina('+RS.fields(0).value+')";>Bookmark </button>'+
        '</form>'+
        '</div>'+
        '<div class="modal-footer">'+
          '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'+
        '</div>'+
      '</div>'+
    '</div>';*/
       //result =RS.fields(0).value;
          }      

                RS.MoveNext();

      }
       
      //return result;
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
  var A = new Array();
  var aObjeto = new Object();
  var clonedArray;
  var i = 0;
  while (!RS.EOF) {
    i++;
      //ListaObjeto[i] += ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value);
      //aObjeto[i] += ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value),aObjeto;
      //ListaObjeto[i] += JSON.parse(JSON.stringify(ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value)));
      
      //console.log(clonedArray);   



      //ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value))

               


        //A[i] += lat:RS.fields(7).value + lng:RS.fields(8).value;

    RS.MoveNext();
  

  }

}






function MapList(){
var group = new H.map.Group();
  
  //Configuração de inicialização de mapa
  map.setCenter({lat:-20.3203023, lng:-40.2847483});
  map.setZoom(2);


  
  //Cria Objeto
  map.addObject(group);

  // add 'tap' event listener, that opens info bubble, to the group
  group.addEventListener('tap', function (evt) {
    // event target is the marker itself, group is a parent event target
    // for all objects that it contains
    var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
      // read custom data
      content: evt.target.getData()
    });
    // show info bubble
    ui.addBubble(bubble);
  }, false);




// ID  NomeAoe TrechoAoe LocalRodovai_km UfOae AltitudeOae LatitudeOae LongitudeOae  LarguraOae  TipoEstrutura NaturezaTrasposicao SistemaConstrutivo
// 1 Terceira Ponte  BR200 vila velha  ES  2000  -20.3203023 -40.2847483 2000  Ponte peninsula Ponte "Sistema construtivo

  //Percorre uma matriz
  //Ideia colocar caracter ; pra separar os dados que vem do banco assim posso explodir pra dentro de uma variavel matriz;
  var matriz = [1,2,3,4];
  for(var i=0; i<matriz.length; i++) {
      console.log(i, matriz[i]); // i é o índice, matriz[i] é o valor

  }

  
  /*
  var listAoa = ListarObraArteEspecial();
  for(var i=0; i<listAoa.length; i++) {
      console.log(i, listAoa[i]); // i é o índice, matriz[i] é o valor
        var latitude;
        var longitude;
        if(listAoa[i] = 7){
            latitude = listAoa[i];
        }
        if(listAoa[i] = 8){
            longitude = listAoa[i];
        }
        addMarkerToGroup(group, {lat:latitude, lng:longitude},
        '<div>longitude'+latitude+longitude+'</div>');
    
  }*/


  //alert(ListaObras());

 var myConnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\v_teste_map\\db_sioa.mdb;Jet OLEDB:Database Password=123456";
  var ConnectObj = new ActiveXObject("ADODB.Connection");
  var RS = new ActiveXObject("ADODB.Recordset");
  var sql = "SELECT  * FROM  ObraArteEspecial";
  ConnectObj.Open(myConnect);
  RS.Open(sql, ConnectObj);

  var ListaObjeto = new Array();
  var A = new Array();
  var aObjeto = new Object();
  var clonedArray;
  var i = 0;
  while (!RS.EOF) {
    i++;
      //ListaObjeto[i] += ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value);
      //aObjeto[i] += ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value),aObjeto;
      //ListaObjeto[i] += JSON.parse(JSON.stringify(ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value)));
      
      //console.log(clonedArray);   



      //ObjetoListaModel(RS.fields(0).value, RS.fields(1).value, RS.fields(2).value, RS.fields(3).value, RS.fields(4).value, RS.fields(5).value, RS.fields(6).value, RS.fields(7).value, RS.fields(8).value, RS.fields(9).value, RS.fields(10).value + RS.fields(11).value))

               


        //A[i] += lat:RS.fields(7).value + lng:RS.fields(8).value;


  //addMarkerToGroup(group, {lat:RS.fields(7).value, lng:RS.fields(8).value},
    //  '<div>3ª PONTE</div>');
  addMarkerToGroup(group, {lat:-20.3203023,lng:-40.2847483},
    '<div>3ª PONTE</div>');

    addMarkerToGroup(group, {lat: 52.53075, lng: 14.3856},

    '<div>2ª PONTE</div>');

    RS.MoveNext();
  

  }



/*

  addMarkerToGroup(group, {lat:-20.3203023, lng:-40.2847483},
    '<div>3ª PONTE</div>');

  addMarkerToGroup(group, {lat:-20.325874, lng:-40.351520},
    '<div>PONTE FLORENTINO AVIDOS</div>');


  addMarkerToGroup(group, {lat:-20.327082, lng:-40.354761},
    '<div>2ª PONTE</div>');

  addMarkerToGroup(group, {lat: 52.53075, lng: 14.3856},

    '<div>2ª PONTE</div>');
*/

//CRIAR MARCADOR DO ZERO
  var svgMarkup = '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
  'height="22" /><text x="12" y="18" font-size="12pt" ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="white" id="id_mark">A</text></svg>';



  var icon = new H.map.Icon(svgMarkup),
  coords = {lat: 52.53075, lng: 13.3851},
  marker = new H.map.Marker(coords, {icon: icon});

// Add the marker to the map and center the map at the location of the marker:
map.addObject(marker);

  
}


function addDomMarker(map) {
  var outerElement = document.createElement('div'),
      innerElement = document.createElement('div');

  outerElement.style.userSelect = 'none';
  outerElement.style.webkitUserSelect = 'none';
  outerElement.style.msUserSelect = 'none';
  outerElement.style.mozUserSelect = 'none';
  outerElement.style.cursor = 'default';

  innerElement.style.color = 'red';


  innerElement.style.backgroundColor = 'blue';
  innerElement.style.border = '2px solid black';
  innerElement.style.font = 'normal 12px arial';
  innerElement.style.lineHeight = '12px'

  innerElement.style.paddingTop = '2px';
  innerElement.style.paddingLeft = '4px';
  innerElement.style.width = '20px';
  innerElement.style.height = '20px';

  // add negative margin to inner element
  // to move the anchor to center of the div
  innerElement.style.marginTop = '-10px';
  innerElement.style.marginLeft = '-10px';

  outerElement.appendChild(innerElement);

  // Add text to the DOM element
  innerElement.innerHTML = 'C';



  function changeOpacity(evt) {
    evt.target.style.opacity = 0.6;
  };

  function changeOpacityToOne(evt) {
    evt.target.style.opacity = 1;
  };

    
  //create dom icon and add/remove opacity listeners
  var domIcon = new H.map.DomIcon(outerElement, {
    // the function is called every time marker enters the viewport
    onAttach: function(clonedElement, domIcon, domMarker) {
      clonedElement.addEventListener('mouseover', changeOpacity);
      clonedElement.addEventListener('mouseout', changeOpacityToOne);
    },
    // the function is called every time marker leaves the viewport
    onDetach: function(clonedElement, domIcon, domMarker) {
      clonedElement.removeEventListener('mouseover', changeOpacity);
      clonedElement.removeEventListener('mouseout', changeOpacityToOne);
    }
  });

  // Marker for Chicago Bears home
  var bearsMarker = new H.map.DomMarker({lat: 41.8625, lng: -87.6166}, {
    icon: domIcon
  });
  map.addObject(bearsMarker);
}

  
function moveRelogio(){ 
    momentoAtual = new Date() 
    hora = momentoAtual.getHours() 
    minuto = momentoAtual.getMinutes() 
    segundo = momentoAtual.getSeconds() 

    //horaImprimivel = hora + " : " + minuto + " : " + segundo 
    horaImprimivel = hora + " : " + minuto + " : " + segundo 
    document.form_relogio.relogio.value = horaImprimivel ;

    //document.form_relogio.label1.value = horaImprimivel;
    //document.form_relogio.relogio.value = horaImprimivel 
    //label1
    //var element = document.getElementById('element');
    //element.innerHTML = ''+horaImprimivel+'</b>'


    setTimeout("moveRelogio()",1000) 
} 



  function Insert(nome,sobrenome){
			var myConnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\v_teste_map\\db_sioa.mdb;Jet OLEDB:Database Password=123456";
                                    var ConnectObj = new ActiveXObject("ADODB.Connection");
                                    var RS = new ActiveXObject("ADODB.Recordset");
                                  
                                    var sql = "INSERT INTO usuario(UserName,LastName)VALUES('"+nome+"','"+sobrenome+"')";
                                    ConnectObj.Open (myConnect);
                                    RS.Open(sql,ConnectObj);
                                    alert("Registro inserido com sucesso!");

  }


function teste(id){

                
              
                                    var myConnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\v_teste_map\\db_sioa.mdb;Jet OLEDB:Database Password=123456";
                                    var ConnectObj = new ActiveXObject("ADODB.Connection");
                                    var RS = new ActiveXObject("ADODB.Recordset");
                                      
                                    var sql = "UPDATE usuario SET UserName = '"+document.getElementById("firstName1Edit").value+"',LastName = '"+document.getElementById("lastName1Edit").value+"' WHERE id = 27 ";
                                  
                                    ConnectObj.Open (myConnect);
                                    RS.Open(sql,ConnectObj);
                                    RS.close();


      
  //document.write("teste"+document.getElementById("firstName1Edit").value,document.getElementById("lastName1Edit").value);
}

  function Update(id,nome,subrenome){


    /*
			var myConnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\v_teste_map\\db_teste.mdb;Jet OLEDB:Database Password=123456";
                                    var ConnectObj = new ActiveXObject("ADODB.Connection");
                                    var RS = new ActiveXObject("ADODB.Recordset");
                                    	
                                    var sql = "UPDATE usuario SET UserName = 'TESTE200',LastName = 'TESTE55' WHERE id = "+id;
                                  
                                    ConnectObj.Open (myConnect);
                                    RS.Open(sql,ConnectObj);
                                    RS.close();
                                    //alert("Registro alterado com sucesso!");
                                    //console.log("Registro alterado com sucesso!");
  */


var myConnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\v_teste_map\\db_sioa.mdb;Jet OLEDB:Database Password=123456";
                                    var ConnectObj = new ActiveXObject("ADODB.Connection");
                                    var RS = new ActiveXObject("ADODB.Recordset");
                                      //id,nome,subrenome
                                    var sql = "UPDATE usuario SET UserName = '"+nome+"',LastName = '"+subrenome+"' WHERE id = "+id;
                                  
                                    ConnectObj.Open (myConnect);
                                    RS.Open(sql,ConnectObj);
                                    alert("Registro alterado com sucesso");
                                    RS.close();



  }
function Delete(id){
			var myConnect = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\\v_teste_map\\db_sioa.mdb;Jet OLEDB:Database Password=123456";
                                    var ConnectObj = new ActiveXObject("ADODB.Connection");
                                    var RS = new ActiveXObject("ADODB.Recordset");
                                    	
                                    var sql = "DELETE FROM usuario  WHERE id = "+ id;
                                    ConnectObj.Open (myConnect);
                                    RS.Open(sql,ConnectObj);
                                    alert("Registro excluido com sucesso!");
                                    RS.close();
  }

    function protegercodigoMouse() {
    if (event.button==2||event.button==3){
        alert('Codigo protegido!');}
    }


 //   document.onmousedown=protegercodigo

