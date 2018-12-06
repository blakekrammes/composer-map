import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import Point = require("esri/geometry/Point");
import PictureMarkerSymbol = require("esri/symbols/PictureMarkerSymbol");
import Graphic = require("esri/Graphic");
import GraphicsLayer = require("esri/layers/GraphicsLayer");
import PopupTemplate = require("esri/PopupTemplate");

// josquin
let josquinMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/xFLKVGI.jpg",
    width: "32px",
    height: "32px"
});

let josquinPoint = new Point({
    longitude: 4.0621,
    latitude: 50.5257
});

let josquinPopupTemplate = new PopupTemplate({
    title: 'Josquin des Prez (c. 1450/1455 – 1521)',
    content: `Composer of Renaissance polyphonic vocal music <br> Born in either Hainaut (modern-day Belgium) or modern-day France <br> Died in Condé-sur-l'Escaut <br> Composition | <a href="https://www.youtube.com/watch?v=LUAgAF4Khmg" target="_blank">Ave Maria</a>`
});

let josquinPointGraphic = new Graphic({
    geometry: josquinPoint,
    symbol: josquinMarker,
    popupTemplate: josquinPopupTemplate
});

// byrd
let byrdMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/es7RrXK.jpg",
    width: "32px",
    height: "32px"
});

let byrdPoint = new Point({
    longitude: 0.1278,
    latitude: 51.5074
});

let byrdPopupTemplate = new PopupTemplate({
    title: 'William Byrd (c.1539/40 or 1543 – 1623)',
    content: 'Composer of sacred and secular polyphonic music <br> Born in London <br> Died in Stondon Massey <br> Composition | <a href="https://www.youtube.com/watch?v=Z2ckGcpx6xI" target="_blank">Ave Verum Corpus</a>'
});

let byrdPointGraphic = new Graphic({
    geometry: byrdPoint,
    symbol: byrdMarker,
    popupTemplate: byrdPopupTemplate
});

// palestrina
let palestrinaMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/7g3CEfI.jpg",
    width: "32px",
    height: "32px"
});

let palestrinaPoint = new Point({
    longitude: 12.8887,
    latitude: 41.8383
});

let palestrinaPopupTemplate = new PopupTemplate({
    title: 'Giovanni Pierluigi da Palestrina (c. 1525 – 1594)',
    content: 'Composer of sacred polyphonic vocal music <br> Born in Palestrina <br> Died in Rome <br> Composition | <a href="https://www.youtube.com/watch?v=EJj0as_Mic4" target="_blank">Missa Papae Marcelli, Kyrie</a>'
});

let palestrinaPointGraphic = new Graphic({
    geometry: palestrinaPoint,
    symbol: palestrinaMarker,
    popupTemplate: palestrinaPopupTemplate
});

// lassus
let lassusMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/liq7FG1.jpg",
    width: "32px",
    height: "32px"
});

let lassusPoint = new Point({
    longitude: 3.9567,
    latitude: 50.4542
});

let lassusPopupTemplate = new PopupTemplate({
    title: 'Orlande de Lassus (1532, possibly 1530 – 1594)',
    content: 'Composer of sacred and secular polyphonic works <br> Born in Mons (modern-day Belgium) <br> Died in Munich <br> Composition | <a href="https://www.youtube.com/watch?v=UQN6gFnsGI4" target="_blank">La Nuict Froide et Sombre</a>'
});

let lassusPointGraphic = new Graphic({
    geometry: lassusPoint,
    symbol: lassusMarker,
    popupTemplate: lassusPopupTemplate
});

// dowland
let dowlandMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/Iybfzct.jpg",
    width: "32px",
    height: "32px"
});

let dowlandPoint = new Point({
    longitude: 0.1357,
    latitude: 51.4975
});

let dowlandPopupTemplate = new PopupTemplate({
    title: 'John Dowland (1563 – 1626)',
    content: 'Composer of songs and music for lute <br> Born in London <br> Died in London <br> Composition | <a href="https://www.youtube.com/watch?v=Y9HKl8H0PWg" target="_blank">Flow My Tears</a>'
});

let dowlandPointGraphic = new Graphic({
    geometry: dowlandPoint,
    symbol: dowlandMarker,
    popupTemplate: dowlandPopupTemplate
});

// purcell
let purcellMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/cLSPqMw.jpg",
    width: "32px",
    height: "32px"
});

let purcellPoint = new Point({
    longitude: 0.1357,
    latitude: 51.4975
});

let purcellPopupTemplate = new PopupTemplate({
    title: 'Henry Purcell (1563 – 1626)',
    content: `Composer of opera, sacred, and incidental music <br> Born in London <br> Died in London <br> Composition | <a href="https://www.youtube.com/watch?v=S9xwlWfHWv4" target="_blank">Dido's Lament</a>`
});

let purcellPointGraphic = new Graphic({
    geometry: purcellPoint,
    symbol: purcellMarker,
    popupTemplate: purcellPopupTemplate
});

// monteverdi
let monteverdiMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/FcDnpoQ.jpg",
    width: "32px",
    height: "32px"
});

let monteverdiPoint = new Point({
    longitude: 10.0227,
    latitude: 45.1332
});

let monteverdiPopupTemplate = new PopupTemplate({
    title: 'Claudio Monteverdi (1567 – 1643)',
    content: `Composer of opera, sacred, and secular music <br> Born in Cremona <br> Died in Venice <br> Composition | <a href="https://www.youtube.com/watch?v=zsL4MGFh6QI" target="_blank">Lamento della Ninfa</a>`
});

let monteverdiPointGraphic = new Graphic({
    geometry: monteverdiPoint,
    symbol: monteverdiMarker,
    popupTemplate: monteverdiPopupTemplate
});

// vivaldi
let vivaldiMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/eiWjRJ6.jpg",
    width: "32px",
    height: "32px"
});

let vivaldiPoint = new Point({
    longitude: 12.3155,
    latitude: 45.4408
});

let vivaldiPopupTemplate = new PopupTemplate({
    title: 'Antonio Vivaldi (1678 – 1741)',
    content: `Composer of concertos, choral, and operatic music <br> Born in Venice <br> Died in Vienna <br> Composition | <a href="https://www.youtube.com/watch?v=QPba-i26YNA" target="_blank">Violin Concerto in A Minor RV356</a>`
});

let vivaldiPointGraphic = new Graphic({
    geometry: vivaldiPoint,
    symbol: vivaldiMarker,
    popupTemplate: vivaldiPopupTemplate
});

// couperin
let couperinMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/JvHJWNa.jpg",
    width: "32px",
    height: "32px"
});

let couperinPoint = new Point({
    longitude: 2.3522,
    latitude: 48.8566
});

let couperinPopupTemplate = new PopupTemplate({
    title: 'François Couperin (1668 – 1733)',
    content: `Composer of harpsichord and vocal music <br> Born in Paris <br> Died in Paris <br> Composition | <a href="https://www.youtube.com/watch?v=R2mGjvrGbcE" target="_blank">Les Baricades Mistérieuses</a>`
});

let couperinPointGraphic = new Graphic({
    geometry: couperinPoint,
    symbol: couperinMarker,
    popupTemplate: couperinPopupTemplate
});

// albinoni
let albinoniMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/YkKO4SF.jpg",
    width: "32px",
    height: "32px"
});

let albinoniPoint = new Point({
    longitude: 12.3155,
    latitude: 45.4408
});

let albinoniPopupTemplate = new PopupTemplate({
    title: 'Tomaso Albinoni (1671 – 1751)',
    content: `Composer of instrumental and operatic music <br> Born in Venice <br> Died in Venice <br> Composition | <a href="https://www.youtube.com/watch?v=LjgndGuy77o" target="_blank">Oboe Concerto #2 in D Minor Op. 9</a>`
});

let albinoniPointGraphic = new Graphic({
    geometry: albinoniPoint,
    symbol: albinoniMarker,
    popupTemplate: albinoniPopupTemplate
});

// telemann
let telemannMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/fj3Bpub.jpg",
    width: "32px",
    height: "32px"
});

let telemannPoint = new Point({
    longitude: 11.6276,
    latitude: 52.1205
});

let telemannPopupTemplate = new PopupTemplate({
    title: 'Georg Philipp Telemann (1681 – 1767)',
    content: `Composer of concertos, operas, orchestral and keyboard music <br> Born in Magdeburg <br> Died in Hamburg <br> Composition | <a href="https://www.youtube.com/watch?v=ZySASwzVDR0" target="_blank">Suite in A major</a>`
});

let telemannPointGraphic = new Graphic({
    geometry: telemannPoint,
    symbol: telemannMarker,
    popupTemplate: telemannPopupTemplate
});

// bach
let bachMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/WOe4Dto.jpg",
    width: "32px",
    height: "32px"
});

let bachPoint = new Point({
    longitude: 10.3147,
    latitude: 50.9796
});

let bachPopupTemplate = new PopupTemplate({
    title: 'Johann Sebastian Bach (1685 – 1750)',
    content: `Composer of contrapuntal sacred music and keyboard music <br> Born in Eisenach <br> Died in Leipzig <br> Composition | <a href="https://www.youtube.com/watch?v=5Belbi3tSQw" target="_blank">Mass in B minor - Gratias</a>`
});

let bachPointGraphic = new Graphic({
    geometry: bachPoint,
    symbol: bachMarker,
    popupTemplate: bachPopupTemplate
});

// scarlatti
let scarlattiMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/kMhmFcc.jpg",
    width: "32px",
    height: "32px"
});

let scarlattiPoint = new Point({
    longitude: 14.2681,
    latitude: 40.8518
});

let scarlattiPointGraphic = new Graphic({
    geometry: scarlattiPoint,
    symbol: scarlattiMarker
});

// handel
let handelMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/l6frukP.png",
    width: "32px",
    height: "32px"
});

let handelPoint = new Point({
    longitude: 11.9688,
    latitude: 51.4970
});

let handelPointGraphic = new Graphic({
    geometry: handelPoint,
    symbol: handelMarker
});

// beethoven
let beethovenMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/WjOGtt6.png",
    width: "32px",
    height: "32px"
});

let beethovenPoint = new Point({
    longitude: 7.104469222936351,
    latitude: 50.736576630668395
});

let beethovenPointGraphic = new Graphic({
    geometry: beethovenPoint,
    symbol: beethovenMarker
});

// haydn
let haydnMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/TMJAuLB.jpg",
    width: "32px",
    height: "32px"
});

let haydnPoint = new Point({
    longitude: 16.8589,
    latitude: 48.0656
});

let haydnPointGraphic = new Graphic({
geometry: haydnPoint,
symbol: haydnMarker
});

// mozart
let mozartMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/ysrVQLo.jpg",
    width: "32px",
    height: "32px"
});

let mozartPoint = new Point({
    longitude: 13.0550,
    latitude: 47.8095
});

let mozartPointGraphic = new Graphic({
geometry: mozartPoint,
symbol: mozartMarker
});

// salieri
let salieriMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/Tt77SAc.jpg",
    width: "32px",
    height: "32px"
});

let salieriPoint = new Point({
    longitude: 11.3032,
    latitude: 45.1936
});

let salieriPointGraphic = new Graphic({
geometry: salieriPoint,
symbol: salieriMarker
});

// vonWeber
let vonWeberMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/BAdxWJB.jpg",
    width: "32px",
    height: "32px"
});

let vonWeberPoint = new Point({
    longitude: 10.6095,
    latitude: 54.1330
});

let vonWeberPointGraphic = new Graphic({
    geometry: vonWeberPoint,
    symbol: vonWeberMarker
});

// schubert
let schubertMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/LFbwZoP.jpg",
    width: "32px",
    height: "32px"
});

let schubertPoint = new Point({
    longitude: 16.3524,
    latitude: 48.2266
});

let schubertPointGraphic = new Graphic({
    geometry: schubertPoint,
    symbol: schubertMarker
});

// berlioz
let berliozMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/Lc466V3.jpg",
    width: "32px",
    height: "32px"
});

let berliozPoint = new Point({
    longitude: 5.2600,
    latitude: 45.3938
});

let berliozPointGraphic = new Graphic({
geometry: berliozPoint,
symbol: berliozMarker
});

// chopin
let chopinMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/VKavVnU.jpg",
    width: "32px",
    height: "32px"
});

let chopinPoint = new Point({
    longitude: 20.3249,
    latitude: 52.2574
});

let chopinPointGraphic = new Graphic({
geometry: chopinPoint,
symbol: chopinMarker
});

// liszt
let lisztMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/gdX8VaD.png",
    width: "32px",
    height: "32px"
});

let lisztPoint = new Point({
    longitude: 16.5311,
    latitude: 47.5653
});

let lisztPointGraphic = new Graphic({
geometry: lisztPoint,
symbol: lisztMarker
});

// mendelssohn
let mendelssohnMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/g4NELR0.jpg",
    width: "32px",
    height: "32px"
});

let mendelssohnPoint = new Point({
    longitude: 9.9937,
    latitude: 53.5511
});

let mendelssohnPointGraphic = new Graphic({
geometry: mendelssohnPoint,
symbol: mendelssohnMarker
});

// brahms
let brahmsMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/dtaPoWo.jpg",
    width: "32px",
    height: "32px"
});

let brahmsPoint = new Point({
    longitude: 9.9937,
    latitude: 53.5511
});

let brahmsPointGraphic = new Graphic({
geometry: brahmsPoint,
symbol: brahmsMarker
});

// schumann
let schumannMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/UFuEMXZ.jpg",
    width: "32px",
    height: "32px"
});

let schumannPoint = new Point({
    longitude: 12.4734,
    latitude: 50.7102
});

let schumannPointGraphic = new Graphic({
geometry: schumannPoint,
symbol: schumannMarker
});

// grieg
let griegMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/UPRtAbf.jpg",
    width: "32px",
    height: "32px"
});

let griegPoint = new Point({
    longitude: 5.3221,
    latitude: 60.3913
});

let griegPointGraphic = new Graphic({
geometry: griegPoint,
symbol: griegMarker
});

// dvorak
let dvorakMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/q7QkYUR.jpg",
    width: "32px",
    height: "32px"
});

let dvorakPoint = new Point({
    longitude: 14.2988,
    latitude: 50.2615
});

let dvorakPointGraphic = new Graphic({
geometry: dvorakPoint,
symbol: dvorakMarker
});

// mussorgsky
let mussorgskyMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/2mrJZ6C.jpg",
    width: "32px",
    height: "32px"
});

let mussorgskyPoint = new Point({
    longitude: 31.2825,
    latitude: 56.2811
});

let mussorgskyPointGraphic = new Graphic({
geometry: mussorgskyPoint,
symbol: mussorgskyMarker
});

// bruckner
let brucknerMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/NH9XDp3.jpg",
    width: "32px",
    height: "32px"
});

let brucknerPoint = new Point({
    longitude: 14.2913,
    latitude: 48.2077
});

let brucknerPointGraphic = new Graphic({
geometry: brucknerPoint,
symbol: brucknerMarker
});

// tchaikovsky
let tchaikovskyMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/AjyiFbl.jpg",
    width: "32px",
    height: "32px"
});

let tchaikovskyPoint = new Point({
    longitude: 53.9769,
    latitude: 57.0409
});

let tchaikovskyPointGraphic = new Graphic({
geometry: tchaikovskyPoint,
symbol: tchaikovskyMarker
});

// puccini
let pucciniMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/CcPAFvs.jpg",
    width: "32px",
    height: "32px"
});

let pucciniPoint = new Point({
    longitude: 10.5027,
    latitude: 43.8429
});

let pucciniPointGraphic = new Graphic({
geometry: pucciniPoint,
symbol: pucciniMarker
});

// saintSaëns
let saintSaënsMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/2XBAaUc.jpg",
    width: "32px",
    height: "32px"
});

let saintSaënsPoint = new Point({
    longitude: 2.3522,
    latitude: 48.8566
});

let saintSaënsPointGraphic = new Graphic({
geometry: saintSaënsPoint,
symbol: saintSaënsMarker
});

// strauss
let straussMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/l7QzLRB.jpg",
    width: "32px",
    height: "32px"
});

let straussPoint = new Point({
    longitude: 11.5820,
    latitude: 48.1351
});

let straussPointGraphic = new Graphic({
geometry: straussPoint,
symbol: straussMarker
});

// mahler
let mahlerMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/1Vxqtm3.jpg",
    width: "32px",
    height: "32px"
});

let mahlerPoint = new Point({
    longitude: 15.3041,
    latitude: 49.5926
});

let mahlerPointGraphic = new Graphic({
geometry: mahlerPoint,
symbol: mahlerMarker
});

// debussy
let debussyMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/nkPhHSq.jpg",
    width: "32px",
    height: "32px"
});

let debussyPoint = new Point({
    longitude: 2.0938,
    latitude: 48.8989
});

let debussyPointGraphic = new Graphic({
geometry: debussyPoint,
symbol: debussyMarker
});

// rachmaninoff
let rachmaninoffMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/WJL8Ran.jpg",
    width: "32px",
    height: "32px"
});

let rachmaninoffPoint = new Point({
    longitude: 31.4013,
    latitude: 57.9124
});

let rachmaninoffPointGraphic = new Graphic({
geometry: rachmaninoffPoint,
symbol: rachmaninoffMarker
});

// sibelius
let sibeliusMarker = new PictureMarkerSymbol({
    url: "https://i.imgur.com/hcmJmyO.jpg",
    width: "32px",
    height: "32px"
});

let sibeliusPoint = new Point({
    longitude: 24.4590,
    latitude: 60.9929
});

let sibeliusPointGraphic = new Graphic({
    geometry: sibeliusPoint,
    symbol: sibeliusMarker
});

// esri map
const map = new EsriMap({
  basemap: "national-geographic"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [11.025718049370735, 49.96332005792951],
  zoom: 4
});

const graphicsLayer = new GraphicsLayer({

}); 


// list of whether composers are displaying
const isComposerDisplaying = {
    josquin: false, palestrina: false, lassus: false, byrd: false, dowland: false, purcell: false,
    monteverdi: false, couperin: false, vivaldi: false, albinoni: false, telemann: false, handel: false, bach: false,
    scarlatti: false, haydn: false, mozart: false, beethoven: false, salieri: false, vonWeber: false, schubert: false, 
    berlioz: false, chopin: false, mendelssohn: false, schumann: false, liszt: false, brahms: false,
    grieg: false, dvorak: false, mussorgsky: false, bruckner: false, tchaikovsky: false, puccini: false,
    saintSaëns: false, mahler: false, debussy: false, strauss: false, rachmaninoff: false, sibelius: false
}

let year:any;

window.setInterval(() => {
    year = (<HTMLInputElement>document.getElementById('year')).value;
    
    // Josquin
    if (parseInt(year, 10) >= 1450 && parseInt(year, 10) <= 1521) {
        if (isComposerDisplaying.josquin !== true) {
            graphicsLayer.graphics.add(josquinPointGraphic);
            isComposerDisplaying.josquin = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(josquinPointGraphic);
        isComposerDisplaying.josquin = false;
    }
    // Palestrina
    if (parseInt(year, 10) >= 1525 && parseInt(year, 10) <= 1594) {
        if (isComposerDisplaying.palestrina !== true) {
            graphicsLayer.graphics.add(palestrinaPointGraphic);
            isComposerDisplaying.palestrina = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(palestrinaPointGraphic);
        isComposerDisplaying.palestrina = false;
    }
    // Lassus
    if (parseInt(year, 10) >= 1532 && parseInt(year, 10) <= 1594) {
        if (isComposerDisplaying.lassus !== true) {
            graphicsLayer.graphics.add(lassusPointGraphic);
            isComposerDisplaying.lassus = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(lassusPointGraphic);
        isComposerDisplaying.lassus = false;
    }
    // Byrd
    if (parseInt(year, 10) >= 1539 && parseInt(year, 10) <= 1623) {
        if (isComposerDisplaying.byrd !== true) {
            graphicsLayer.graphics.add(byrdPointGraphic);
            isComposerDisplaying.byrd = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(byrdPointGraphic);
        isComposerDisplaying.byrd = false;
    }
    // Dowland
    if (parseInt(year, 10) >= 1563 && parseInt(year, 10) <= 1626) {
        if (isComposerDisplaying.dowland !== true) {
            graphicsLayer.graphics.add(dowlandPointGraphic);
            isComposerDisplaying.dowland = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(dowlandPointGraphic);
        isComposerDisplaying.dowland = false;
    }
    // Purcell
    if (parseInt(year, 10) >= 1659 && parseInt(year, 10) <= 1695) {
        if (isComposerDisplaying.purcell !== true) {
            graphicsLayer.graphics.add(purcellPointGraphic);
            isComposerDisplaying.purcell = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(purcellPointGraphic);
        isComposerDisplaying.purcell = false;
    }
    // Monteverdi
    if (parseInt(year, 10) >= 1567 && parseInt(year, 10) <= 1643) {
        if (isComposerDisplaying.monteverdi !== true) {
            graphicsLayer.graphics.add(monteverdiPointGraphic);
            isComposerDisplaying.monteverdi = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(monteverdiPointGraphic);
        isComposerDisplaying.monteverdi = false;
    }
    // Couperin
    if (parseInt(year, 10) >= 1668 && parseInt(year, 10) <= 1733) {
        if (isComposerDisplaying.couperin !== true) {
            graphicsLayer.graphics.add(couperinPointGraphic);
            isComposerDisplaying.couperin = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(couperinPointGraphic);
        isComposerDisplaying.couperin = false;
    }
    // Vivaldi
    if (parseInt(year, 10) >= 1678 && parseInt(year, 10) <= 1741) {
        if (isComposerDisplaying.vivaldi !== true) {
            graphicsLayer.graphics.add(vivaldiPointGraphic);
            isComposerDisplaying.vivaldi = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(vivaldiPointGraphic);
        isComposerDisplaying.vivaldi = false;
    }
    // Albinoni
    if (parseInt(year, 10) >= 1671 && parseInt(year, 10) <= 1751) {
        if (isComposerDisplaying.albinoni !== true) {
            graphicsLayer.graphics.add(albinoniPointGraphic);
            isComposerDisplaying.albinoni = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(albinoniPointGraphic);
        isComposerDisplaying.albinoni = false;
    }
    // Telemann
    if (parseInt(year, 10) >= 1681 && parseInt(year, 10) <= 1767) {
        if (isComposerDisplaying.telemann !== true) {
            graphicsLayer.graphics.add(telemannPointGraphic);
            isComposerDisplaying.telemann = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(telemannPointGraphic);
        isComposerDisplaying.telemann = false;
    }
    // Bach
    if (parseInt(year, 10) >= 1685 && parseInt(year, 10) <= 1750) {
        if (isComposerDisplaying.bach !== true) {
            graphicsLayer.graphics.add(bachPointGraphic);
            isComposerDisplaying.bach = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(bachPointGraphic);
        isComposerDisplaying.bach = false;
    }
    // Scarlatti
    if (parseInt(year, 10) >= 1685 && parseInt(year, 10) <= 1757) {
        if (isComposerDisplaying.scarlatti !== true) {
            graphicsLayer.graphics.add(scarlattiPointGraphic);
            isComposerDisplaying.scarlatti = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(scarlattiPointGraphic);
        isComposerDisplaying.scarlatti = false;
    }
    // Handel
    if (parseInt(year, 10) >= 1685 && parseInt(year, 10) <= 1759) {
        if (isComposerDisplaying.handel !== true) {
            graphicsLayer.graphics.add(handelPointGraphic);
            isComposerDisplaying.handel = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(handelPointGraphic);
        isComposerDisplaying.handel = false;
    }
    // Beethoven
    if (parseInt(year, 10) >= 1770 && parseInt(year, 10) <= 1827) {
        if (isComposerDisplaying.beethoven !== true) {
            graphicsLayer.graphics.add(beethovenPointGraphic);
            isComposerDisplaying.beethoven = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(beethovenPointGraphic);
        isComposerDisplaying.beethoven = false;
    }
    // Mozart
    if (parseInt(year, 10) >= 1756 && parseInt(year, 10) <= 1791) {
        if (isComposerDisplaying.mozart !== true) {
            graphicsLayer.graphics.add(mozartPointGraphic);
            isComposerDisplaying.mozart = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(mozartPointGraphic);
        isComposerDisplaying.mozart = false;
    }
    // Haydn
    if (parseInt(year, 10) >= 1732 && parseInt(year, 10) <= 1809) {
        if (isComposerDisplaying.haydn !== true) {
            graphicsLayer.graphics.add(haydnPointGraphic);
            isComposerDisplaying.haydn = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(haydnPointGraphic);
        isComposerDisplaying.haydn = false;
    }
    // Salieri
    if (parseInt(year, 10) >= 1750 && parseInt(year, 10) <= 1825) {
        if (isComposerDisplaying.salieri !== true) {
            graphicsLayer.graphics.add(salieriPointGraphic);
            isComposerDisplaying.salieri = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(salieriPointGraphic);
        isComposerDisplaying.salieri = false;
    }
    // VonWeber
    if (parseInt(year, 10) >= 1786 && parseInt(year, 10) <= 1826) {
        if (isComposerDisplaying.vonWeber !== true) {
            graphicsLayer.graphics.add(vonWeberPointGraphic);
            isComposerDisplaying.vonWeber = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(vonWeberPointGraphic);
        isComposerDisplaying.vonWeber = false;
    }
    // Schubert
    if (parseInt(year, 10) >= 1797 && parseInt(year, 10) <= 1828) {
        if (isComposerDisplaying.schubert !== true) {
            graphicsLayer.graphics.add(schubertPointGraphic);
            isComposerDisplaying.schubert = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(schubertPointGraphic);
        isComposerDisplaying.schubert = false;
    }
    // Berlioz
    if (parseInt(year, 10) >= 1803 && parseInt(year, 10) <= 1869) {
        if (isComposerDisplaying.berlioz !== true) {
            graphicsLayer.graphics.add(berliozPointGraphic);
            isComposerDisplaying.berlioz = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(berliozPointGraphic);
        isComposerDisplaying.berlioz = false;
    }
    // Chopin
    if (parseInt(year, 10) >= 1810 && parseInt(year, 10) <= 1849) {
        if (isComposerDisplaying.chopin !== true) {
            graphicsLayer.graphics.add(chopinPointGraphic);
            isComposerDisplaying.chopin = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(chopinPointGraphic);
        isComposerDisplaying.chopin = false;
    }
    // Mendelssohn
    if (parseInt(year, 10) >= 1809 && parseInt(year, 10) <= 1847) {
        if (isComposerDisplaying.mendelssohn !== true) {
            graphicsLayer.graphics.add(mendelssohnPointGraphic);
            isComposerDisplaying.mendelssohn = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(mendelssohnPointGraphic);
        isComposerDisplaying.mendelssohn = false;
    }
    // Schumann
    if (parseInt(year, 10) >= 1810 && parseInt(year, 10) <= 1856) {
        if (isComposerDisplaying.schumann !== true) {
            graphicsLayer.graphics.add(schumannPointGraphic);
            isComposerDisplaying.schumann = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(schumannPointGraphic);
        isComposerDisplaying.schumann = false;
    }
    // Liszt
    if (parseInt(year, 10) >= 1811 && parseInt(year, 10) <= 1886) {
        if (isComposerDisplaying.liszt !== true) {
            graphicsLayer.graphics.add(lisztPointGraphic);
            isComposerDisplaying.liszt = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(lisztPointGraphic);
        isComposerDisplaying.liszt = false;
    }
    // Brahms
    if (parseInt(year, 10) >= 1833 && parseInt(year, 10) <= 1897) {
        if (isComposerDisplaying.brahms !== true) {
            graphicsLayer.graphics.add(brahmsPointGraphic);
            isComposerDisplaying.brahms = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(brahmsPointGraphic);
        isComposerDisplaying.brahms = false;
    }
    // Grieg
    if (parseInt(year, 10) >= 1843 && parseInt(year, 10) <= 1907) {
        if (isComposerDisplaying.grieg !== true) {
            graphicsLayer.graphics.add(griegPointGraphic);
            isComposerDisplaying.grieg = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(griegPointGraphic);
        isComposerDisplaying.grieg = false;
    }
    // Dvorak
    if (parseInt(year, 10) >= 1841 && parseInt(year, 10) <= 1904) {
        if (isComposerDisplaying.dvorak !== true) {
            graphicsLayer.graphics.add(dvorakPointGraphic);
            isComposerDisplaying.dvorak = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(dvorakPointGraphic);
        isComposerDisplaying.dvorak = false;
    }
    // Mussorgsky
    if (parseInt(year, 10) >= 1839 && parseInt(year, 10) <= 1881) {
        if (isComposerDisplaying.mussorgsky !== true) {
            graphicsLayer.graphics.add(mussorgskyPointGraphic);
            isComposerDisplaying.mussorgsky = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(mussorgskyPointGraphic);
        isComposerDisplaying.mussorgsky = false;
    }
    // Bruckner
    if (parseInt(year, 10) >= 1824 && parseInt(year, 10) <= 1896) {
        if (isComposerDisplaying.bruckner !== true) {
            graphicsLayer.graphics.add(brucknerPointGraphic);
            isComposerDisplaying.bruckner = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(brucknerPointGraphic);
        isComposerDisplaying.bruckner = false;
    }
    // Tchaikovsky
    if (parseInt(year, 10) >= 1840 && parseInt(year, 10) <= 1893) {
        if (isComposerDisplaying.tchaikovsky !== true) {
            graphicsLayer.graphics.add(tchaikovskyPointGraphic);
            isComposerDisplaying.tchaikovsky = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(tchaikovskyPointGraphic);
        isComposerDisplaying.tchaikovsky = false;
    }
    // Puccini
    if (parseInt(year, 10) >= 1858 && parseInt(year, 10) <= 1924) {
        if (isComposerDisplaying.puccini !== true) {
            graphicsLayer.graphics.add(pucciniPointGraphic);
            isComposerDisplaying.puccini = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(pucciniPointGraphic);
        isComposerDisplaying.puccini = false;
    }
    // SaintSäens
    if (parseInt(year, 10) >= 1835 && parseInt(year, 10) <= 1921) {
        if (isComposerDisplaying.saintSaëns !== true) {
            graphicsLayer.graphics.add(saintSaënsPointGraphic);
            isComposerDisplaying.saintSaëns = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(saintSaënsPointGraphic);
        isComposerDisplaying.saintSaëns = false;
    }
    // Strauss
    if (parseInt(year, 10) >= 1864 && parseInt(year, 10) <= 1949) {
        if (isComposerDisplaying.strauss !== true) {
            graphicsLayer.graphics.add(straussPointGraphic);
            isComposerDisplaying.strauss = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(straussPointGraphic);
        isComposerDisplaying.strauss = false;
    }
    // Mahler
    if (parseInt(year, 10) >= 1860 && parseInt(year, 10) <= 1911) {
        if (isComposerDisplaying.mahler !== true) {
            graphicsLayer.graphics.add(mahlerPointGraphic);
            isComposerDisplaying.mahler = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(mahlerPointGraphic);
        isComposerDisplaying.mahler = false;
    }
    // Debussy
    if (parseInt(year, 10) >= 1862 && parseInt(year, 10) <= 1918) {
        if (isComposerDisplaying.debussy !== true) {
            graphicsLayer.graphics.add(debussyPointGraphic);
            isComposerDisplaying.debussy = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(debussyPointGraphic);
        isComposerDisplaying.debussy = false;
    }
    // Rachmaninoff
    if (parseInt(year, 10) >= 1873 && parseInt(year, 10) <= 1943) {
        if (isComposerDisplaying.rachmaninoff !== true) {
            graphicsLayer.graphics.add(rachmaninoffPointGraphic);
            isComposerDisplaying.rachmaninoff = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(rachmaninoffPointGraphic);
        isComposerDisplaying.rachmaninoff = false;
    }
    // Sibelius
    if (parseInt(year, 10) >= 1865 && parseInt(year, 10) <= 1957) {
        if (isComposerDisplaying.sibelius !== true) {
            graphicsLayer.graphics.add(sibeliusPointGraphic);
            isComposerDisplaying.sibelius = true;
        }
    }
    else {
        graphicsLayer.graphics.remove(sibeliusPointGraphic);
        isComposerDisplaying.sibelius = false;
    }
}, 100);

map.add(graphicsLayer);







