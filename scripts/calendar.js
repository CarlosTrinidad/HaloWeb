window.onload=function() {
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	var dias =["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
	var date = new Date();
	var anio = date.getFullYear();
	//Creamos la un nuevo objeto Date pero con la fecha del primer dia de este mes
	// var primerDia = new Date(anio,numMes,1);
	// var ultimoDia = new Date(anio,numMes+1,0);


	// Crear la lista de eventos
	var torneo = [];
	torneo[0] = new haloEvent(17,3,"IRON GAMES HCS ATLANTA 2015","Iron Gaming is proud to present the season 2 ","10:00 CDT");
	torneo[1] = new haloEvent(18,3,"1","Iron Games HCS Atlanta will showcase some of the best Halo teams in the world.","10:00 CDT");
	torneo[2] = new haloEvent(11,5,"Go4Halo North America Cup #4","Hosted at the Georgia World Congress Center on April 17-19","10:00 CDT");
	torneo[3] = new haloEvent(26,5,"HCS INDIANAPOLIS PRESENTED BY PGL","We’re excited to announce the second LAN tournament of Season 2 in the Halo Championship Series.","10:00 CDT");
	torneo[4] = new haloEvent(27,5,"HCS 1","HCS Indianapolis presented by PGL. This LAN tournament will take place at Indy Pop Con 2015 in Indianapolis","10:00 CDT");
	torneo[5] = new haloEvent(28,5,"HCS 2","Indianapolis, Indiana and will feature a $50,000 prize");
	torneo[6] = new haloEvent(24,6,"HCS SEASON 2 FINALS 1","Season 2 comes to a close at ESL Studios in Burbank, California.","10:00 CDT");
	torneo[7] = new haloEvent(25,6,"HCS SEASON 2 FINAL 2","Season 2 comes to a close at ESL Studios in Burbank, California.","10:00 CDT");
	torneo[8] = new haloEvent(26,6,"HCS SEASON 2 FINALS 3","Season 2 comes to a close at ESL Studios in Burbank, California.","10:00 CDT");
	torneo[9] = new haloEvent(9,5,"Online Cup #1 by ESL","asdasdasdasdasd");

	// Obtener los eventos
	get_events(torneo, date);
}

function haloEvent(day, month, nombre, infor, hora) {
    this.day = day;
    this.month = month;
    this.nombre = nombre;
    this.infor = infor;
    this.hora = hora;
}



function get_events(torneos, date) {
	var numMes = date.getMonth();
	var numDia = date.getDate();
	var proximos = [];
	//var meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	var dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];



	// Se obtiene los eventos de este mes y los siguientes
	// Ademas deben ser a partir del dia de hoy 
	for (var i = 0; i <= torneos.length - 1; i++) {
		if (torneos[i].month == numMes ) {
			if (torneos[i].day >= numDia) {
				proximos.push(torneos[i]);
			};
		};
		if (torneos[i].month > numMes ) {
			proximos.push(torneos[i]);
		};
	};

	var totalEvents = proximos.length;
	if (totalEvents >= 3) {
		totalEvents = 3;
	};
	// Se crean y agregan los eventos
	for (i = 0; i <= totalEvents-1; i++) {
	var dateEvento = new Date(proximos[i].day,proximos[i].month,date.getFullYear());
	var suceso = document.createElement('div');
	suceso.className = "evento";
	
	var dia = document.createElement('div');
	dia.className = "fecha";

	var mes = document.createElement('strong');
	mes.className = "mes";
	mes.innerHTML = meses[proximos[i].month]; //poner evento
	var numFecha = document.createElement('span');
	numFecha.className = "numero";
	numFecha.innerHTML = proximos[i].day; //poner evento

	dia.appendChild(mes);
	dia.appendChild(numFecha);

	var inf = document.createElement('div');
	inf.className = "info";
	var parrafo = document.createElement('p');
	parrafo.innerHTML = "<h4>"+proximos[i].nombre+"</h4>"+"<span>"+dias[dateEvento.getDay()]+", "+proximos[i].day+" de "+meses[proximos[i].month]+" "+date.getFullYear()+", "+ proximos[i].hora+"</span>"+"<br>"+proximos[i].infor;
	inf.appendChild(parrafo);

	suceso.appendChild(dia);
	suceso.appendChild(inf);
	var proxE = document.getElementById("proxEvnts");
	proxE.appendChild(suceso);
	};
}






