# Relazione 1° progetto - Modeling and rendering with cubes
 ![Unihorse 1](/resources/Unihorse4.png)


## Descrizione
Il progetto prevde la realizzazione di un un modello 3D prendendo come esempio uno dei tanti personaggi giocabili dell'applicazione per smartphone Crossy Road. Il modello è stato successivamente appoggiato su un piano 3D creato a partire dall'heightmap fornitaci dal professore. Infine è stata aggiunta un animazione che permette di farlo muovere autonomamente nello spazio.

 ![Unihorse](/resources/Unihorse.png)

## Struttura del progetto
Il progetto è stato creato prestando particolare attenzione ad una futura possiblità di cambiamenti e implementazioni. Per questo motivo è stato utilizzato il module bundler Webpack e tutta la struttura del modello è stata suddivisa in classi facilmente gestibili e modificabili variando i parametri delle varie istanze.

*NB: la cartella contente i moduli NPM ovviamente è stata esclusa dalle cartelle "osservate" da Git e quindi non è presente nel repository. Se si fosse quindi interessati ad effetturare delle modifiche al progetto, bisognerebbe utilizzare il comando "**npm install**" da terminale*

Il file *index.html* punta ad un file JavaScript all'interno della cartella *dist*; questo file viene automaticamente creato da Webpack eseguendo il merge di tutti i moduli a lui indicati. Per poter analizzare i file del progetto bisognerà quindi puntare alla cartella *app*.

### index.js
All'interno di questa cartella è quindi possibile trovare il file *index.js* che gestisce tutte le impostazioni base di ThreeJS quali la creazione della scena, della camera, la creazione dell'istanza del modello finale e le funzioni di Rendering e Update.

### Terrain.js
La cartella Terrain presenta al suo interno una classe tramite la quale sono stati istanziati tutti i cubi con cui è stato creato il terreno a partire dall'heightmap.

### getHeigtData.js
Implementa la funzione fornitaci per il caricamento dell'heightmap e l'analisi dei pixel al suo interno.

### model
All'interno della cartella model sono quindi presenti tutte le classi pre la creazione dell'unicorno. Ogni parte del corpo è stata creata come classe a se stante. Alcune parti parti del corpo sono state successivamente raggruppate all'interno di altri gruppi presenti un ulteriori classi. In questo modo si è facilitati nel caso si volessero animare singole parti o gruppi di esse. Infine tutti i componenti sono stati raggruppati all'interno di un unico oggetto persente all'interno della classe *Unihorse*. Questo ha permesso una maggiore pulizia del file index.js nel quale è stato istanziato un solo elemento. La rappresentazione dei gruppi e sottogruppi di oggetti verrà qui mostrata in un grafico:

![map](/resources/map.png)

## Creazione del modello
Per la realizzazione del modello ed in particolare per quantizzare le dimensioni dei vari elementi è stato indispensabile il seguente video: https://youtu.be/u6q_CWQNyek.
Le istanze degli oggetti sono state raggruppate come suggerito dalla documentazione di Three.js non all'interno di un oggetto vuoto ma bensì all'interno di un gruppo
ES:
```js
this.unihorse = new THREE.Group();
```
## Creazione del terreno
Per la realizzazione del terreno è bastato implementare un doppio ciclo for che iterasse l'immagine per ogni riga (*i*) e per ogni colonna (*j*). Tenendo conto del numero totale di iterazioni tramite la variabile **n**, sono state create **n** istanze totali della classe *Terrain* e ad ognuna delle istanze è stata assegnata la posizione *(i, j)* del piano.

## Animazioni
La realizzazione dell'animazione è stata la parte che ha impiegato maggiore dispendio di energie. Inizialmente prevedeva un'aumento di un fattore *d* ad ogni frame ma questo alla lunga portava a degli squilibri nel calcolo delle rotazioni. E' stato quindi necessario implementare un metodo che tenesse conto del tempo trascorso e che aggiustasse di conseguenza le differenze temporali tra un frame e l'alto.
L'animazione permette al modello 3D di poter "correre" nel piano di appoggio e scegliere casualmente la direzione di marcia.

![Unihorse 2](/resources/Unihorse2.png)


![Unihorse 2](/resources/Unihorse3.png)
