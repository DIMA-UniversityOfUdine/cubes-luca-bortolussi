# Journal
## 18/03
 - Inizio del progetto:
  - E' stato individuato il modello da disegnare nella scena.
 ![Unihorse](/resources/Unihorse.png)
  - E' stato creato uno schizzo del modello per poterne ricavare meglio le dimensioni.
  ![schizzo](/resources/schizzo.jpg)

## 19/03
E' stato aggiunto Webpack tramite NPM per poter lavorare tramite moduli JS in modo da migliorare la struttura dell'applicazione.

Sempre tramite NPM ho cercato di installare il modulo per ThreeJS in modo da non doverlo importare con il tag
```html
<script></script>
```
L'importazione con questo metodo di per se funzionava, ma ci sono stati diversi problemi di compatibilità con le librerie aggiuntive "stats", "Coordinates", "OrbitControls" in quanto non ancora implementate come moduli NPM.

## 22/03
Inizio della modellazione dell'oggetto.
Ho avuto qualche difficoltà nel capire come poter unire più figure geometriche all'interno di un unico oggetto.

## 23/03
Il modello è stato completato.

## 25/03
Tutte le parti del corpo dell'unicorno sono state unite all'interno di un unica classe chiamata Unihorse per poterne così facilitare l'utilizzo di animazioni (ancora da creare)

## 26/03
 - E' stato implementato un modello basilare di terreno basato sull'immagine heightmap2.png.
 - Aggiunta l'illuminazione e perfezionato il terreno.
 - Fissata l'inquadratura della telecamera sull'oggetto
 - Il modello si può muovere nelle quattro direzioni premendo i tasti "W", "A", "S", "D"

##29/03
Implementata l'animazione della corsa e il file README.md
