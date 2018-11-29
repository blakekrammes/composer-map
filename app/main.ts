import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import Point = require("esri/geometry/Point");
import PictureMarkerSymbol = require("esri/symbols/PictureMarkerSymbol");
import Graphic = require("esri/Graphic");

// beethoven
let beethovenMarker = new PictureMarkerSymbol({
    url: "https://236izu11yygk2uo6po3yerii7d6-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/beethoven-350x350.png",
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
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Joseph_Haydn.jpg/220px-Joseph_Haydn.jpg",
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
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Croce-Mozart-Detail.jpg/250px-Croce-Mozart-Detail.jpg",
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
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Antonio_Salieri_painted_by_Joseph_Willibrord_M%C3%A4hler.jpg/220px-Antonio_Salieri_painted_by_Joseph_Willibrord_M%C3%A4hler.jpg",
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

const map = new EsriMap({
  basemap: "national-geographic"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [1.8253548901935233, 48.70224135068023],
  zoom: 5
});

view.graphics.addMany([beethovenPointGraphic, haydnPointGraphic, mozartPointGraphic, salieriPointGraphic]);

let year;

setInterval(function() { 
    year = (<HTMLInputElement>document.getElementById('year')).value;
}, 200);

console.log(year)



