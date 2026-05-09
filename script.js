// ==========================================
// LÓGICA DE PESTAÑAS
// ==========================================
function show(level, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('panel-' + level).classList.add('active');
  btn.classList.add('active');
  
  if(level === 'fc-verbs') loadNextCard('verb');
  if(level === 'fc-words') loadNextCard('word');
}

// ==========================================
// BASE DE DATOS (NUEVO FORMATO TIPO TEXTO)
// ==========================================
// Pega tus datos aquí. Formato: Infinitivo | Perfekt | Präteritum | Español
const rawVerbs = `
sein|ist gewesen|war|ser, estar
haben|hat gehabt|hatte|tener
werden|ist geworden|wurde|llegar a ser, convertirse
können|hat gekonnt|konnte|poder
müssen|hat gemusst|musste|tener que
wollen|hat gewollt|wollte|querer
dürfen|hat gedurft|durfte|tener permiso
sollen|hat gesollt|sollte|deber
mögen|hat gemocht|mochte|gustar
wissen|hat gewusst|wusste|saber
sagen|hat gesagt|sagte|decir
sprechen|hat gesprochen|sprach|hablar
reden|hat geredet|redete|conversar
erzählen|hat erzählt|erzählte|contar, narrar
fragen|hat gefragt|fragte|preguntar
antworten|hat geantwortet|antwortete|responder
rufen|hat gerufen|rief|llamar
schreien|hat geschrien|schrie|gritar
flüstern|hat geflüstert|flüsterte|susurrar
hören|hat gehört|hörte|escuchar
sehen|hat gesehen|sah|ver
anschauen|hat angeschaut|schaute an|mirar
beobachten|hat beobachtet|beobachtete|observar
zeigen|hat gezeigt|zeigte|mostrar
finden|hat gefunden|fand|encontrar
suchen|hat gesucht|suchte|buscar
kennen|hat gekannt|kannte|conocer
erkennen|hat erkannt|erkannte|reconocer
verstehen|hat verstanden|verstand|entender
lernen|hat gelernt|lernte|aprender
studieren|hat studiert|studierte|estudiar
lesen|hat gelesen|las|leer
schreiben|hat geschrieben|schrieb|escribir
buchstabieren|hat buchstabiert|buchstabierte|deletrear
übersetzen|hat übersetzt|übersetzte|traducir
erklären|hat erklärt|erklärte|explicar
denken|hat gedacht|dachte|pensar
glauben|hat geglaubt|glaubte|creer
meinen|hat gemeint|meinte|opinar
vergessen|hat vergessen|vergaß|olvidar
erinnern|hat erinnert|erinnerte|recordar
träumen|hat geträumt|träumte|soñar
planen|hat geplant|plante|planear
entscheiden|hat entschieden|entschied|decidir
versuchen|hat versucht|versuchte|intentar
beginnen|hat begonnen|begann|comenzar
anfangen|hat angefangen|fing an|empezar
enden|hat geendet|endete|terminar
aufhören|hat aufgehört|hörte auf|dejar de
machen|hat gemacht|machte|hacer
tun|hat getan|tat|hacer (acción)
arbeiten|hat gearbeitet|arbeitete|trabajar
helfen|hat geholfen|half|ayudar
benutzen|hat benutzt|benutzte|usar
brauchen|hat gebraucht|brauchte|necesitar
versprechen|hat versprochen|versprach|prometer
gewinnen|hat gewonnen|gewann|ganar
verlieren|hat verloren|verlor|perder
bezahlen|hat bezahlt|bezahlte|pagar
kosten|hat gekostet|kostete|costar
kaufen|hat gekauft|kaufte|comprar
verkaufen|hat verkauft|verkaufte|vender
bestellen|hat bestellt|bestellte|pedir, ordenar
bringen|hat gebracht|brachte|traer
holen|hat geholt|holte|ir a buscar
nehmen|hat genommen|nahm|tomar
geben|hat gegeben|gab|dar
bekommen|hat bekommen|bekam|recibir
erhalten|hat erhalten|erhielt|recibir, conservar
lassen|hat gelassen|ließ|dejar
halten|hat gehalten|hielt|sostener, parar
tragen|hat getragen|trug|llevar puesto, cargar
ziehen|hat gezogen|zog|tirar, mudarse
drücken|hat gedrückt|drückte|presionar
werfen|hat geworfen|warf|lanzar
fangen|hat gefangen|fing|atrapar
schneiden|hat geschnitten|schnitt|cortar
öffnen|hat geöffnet|öffnete|abrir
schließen|hat geschlossen|schloss|cerrar
bauen|hat gebaut|baute|construir
reparieren|hat repariert|reparierte|reparar
putzen|hat geputzt|putzte|limpiar
waschen|hat gewaschen|wusch|lavar
kochen|hat gekocht|kochte|cocinar
backen|hat gebacken|buk|hornear
essen|hat gegessen|aß|comer
trinken|hat getrunken|trank|beber
schmecken|hat geschmeckt|schmeckte|tener sabor
riechen|hat gerochen|roch|oler
schlafen|hat geschlafen|schlief|dormir
aufwachen|ist aufgewacht|wachte auf|despertarse
einschlafen|ist eingeschlafen|schlief ein|quedarse dormido
leben|hat gelebt|lebte|vivir
sterben|ist gestorben|starb|morir
geboren werden|ist geboren worden|wurde geboren|nacer
wachsen|ist gewachsen|wuchs|crecer
bleiben|ist geblieben|blieb|quedarse
wohnen|hat gewohnt|wohnte|vivir, residir
reisen|ist gereist|reiste|viajar
fahren|ist gefahren|fuhr|conducir, ir en vehículo
fliegen|ist geflogen|flog|volar
gehen|ist gegangen|ging|ir
kommen|ist gekommen|kam|venir
ankommen|ist angekommen|kam an|llegar
abfahren|ist abgefahren|fuhr ab|partir
rennen|ist gerannt|rannte|correr
laufen|ist gelaufen|lief|correr, caminar
spazieren|ist spaziert|spazierte|pasear
schwimmen|ist geschwommen|schwamm|nadar
tanzen|hat getanzt|tanzte|bailar
springen|ist gesprungen|sprang|saltar
klettern|ist geklettert|kletterte|trepar
sitzen|hat gesessen|saß|estar sentado
stehen|hat gestanden|stand|estar de pie
liegen|hat gelegen|lag|estar acostado/situado
setzen|hat gesetzt|setzte|poner, sentar
stellen|hat gestellt|stellte|colocar (vertical)
legen|hat gelegt|legte|colocar (horizontal)
treffen|hat getroffen|traf|encontrar
besuchen|hat besucht|besuchte|visitar
einladen|hat eingeladen|lud ein|invitar
heiraten|hat geheiratet|heiratete|casarse
lieben|hat geliebt|liebte|amar
hassen|hat gehasst|hasste|odiar
lachen|hat gelacht|lachte|reír
weinen|hat geweint|weinte|llorar
lächeln|hat gelächelt|lächelte|sonreír
fühlen|hat gefühlt|fühlte|sentir
hoffen|hat gehofft|hoffte|esperar
fürchten|hat gefürchtet|fürchtete|temer
ärgern|hat geärgert|ärgerte|molestar
freuen|hat gefreut|freute|alegrar
gefallen|hat gefallen|gefiel|gustar
gehören|hat gehört|gehörte|pertenecer
passen|hat gepasst|passte|quedar bien
brauchen|hat gebraucht|brauchte|necesitar
wählen|hat gewählt|wählte|elegir
ändern|hat geändert|änderte|cambiar
verbessern|hat verbessert|verbesserte|mejorar
entwickeln|hat entwickelt|entwickelte|desarrollar
schaffen|hat geschafft|schaffte|lograr, crear
erreichen|hat erreicht|erreichte|alcanzar
gewinnen|hat gewonnen|gewann|ganar
verlieren|hat verloren|verlor|perder
existieren|hat existiert|existierte|existir
entstehen|ist entstanden|entstand|surgir
passieren|ist passiert|passierte|pasar, suceder
gelten|hat gegolten|galt|ser válido
funktionieren|hat funktioniert|funktionierte|funcionar
verwenden|hat verwendet|verwendete|utilizar
kontrollieren|hat kontrolliert|kontrollierte|controlar
steuern|hat gesteuert|steuerte|dirigir, controlar
analysieren|hat analysiert|analysierte|analizar
testen|hat getestet|testete|probar
simulieren|hat simuliert|simulierte|simular
programmieren|hat programmiert|programmierte|programar
optimieren|hat optimiert|optimierte|optimizar
entwerfen|hat entworfen|entwarf|diseñar
installieren|hat installiert|installierte|instalar
verbinden|hat verbunden|verband|conectar
laden|hat geladen|lud|cargar
speichern|hat gespeichert|speicherte|guardar
löschen|hat gelöscht|löschte|eliminar
starten|hat gestartet|startete|iniciar
stoppen|hat gestoppt|stoppte|detener
warten|hat gewartet|wartete|esperar
rechnen|hat gerechnet|rechnete|calcular
messen|hat gemessen|maß|medir
zählen|hat gezählt|zählte|contar
vergleichen|hat verglichen|verglich|comparar
untersuchen|hat untersucht|untersuchte|examinar
zeichnen|hat gezeichnet|zeichnete|dibujar
malen|hat gemalt|malte|pintar
singen|hat gesungen|sang|cantar
spielen|hat gespielt|spielte|jugar
üben|hat geübt|übte|practicar
gewinnen|hat gewonnen|gewann|vencer
trainieren|hat trainiert|trainierte|entrenar
telefonieren|hat telefoniert|telefonierte|telefonear
fotografieren|hat fotografiert|fotografierte|fotografiar
feiern|hat gefeiert|feierte|celebrar
wünschen|hat gewünscht|wünschte|desear
gratulieren|hat gratuliert|gratulierte|felicitar
danken|hat gedankt|dankte|agradecer
entschuldigen|hat entschuldigt|entschuldigte|disculpar
erlauben|hat erlaubt|erlaubte|permitir
verbieten|hat verboten|verbot|prohibir
empfehlen|hat empfohlen|empfahl|recomendar
erwarten|hat erwartet|erwartete|esperar
akzeptieren|hat akzeptiert|akzeptierte|aceptar
ablehnen|hat abgelehnt|lehnte ab|rechazar
abholen|hat abgeholt|holte ab|ir a buscar
abschließen|hat abgeschlossen|schloss ab|terminar, cerrar
abschneiden|hat abgeschnitten|schnitt ab|cortar
ablehnen|hat abgelehnt|lehnte ab|rechazar
abnehmen|hat abgenommen|nahm ab|disminuir, bajar de peso
abreisen|ist abgereist|reiste ab|partir
absagen|hat abgesagt|sagte ab|cancelar
anstellen|hat angestellt|stellte an|encender, contratar
anrufen|hat angerufen|rief an|llamar por teléfono
ankommen|ist angekommen|kam an|llegar
anmachen|hat angemacht|machte an|encender
anmelden|hat angemeldet|meldete an|registrar
anprobieren|hat anprobiert|probierte an|probarse ropa
anschauen|hat angeschaut|schaute an|mirar
anziehen|hat angezogen|zog an|vestirse
arbeiten|hat gearbeitet|arbeitete|trabajar
ärgern|hat geärgert|ärgerte|molestar
atmen|hat geatmet|atmete|respirar
aufbauen|hat aufgebaut|baute auf|construir
aufhören|hat aufgehört|hörte auf|dejar de
aufmachen|hat aufgemacht|machte auf|abrir
aufräumen|hat aufgeräumt|räumte auf|ordenar
aufstehen|ist aufgestanden|stand auf|levantarse
ausfüllen|hat ausgefüllt|füllte aus|rellenar
ausgeben|hat ausgegeben|gab aus|gastar
ausgehen|ist ausgegangen|ging aus|salir
aussehen|hat ausgesehen|sah aus|parecer
auswählen|hat ausgewählt|wählte aus|seleccionar
backen|hat gebacken|buk|hornear
baden|hat gebadet|badete|bañarse
beantworten|hat beantwortet|beantwortete|responder
bedeuten|hat bedeutet|bedeutete|significar
beeilen|hat beeilt|beeilte|apresurar
beenden|hat beendet|beendete|finalizar
beginnen|hat begonnen|begann|comenzar
behalten|hat behalten|behielt|conservar
bekommen|hat bekommen|bekam|recibir
benutzen|hat benutzt|benutzte|usar
berichten|hat berichtet|berichtete|informar
berühren|hat berührt|berührte|tocar
beschreiben|hat beschrieben|beschrieb|describir
beschweren|hat beschwert|beschwerte|quejarse
besichtigen|hat besichtigt|besichtigte|visitar
bestätigen|hat bestätigt|bestätigte|confirmar
bestellen|hat bestellt|bestellte|ordenar
besuchen|hat besucht|besuchte|visitar
bezahlen|hat bezahlt|bezahlte|pagar
biegen|hat gebogen|bog|doblar
bitten|hat gebeten|bat|pedir
blasen|hat geblasen|blies|soplar
bleiben|ist geblieben|blieb|quedarse
brauchen|hat gebraucht|brauchte|necesitar
braten|hat gebraten|briet|freír
brechen|hat gebrochen|brach|romper
brennen|hat gebrannt|brannte|arder
bringen|hat gebracht|brachte|traer
buchen|hat gebucht|buchte|reservar
danken|hat gedankt|dankte|agradecer
dauern|hat gedauert|dauerte|durar
decken|hat gedeckt|deckte|cubrir
deuten|hat gedeutet|deutete|interpretar
dienen|hat gedient|diente|servir
diskutieren|hat diskutiert|diskutierte|discutir
drücken|hat gedrückt|drückte|presionar
duschen|hat geduscht|duschte|ducharse
einladen|hat eingeladen|lud ein|invitar
einpacken|hat eingepackt|packte ein|empacar
einschalten|hat eingeschaltet|schaltete ein|encender
einschlafen|ist eingeschlafen|schlief ein|dormirse
einsteigen|ist eingestiegen|stieg ein|subir a un vehículo
empfangen|hat empfangen|empfing|recibir
empfehlen|hat empfohlen|empfahl|recomendar
entscheiden|hat entschieden|entschied|decidir
entschuldigen|hat entschuldigt|entschuldigte|disculpar
entstehen|ist entstanden|entstand|surgir
entwickeln|hat entwickelt|entwickelte|desarrollar
erfahren|hat erfahren|erfuhr|enterarse
erfinden|hat erfunden|erfand|inventar
erinnern|hat erinnert|erinnerte|recordar
erkälten|hat erkältet|erkältete|resfriarse
erkennen|hat erkannt|erkannte|reconocer
erklären|hat erklärt|erklärte|explicar
erlauben|hat erlaubt|erlaubte|permitir
erleben|hat erlebt|erlebte|experimentar
erreichen|hat erreicht|erreichte|alcanzar
erzählen|hat erzählt|erzählte|contar
essen|hat gegessen|aß|comer
fahren|ist gefahren|fuhr|conducir
fallen|ist gefallen|fiel|caer
fangen|hat gefangen|fing|atrapar
fehlen|hat gefehlt|fehlte|faltar
feiern|hat gefeiert|feierte|celebrar
fernsehen|hat ferngesehen|sah fern|ver televisión
finden|hat gefunden|fand|encontrar
fliegen|ist geflogen|flog|volar
flüstern|hat geflüstert|flüsterte|susurrar
folgen|ist gefolgt|folgte|seguir
fordern|hat gefordert|forderte|exigir
fotografieren|hat fotografiert|fotografierte|fotografiar
fragen|hat gefragt|fragte|preguntar
fühlen|hat gefühlt|fühlte|sentir
füllen|hat gefüllt|füllte|llenar
funktionieren|hat funktioniert|funktionierte|funcionar
führen|hat geführt|führte|dirigir
geben|hat gegeben|gab|dar
gefallen|hat gefallen|gefiel|gustar
gehen|ist gegangen|ging|ir
gehören|hat gehört|gehörte|pertenecer
gewinnen|hat gewonnen|gewann|ganar
gießen|hat gegossen|goss|regar
glauben|hat geglaubt|glaubte|creer
gratulieren|hat gratuliert|gratulierte|felicitar
grillen|hat gegrillt|grillte|asar
gründen|hat gegründet|gründete|fundar
haben|hat gehabt|hatte|tener
halten|hat gehalten|hielt|sostener
handeln|hat gehandelt|handelte|actuar
hassen|hat gehasst|hasste|odiar
heiraten|hat geheiratet|heiratete|casarse
heißen|hat geheißen|hieß|llamarse
helfen|hat geholfen|half|ayudar
herstellen|hat hergestellt|stellte her|fabricar
holen|hat geholt|holte|buscar
hören|hat gehört|hörte|escuchar
husten|hat gehustet|hustete|toser
informieren|hat informiert|informierte|informar
installieren|hat installiert|installierte|instalar
interessieren|hat interessiert|interessierte|interesar
kaufen|hat gekauft|kaufte|comprar
kennenlernen|hat kennengelernt|lernte kennen|conocer
klären|hat geklärt|klärte|aclarar
kleben|hat geklebt|klebte|pegar
klingeln|hat geklingelt|klingelte|sonar
kochen|hat gekocht|kochte|cocinar
kommen|ist gekommen|kam|venir
kontrollieren|hat kontrolliert|kontrollierte|controlar
kosten|hat gekostet|kostete|costar
kündigen|hat gekündigt|kündigte|renunciar
lachen|hat gelacht|lachte|reír
landen|ist gelandet|landete|aterrizar
laufen|ist gelaufen|lief|correr
leben|hat gelebt|lebte|vivir
legen|hat gelegt|legte|poner acostado
leihen|hat geliehen|lieh|prestar
lernen|hat gelernt|lernte|aprender
lesen|hat gelesen|las|leer
lieben|hat geliebt|liebte|amar
liegen|hat gelegen|lag|estar acostado
lügen|hat gelogen|log|mentir
machen|hat gemacht|machte|hacer
malen|hat gemalt|malte|pintar
merken|hat gemerkt|merkte|notar
mieten|hat gemietet|mietete|arrendar
missverstehen|hat missverstanden|missverstand|malentender
mitbringen|hat mitgebracht|brachte mit|traer consigo
mitkommen|ist mitgekommen|kam mit|venir con
mögen|hat gemocht|mochte|gustar
montieren|hat montiert|montierte|montar
müssen|hat gemusst|musste|tener que
nehmen|hat genommen|nahm|tomar
nennen|hat genannt|nannte|nombrar
nutzen|hat genutzt|nutzte|aprovechar
öffnen|hat geöffnet|öffnete|abrir
organisieren|hat organisiert|organisierte|organizar
packen|hat gepackt|packte|empacar
passen|hat gepasst|passte|quedar bien
passieren|ist passiert|passierte|suceder
planen|hat geplant|plante|planear
prüfen|hat geprüft|prüfte|revisar
putzen|hat geputzt|putzte|limpiar
rauchen|hat geraucht|rauchte|fumar
rechnen|hat gerechnet|rechnete|calcular
reden|hat geredet|redete|hablar
regnen|hat geregnet|regnete|llover
reinigen|hat gereinigt|reinigte|limpiar
reisen|ist gereist|reiste|viajar
reiten|ist geritten|ritt|montar a caballo
rennen|ist gerannt|rannte|correr
reparieren|hat repariert|reparierte|reparar
reservieren|hat reserviert|reservierte|reservar
retten|hat gerettet|rettete|rescatar
riechen|hat gerochen|roch|oler
rufen|hat gerufen|rief|llamar
sammeln|hat gesammelt|sammelte|coleccionar
schaden|hat geschadet|schadete|dañar
schaffen|hat geschafft|schaffte|lograr
schalten|hat geschaltet|schaltete|cambiar, activar
schenken|hat geschenkt|schenkte|regalar
schicken|hat geschickt|schickte|enviar
schlafen|hat geschlafen|schlief|dormir
schlagen|hat geschlagen|schlug|golpear
schließen|hat geschlossen|schloss|cerrar
schmecken|hat geschmeckt|schmeckte|tener sabor
schmelzen|ist geschmolzen|schmolz|derretirse
schneiden|hat geschnitten|schnitt|cortar
schneien|hat geschneit|schneite|nevar
schreiben|hat geschrieben|schrieb|escribir
schreien|hat geschrien|schrie|gritar
schützen|hat geschützt|schützte|proteger
schwimmen|ist geschwommen|schwamm|nadar
sehen|hat gesehen|sah|ver
sein|ist gewesen|war|ser, estar
senden|hat gesendet|sendete|enviar
setzen|hat gesetzt|setzte|sentar
singen|hat gesungen|sang|cantar
sinken|ist gesunken|sank|hundirse
sitzen|hat gesessen|saß|estar sentado
spielen|hat gespielt|spielte|jugar
sprechen|hat gesprochen|sprach|hablar
springen|ist gesprungen|sprang|saltar
spülen|hat gespült|spülte|enjuagar
starten|hat gestartet|startete|comenzar
steigen|ist gestiegen|stieg|subir
stellen|hat gestellt|stellte|poner de pie
sterben|ist gestorben|starb|morir
stimmen|hat gestimmt|stimmte|estar correcto
stören|hat gestört|störte|molestar
studieren|hat studiert|studierte|estudiar
suchen|hat gesucht|suchte|buscar
tanzen|hat getanzt|tanzte|bailar
teilen|hat geteilt|teilte|dividir
telefonieren|hat telefoniert|telefonierte|telefonear
testen|hat getestet|testete|probar
tragen|hat getragen|trug|llevar
trainieren|hat trainiert|trainierte|entrenar
treffen|hat getroffen|traf|encontrar
trennen|hat getrennt|trennte|separar
trinken|hat getrunken|trank|beber
tun|hat getan|tat|hacer
übernachten|hat übernachtet|übernachtete|pasar la noche
übersetzen|hat übersetzt|übersetzte|traducir
umziehen|ist umgezogen|zog um|mudarse
unterschreiben|hat unterschrieben|unterschrieb|firmar
unternehmen|hat unternommen|unternahm|emprender
unterrichten|hat unterrichtet|unterrichtete|enseñar
verbessern|hat verbessert|verbesserte|mejorar
verbieten|hat verboten|verbot|prohibir
verbinden|hat verbunden|verband|conectar
verdienen|hat verdient|verdiente|ganar dinero
vergessen|hat vergessen|vergaß|olvidar
vergleichen|hat verglichen|verglich|comparar
verkaufen|hat verkauft|verkaufte|vender
verlieren|hat verloren|verlor|perder
vermeiden|hat vermieden|vermied|evitar
vermieten|hat vermietet|vermietete|arrendar
verpassen|hat verpasst|verpasste|perder (bus, oportunidad)
versuchen|hat versucht|versuchte|intentar
verstehen|hat verstanden|verstand|entender
verteilen|hat verteilt|verteilte|distribuir
vertrauen|hat vertraut|vertraute|confiar
verwenden|hat verwendet|verwendete|utilizar
vorbereiten|hat vorbereitet|bereitete vor|preparar
vorstellen|hat vorgestellt|stellte vor|presentar
wachsen|ist gewachsen|wuchs|crecer
wählen|hat gewählt|wählte|elegir
warten|hat gewartet|wartete|esperar
waschen|hat gewaschen|wusch|lavar
wechseln|hat gewechselt|wechselte|cambiar
wecken|hat geweckt|weckte|despertar a alguien
weinen|hat geweint|weinte|llorar
werden|ist geworden|wurde|convertirse
werfen|hat geworfen|warf|lanzar
wiederholen|hat wiederholt|wiederholte|repetir
wissen|hat gewusst|wusste|saber
wohnen|hat gewohnt|wohnte|vivir
wollen|hat gewollt|wollte|querer
wünschen|hat gewünscht|wünschte|desear
zahlen|hat gezahlt|zahlte|pagar
zeichnen|hat gezeichnet|zeichnete|dibujar
zeigen|hat gezeigt|zeigte|mostrar
zerbrechen|hat zerbrochen|zerbrach|romperse
ziehen|hat gezogen|zog|tirar
zuhören|hat zugehört|hörte zu|escuchar atentamente
zumachen|hat zugemacht|machte zu|cerrar
zurückkommen|ist zurückgekommen|kam zurück|volver
zusammenarbeiten|hat zusammengearbeitet|arbeitete zusammen|colaborar
zustimmen|hat zugestimmt|stimmte zu|estar de acuerdo
zweifeln|hat gezweifelt|zweifelte|dudar
`;

// Formato: Artículo Palabra | Español
const rawWords = `
der Mann|el hombre
die Frau|la mujer
das Kind|el niño
das Baby|el bebé
der Junge|el niño, muchacho
das Mädchen|la niña
der Mensch|el ser humano
die Person|la persona
der Freund|el amigo
die Freundin|la amiga
der Vater|el padre
die Mutter|la madre
der Bruder|el hermano
die Schwester|la hermana
der Sohn|el hijo
die Tochter|la hija
die Familie|la familia
der Onkel|el tío
die Tante|la tía
der Cousin|el primo
die Cousine|la prima
die Eltern|los padres
die Großeltern|los abuelos
der Großvater|el abuelo
die Großmutter|la abuela
der Nachbar|el vecino
die Liebe|el amor
die Ehe|el matrimonio
der Name|el nombre
das Alter|la edad
das Leben|la vida
der Tod|la muerte
die Zeit|el tiempo
der Tag|el día
die Nacht|la noche
der Morgen|la mañana
der Abend|la tarde, noche
die Stunde|la hora
die Minute|el minuto
die Sekunde|el segundo
die Woche|la semana
das Wochenende|el fin de semana
der Monat|el mes
das Jahr|el año
die Vergangenheit|el pasado
die Zukunft|el futuro
die Gegenwart|el presente
die Welt|el mundo
das Land|el país
die Stadt|la ciudad
das Dorf|el pueblo
die Straße|la calle
der Weg|el camino
der Platz|la plaza, lugar
das Haus|la casa
die Wohnung|el departamento
das Zimmer|la habitación
die Küche|la cocina
das Bad|el baño
das Schlafzimmer|el dormitorio
das Wohnzimmer|la sala de estar
die Tür|la puerta
das Fenster|la ventana
der Tisch|la mesa
der Stuhl|la silla
das Bett|la cama
der Schrank|el armario
die Lampe|la lámpara
der Boden|el suelo
das Dach|el techo
der Garten|el jardín
die Schule|la escuela
der Schüler|el alumno
der Lehrer|el profesor
die Lehrerin|la profesora
der Student|el estudiante universitario
die Universität|la universidad
das Studium|los estudios universitarios
das Buch|el libro
das Heft|el cuaderno
der Stift|el lápiz, bolígrafo
der Text|el texto
das Wort|la palabra
der Satz|la frase
die Sprache|el idioma
die Frage|la pregunta
die Antwort|la respuesta
das Beispiel|el ejemplo
die Aufgabe|la tarea
das Problem|el problema
die Lösung|la solución
die Arbeit|el trabajo
der Beruf|la profesión
die Firma|la empresa
das Unternehmen|la empresa
der Chef|el jefe
der Mitarbeiter|el empleado
der Kunde|el cliente
das Büro|la oficina
das Projekt|el proyecto
die Industrie|la industria
der Markt|el mercado
der Preis|el precio
das Geld|el dinero
die Rechnung|la factura
die Bank|el banco
das Produkt|el producto
die Produktion|la producción
die Qualität|la calidad
das Material|el material
die Maschine|la máquina
das Werkzeug|la herramienta
die Technologie|la tecnología
das System|el sistema
die Daten|los datos
das Netzwerk|la red
der Computer|el ordenador
das Programm|el programa
das Internet|internet
die Software|el software
die Hardware|el hardware
der Algorithmus|el algoritmo
die Analyse|el análisis
die Logistik|la logística
die Wartung|el mantenimiento
die Steuerung|el control
das Modell|el modelo
der Fehler|el error
das Risiko|el riesgo
das Management|la gestión
die Entwicklung|el desarrollo
die Erfahrung|la experiencia
die Möglichkeit|la posibilidad
die Gesellschaft|la sociedad
der Staat|el estado
das Recht|el derecho
die Regel|la regla
der Grund|la razón
die Idee|la idea
das Ziel|la meta
der Sinn|el sentido
die Form|la forma
die Art|el tipo, la forma
der Bereich|el área
das Ergebnis|el resultado
das Bild|la imagen
die Geschichte|la historia
das Wasser|el agua
das Brot|el pan
die Milch|la leche
der Kaffee|el café
der Tee|el té
das Bier|la cerveza
der Wein|el vino
das Essen|la comida
das Frühstück|el desayuno
das Mittagessen|el almuerzo
das Abendessen|la cena
der Apfel|la manzana
die Banane|el plátano
die Orange|la naranja
das Gemüse|las verduras
das Fleisch|la carne
der Fisch|el pescado
das Ei|el huevo
der Zucker|el azúcar
das Salz|la sal
der Pfeffer|la pimienta
das Messer|el cuchillo
die Gabel|el tenedor
der Löffel|la cuchara
der Teller|el plato
das Glas|el vaso
die Flasche|la botella
die Kleidung|la ropa
das Hemd|la camisa
die Hose|el pantalón
das Kleid|el vestido
die Jacke|la chaqueta
der Schuh|el zapato
die Tasche|la bolsa
die Uhr|el reloj
die Brille|los lentes
der Körper|el cuerpo
der Kopf|la cabeza
das Auge|el ojo
das Ohr|la oreja
die Nase|la nariz
der Mund|la boca
der Zahn|el diente
die Hand|la mano
der Arm|el brazo
das Bein|la pierna
der Fuß|el pie
das Herz|el corazón
der Rücken|la espalda
die Gesundheit|la salud
der Arzt|el médico
das Krankenhaus|el hospital
die Medizin|la medicina
die Krankheit|la enfermedad
der Schmerz|el dolor
das Wetter|el clima
die Sonne|el sol
der Regen|la lluvia
der Schnee|la nieve
der Wind|el viento
die Wolke|la nube
der Himmel|el cielo
das Feuer|el fuego
die Erde|la tierra
der Baum|el árbol
die Blume|la flor
der Hund|el perro
die Katze|el gato
das Tier|el animal
das Auto|el automóvil
der Bus|el autobús
der Zug|el tren
das Fahrrad|la bicicleta
das Flugzeug|el avión
die Reise|el viaje
der Urlaub|las vacaciones
der Bahnhof|la estación de tren
der Flughafen|el aeropuerto
die Musik|la música
das Lied|la canción
der Film|la película
das Spiel|el juego
der Sport|el deporte
die Kunst|el arte
das Foto|la foto
die Zeitung|el periódico
die Nachricht|la noticia
der Fernseher|el televisor
die Natur|la naturaleza
der Berg|la montaña
der Fluss|el río
das Meer|el mar
der Strand|la playa
der Wald|el bosque
die Farbe|el color
rot|rojo
blau|azul
grün|verde
gelb|amarillo
schwarz|negro
weiß|blanco
groß|grande
klein|pequeño
gut|bueno
schlecht|malo
neu|nuevo
alt|viejo
jung|joven
schnell|rápido
langsam|lento
schön|bonito
wichtig|importante
einfach|fácil
schwer|difícil, pesado
richtig|correcto
falsch|incorrecto
warm|caliente
kalt|frío
offen|abierto
geschlossen|cerrado
stark|fuerte
schwach|débil
hell|claro, brillante
dunkel|oscuro
früh|temprano
spät|tarde
nah|cerca
weit|lejos
immer|siempre
nie|nunca
oft|a menudo
manchmal|a veces
heute|hoy
gestern|ayer
morgen|mañana
jetzt|ahora
hier|aquí
dort|allá
oben|arriba
unten|abajo
links|izquierda
rechts|derecha
ja|sí
nein|no
bitte|por favor
danke|gracias
hallo|hola
tschüss|adiós
der Bahnhof|la estación de tren
der Flughafen|el aeropuerto
die Haltestelle|la parada
das Ticket|el billete
die Fahrkarte|el pasaje
der Fahrer|el conductor
die Reise|el viaje
der Urlaub|las vacaciones
der Koffer|la maleta
das Hotel|el hotel
das Restaurant|el restaurante
das Menü|el menú
die Suppe|la sopa
der Salat|la ensalada
die Kartoffel|la papa
der Reis|el arroz
die Nudel|la pasta
das Hähnchen|el pollo
das Schwein|el cerdo
das Rindfleisch|la carne de vacuno
das Obst|la fruta
die Traube|la uva
die Erdbeere|la frutilla
die Kirsche|la cereza
die Zitrone|el limón
die Butter|la mantequilla
der Käse|el queso
die Sahne|la crema
der Saft|el jugo
das Getränk|la bebida
der Hunger|el hambre
der Durst|la sed
der Kühlschrank|el refrigerador
der Herd|la cocina
der Ofen|el horno
die Pfanne|la sartén
der Topf|la olla
das Rezept|la receta
der Markt|el mercado
der Supermarkt|el supermercado
die Bäckerei|la panadería
die Apotheke|la farmacia
das Medikament|el medicamento
die Tablette|la tableta
das Rezept|la receta médica
die Versicherung|el seguro
die Polizei|la policía
der Polizist|el policía
die Feuerwehr|los bomberos
der Unfall|el accidente
die Gefahr|el peligro
die Sicherheit|la seguridad
das Gesetz|la ley
das Gericht|el tribunal
der Richter|el juez
der Anwalt|el abogado
das Gefängnis|la cárcel
der Krieg|la guerra
der Frieden|la paz
die Regierung|el gobierno
der Präsident|el presidente
die Wahl|la elección
die Politik|la política
die Nation|la nación
die Grenze|la frontera
die Kultur|la cultura
die Religion|la religión
die Tradition|la tradición
das Fest|la fiesta
der Geburtstag|el cumpleaños
die Hochzeit|la boda
das Geschenk|el regalo
die Einladung|la invitación
die Party|la fiesta
der Tanz|el baile
das Konzert|el concierto
das Theater|el teatro
das Museum|el museo
die Ausstellung|la exposición
der Künstler|el artista
die Malerei|la pintura
die Fotografie|la fotografía
die Kamera|la cámara
der Sänger|el cantante
die Band|la banda
das Instrument|el instrumento
die Gitarre|la guitarra
das Klavier|el piano
die Trommel|el tambor
der Fußball|el fútbol
das Training|el entrenamiento
der Spieler|el jugador
die Mannschaft|el equipo
der Sieg|la victoria
die Niederlage|la derrota
der Wettbewerb|la competencia
die Medaille|la medalla
das Schwimmbad|la piscina
das Fitnessstudio|el gimnasio
der Spaziergang|el paseo
die Natur|la naturaleza
der Park|el parque
der See|el lago
die Insel|la isla
die Wüste|el desierto
das Tal|el valle
der Vulkan|el volcán
der Stern|la estrella
der Mond|la luna
das Universum|el universo
die Wissenschaft|la ciencia
die Physik|la física
die Chemie|la química
die Biologie|la biología
die Mathematik|las matemáticas
die Formel|la fórmula
die Energie|la energía
die Kraft|la fuerza
die Temperatur|la temperatura
das Gewicht|el peso
die Länge|la longitud
die Geschwindigkeit|la velocidad
das Signal|la señal
der Strom|la corriente eléctrica
die Spannung|el voltaje
der Sensor|el sensor
die Automation|la automatización
die Fabrik|la fábrica
der Roboter|el robot
die Softwareentwicklung|el desarrollo de software
die Datenbank|la base de datos
der Server|el servidor
die Cloud|la nube
die Anwendung|la aplicación
das Passwort|la contraseña
die Datei|el archivo
der Ordner|la carpeta
der Bildschirm|la pantalla
die Tastatur|el teclado
die Maus|el mouse
das Kabel|el cable
die Verbindung|la conexión
das Gerät|el dispositivo
das Handy|el celular
das Telefon|el teléfono
der Anruf|la llamada
die Nachricht|el mensaje
die E-Mail|el correo electrónico
die Webseite|la página web
die Suchmaschine|el buscador
das Konto|la cuenta
der Benutzer|el usuario
die Anmeldung|el inicio de sesión
der Download|la descarga
der Upload|la subida
die Batterie|la batería
die Elektronik|la electrónica
das Signal|la señal
der Motor|el motor
das Ventil|la válvula
die Pumpe|la bomba
der Druck|la presión
die Leitung|la línea, tubería
der Schalter|el interruptor
die Spannung|la tensión
die Produktion|la producción
die Lieferung|la entrega
das Lager|el almacén
der Transport|el transporte
die Bestellung|el pedido
die Verpackung|el embalaje
der Vertrag|el contrato
die Karriere|la carrera profesional
das Gehalt|el salario
die Bewerbung|la postulación
das Interview|la entrevista
die Erfahrung|la experiencia
die Fähigkeit|la habilidad
das Wissen|el conocimiento
die Ausbildung|la formación
der Erfolg|el éxito
die Verantwortung|la responsabilidad
die Entscheidung|la decisión
die Strategie|la estrategia
die Planung|la planificación
die Kommunikation|la comunicación
die Information|la información
die Diskussion|la discusión
die Meinung|la opinión
das Verhalten|el comportamiento
die Beziehung|la relación
das Gefühl|el sentimiento
die Freude|la alegría
die Angst|el miedo
die Hoffnung|la esperanza
der Traum|el sueño
der Wunsch|el deseo
die Erinnerung|el recuerdo
die Aufmerksamkeit|la atención
die Konzentration|la concentración
die Motivation|la motivación
die Kreativität|la creatividad
die Geduld|la paciencia
der Respekt|el respeto
die Freiheit|la libertad
die Verantwortung|la responsabilidad
die Ehrlichkeit|la honestidad
die Freundlichkeit|la amabilidad
die Hilfe|la ayuda
die Unterstützung|el apoyo
die Zusammenarbeit|la colaboración
das Team|el equipo
die Führung|el liderazgo
die Organisation|la organización
die Struktur|la estructura
die Verbesserung|la mejora
die Innovation|la innovación
die Digitalisierung|la digitalización
die Nachhaltigkeit|la sostenibilidad
die Umwelt|el medio ambiente
die Verschmutzung|la contaminación
das Klima|el clima
die Krise|la crisis
die Pandemie|la pandemia
die Gesundheitspflege|el cuidado de la salud
der Patient|el paciente
die Untersuchung|el examen médico
die Operation|la operación
das Blut|la sangre
der Knochen|el hueso
die Haut|la piel
der Muskel|el músculo
der Hals|el cuello
die Schulter|el hombro
der Finger|el dedo
der Bauch|el estómago
das Gehirn|el cerebro
die Lunge|el pulmón
die Leber|el hígado
die Stimme|la voz
der Atem|la respiración
der Schlaf|el sueño
die Ernährung|la alimentación
der Zucker|el azúcar
das Fett|la grasa
das Vitamin|la vitamina
die Diät|la dieta
die Bewegung|el movimiento
die Übung|el ejercicio
der Kalender|el calendario
das Datum|la fecha
der Termin|la cita
die Uhrzeit|la hora exacta
die Saison|la temporada
der Frühling|la primavera
der Sommer|el verano
der Herbst|el otoño
der Winter|el invierno
Montag|lunes
Dienstag|martes
Mittwoch|miércoles
Donnerstag|jueves
Freitag|viernes
Samstag|sábado
Sonntag|domingo
eins|uno
zwei|dos
drei|tres
vier|cuatro
fünf|cinco
sechs|seis
sieben|siete
acht|ocho
neun|nueve
zehn|diez
hundert|cien
tausend|mil
erste|primero
zweite|segundo
dritte|tercero
viel|mucho
wenig|poco
mehr|más
weniger|menos
alle|todos
einige|algunos
anders|diferente
gleich|igual
bereit|listo
frei|libre
besetzt|ocupado
möglich|posible
unmöglich|imposible
sicher|seguro
gefährlich|peligroso
laut|ruidoso
leise|silencioso
sauber|limpio
schmutzig|sucio
billig|barato
teuer|caro
freundlich|amable
traurig|triste
glücklich|feliz
müde|cansado
krank|enfermo
gesund|saludable
hungrig|hambriento
durstig|sediento
stark|fuerte
schwach|débil
interessant|interesante
langweilig|aburrido
modern|moderno
klassisch|clásico
digital|digital
analog|análogo
lokal|local
global|global
öffentlich|público
privat|privado
wahr|verdadero
falsch|falso
wichtig|importante
notwendig|necesario
normal|normal
speziell|especial
direkt|directo
einfach|simple
kompliziert|complicado
zusammen|juntos
allein|solo
vielleicht|quizás
natürlich|naturalmente
wirklich|realmente
genau|exactamente
sofort|de inmediato
bald|pronto
bereits|ya
noch|todavía
fast|casi
auch|también
nur|solo
besonders|especialmente
deshalb|por eso
trotzdem|sin embargo
während|mientras
wegen|debido a
ohne|sin
mit|con
für|para
gegen|contra
zwischen|entre
unter|debajo
über|encima
vor|delante
hinter|detrás
neben|al lado
durch|a través
entlang|a lo largo
die Abteilung|el departamento
der Abschluss|la graduación, el cierre
die Absicht|la intención
die Abwechslung|la variedad
das Abenteuer|la aventura
die Abwesenheit|la ausencia
die Akademie|la academia
das Alphabet|el alfabeto
die Alternative|la alternativa
der Anfang|el comienzo
die Angewohnheit|el hábito
die Ankunft|la llegada
die Anstrengung|el esfuerzo
die Anzeige|el anuncio
die Atmosphäre|la atmósfera
der Auftrag|el encargo
der Aufenthalt|la estadía
die Aufnahme|la grabación
die Aussage|la afirmación
die Auswahl|la selección
die Auswirkung|el efecto
die Autobahn|la autopista
der Bäcker|el panadero
die Bäckerei|la panadería
der Balkon|el balcón
der Ball|la pelota
die Banane|el plátano
die Batterie|la batería
der Beamte|el funcionario
die Bedeutung|el significado
die Bedingung|la condición
der Bedarf|la necesidad
die Begegnung|el encuentro
die Begeisterung|el entusiasmo
die Behörde|la autoridad
die Beziehung|la relación
die Bibliothek|la biblioteca
der Bildschirm|la pantalla
die Bitte|la petición
der Blick|la mirada
die Blume|la flor
der Bleistift|el lápiz
der Boden|el suelo
die Botschaft|el mensaje, embajada
der Brief|la carta
die Brücke|el puente
die Brühe|el caldo
das Chaos|el caos
die Chance|la oportunidad
der Charakter|el carácter
der Chat|el chat
die Chefin|la jefa
der Chirurg|el cirujano
der Club|el club
die Creme|la crema
der Cousin|el primo
die Dame|la dama
die Datei|el archivo
die Decke|la manta, techo
die Demokratie|la democracia
der Dialog|el diálogo
der Dieb|el ladrón
die Diskussion|la discusión
die Distanz|la distancia
das Dokument|el documento
die Dose|la lata
das Drama|el drama
der Drucker|la impresora
die Dusche|la ducha
die Ecke|la esquina
die Ehefrau|la esposa
der Ehemann|el esposo
die Eigenschaft|la característica
die Einladung|la invitación
der Eindruck|la impresión
die Einführung|la introducción
die Einheit|la unidad
die Einkäufe|las compras
die Einstellung|la actitud, configuración
der Eintritt|la entrada
die Empfehlung|la recomendación
die Entfernung|la distancia
die Entschuldigung|la disculpa
die Ernährung|la alimentación
die Erinnerung|el recuerdo
die Erlaubnis|el permiso
die Ernte|la cosecha
die Erwärmung|el calentamiento
die Erziehung|la educación
das Experiment|el experimento
der Experte|el experto
die Fabrik|la fábrica
die Fähigkeit|la habilidad
die Fakultät|la facultad
der Fan|el fanático
die Fantasie|la fantasía
die Farbe|el color
das Fahrzeug|el vehículo
der Fehlercode|el código de error
das Fensterbrett|el alféizar
das Fernsehprogramm|la programación de TV
die Festplatte|el disco duro
das Fett|la grasa
die Figur|la figura
der Finger|el dedo
die Firma|la empresa
die Fläche|la superficie
die Flasche|la botella
der Flughafen|el aeropuerto
der Flur|el pasillo
die Flüssigkeit|el líquido
die Folge|la consecuencia
die Forschung|la investigación
der Fortschritt|el progreso
die Freiheit|la libertad
die Freizeit|el tiempo libre
der Fremde|el extranjero
die Freundschaft|la amistad
die Frucht|la fruta
die Führungskraft|el líder
die Funktion|la función
der Fußboden|el piso
die Garage|el garaje
der Gedanke|el pensamiento
das Gedicht|el poema
die Geduld|la paciencia
die Gefahr|el peligro
das Gegenteil|lo contrario
die Gegend|la zona
das Gehirn|el cerebro
das Geheimnis|el secreto
die Gelegenheit|la oportunidad
das Gemüse|la verdura
die Generation|la generación
das Geschenk|el regalo
das Gesetzbuch|el código legal
das Gespräch|la conversación
die Geschwindigkeit|la velocidad
das Gesicht|el rostro
die Gewohnheit|la costumbre
das Gewitter|la tormenta
das Glück|la suerte
der Grat|la cresta
die Grenze|la frontera
die Gruppe|el grupo
das Haar|el cabello
der Hafen|el puerto
der Hammer|el martillo
die Handlung|la acción
das Handtuch|la toalla
das Handy|el móvil
der Händler|el comerciante
die Harmonie|la armonía
das Herz|el corazón
die Heizung|la calefacción
der Held|el héroe
das Hemd|la camisa
der Herd|la cocina
die Herkunft|el origen
der Hinweis|la indicación
der Horizont|el horizonte
der Humor|el humor
die Hütte|la cabaña
die Identität|la identidad
die Industrieanlage|la planta industrial
die Informationstechnologie|la tecnología de información
der Ingenieur|el ingeniero
der Inhalt|el contenido
die Insel|la isla
die Intelligenz|la inteligencia
das Interview|la entrevista
der Kaffeeautomat|la máquina de café
der Kalender|el calendario
die Kampagne|la campaña
der Kanal|el canal
die Kapazität|la capacidad
die Karriere|la carrera profesional
die Kategorie|la categoría
der Keller|el sótano
die Kenntnis|el conocimiento
der Kern|el núcleo
das Kilo|el kilo
die Kirche|la iglesia
die Klasse|la clase
das Klima|el clima
der Kofferraum|el maletero
der Kollege|el colega
die Kommunikation|la comunicación
die Kompetenz|la competencia
die Konkurrenz|la competencia
der Kontakt|el contacto
der Kontext|el contexto
die Kontrolle|el control
der Kopfsteinpflaster|el adoquín
die Kraftstoff|el combustible
der Kreis|el círculo
die Krise|la crisis
die Kritik|la crítica
die Küche|la cocina
der Kugelschreiber|el bolígrafo
der Kunde|el cliente
die Kündigung|el despido
die Kunst|el arte
die Kurve|la curva
das Labor|el laboratorio
der Laptop|el portátil
die Leidenschaft|la pasión
die Landwirtschaft|la agricultura
die Landschaft|el paisaje
die Laune|el humor
die Leitung|la dirección
die Lektion|la lección
die Liebe|el amor
die Lieferung|la entrega
die Liste|la lista
das Lokal|el local
die Lösung|la solución
die Luft|el aire
die Maschine|la máquina
die Mehrheit|la mayoría
die Meinung|la opinión
die Meldung|el aviso
die Menge|la cantidad
das Messer|el cuchillo
die Methode|el método
das Mikrofon|el micrófono
die Mitte|el centro
das Mittel|el medio
die Mode|la moda
der Monitor|el monitor
die Motivation|la motivación
der Motor|el motor
die Münze|la moneda
das Museum|el museo
die Musikrichtung|el género musical
die Nachrichtensendung|el noticiero
die Nachfrage|la demanda
das Nahrungsmittel|el alimento
die Nähe|la cercanía
der Nebel|la neblina
die Neugier|la curiosidad
das Niveau|el nivel
die Note|la nota
die Nutzung|el uso
das Objekt|el objeto
die Oberfläche|la superficie
die Öffentlichkeit|el público
die Öffnung|la apertura
die Organisation|la organización
der Ortsteil|el barrio
die Packung|el paquete
die Partnerschaft|la asociación
die Pause|la pausa
die Persönlichkeit|la personalidad
die Pflanze|la planta
die Pflicht|el deber
das Publikum|el público
der Punkt|el punto
die Qualifikation|la cualificación
die Quelle|la fuente
das Radio|la radio
der Rand|el borde
die Realität|la realidad
der Reifen|el neumático
die Reinigung|la limpieza
der Reichtum|la riqueza
die Reihe|la fila
die Richtung|la dirección
der Ring|el anillo
die Rolle|el rol
der Rucksack|la mochila
die Rückkehr|el regreso
der Rücken|la espalda
die Ruhe|la tranquilidad
der Saal|el salón
die Sammlung|la colección
der Sand|la arena
der Schatten|la sombra
die Schicht|el turno, capa
das Schild|el letrero
der Schirm|el paraguas
die Schlange|la serpiente, fila
der Schlüssel|la llave
der Schmerz|el dolor
die Schnecke|el caracol
die Schrift|la escritura
der Schritt|el paso
der Schutz|la protección
die Schwierigkeit|la dificultad
die Sehenswürdigkeit|el lugar turístico
die Sicherheit|la seguridad
die Situation|la situación
die Socke|el calcetín
die Software|el software
die Spannung|la tensión
die Speisekarte|la carta del restaurante
die Spiegelung|el reflejo
die Spracheinstellung|la configuración de idioma
die Stimmung|el ambiente, estado de ánimo
die Stärke|la fortaleza
die Station|la estación
die Statistik|la estadística
die Steckdose|el enchufe
der Stern|la estrella
die Steuer|el impuesto
die Stimme|la voz
die Störung|la avería
die Strecke|la ruta
die Struktur|la estructura
die Studie|el estudio
die Stufe|el nivel
der Sturm|la tormenta
die Suche|la búsqueda
der Support|el soporte
das Symbol|el símbolo
die Sympathie|la simpatía
das Talent|el talento
die Tatsache|el hecho
die Tätigkeit|la actividad
die Technik|la técnica
der Teil|la parte
der Teilnehmer|el participante
die Temperatur|la temperatura
der Teppich|la alfombra
der Terminplan|el cronograma
die Theorie|la teoría
das Thema|el tema
die Tradition|la tradición
der Traum|el sueño
die Trennung|la separación
die Universität|la universidad
die Ursache|la causa
die Unterhaltung|la entretención
die Umgebung|el entorno
die Umsetzung|la implementación
die Unterkunft|el alojamiento
die Unterhaltungselektronik|la electrónica de consumo
die Veränderung|el cambio
die Verantwortung|la responsabilidad
die Verbindung|la conexión
das Verhalten|el comportamiento
das Verhältnis|la relación
die Verhandlung|la negociación
die Verpackung|el embalaje
der Versuch|el intento
die Version|la versión
die Versorgung|el suministro
der Vertragspartner|la contraparte contractual
die Verwaltung|la administración
die Voraussetzung|el requisito
die Vorstellung|la presentación
die Wahlkabine|la cabina de votación
die Wahrnehmung|la percepción
die Wand|la pared
die Warnung|la advertencia
das Werkzeug|la herramienta
der Wettbewerb|la competencia
das WLAN|el wifi
die Wolke|la nube
die Werkstatt|el taller
die Wirkung|el efecto
die Wissenschaftlerin|la científica
der Wunschzettel|la lista de deseos
die Wurzel|la raíz
die Zahlung|el pago
die Zeichnung|el dibujo
die Zeitungsausgabe|la edición del periódico
die Zentralbank|el banco central
die Zeremonie|la ceremonia
die Zigarette|el cigarrillo
das Zubehör|el accesorio
der Zuschauer|el espectador
der Zustand|el estado
die Zufriedenheit|la satisfacción
die Zukunftstechnologie|la tecnología del futuro
die Zusammenarbeit|la colaboración
die Zustimmung|la aprobación
`;

// Procesador de texto a Base de Datos de Objetos
const dbVerbs = rawVerbs.split('\n').map(l => l.trim()).filter(l => l.includes('|')).map((line, i) => {
  const parts = line.split('|');
  return { id: 'v' + i, inf: parts[0].trim(), perf: parts[1].trim(), prat: parts[2].trim(), es: parts[3].trim() };
});

const dbWords = rawWords.split('\n').map(l => l.trim()).filter(l => l.includes('|')).map((line, i) => {
  const parts = line.split('|');
  return { id: 'w' + i, de: parts[0].trim(), es: parts[1].trim() };
});


// ==========================================
// LÓGICA SPACED REPETITION (SRS) CON COOLDOWN
// ==========================================

let currentCard = { verb: null, word: null };
let isFlipped = { verb: false, word: false };

// SISTEMA DE ENFRIAMIENTO: Recuerda las últimas 5 tarjetas vistas
let recentCards = { verb: [], word: [] }; 
const COOLDOWN_STEPS = 10; 

function getProgress(type) {
  const data = localStorage.getItem(`srs_${type}`);
  return data ? JSON.parse(data) : {};
}

function saveProgress(type, data) {
  localStorage.setItem(`srs_${type}`, JSON.stringify(data));
}

function resetProgress(type) {
  if(confirm("¿Seguro que quieres reiniciar este mazo? Se borrará tu historial de repasos y todas volverán a ser tarjetas nuevas.")) {
    localStorage.removeItem(`srs_${type}`);
    recentCards[type] = []; // Reiniciamos también la memoria de enfriamiento
    loadNextCard(type);
  }
}

function calculateNextInterval(cardProgress, quality) {
  let ease = cardProgress.ease || 2.5;
  let interval = cardProgress.interval || 0;
  let reps = cardProgress.reps || 0;

  if (quality === 0) {
    reps = 0;
    interval = 0; 
    ease = Math.max(1.3, ease - 0.2);
  } else {
    if (reps === 0) interval = 1;      
    else if (reps === 1) interval = 3; 
    else interval = Math.round(interval * ease); 
    reps++;
  }

  const nextReview = Date.now() + (interval * 24 * 60 * 60 * 1000);
  return { ease, interval, reps, nextReview };
}

function loadNextCard(type) {
  const db = type === 'verb' ? dbVerbs : dbWords;
  const progress = getProgress(type);
  const now = Date.now();

  let queueNew = [];
  let queueReview = [];
  let queueLearning = [];

  // Clasificamos todas las tarjetas según su estado
  db.forEach(item => {
    const p = progress[item.id];
    if (!p) {
      queueNew.push(item);
    } else if (p.nextReview <= now) {
      if (p.interval === 0) queueLearning.push(item);
      else queueReview.push(item);
    }
  });

  document.getElementById(`${type}-stat-new`).innerText = queueNew.length;
  document.getElementById(`${type}-stat-learn`).innerText = queueLearning.length;
  document.getElementById(`${type}-stat-review`).innerText = queueReview.length;

  let nextItem = null;

  // FILTRO DE ENFRIAMIENTO: Excluimos las tarjetas que vimos recientemente
  const availLearn = queueLearning.filter(c => !recentCards[type].includes(c.id));
  const availReview = queueReview.filter(c => !recentCards[type].includes(c.id));
  const availNew = queueNew.filter(c => !recentCards[type].includes(c.id));

  // Prioridad 1: Aprender | Prioridad 2: Repasar | Prioridad 3: Nuevas
  if (availLearn.length > 0) {
    nextItem = availLearn[Math.floor(Math.random() * availLearn.length)];
  } else if (availReview.length > 0) {
    nextItem = availReview[Math.floor(Math.random() * availReview.length)];
  } else if (availNew.length > 0) {
    nextItem = availNew[Math.floor(Math.random() * availNew.length)];
  } else {
    // SALVAVIDAS: Si TODAS las tarjetas pendientes están en la memoria de enfriamiento 
    // Buscamos cuál fue la que viste hace MÁS tiempo dentro de esas recientes.
    for (let i = 0; i < recentCards[type].length; i++) {
        let id = recentCards[type][i];
        let found = queueLearning.find(c => c.id === id) || queueReview.find(c => c.id === id) || queueNew.find(c => c.id === id);
        if (found) {
            nextItem = found;
            break; // Rompemos el ciclo en la más antigua (índice 0)
        }
    }
  }

  const area = document.getElementById(`${type}-fc-area`);
  const emptyState = document.getElementById(`${type}-empty-state`);

  // Si a pesar de todo no hay siguiente tarjeta, mostramos el mensaje de fin
  if (!nextItem) {
    area.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  area.style.display = 'block';
  emptyState.style.display = 'none';

  const cardEl = document.getElementById(`${type}-card`);
  
  cardEl.style.transition = 'none';
  cardEl.classList.remove('is-flipped');
  isFlipped[type] = false;
  document.getElementById(`${type}-controls`).classList.remove('visible');

  currentCard[type] = nextItem;
  if (type === 'verb') {
    document.getElementById('verb-front-inf').innerText = nextItem.inf;
    document.getElementById('verb-back-es').innerText = nextItem.es;
    document.getElementById('verb-back-perf').innerText = nextItem.perf;
    document.getElementById('verb-back-prat').innerText = nextItem.prat;
  } else {
    document.getElementById('word-front-de').innerText = nextItem.de;
    document.getElementById('word-back-es').innerText = nextItem.es;
  }

  setTimeout(() => {
    cardEl.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)';
  }, 50);
}

function flipCard(type) {
  if (isFlipped[type] || !currentCard[type]) return; 
  
  isFlipped[type] = true;
  document.getElementById(`${type}-card`).classList.add('is-flipped');
  
  setTimeout(() => {
    document.getElementById(`${type}-controls`).classList.add('visible');
  }, 300);
}

function processAnswer(type, quality) {
  if (!currentCard[type]) return;

  const progress = getProgress(type);
  const cardId = currentCard[type].id;
  const currentP = progress[cardId] || { ease: 2.5, interval: 0, reps: 0 };
  
  progress[cardId] = calculateNextInterval(currentP, quality);
  saveProgress(type, progress);
  
  // ACTUALIZAR MEMORIA RECIENTE (SISTEMA DE ENFRIAMIENTO)
  recentCards[type] = recentCards[type].filter(id => id !== cardId); 
  recentCards[type].push(cardId);
  if (recentCards[type].length > COOLDOWN_STEPS) {
    recentCards[type].shift();
  }
  
  document.getElementById(`${type}-controls`).classList.remove('visible');
  setTimeout(() => {
    loadNextCard(type);
  }, 150);
}
