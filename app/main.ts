import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import Point = require("esri/geometry/Point");
import PictureMarkerSymbol = require("esri/symbols/PictureMarkerSymbol");
import Graphic = require("esri/Graphic");
import GraphicsLayer = require("esri/layers/GraphicsLayer");
import PopupTemplate = require("esri/PopupTemplate");
import composers from './composers';

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

const graphicsLayer = new GraphicsLayer({}); 

let year;

window.setInterval(() => {
    year = (<HTMLInputElement>document.getElementById('year')).value;

    let intYear = parseInt(year, 10);

    // keep the view from zooming out too far
    if (view.zoom < 3) {
        setTimeout(function(){
            view.zoom = 3;
        }, 200);
    }

    // create and place a graphic for each composer living at the specified year 
    composers.forEach(composer => {
        if (intYear >= composer.birth && intYear <= composer.death) {
            if (composer.isDisplaying !== true) {

                graphicsLayer.graphics.items.forEach(graphic => {
                    if (graphic.geometry.longitude === composer.coordinates.longitude && graphic.geometry.latitude === composer.coordinates.latitude) {
                        composer.coordinates.longitude = composer.coordinates.longitude + .08;
                    }
                });

                let marker = new PictureMarkerSymbol({
                    url: composer.url,
                    width: "32px",
                    height: "32px"
                });
                let point = new Point({
                    longitude: composer.coordinates.longitude,
                    latitude: composer.coordinates.latitude
                });
                let popupTemplate = new PopupTemplate({
                    title: composer.popupTitle,
                    content: composer.popupContent
                });
                // use the window object to store unique variable names for each composer graphic so they can later be removed by name
                window[composer.name+'Graphic'] = new Graphic({
                    geometry: point,
                    symbol: marker,
                    popupTemplate: popupTemplate
                });

                graphicsLayer.graphics.add(window[composer.name+'Graphic']);
                composer.isDisplaying = true;
            }
        }
    });

    // remove any composer graphics that are not living at the specified year
    composers.forEach(composer => {
        if (intYear < composer.birth || intYear > composer.death) {
            graphicsLayer.graphics.remove(window[composer.name+'Graphic']);
            composer.isDisplaying = false;
        }
    });

}, 100);


map.add(graphicsLayer);

// console.log(graphicsLayer.graphics.items)

let inputDiv = (<HTMLInputElement>document.getElementsByClassName('input-div')[0]);

let domYear = (<HTMLInputElement>document.getElementById('year'));

view.ui.add(inputDiv, "top-right");
view.ui.add(domYear);

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




