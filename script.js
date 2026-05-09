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
abbiegen|ist abgebogen|bog ab|doblar, girar
abbilden|hat abgebildet|bildete ab|representar
abdrucken|hat abgedruckt|druckte ab|imprimir
abfahren|ist abgefahren|fuhr ab|partir
abfliegen|ist abgeflogen|flog ab|despegar
abgeben|hat abgegeben|gab ab|entregar
abhängen|hat abgehangen|hing ab|depender
abheben|hat abgehoben|hob ab|despegar, retirar dinero
abreißen|hat abgerissen|riss ab|demoler
abschicken|hat abgeschickt|schickte ab|enviar
abschreiben|hat abgeschrieben|schrieb ab|copiar
absinken|ist abgesunken|sank ab|hundirse
abstimmen|hat abgestimmt|stimmte ab|votar
abwaschen|hat abgewaschen|wusch ab|lavar
achten|hat geachtet|achtete|prestar atención
addieren|hat addiert|addierte|sumar
ändern|hat geändert|änderte|cambiar
anerkennen|hat anerkannt|erkannte an|reconocer
anklicken|hat angeklickt|klickte an|hacer clic
annehmen|hat angenommen|nahm an|aceptar
anpassen|hat angepasst|passte an|adaptar
anstoßen|hat angestoßen|stieß an|brindar, empujar
anwenden|hat angewendet|wendete an|aplicar
anzeigen|hat angezeigt|zeigte an|mostrar
archivieren|hat archiviert|archivierte|archivar
assoziieren|hat assoziiert|assoziierte|asociar
ausbilden|hat ausgebildet|bildete aus|capacitar
ausbrechen|ist ausgebrochen|brach aus|escapar
ausdrucken|hat ausgedruckt|druckte aus|imprimir
ausfallen|ist ausgefallen|fiel aus|fallar, cancelarse
ausleihen|hat ausgeliehen|lieh aus|prestar
auslösen|hat ausgelöst|löste aus|desencadenar
ausprobieren|hat ausprobiert|probierte aus|probar
ausschalten|hat ausgeschaltet|schaltete aus|apagar
aussteigen|ist ausgestiegen|stieg aus|bajarse
ausstellen|hat ausgestellt|stellte aus|exhibir
ausziehen|hat ausgezogen|zog aus|mudarse, quitarse ropa
beachten|hat beachtet|beachtete|observar
beeinflussen|hat beeinflusst|beeinflusste|influir
beenden|hat beendet|beendete|terminar
befehlen|hat befohlen|befahl|ordenar
befinden|hat befunden|befand|encontrarse
befragen|hat befragt|befragte|interrogar
befreien|hat befreit|befreite|liberar
begegnen|ist begegnet|begegnete|encontrarse con
begeistern|hat begeistert|begeisterte|entusiasmar
begleiten|hat begleitet|begleitete|acompañar
behandeln|hat behandelt|behandelte|tratar
behindern|hat behindert|behinderte|obstaculizar
beitragen|hat beigetragen|trug bei|contribuir
bekämpfen|hat bekämpft|bekämpfte|combatir
beklagen|hat beklagt|beklagte|lamentar
beleuchten|hat beleuchtet|beleuchtete|iluminar
belohnen|hat belohnt|belohnte|recompensar
bemerken|hat bemerkt|bemerkte|notar
bemühen|hat bemüht|bemühte|esforzarse
benennen|hat benannt|benannte|nombrar
benötigen|hat benötigt|benötigte|requerir
beraten|hat beraten|beriet|asesorar
berechnen|hat berechnet|berechnete|calcular
bereitstellen|hat bereitgestellt|stellte bereit|proporcionar
beruhigen|hat beruhigt|beruhigte|calmar
beschädigen|hat beschädigt|beschädigte|dañar
beschäftigen|hat beschäftigt|beschäftigte|ocupar
beschließen|hat beschlossen|beschloss|decidir
beschützen|hat beschützt|beschützte|proteger
besiegen|hat besiegt|besiegte|derrotar
besitzen|hat besessen|besaß|poseer
besorgen|hat besorgt|besorgte|conseguir
bestimmen|hat bestimmt|bestimmte|determinar
beten|hat gebetet|betete|rezar
betonen|hat betont|betonte|destacar
betrachten|hat betrachtet|betrachtete|considerar
bewegen|hat bewegt|bewegte|mover
beweisen|hat bewiesen|bewies|demostrar
bewerten|hat bewertet|bewertete|evaluar
bewohnen|hat bewohnt|bewohnte|habitar
bezweifeln|hat bezweifelt|bezweifelte|dudar
bilden|hat gebildet|bildete|formar
binden|hat gebunden|band|atar
bremsen|hat gebremst|bremste|frenar
chatten|hat gechattet|chattete|chatear
dokumentieren|hat dokumentiert|dokumentierte|documentar
drehen|hat gedreht|drehte|girar
drohen|hat gedroht|drohte|amenazar
drucken|hat gedruckt|druckte|imprimir
durchführen|hat durchgeführt|führte durch|realizar
durchsuchen|hat durchsucht|durchsuchte|registrar
einführen|hat eingeführt|führte ein|introducir
einrichten|hat eingerichtet|richtete ein|configurar
einsammeln|hat eingesammelt|sammelte ein|recoger
einsparen|hat eingespart|sparte ein|ahorrar
einstellen|hat eingestellt|stellte ein|contratar, ajustar
eintragen|hat eingetragen|trug ein|registrar
empfinden|hat empfunden|empfand|sentir
entdecken|hat entdeckt|entdeckte|descubrir
entfernen|hat entfernt|entfernte|remover
entlassen|hat entlassen|entließ|despedir
entnehmen|hat entnommen|entnahm|extraer
entsorgen|hat entsorgt|entsorgte|desechar
entspannen|hat entspannt|entspannte|relajar
erfassen|hat erfasst|erfasste|registrar
erfüllen|hat erfüllt|erfüllte|cumplir
ergänzen|hat ergänzt|ergänzte|completar
erheben|hat erhoben|erhob|levantar
erhöhen|hat erhöht|erhöhte|aumentar
erledigen|hat erledigt|erledigte|resolver
ermöglichen|hat ermöglicht|ermöglichte|permitir
erneuern|hat erneuert|erneuerte|renovar
eröffnen|hat eröffnet|eröffnete|inaugurar
erschaffen|hat erschaffen|erschuf|crear
erschrecken|ist erschrocken|erschrak|asustarse
ersetzen|hat ersetzt|ersetzte|reemplazar
erwähnen|hat erwähnt|erwähnte|mencionar
erzwingen|hat erzwungen|erzwang|forzar
exportieren|hat exportiert|exportierte|exportar
filmen|hat gefilmt|filmte|filmar
finanzieren|hat finanziert|finanzierte|financiar
fördern|hat gefördert|förderte|promover
formatieren|hat formatiert|formatierte|formatear
frieren|hat gefroren|fror|congelarse
garantieren|hat garantiert|garantierte|garantizar
genehmigen|hat genehmigt|genehmigte|aprobar
genießen|hat genossen|genoss|disfrutar
gestalten|hat gestaltet|gestaltete|diseñar
graben|hat gegraben|grub|excavar
grüßen|hat gegrüßt|grüßte|saludar
handhaben|hat gehandhabt|handhabte|manejar
herunterladen|hat heruntergeladen|lud herunter|descargar
hervorrufen|hat hervorgerufen|rief hervor|provocar
hinzufügen|hat hinzugefügt|fügte hinzu|añadir
importieren|hat importiert|importierte|importar
informieren|hat informiert|informierte|informar
investieren|hat investiert|investierte|invertir
isolieren|hat isoliert|isolierte|aislar
jonglieren|hat jongliert|jonglierte|hacer malabares
kalkulieren|hat kalkuliert|kalkulierte|calcular
kapieren|hat kapiert|kapierte|entender
kennzeichnen|hat gekennzeichnet|kennzeichnete|marcar
klatschen|hat geklatscht|klatschte|aplaudir
kombinieren|hat kombiniert|kombinierte|combinar
kommentieren|hat kommentiert|kommentierte|comentar
kommunizieren|hat kommuniziert|kommunizierte|comunicar
konfigurieren|hat konfiguriert|konfigurierte|configurar
konstruieren|hat konstruiert|konstruierte|construir
kontaktieren|hat kontaktiert|kontaktierte|contactar
konzentrieren|hat konzentriert|konzentrierte|concentrar
korrigieren|hat korrigiert|korrigierte|corregir
kratzen|hat gekratzt|kratzte|rasguñar
kritisieren|hat kritisiert|kritisierte|criticar
kühlen|hat gekühlt|kühlte|enfriar
laden|hat geladen|lud|cargar
lagern|hat gelagert|lagerte|almacenar
läuten|hat geläutet|läutete|sonar
leiten|hat geleitet|leitete|dirigir
leisten|hat geleistet|leistete|realizar
liefern|hat geliefert|lieferte|entregar
lösen|hat gelöst|löste|resolver
markieren|hat markiert|markierte|marcar
maximieren|hat maximiert|maximierte|maximizar
mischen|hat gemischt|mischte|mezclar
moderieren|hat moderiert|moderierte|moderar
motivieren|hat motiviert|motivierte|motivar
nachdenken|hat nachgedacht|dachte nach|reflexionar
nachfragen|hat nachgefragt|fragte nach|consultar
nachweisen|hat nachgewiesen|wies nach|comprobar
navigieren|hat navigiert|navigierte|navegar
notieren|hat notiert|notierte|anotar
operieren|hat operiert|operierte|operar
optimieren|hat optimiert|optimierte|optimizar
ordnen|hat geordnet|ordnete|ordenar
parken|hat geparkt|parkte|estacionar
platzieren|hat platziert|platzierte|ubicar
posten|hat gepostet|postete|publicar
produzieren|hat produziert|produzierte|producir
programmieren|hat programmiert|programmierte|programar
protestieren|hat protestiert|protestierte|protestar
prüfen|hat geprüft|prüfte|examinar
publizieren|hat publiziert|publizierte|publicar
rasieren|hat rasiert|rasierte|afeitar
reagieren|hat reagiert|reagierte|reaccionar
realisieren|hat realisiert|realisierte|realizar
reduzieren|hat reduziert|reduzierte|reducir
registrieren|hat registriert|registrierte|registrar
regulieren|hat reguliert|regulierte|regular
retten|hat gerettet|rettete|salvar
sabotieren|hat sabotiert|sabotierte|sabotear
sammeln|hat gesammelt|sammelte|coleccionar
sichern|hat gesichert|sicherte|asegurar
simulieren|hat simuliert|simulierte|simular
sortieren|hat sortiert|sortierte|clasificar
speichern|hat gespeichert|speicherte|guardar
spenden|hat gespendet|spendete|donar
steigern|hat gesteigert|steigerte|incrementar
strukturieren|hat strukturiert|strukturierte|estructurar
subtrahieren|hat subtrahiert|subtrahierte|restar
transportieren|hat transportiert|transportierte|transportar
überprüfen|hat überprüft|überprüfte|verificar
überraschen|hat überrascht|überraschte|sorprender
übertragen|hat übertragen|übertrug|transferir
umarmen|hat umarmt|umarmte|abrazar
umsetzen|hat umgesetzt|setzte um|implementar
unterbrechen|hat unterbrochen|unterbrach|interrumpir
unterstützen|hat unterstützt|unterstützte|apoyar
updaten|hat upgedatet|updatete|actualizar
verändern|hat verändert|veränderte|modificar
verbrauchen|hat verbraucht|verbrauchte|consumir
verdoppeln|hat verdoppelt|verdoppelte|duplicar
vereinbaren|hat vereinbart|vereinbarte|acordar
vergrößern|hat vergrößert|vergrößerte|agrandar
verkleinern|hat verkleinert|verkleinerte|reducir
verladen|hat verladen|verlud|cargar mercancía
verlangen|hat verlangt|verlangte|exigir
veröffentlichen|hat veröffentlicht|veröffentlichte|publicar
verpacken|hat verpackt|verpackte|empaquetar
verschieben|hat verschoben|verschob|mover, posponer
verschicken|hat verschickt|verschickte|despachar
verschlüsseln|hat verschlüsselt|verschlüsselte|encriptar
versorgen|hat versorgt|versorgte|abastecer
vertreten|hat vertreten|vertrat|representar
verursachen|hat verursacht|verursachte|causar
verwalten|hat verwaltet|verwaltete|administrar
visualisieren|hat visualisiert|visualisierte|visualizar
vorhersagen|hat vorhergesagt|sagte vorher|predecir
warnen|hat gewarnt|warnte|advertir
wiederherstellen|hat wiederhergestellt|stellte wieder her|restaurar
winken|hat gewinkt|winkte|saludar con la mano
zählen|hat gezählt|zählte|contar
zerstören|hat zerstört|zerstörte|destruir
zitieren|hat zitiert|zitierte|citar
zuordnen|hat zugeordnet|ordnete zu|asignar
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
die Haltestelle|la parada
das Ticket|el billete
die Fahrkarte|el pasaje
der Fahrer|el conductor
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
der Supermarkt|el supermercado
die Bäckerei|la panadería
die Apotheke|la farmacia
das Medikament|el medicamento
die Tablette|la tableta
die Versicherung|el seguro
die Polizei|la policía
der Polizist|el policía
die Feuerwehr|los bomberos
der Unfall|el accidente
die Gefahr|el peligro
die Sicherheit|la seguridad
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
der Park|el parque
der See|el lago
die Insel|la isla
die Wüste|el desierto
das Tal|el valle
der Vulkan|el volcán
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
die E-Mail|el correo electrónico
die Webseite|la página web
die Suchmaschine|el buscador
das Konto|la cuenta
der Benutzer|el usuario
die Anmeldung|el inicio de sesión
der Download|la descarga
der Upload|la subida
die Elektronik|la electrónica
der Motor|el motor
das Ventil|la válvula
die Pumpe|la bomba
der Druck|la presión
die Leitung|la línea, tubería
der Schalter|el interruptor
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
das Gefühl|el sentimiento
die Freude|la alegría
die Angst|el miedo
die Hoffnung|la esperanza
der Traum|el sueño
der Wunsch|el deseo
die Erinnerung|el recuerdo
die Aufmerksamkeit|la atención
die Konzentration|la concentración
die Kreativität|la creatividad
die Geduld|la paciencia
der Respekt|el respeto
die Freiheit|la libertad
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
notwendig|necesario
normal|normal
speziell|especial
direkt|directo
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
die Batterie|la batería
der Beamte|el funcionario
die Bedeutung|el significado
die Bedingung|la condición
der Bedarf|la necesidad
die Begegnung|el encuentro
die Begeisterung|el entusiasmo
die Behörde|la autoridad
die Bibliothek|la biblioteca
die Bitte|la petición
der Blick|la mirada
der Bleistift|el lápiz
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
die Dame|la dama
die Decke|la manta, techo
die Demokratie|la democracia
der Dialog|el diálogo
der Dieb|el ladrón
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
der Eindruck|la impresión
die Einführung|la introducción
die Einheit|la unidad
die Einkäufe|las compras
die Einstellung|la actitud, configuración
der Eintritt|la entrada
die Empfehlung|la recomendación
die Entfernung|la distancia
die Entschuldigung|la disculpa
die Erlaubnis|el permiso
die Ernte|la cosecha
die Erwärmung|el calentamiento
die Erziehung|la educación
das Experiment|el experimento
der Experte|el experto
die Fakultät|la facultad
der Fan|el fanático
die Fantasie|la fantasía
das Fahrzeug|el vehículo
der Fehlercode|el código de error
das Fensterbrett|el alféizar
das Fernsehprogramm|la programación de TV
die Festplatte|el disco duro
die Figur|la figura
die Fläche|la superficie
der Flur|el pasillo
die Flüssigkeit|el líquido
die Folge|la consecuencia
die Forschung|la investigación
der Fortschritt|el progreso
die Freizeit|el tiempo libre
der Fremde|el extranjero
die Freundschaft|la amistad
die Frucht|la fruta
die Führungskraft|el líder
die Funktion|la función
der Fußboden|el piso
der Gedanke|el pensamiento
das Gedicht|el poema
das Gegenteil|lo contrario
die Gegend|la zona
das Geheimnis|el secreto
die Gelegenheit|la oportunidad
die Generation|la generación
das Gesetzbuch|el código legal
das Gespräch|la conversación
die Gewohnheit|la costumbre
das Glück|la suerte
der Grat|la cresta
die Heizung|la calefacción
der Held|el héroe
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
die Intelligenz|la inteligencia
der Kaffeeautomat|la máquina de café
die Kampagne|la campaña
der Kanal|el canal
die Kapazität|la capacidad
die Kategorie|la categoría
der Keller|el sótano
die Kenntnis|el conocimiento
der Kern|el núcleo
das Kilo|el kilo
die Kirche|la iglesia
die Klasse|la clase
der Kofferraum|el maletero
der Kollege|el colega
die Kompetenz|la competencia
die Konkurrenz|la competencia
der Kontakt|el contacto
der Kontext|el contexto
die Kontrolle|el control
der Kopfsteinpflaster|el adoquín
die Kraftstoff|el combustible
der Kreis|el círculo
die Kritik|la crítica
der Kugelschreiber|el bolígrafo
die Kündigung|el despido
die Kurve|la curva
das Labor|el laboratorio
der Laptop|el portátil
die Leidenschaft|la pasión
die Landwirtschaft|la agricultura
die Landschaft|el paisaje
die Laune|el humor
die Leitung|la dirección
die Lektion|la lección
die Lieferung|la entrega
die Liste|la lista
das Lokal|el local
die Luft|el aire
die Mehrheit|la mayoría
die Meldung|el aviso
die Menge|la cantidad
die Methode|el método
das Mikrofon|el micrófono
die Mitte|el centro
das Mittel|el medio
die Mode|la moda
der Monitor|el monitor
die Münze|la moneda
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
der Ortsteil|el barrio
die Packung|el paquete
die Partnerschaft|la asociación
die Pause|la pausa
die Persönlichkeit|la personalidad
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
die Schnecke|el caracol
die Schrift|la escritura
der Schritt|el paso
der Schutz|la protección
die Schwierigkeit|la dificultad
die Sehenswürdigkeit|el lugar turístico
die Situation|la situación
die Socke|el calcetín
die Speisekarte|la carta del restaurante
die Spiegelung|el reflejo
die Spracheinstellung|la configuración de idioma
die Stimmung|el ambiente, estado de ánimo
die Stärke|la fortaleza
die Station|la estación
die Statistik|la estadística
die Steuer|el impuesto
die Störung|la avería
die Strecke|la ruta
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
der Teppich|la alfombra
der Terminplan|el cronograma
die Theorie|la teoría
das Thema|el tema
die Trennung|la separación
die Ursache|la causa
die Umgebung|el entorno
die Umsetzung|la implementación
die Unterkunft|el alojamiento
die Unterhaltungselektronik|la electrónica de consumo
die Veränderung|el cambio
 das Verhältnis|la relación
die Verhandlung|la negociación
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
das WLAN|el wifi
die Wirkung|el efecto
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
die Zustimmung|la aprobación
der Abfall|la basura
das Abitur|la graduación escolar
die Abkürzung|la abreviación
die Abreise|la salida
die Absprache|el acuerdo
die Abstimmung|la votación
die Achse|el eje
die Aktivität|la actividad
der Alltag|la vida cotidiana
das Angebot|la oferta
die Angabe|la indicación
der Angriff|el ataque
die Ankündigung|el anuncio
der Anlass|el motivo
die Anweisung|la instrucción
der Antrag|la solicitud
der Anwohner|el residente
die Arbeitslosigkeit|el desempleo
die Architektur|la arquitectura
der Artikel|el artículo
der Arzttermin|la cita médica
die Aussicht|la vista
der Ausweis|el documento de identidad
die Autobatterie|la batería del auto
der Automat|la máquina automática
die Bar|el bar
der Baumarkt|la ferretería
die Bedienung|el servicio
die Bedrohung|la amenaza
der Beginn|el inicio
die Bekanntschaft|el conocido
die Belastung|la carga
die Belohnung|la recompensa
die Bemerkung|la observación
der Berufsschule|la escuela técnica
die Bescheinigung|el certificado
die Beschreibung|la descripción
die Beteiligung|la participación
die Beziehungskrise|la crisis de pareja
der Bildschirmrand|el borde de pantalla
die Bildung|la educación
die Birne|la pera
der Blickwinkel|el punto de vista
die Bohrmaschine|el taladro
der Brand|el incendio
die Bremse|el freno
die Broschüre|el folleto
die Bürste|el cepillo
der Campingplatz|el camping
der Charakterzug|el rasgo de carácter
die Cloudlösung|la solución en la nube
die Cola|la bebida cola
der Container|el contenedor
die Couch|el sofá
die Datenanalyse|el análisis de datos
die Datenmenge|el volumen de datos
die Debatte|el debate
das Detail|el detalle
die Direktion|la dirección
die Diskette|el disquete
die Dokumentation|la documentación
die Drohne|el dron
die Durchsage|el anuncio por altavoz
die Ehre|el honor
die Einzahlung|el depósito
die Eisenbahn|el ferrocarril
die Elektrizität|la electricidad
der Empfang|la recepción
die Energiequelle|la fuente de energía
die Enttäuschung|la decepción
die Entwicklungskosten|los costos de desarrollo
das Ereignis|el acontecimiento
die Ermäßigung|el descuento
die Eröffnung|la apertura
die Ersatzteile|los repuestos
die Fachkraft|el profesional especializado
der Fallschirm|el paracaídas
die Fernbedienung|el control remoto
die Feier|la celebración
das Feld|el campo
das Fensterglas|el vidrio de la ventana
der Fernsehsender|el canal de televisión
die Ferien|las vacaciones
die Finanzierung|la financiación
die Fitness|la condición física
die Fluggesellschaft|la aerolínea
die Forschungsergebnisse|los resultados de investigación
die Fortbildung|la capacitación
die Fotokamera|la cámara fotográfica
die Fragestellung|el planteamiento de la pregunta
die Freiwilligenarbeit|el voluntariado
die Frist|el plazo
das Frühstücksei|el huevo de desayuno
der Fußballspieler|el futbolista
die Garantie|la garantía
das Gebäude|el edificio
die Gebühr|la tarifa
das Gedächtnis|la memoria
der Gegner|el oponente
die Gemeinschaft|la comunidad
das Gemüsegericht|el plato de verduras
das Gewerbe|el negocio
das Gewissen|la conciencia
der Gipfel|la cima
das Glasfaserinternet|internet de fibra óptica
der Glaube|la fe
das Gleis|la vía del tren
das Glücksgefühl|la sensación de felicidad
die Goldmedaille|la medalla de oro
der Grenzübergang|el paso fronterizo
die Großstadt|la gran ciudad
die Grundschule|la escuela primaria
das Haarshampoo|el shampoo
der Handschuh|el guante
die Hardwarekomponente|el componente de hardware
das Haustier|la mascota
die Heizungskosten|los gastos de calefacción
die Herausforderung|el desafío
der Hintergrund|el fondo
das Hindernis|el obstáculo
der Hochschulabschluss|el título universitario
die Hoffnungslosigkeit|la desesperanza
das Huhn|la gallina
die Identifikation|la identificación
die Installation|la instalación
die Integration|la integración
das Interesse|el interés
das Inventar|el inventario
das Jahrzehnt|la década
der Journalismus|el periodismo
die Jugend|la juventud
der Kabelanschluss|la conexión por cable
die Kaffeemaschine|la cafetera
die Kameraeinstellung|la configuración de cámara
der Kapitalismus|el capitalismo
die Karrierechance|la oportunidad profesional
die Kasse|la caja registradora
die Kategorisierung|la categorización
der Kellerraum|el sótano
die Kennzeichnung|el etiquetado
das Kernkraftwerk|la central nuclear
die Kette|la cadena
das Keyboard|el teclado musical
die Kindheit|la infancia
der Kirchenchor|el coro de iglesia
die Klimaanlage|el aire acondicionado
die Klimaveränderung|el cambio climático
die Kneipe|el bar
die Konkurrenzfähigkeit|la competitividad
das Kontoauszug|el extracto bancario
die Kopfhörer|los audífonos
der Krankenwagen|la ambulancia
die Kreditkarte|la tarjeta de crédito
der Kühlschrankmagnet|el imán de refrigerador
die Kulturveranstaltung|el evento cultural
die Kündigungsfrist|el plazo de aviso
das Kunstwerk|la obra de arte
die Lagerhalle|la bodega
das Ladegerät|el cargador
die Lebensqualität|la calidad de vida
das Lebensmittelgeschäft|la tienda de alimentos
die Leistungsfähigkeit|el rendimiento
die Lernplattform|la plataforma de aprendizaje
die Lieferungskosten|los costos de envío
die Lieblingsmusik|la música favorita
die Logindaten|los datos de acceso
die Luftverschmutzung|la contaminación del aire
die Mannschaftskapitän|el capitán del equipo
die Marktanalyse|el análisis de mercado
die Maßnahme|la medida
das Mehl|la harina
die Meinungfreiheit|la libertad de opinión
die Menschenrechte|los derechos humanos
die Messe|la feria
die Mietwohnung|el departamento arrendado
die Minderheit|la minoría
das Missverständnis|el malentendido
die Mülltonne|el basurero
die Musikanlage|el equipo de música
die Muttersprache|la lengua materna
die Nachtschicht|el turno de noche
die Nahrung|el alimento
die Nebenkosten|los gastos comunes
die Netzwerkverbindung|la conexión de red
das Notebook|el notebook
die Notiz|la nota
die Notrufnummer|el número de emergencia
das Onlinebanking|la banca en línea
der Onlinekurs|el curso en línea
die Operationstechnik|la técnica operatoria
der Ordnername|el nombre de carpeta
die Organisationseinheit|la unidad organizativa
der Parkplatz|el estacionamiento
der Passagier|el pasajero
die Personalabteilung|el departamento de RRHH
die Perspektive|la perspectiva
die Pflichtaufgabe|la tarea obligatoria
die Plattform|la plataforma
die Polizeistation|la comisaría
die Position|la posición
die Präsentation|la presentación
der Praktikant|el practicante
die Pressekonferenz|la conferencia de prensa
die Produktionslinie|la línea de producción
die Programmierung|la programación
die Prüfung|el examen
die Qualitätssicherung|el aseguramiento de calidad
die Quittung|el recibo
der Rabatt|el descuento
die Rakete|el cohete
der Rasen|el césped
die Reaktion|la reacción
die Redaktion|la redacción
die Regierungspartei|el partido gobernante
die Reinigungskraft|el personal de limpieza
die Reparaturkosten|los costos de reparación
die Reservierung|la reserva
der Rest|el resto
die Revolution|la revolución
die Richtlinie|la directriz
der Ringfinger|el dedo anular
die Robotertechnik|la robótica
die Rückmeldung|la retroalimentación
die Rückseite|la parte trasera
die Rundfahrt|el tour
der Rucksacktourist|el mochilero
die Sache|el asunto
der Sachverhalt|los hechos
die Satellitenverbindung|la conexión satelital
die Schachtel|la caja
die Schätzung|la estimación
die Schichtarbeit|el trabajo por turnos
der Schinken|el jamón
die Schokolade|el chocolate
die Schranke|la barrera
die Schulbildung|la educación escolar
die Schüssel|el bol
die Selbstständigkeit|el trabajo independiente
die Sensortechnik|la tecnología de sensores
die Sitzung|la reunión
die Softwarelösung|la solución de software
der Spezialist|el especialista
die Spielkonsole|la consola de videojuegos
die Sportart|el deporte
die Sprachkenntnisse|los conocimientos de idioma
die Sprachschule|la escuela de idiomas
die Staatsangehörigkeit|la nacionalidad
die Steuererklärung|la declaración de impuestos
der Stoff|la tela
die Stromversorgung|el suministro eléctrico
die Supermarktkette|la cadena de supermercados
die Technologiebranche|la industria tecnológica
die Teilnehmerliste|la lista de participantes
die Tastaturbeleuchtung|la iluminación del teclado
die Teamarbeit|el trabajo en equipo
die Temperaturmessung|la medición de temperatura
die Touristenattraktion|la atracción turística
die Trainingsmethode|el método de entrenamiento
die Überschrift|el título
die Überwachungskamera|la cámara de vigilancia
die Unterkunftskosten|los gastos de alojamiento
die Unternehmensstrategie|la estrategia empresarial
die Umweltverschmutzung|la contaminación ambiental
die Unfallversicherung|el seguro de accidentes
die Universitätsklinik|la clínica universitaria
die Urlaubsreise|el viaje de vacaciones
die Useroberfläche|la interfaz de usuario
die Verkaufsstrategie|la estrategia de ventas
die Verkehrsampel|el semáforo
die Verkehrsregel|la norma de tránsito
die Verletzung|la lesión
die Versammlung|la reunión
die Versicherungsgesellschaft|la compañía de seguros
die Versuchsperson|el sujeto de prueba
die Videoaufnahme|la grabación de video
die Videokonferenz|la videoconferencia
die Vogelart|la especie de ave
die Vorhersage|el pronóstico
die Vorlesung|la clase magistral
die Warteschlange|la fila de espera
die Waschmaschine|la lavadora
die Weiterbildung|la educación continua
die Weltmeisterschaft|el campeonato mundial
die Werbung|la publicidad
die Wettervorhersage|el pronóstico del tiempo
die Wiederholung|la repetición
die Wohngegend|la zona residencial
die Wolkenkratzer|el rascacielos
die Zeitschrift|la revista
die Zentralheizung|la calefacción central
die Zielgruppe|el grupo objetivo
die Zugfahrt|el viaje en tren
die Zukunftspläne|los planes futuros
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
// LÓGICA SRS (ANKI) Y MODO EXAMEN
// ==========================================
let currentCard = { verb: null, word: null };
let isFlipped = { verb: false, word: false };
let recentCards = { verb: [], word: [] }; 
const COOLDOWN_STEPS = 10; 

// Variables para el Modo Examen
let testQueue = { verb: [], word: [] };
let isTestMode = { verb: false, word: false };

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
    recentCards[type] = [];
    if(isTestMode[type]) exitTestMode(type);
    else loadNextCard(type);
  }
}

function calculateNextInterval(cardProgress, quality) {
  let ease = cardProgress.ease || 2.5;
  let interval = cardProgress.interval || 0;
  let reps = cardProgress.reps || 0;

  if (quality === 0) {
    reps = 0; interval = 0; ease = Math.max(1.3, ease - 0.2);
  } else {
    if (reps === 0) interval = 1; else if (reps === 1) interval = 3; else interval = Math.round(interval * ease);
    reps++;
  }
  return { ease, interval, reps, nextReview: Date.now() + (interval * 24 * 60 * 60 * 1000) };
}

// Carga del Modo Anki Normal
function loadNextCard(type) {
  const db = type === 'verb' ? dbVerbs : dbWords;
  const progress = getProgress(type);
  const now = Date.now();

  let queueNew = [], queueReview = [], queueLearning = [];

  db.forEach(item => {
    const p = progress[item.id];
    if (!p) queueNew.push(item);
    else if (p.nextReview <= now) {
      if (p.interval === 0) queueLearning.push(item); else queueReview.push(item);
    }
  });

  document.getElementById(`${type}-stat-new`).innerText = queueNew.length;
  document.getElementById(`${type}-stat-learn`).innerText = queueLearning.length;
  document.getElementById(`${type}-stat-review`).innerText = queueReview.length;

  let nextItem = null;
  const availLearn = queueLearning.filter(c => !recentCards[type].includes(c.id));
  const availReview = queueReview.filter(c => !recentCards[type].includes(c.id));
  const availNew = queueNew.filter(c => !recentCards[type].includes(c.id));

  if (availLearn.length > 0) nextItem = availLearn[Math.floor(Math.random() * availLearn.length)];
  else if (availReview.length > 0) nextItem = availReview[Math.floor(Math.random() * availReview.length)];
  else if (availNew.length > 0) nextItem = availNew[Math.floor(Math.random() * availNew.length)];
  else {
    for (let i = 0; i < recentCards[type].length; i++) {
        let id = recentCards[type][i];
        let found = queueLearning.find(c => c.id === id) || queueReview.find(c => c.id === id) || queueNew.find(c => c.id === id);
        if (found) { nextItem = found; break; }
    }
  }

  const area = document.getElementById(`${type}-fc-area`);
  const emptyState = document.getElementById(`${type}-empty-state`);

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
  
  // Limpiamos los controles visibles
  document.getElementById(`${type}-controls`).classList.remove('visible');
  document.getElementById(`${type}-test-controls`).classList.remove('visible');

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

  setTimeout(() => { cardEl.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)'; }, 50);
}

function flipCard(type) {
  if (isFlipped[type] || !currentCard[type]) return; 
  
  isFlipped[type] = true;
  document.getElementById(`${type}-card`).classList.add('is-flipped');
  
  setTimeout(() => {
    if(isTestMode[type]) {
      document.getElementById(`${type}-test-controls`).classList.add('visible');
    } else {
      document.getElementById(`${type}-controls`).classList.add('visible');
    }
  }, 300);
}

function processAnswer(type, quality) {
  if (!currentCard[type]) return;

  const progress = getProgress(type);
  const cardId = currentCard[type].id;
  const currentP = progress[cardId] || { ease: 2.5, interval: 0, reps: 0 };
  
  progress[cardId] = calculateNextInterval(currentP, quality);
  saveProgress(type, progress);
  
  recentCards[type] = recentCards[type].filter(id => id !== cardId); 
  recentCards[type].push(cardId);
  if (recentCards[type].length > COOLDOWN_STEPS) recentCards[type].shift();
  
  document.getElementById(`${type}-controls`).classList.remove('visible');
  setTimeout(() => { loadNextCard(type); }, 150);
}

// ==========================================
// FUNCIONES DEL MODO EXAMEN
// ==========================================
function startTestMode(type) {
  const db = type === 'verb' ? dbVerbs : dbWords;
  const progress = getProgress(type);

  // Filtramos solo las tarjetas que ya te sabes (reps > 0)
  let learnedCards = db.filter(item => progress[item.id] && progress[item.id].reps > 0);

  if (learnedCards.length === 0) {
    alert("Aún no tienes tarjetas marcadas como aprendidas. ¡Estudia un poco en el modo normal primero!");
    return;
  }

  // Barajar aleatoriamente
  testQueue[type] = learnedCards.sort(() => Math.random() - 0.5);
  isTestMode[type] = true;

  // Cambios de UI
  document.getElementById(`${type}-test-badge`).style.display = 'block';
  document.getElementById(`${type}-controls`).style.display = 'none';
  document.getElementById(`${type}-test-controls`).style.display = 'flex';
  document.getElementById(`${type}-fc-area`).style.display = 'block';
  document.getElementById(`${type}-empty-state`).style.display = 'none';

  nextTestCard(type);
}

function nextTestCard(type) {
  if (testQueue[type].length === 0) {
    alert("¡Examen completado! Has repasado todas las palabras que ya te sabías.");
    exitTestMode(type);
    return;
  }

  let nextItem = testQueue[type].pop();
  currentCard[type] = nextItem;

  const cardEl = document.getElementById(`${type}-card`);
  cardEl.style.transition = 'none';
  cardEl.classList.remove('is-flipped');
  isFlipped[type] = false;
  document.getElementById(`${type}-test-controls`).classList.remove('visible');

  if (type === 'verb') {
    document.getElementById('verb-front-inf').innerText = nextItem.inf;
    document.getElementById('verb-back-es').innerText = nextItem.es;
    document.getElementById('verb-back-perf').innerText = nextItem.perf;
    document.getElementById('verb-back-prat').innerText = nextItem.prat;
  } else {
    document.getElementById('word-front-de').innerText = nextItem.de;
    document.getElementById('word-back-es').innerText = nextItem.es;
  }

  setTimeout(() => { cardEl.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)'; }, 50);
}

function exitTestMode(type) {
  isTestMode[type] = false;
  document.getElementById(`${type}-test-badge`).style.display = 'none';
  document.getElementById(`${type}-controls`).style.display = 'flex';
  document.getElementById(`${type}-test-controls`).style.display = 'none';
  document.getElementById(`${type}-test-controls`).classList.remove('visible');
  loadNextCard(type);
}
