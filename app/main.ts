import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import Point = require("esri/geometry/Point");
import PictureMarkerSymbol = require("esri/symbols/PictureMarkerSymbol");
import Graphic = require("esri/Graphic");

// josquin
let josquinMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/josquin.jpg",
    width: "32px",
    height: "32px"
});

let josquinPoint = new Point({
    longitude: 4.0621,
    latitude: 50.5257
});

let josquinPointGraphic = new Graphic({
    geometry: josquinPoint,
    symbol: josquinMarker
});

// byrd
let byrdMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/byrd.jpg",
    width: "32px",
    height: "32px"
});

let byrdPoint = new Point({
    longitude: 0.1278,
    latitude: 51.5074
});

let byrdPointGraphic = new Graphic({
    geometry: byrdPoint,
    symbol: byrdMarker
});

// palestrina
let palestrinaMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/palestrina.jpg",
    width: "32px",
    height: "32px"
});

let palestrinaPoint = new Point({
    longitude: 12.8887,
    latitude: 41.8383
});

let palestrinaPointGraphic = new Graphic({
    geometry: palestrinaPoint,
    symbol: palestrinaMarker
});

// lassus
let lassusMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/lassus.jpg",
    width: "32px",
    height: "32px"
});

let lassusPoint = new Point({
    longitude: 3.9567,
    latitude: 50.4542
});

let lassusPointGraphic = new Graphic({
    geometry: lassusPoint,
    symbol: lassusMarker
});

// dowland
let dowlandMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/dowland.jpg",
    width: "32px",
    height: "32px"
});

let dowlandPoint = new Point({
    longitude: 0.1357,
    latitude: 51.4975
});

let dowlandPointGraphic = new Graphic({
    geometry: dowlandPoint,
    symbol: dowlandMarker
});

// purcell
let purcellMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/purcell.jpg",
    width: "32px",
    height: "32px"
});

let purcellPoint = new Point({
    longitude: 0.1357,
    latitude: 51.4975
});

let purcellPointGraphic = new Graphic({
    geometry: purcellPoint,
    symbol: purcellMarker
});

// monteverdi
let monteverdiMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/monteverdi.jpg",
    width: "32px",
    height: "32px"
});

let monteverdiPoint = new Point({
    longitude: 10.0227,
    latitude: 45.1332
});

let monteverdiPointGraphic = new Graphic({
    geometry: monteverdiPoint,
    symbol: monteverdiMarker
});

// vivaldi
let vivaldiMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/vivaldi.jpg",
    width: "32px",
    height: "32px"
});

let vivaldiPoint = new Point({
    longitude: 12.3155,
    latitude: 45.4408
});

let vivaldiPointGraphic = new Graphic({
    geometry: vivaldiPoint,
    symbol: vivaldiMarker
});

// couperin
let couperinMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/couperin.jpg",
    width: "32px",
    height: "32px"
});

let couperinPoint = new Point({
    longitude: 2.3522,
    latitude: 48.8566
});

let couperinPointGraphic = new Graphic({
    geometry: couperinPoint,
    symbol: couperinMarker
});

// albinoni
let albinoniMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/albinoni.jpg",
    width: "32px",
    height: "32px"
});

let albinoniPoint = new Point({
    longitude: 12.3155,
    latitude: 45.4408
});

let albinoniPointGraphic = new Graphic({
    geometry: albinoniPoint,
    symbol: albinoniMarker
});

// telemann
let telemannMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/telemann.jpg",
    width: "32px",
    height: "32px"
});

let telemannPoint = new Point({
    longitude: 11.6276,
    latitude: 52.1205
});

let telemannPointGraphic = new Graphic({
    geometry: telemannPoint,
    symbol: telemannMarker
});

// bach
let bachMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/bach.jpg",
    width: "32px",
    height: "32px"
});

let bachPoint = new Point({
    longitude: 10.3147,
    latitude: 50.9796
});

let bachPointGraphic = new Graphic({
    geometry: bachPoint,
    symbol: bachMarker
});

// scarlatti
let scarlattiMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/scarlatti.jpg",
    width: "32px",
    height: "32px"
});

let scarlattiPoint = new Point({
    longitude: 81.7948,
    latitude: 26.1420
});

let scarlattiPointGraphic = new Graphic({
    geometry: scarlattiPoint,
    symbol: scarlattiMarker
});

// handel
let handelMarker = new PictureMarkerSymbol({
    url: "./composerMap_images/handel.jpg",
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
    url: "./composerMap_images/beethoven.jpg",
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
    url: "./composerMap_images/haydn.jpg",
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
    url: "./composerMap_images/mozart.jpg",
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
    url: "./composerMap_images/salieri.jpg",
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
    url: "./composerMap_images/vonWeber.jpg",
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
    url: "./composerMap_images/schubert.jpg",
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
    url: "./composerMap_images/berlioz.jpg",
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
    url: "./composerMap_images/chopin.jpg",
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
    url: "./composerMap_images/liszt.jpg",
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
    url: "./composerMap_images/mendelssohn.jpg",
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
    url: "./composerMap_images/brahms.jpg",
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
    url: "./composerMap_images/schumann.jpg",
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
    url: "./composerMap_images/grieg.jpg",
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
    url: "./composerMap_images/dvorak.jpg",
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
    url: "./composerMap_images/mussorgsky.jpg",
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
    url: "./composerMap_images/bruckner.jpg",
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
    url: "./composerMap_images/tchaikovsky.jpg",
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
    url: "./composerMap_images/puccini.jpg",
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
    url: "./composerMap_images/sainSaëns.jpg",
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
    url: "./composerMap_images/strauss.jpg",
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
    url: "./composerMap_images/mahler.jpg",
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
    url: "./composerMap_images/debussy.jpg",
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
    url: "./composerMap_images/rachmaninoff.jpg",
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
    url: "./composerMap_images/sibelius.jpg",
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
  center: [1.8253548901935233, 48.70224135068023],
  zoom: 4
});

let year;

window.setInterval(() => {
    year = (<HTMLInputElement>document.getElementById('year')).value;
    // Josquin
    if (parseInt(year, 10) >= 1450 && parseInt(year, 10) <= 1521) {
        view.graphics.add(josquinPointGraphic);
    }
    else {
        view.graphics.remove(josquinPointGraphic);
    }
    // Palestrina
    if (parseInt(year, 10) >= 1525 && parseInt(year, 10) <= 1594) {
        view.graphics.add(palestrinaPointGraphic);
    }
    else {
        view.graphics.remove(palestrinaPointGraphic);
    }
    // Lassus
    if (parseInt(year, 10) >= 1532 && parseInt(year, 10) <= 1594) {
        view.graphics.add(lassusPointGraphic);
    }
    else {
        view.graphics.remove(lassusPointGraphic);
    }
    // Byrd
    if (parseInt(year, 10) >= 1539 && parseInt(year, 10) <= 1623) {
        view.graphics.add(byrdPointGraphic);
    }
    else {
        view.graphics.remove(byrdPointGraphic);
    }
    // Dowland
    if (parseInt(year, 10) >= 1563 && parseInt(year, 10) <= 1626) {
        view.graphics.add(dowlandPointGraphic);
    }
    else {
        view.graphics.remove(dowlandPointGraphic);
    }
    // Purcell
    if (parseInt(year, 10) >= 1659 && parseInt(year, 10) <= 1695) {
        view.graphics.add(purcellPointGraphic);
    }
    else {
        view.graphics.remove(purcellPointGraphic);
    }
    // Monteverdi
    if (parseInt(year, 10) >= 1567 && parseInt(year, 10) <= 1643) {
        view.graphics.add(monteverdiPointGraphic);
    }
    else {
        view.graphics.remove(monteverdiPointGraphic);
    }
    // Couperin
    if (parseInt(year, 10) >= 1668 && parseInt(year, 10) <= 1733) {
        view.graphics.add(couperinPointGraphic);
    }
    else {
        view.graphics.remove(couperinPointGraphic);
    }
    // Vivaldi
    if (parseInt(year, 10) >= 1678 && parseInt(year, 10) <= 1741) {
        view.graphics.add(vivaldiPointGraphic);
    }
    else {
        view.graphics.remove(vivaldiPointGraphic);
    }
    // Albinoni
    if (parseInt(year, 10) >= 1671 && parseInt(year, 10) <= 1751) {
        view.graphics.add(albinoniPointGraphic);
    }
    else {
        view.graphics.remove(albinoniPointGraphic);
    }
    // Telemann
    if (parseInt(year, 10) >= 1681 && parseInt(year, 10) <= 1767) {
        view.graphics.add(telemannPointGraphic);
    }
    else {
        view.graphics.remove(telemannPointGraphic);
    }
    // Bach
    if (parseInt(year, 10) >= 1685 && parseInt(year, 10) <= 1750) {
        view.graphics.add(bachPointGraphic);
    }
    else {
        view.graphics.remove(bachPointGraphic);
    }
    // Scarlatti
    if (parseInt(year, 10) >= 1685 && parseInt(year, 10) <= 1757) {
        view.graphics.add(scarlattiPointGraphic);
    }
    else {
        view.graphics.remove(scarlattiPointGraphic);
    }
    // Handel
    if (parseInt(year, 10) >= 1685 && parseInt(year, 10) <= 1759) {
        view.graphics.add(handelPointGraphic);
    }
    else {
        view.graphics.remove(handelPointGraphic);
    }
    // Beethoven
    if (parseInt(year, 10) >= 1770 && parseInt(year, 10) <= 1827) {
        view.graphics.add(beethovenPointGraphic);
    }
    else {
        view.graphics.remove(beethovenPointGraphic);
    }
    // Mozart
    if (parseInt(year, 10) >= 1756 && parseInt(year, 10) <= 1791) {
        view.graphics.add(mozartPointGraphic);
    }
    else {
        view.graphics.remove(mozartPointGraphic);
    }
    // Haydn
    if (parseInt(year, 10) >= 1732 && parseInt(year, 10) <= 1809) {
        view.graphics.add(haydnPointGraphic);
    }
    else {
        view.graphics.remove(haydnPointGraphic);
    }
    // Salieri
    if (parseInt(year, 10) >= 1750 && parseInt(year, 10) <= 1825) {
        view.graphics.add(salieriPointGraphic);
    }
    else {
        view.graphics.remove(salieriPointGraphic);
    }
    // VonWeber
    if (parseInt(year, 10) >= 1786 && parseInt(year, 10) <= 1826) {
        view.graphics.add(vonWeberPointGraphic);
    }
    else {
        view.graphics.remove(vonWeberPointGraphic);
    }
    // Schubert
    if (parseInt(year, 10) >= 1797 && parseInt(year, 10) <= 1828) {
        view.graphics.add(schubertPointGraphic);
    }
    else {
        view.graphics.remove(schubertPointGraphic);
    }
    // Berlioz
    if (parseInt(year, 10) >= 1803 && parseInt(year, 10) <= 1869) {
        view.graphics.add(berliozPointGraphic);
    }
    else {
        view.graphics.remove(berliozPointGraphic);
    }
    // Chopin
    if (parseInt(year, 10) >= 1810 && parseInt(year, 10) <= 1849) {
        view.graphics.add(chopinPointGraphic);
    }
    else {
        view.graphics.remove(chopinPointGraphic);
    }
    // Mendelssohn
    if (parseInt(year, 10) >= 1809 && parseInt(year, 10) <= 1847) {
        view.graphics.add(mendelssohnPointGraphic);
    }
    else {
        view.graphics.remove(mendelssohnPointGraphic);
    }
    // Schumann
    if (parseInt(year, 10) >= 1810 && parseInt(year, 10) <= 1856) {
        view.graphics.add(schumannPointGraphic);
    }
    else {
        view.graphics.remove(schumannPointGraphic);
    }
    // Liszt
    if (parseInt(year, 10) >= 1811 && parseInt(year, 10) <= 1886) {
        view.graphics.add(lisztPointGraphic);
    }
    else {
        view.graphics.remove(lisztPointGraphic);
    }
    // Brahms
    if (parseInt(year, 10) >= 1833 && parseInt(year, 10) <= 1897) {
        view.graphics.add(brahmsPointGraphic);
    }
    else {
        view.graphics.remove(brahmsPointGraphic);
    }
    // Grieg
    if (parseInt(year, 10) >= 1843 && parseInt(year, 10) <= 1907) {
        view.graphics.add(griegPointGraphic);
    }
    else {
        view.graphics.remove(griegPointGraphic);
    }
    // Dvorak
    if (parseInt(year, 10) >= 1841 && parseInt(year, 10) <= 1904) {
        view.graphics.add(dvorakPointGraphic);
    }
    else {
        view.graphics.remove(dvorakPointGraphic);
    }
    // Mussorgsky
    if (parseInt(year, 10) >= 1839 && parseInt(year, 10) <= 1881) {
        view.graphics.add(mussorgskyPointGraphic);
    }
    else {
        view.graphics.remove(mussorgskyPointGraphic);
    }
    // Bruckner
    if (parseInt(year, 10) >= 1824 && parseInt(year, 10) <= 1896) {
        view.graphics.add(brucknerPointGraphic);
    }
    else {
        view.graphics.remove(brucknerPointGraphic);
    }
    // Tchaikovsky
    if (parseInt(year, 10) >= 1840 && parseInt(year, 10) <= 1893) {
        view.graphics.add(tchaikovskyPointGraphic);
    }
    else {
        view.graphics.remove(tchaikovskyPointGraphic);
    }
    // Puccini
    if (parseInt(year, 10) >= 1858 && parseInt(year, 10) <= 1924) {
        view.graphics.add(pucciniPointGraphic);
    }
    else {
        view.graphics.remove(pucciniPointGraphic);
    }
    // SaintSäens
    if (parseInt(year, 10) >= 1835 && parseInt(year, 10) <= 1921) {
        view.graphics.add(saintSaënsPointGraphic);
    }
    else {
        view.graphics.remove(saintSaënsPointGraphic);
    }
    // Strauss
    if (parseInt(year, 10) >= 1864 && parseInt(year, 10) <= 1949) {
        view.graphics.add(straussPointGraphic);
    }
    else {
        view.graphics.remove(straussPointGraphic);
    }
    // Mahler
    if (parseInt(year, 10) >= 1860 && parseInt(year, 10) <= 1911) {
        view.graphics.add(mahlerPointGraphic);
    }
    else {
        view.graphics.remove(mahlerPointGraphic);
    }
    // Debussy
    if (parseInt(year, 10) >= 1862 && parseInt(year, 10) <= 1918) {
        view.graphics.add(debussyPointGraphic);
    }
    else {
        view.graphics.remove(debussyPointGraphic);
    }
    // Rachmaninoff
    if (parseInt(year, 10) >= 1873 && parseInt(year, 10) <= 1943) {
        view.graphics.add(rachmaninoffPointGraphic);
    }
    else {
        view.graphics.remove(rachmaninoffPointGraphic);
    }
    // Sibelius
    if (parseInt(year, 10) >= 1865 && parseInt(year, 10) <= 1957) {
        view.graphics.add(sibeliusPointGraphic);
    }
    else {
        view.graphics.remove(sibeliusPointGraphic);
    }
}, 100);

// view.graphics.addMany([beethovenPointGraphic, haydnPointGraphic, mozartPointGraphic, salieriPointGraphic]);






