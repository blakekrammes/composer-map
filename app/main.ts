import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");
import Point = require("esri/geometry/Point");
import PictureMarkerSymbol = require("esri/symbols/PictureMarkerSymbol");
import Graphic = require("esri/Graphic");
import GraphicsLayer = require("esri/layers/GraphicsLayer");
import PopupTemplate = require("esri/PopupTemplate");
import composers from './composers';
import $ = require('jquery');

// esri map
const map = new EsriMap({
    basemap: "national-geographic"
  });
  
const view = new MapView({
    map: map,
    container: "viewDiv",
    center: [11.025718049370735, 49.96332005792951],
    zoom: 4,
    highlightOptions: {
        color: [255, 255, 224, 1],
        haloOpacity: 1,
        fillOpacity: 0.2
    }
});


let fancyDiv:any = (<HTMLElement>document.getElementsByClassName('fancyDiv')[0]);
let youtubeLink:any;
let youFrame:any;

const graphicsLayer = new GraphicsLayer({}); 

let year:any;
let closeButtonDiv = (<HTMLElement>document.getElementById("buttonDiv"));

function closeVideo(e:any) {
    fancyDiv.style.display = "none";
    youFrame.remove();
    closeButtonDiv.style.display = "none";
}

window.setInterval(() => {
    year = (<HTMLOutputElement>document.getElementById('year')).value;
    let intYear = parseInt(year, 10);

    fancyDiv = (<HTMLElement>document.getElementsByClassName('fancyDiv')[0]);
    youtubeLink = (<HTMLElement>document.getElementsByClassName('youtubeLinkAlias')[0]);

    composers.forEach(composer => {
        if (intYear >= composer.birth && intYear <= composer.death) {
            let youtub = composer.youtubeLink;

            function clickCallback(e) {                
                if (composer.popupContent.includes(e.target.innerHTML)) {
                    // console.log('hi')
                    if (fancyDiv === undefined) {
                        // console.log(fancyDiv)
                        fancyDiv = document.createElement("div");
                        // console.log(fancyDiv)
                        console.log(youFrame)
                    }
                    fancyDiv.innerHTML = '<iframe id="youFrame" width="360" height="215" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                    youFrame = document.getElementById("youFrame"); 
                    youFrame.src = youtub;
                    
                    closeButtonDiv.style.display = "block";
                    fancyDiv.style.display = "block";
                    view.ui.add(closeButtonDiv, "bottom-right");
                    view.ui.add(fancyDiv, "bottom-right");
                    closeButtonDiv.addEventListener('click', closeVideo);
                }
            }
        
            if (youtubeLink !== undefined) {
                youtubeLink.addEventListener('click', clickCallback);
            }
        }
    });
     
    // keep the view from zooming out too far
    if (view.zoom < 3) {
        setTimeout(function(){
            view.zoom = 3;
        }, 200);
    }

    // create and place a graphic for each composer living at the specified year 
    composers.forEach(composer => {
        if (intYear >= composer.birth && intYear <= composer.death) {
            if (composer.isDisplaying !== true && composer.isUpdatedGraphicDisplaying !== true) {

                graphicsLayer.graphics.items.forEach(function(graphic:any) {
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
        else if (intYear < composer.birth || intYear > composer.death) {
            graphicsLayer.graphics.remove(window[composer.name+'Graphic']);   
            composer.isDisplaying = false;
            graphicsLayer.graphics.remove(window[composer.name+'enlargedGraphic']);
            composer.isUpdatedGraphicDisplaying = false;
        }
    });

    // remove any composer graphics that are not living at the specified year
    composers.forEach(composer => {
        if (intYear < composer.birth || intYear > composer.death) {
            graphicsLayer.graphics.remove(window[composer.name+'Graphic']);
            graphicsLayer.graphics.remove(window[composer.name+'enlargedGraphic']);
            composer.isDisplaying = false;
            composer.isUpdatedGraphicDisplaying = false;
        }
    });

//     let thingsToRemove = composers.filter(function(composer) {
//         if (intYear < composer.birth && intYear > composer.death) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     })

// console.log(thingsToRemove)

//     graphicsLayer.graphics.removeMany(thingsToRemove);

}, 100);

map.add(graphicsLayer);

function changeCursor(res:any) {
    if (res.results.length > 0) {
        document.getElementById('viewDiv').style.cursor = 'pointer';
    }
    else {
        document.getElementById('viewDiv').style.cursor = 'default';
    }
}

function changeImgSize(res) {

    year = (<HTMLOutputElement>document.getElementById('year')).value;

    let intYear = parseInt(year, 10);

    if (res.results.length > 0) {
        composers.forEach(composer => {
            if (intYear >= composer.birth && intYear <= composer.death) {
                if (composer.isUpdatedGraphicDisplaying !== true
                    && res.results[0].graphic.geometry.latitude === composer.coordinates.latitude 
                    && res.results[0].graphic.geometry.longitude === composer.coordinates.longitude) {

                    let updatedMarker = new PictureMarkerSymbol({
                        url: composer.url,
                        width: "50px",
                        height: "50px"
                    });
                    let point = new Point({
                        longitude: composer.coordinates.longitude,
                        latitude: composer.coordinates.latitude
                    });
                    let popupTemplate = new PopupTemplate({
                        title: composer.popupTitle,
                        content: composer.popupContent
                    });
                    window[composer.name+'enlargedGraphic'] = new Graphic({
                        geometry: point,
                        symbol: updatedMarker,
                        popupTemplate: popupTemplate
                    });

                    // when you're adding graphics, remove one before adding another
                    let preexistingGraphics = graphicsLayer.graphics.filter(function(graphic){
                        return graphic.popupTemplate.title === composer.popupTitle; 
                    });

                    if (preexistingGraphics.length > 1 && composer.isUpdatedGraphicDisplaying === false) {
                        graphicsLayer.graphics.removeMany(preexistingGraphics);
                    }

                    // add the new, hovered graphic to the view
                    if (preexistingGraphics.length === 1) {
                        graphicsLayer.graphics.add(window[composer.name+'enlargedGraphic']);
                        composer.isUpdatedGraphicDisplaying = true;
                    }
                    
                    // remove the original graphic with a bit of delay for a smooth transition 
                    setTimeout(function() {
                        if (preexistingGraphics.length === 1 && composer.isUpdatedGraphicDisplaying === true) {
                            graphicsLayer.graphics.remove(window[composer.name+'Graphic']);
                            composer.isDisplaying = false;
                        }
                    }, 250)                      
                }
            }
        });
    }
    else {
        composers.forEach(composer => {
            if (intYear >= composer.birth && intYear <= composer.death && window[composer.name+'enlargedGraphic'] 
                && composer.isUpdatedGraphicDisplaying !== false) {
                
                let preexistingGraphics = graphicsLayer.graphics.filter(function(graphic){
                    return graphic.popupTemplate.title === composer.popupTitle; 
                });
                
                setTimeout(function(){
                    if (preexistingGraphics.length === 1) {
                        graphicsLayer.graphics.remove(window[composer.name+'enlargedGraphic']);
                        composer.isUpdatedGraphicDisplaying = false;
                    }
                }, 25);

                if (preexistingGraphics.length === 1) {
                    graphicsLayer.graphics.add(window[composer.name+'Graphic']);
                    composer.isDisplaying = true;
                }                                   
            }
        });
    }
}

view.on("pointer-move", function(event){

    let screenPoint = {
        x: event.x,
        y: event.y
    }

    view.hitTest(screenPoint)
        .then(function(response) {
            changeCursor(response);
            changeImgSize(response);
        });
  });

let inputDiv = (<HTMLElement>document.getElementsByClassName('input-div')[0]);

let domYear = (<HTMLOutputElement>document.getElementById('year'));

view.ui.add(inputDiv, "top-right");

view.ui.add(domYear);




