define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/PopupTemplate", "./composers"], function (require, exports, EsriMap, MapView, Point, PictureMarkerSymbol, Graphic, GraphicsLayer, PopupTemplate, composers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // esri map
    var map = new EsriMap({
        basemap: "national-geographic"
    });
    var view = new MapView({
        map: map,
        container: "viewDiv",
        center: [11.025718049370735, 49.96332005792951],
        zoom: 4
    });
    var graphicsLayer = new GraphicsLayer({});
    var year;
    window.setInterval(function () {
        year = document.getElementById('year').value;
        var intYear = parseInt(year, 10);
        // let point, marker, popupTemplate, pointGraphic:any;
        composers_1.default.forEach(function (composer) {
            if (intYear >= composer.birth && intYear <= composer.death) {
                if (composer.isDisplaying !== true) {
                    window[composer.name + 'Marker'] = new PictureMarkerSymbol({
                        url: composer.url,
                        width: "32px",
                        height: "32px"
                    });
                    window[composer.name + 'Point'] = new Point({
                        longitude: composer.coordinates.longitude,
                        latitude: composer.coordinates.latitude
                    });
                    window[composer.name + 'PopupTemplate'] = new PopupTemplate({
                        title: composer.popupTitle,
                        content: composer.popupContent
                    });
                    window[composer.name + 'Graphic'] = new Graphic({
                        geometry: window[composer.name + 'Point'],
                        symbol: window[composer.name + 'Marker'],
                        popupTemplate: window[composer.name + 'PopupTemplate']
                    });
                    graphicsLayer.graphics.add(window[composer.name + 'Graphic']);
                    composer.isDisplaying = true;
                }
            }
        });
        composers_1.default.forEach(function (composer) {
            if (intYear < composer.birth || intYear > composer.death) {
                graphicsLayer.graphics.remove(window[composer.name + 'Graphic']);
                composer.isDisplaying = false;
            }
        });
    }, 100);
    map.add(graphicsLayer);
    console.log(window);
});
// view.on("pointer-move", function(event){
//     console.log(event)
//     view.hitTest(event)
//         .then(function(response){
//             console.log(response)
//             // if (response.results) {
//             //     console.log(response)
//             // }
//         // check if a feature is returned from the hurricanesLayer
//         // do something with the result graphic
//         // const graphic = response.results.filter(function (result) {
//         //     // console.log(result.graphic.layer.graphics)
//         //     // return result.graphic === graphicsLayer;
//         // })[0].graphic;
//     });
// });
// view.on("pointer-move", eventHandler);
// function eventHandler(ev) {
//     view.hitTest(ev)
//     .then(getGraphics);
// }
// function getGraphics(res) {
//     console.log(res);
// }
//# sourceMappingURL=main.js.map