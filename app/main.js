define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "esri/Graphic"], function (require, exports, EsriMap, MapView, Point, PictureMarkerSymbol, Graphic) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // beethoven
    var beethovenMarker = new PictureMarkerSymbol({
        url: "https://236izu11yygk2uo6po3yerii7d6-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/beethoven-350x350.png",
        width: "32px",
        height: "32px"
    });
    var beethovenPoint = new Point({
        longitude: 7.104469222936351,
        latitude: 50.736576630668395
    });
    var beethovenPointGraphic = new Graphic({
        geometry: beethovenPoint,
        symbol: beethovenMarker
    });
    // haydn
    var haydnMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Joseph_Haydn.jpg/220px-Joseph_Haydn.jpg",
        width: "32px",
        height: "32px"
    });
    var haydnPoint = new Point({
        longitude: 16.8589,
        latitude: 48.0656
    });
    var haydnPointGraphic = new Graphic({
        geometry: haydnPoint,
        symbol: haydnMarker
    });
    // mozart
    var mozartMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Croce-Mozart-Detail.jpg/250px-Croce-Mozart-Detail.jpg",
        width: "32px",
        height: "32px"
    });
    var mozartPoint = new Point({
        longitude: 13.0550,
        latitude: 47.8095
    });
    var mozartPointGraphic = new Graphic({
        geometry: mozartPoint,
        symbol: mozartMarker
    });
    // salieri
    var salieriMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Antonio_Salieri_painted_by_Joseph_Willibrord_M%C3%A4hler.jpg/220px-Antonio_Salieri_painted_by_Joseph_Willibrord_M%C3%A4hler.jpg",
        width: "32px",
        height: "32px"
    });
    var salieriPoint = new Point({
        longitude: 11.3032,
        latitude: 45.1936
    });
    var salieriPointGraphic = new Graphic({
        geometry: salieriPoint,
        symbol: salieriMarker
    });
    var map = new EsriMap({
        basemap: "national-geographic"
    });
    var view = new MapView({
        map: map,
        container: "viewDiv",
        center: [1.8253548901935233, 48.70224135068023],
        zoom: 5
    });
    view.graphics.addMany([beethovenPointGraphic, haydnPointGraphic, mozartPointGraphic, salieriPointGraphic]);
    var year;
    setInterval(function () {
        year = document.getElementById('year').value;
    }, 200);
    console.log(year);
});
//# sourceMappingURL=main.js.map