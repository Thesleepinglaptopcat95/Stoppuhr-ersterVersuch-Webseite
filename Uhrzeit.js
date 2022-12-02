{
var Jetzt = new Date();
var Tag = Jetzt.getDate();
var Monat = Jetzt.getMonth() + 1;
var Jahr = Jetzt.getYear();
var Stunden = Jetzt.getHours();
var Minuten = Jetzt.getMinutes();
var Minute2  = ((Minuten < 10) ? ":0" : ":");
var Sekunden = Jetzt.getSeconds();
var Sekunde2  = ((Sekunden < 10) ? ":0" : ":");
if (Jahr<2000) Jahr=Jahr+1900;
 document.write("<\/h2><b>Heute ist der "+ Tag + "." + Monat + "." + Jahr + ". Es ist jetzt " 
  + Stunden + Minute2 + Minuten + Sekunde2 + Sekunden + " Uhr<\/b>")

}
//-->

///Uhrzeitanzeige