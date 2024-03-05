function Cervello() {
    // Rimuovi l'immagine con classe "img"
    var imgElement = document.querySelector('.img');
    if (imgElement) {
        imgElement.remove();
    } else {
        console.log("Nessuna immagine con classe 'img' trovata.");
    }

    // Crea un nuovo elemento immagine con classe "nuova-img"
    var newImgElement = document.createElement('img');
    newImgElement.src = 'NEU_viewing_the_brain_a_it-ezgif.com-gif-maker.gif';
    newImgElement.classList.add('img1');

    // Aggiungi il nuovo elemento immagine al documento
    document.body.appendChild(newImgElement);

    var nElement = document.querySelector('.n');
    nElement.appendChild(newImgElement);

    var nuovoDiv = document.createElement('div');
    nuovoDiv.classList.add('div1');

    var titolo = document.createElement('h1');
    titolo.textContent = "Cervello";

    var paragrafo = document.createElement('p');
    paragrafo.innerHTML = "Il cervello è l'organo principale del sistema nervoso centrale nell'uomo e negli altri vertebrati <br>. È un organo altamente complesso e sofisticato, composto da miliardi di neuroni che si connettono tra loro attraverso sinapsi. <br> Il cervello è responsabile di molteplici funzioni, tra cui: <br> - Elaborazione delle informazioni sensoriali, come la vista, l'udito, il gusto e il tatto. <br> - Controllo del movimento volontario e involontario, incluso il movimento coordinato e la postura. <br> - Regolazione delle funzioni corporee autonome, come la frequenza cardiaca, la respirazione e la digestione. <br> - Sede delle emozioni, della memoria e del pensiero, compresi il ragionamento, il linguaggio e la creatività. <br> Il cervello è diviso in diverse regioni, ognuna con funzioni specializzate. Queste regioni includono il cervelletto, il tronco cerebrale, il diencefalo, il telencefalo e la corteccia cerebrale. La corteccia cerebrale, in particolare, è coinvolta in molte funzioni cognitive superiori, come l'elaborazione delle informazioni sensoriali complesse, il linguaggio e la memoria. <br><br> Nonostante la sua complessità, il cervello è suscettibile a malattie e lesioni che possono influenzare le sue funzioni. L'importanza del cervello per il funzionamento complessivo del corpo umano lo rende oggetto di continuo studio e ricerca nel campo della neuroscienza.";

    nuovoDiv.appendChild(titolo);
    nuovoDiv.appendChild(paragrafo);

    // Aggiunta dei controlli audio
    var audioElement = document.createElement('audio');
    audioElement.classList.add('audio1');
    audioElement.src = '2.mp3';
    audioElement.controls = true;

    // Aggiunta del controllo audio al documento
    document.body.appendChild(audioElement);
    
    // Aggiunta del div al documento
    document.body.appendChild(nuovoDiv);
}
