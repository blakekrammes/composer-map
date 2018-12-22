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
        zoom: 4,
        highlightOptions: {
            color: [255, 255, 224, 1],
            haloOpacity: 1,
            fillOpacity: 0.2
        }
    });
    var fancyDiv;
    var youtubeLink;
    var graphicsLayer = new GraphicsLayer({});
    var year;
    var i = 1;
    window.setInterval(function () {
        year = document.getElementById('year').value;
        var intYear = parseInt(year, 10);
        fancyDiv = document.getElementsByClassName('fancyDiv')[0];
        youtubeLink = document.getElementsByClassName('youtubeLinkAlias')[0];
        composers_1.default.forEach(function (composer) {
            if (intYear >= composer.birth && intYear <= composer.death) {
                var youtub_1 = composer.youtubeLink;
                function clickCallback(e) {
                    if (composer.popupContent.includes(e.target.innerHTML)) {
                        fancyDiv.innerHTML = '<iframe id="youFrame" width="360" height="215" src=`${youtub}` frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                        var youFrame = document.getElementById("youFrame");
                        youFrame.src = youtub_1;
                        console.log(youFrame);
                        view.ui.add(fancyDiv, "bottom-right");
                    }
                }
                if (i === 1 && youtubeLink !== undefined) {
                    youtubeLink.addEventListener('click', clickCallback);
                    i = 2;
                }
                else if (youtubeLink !== undefined) {
                    youtubeLink.removeEventListener('click', clickCallback);
                    i = 1;
                }
            }
        });
        // keep the view from zooming out too far
        if (view.zoom < 3) {
            setTimeout(function () {
                view.zoom = 3;
            }, 200);
        }
        // create and place a graphic for each composer living at the specified year 
        composers_1.default.forEach(function (composer) {
            if (intYear >= composer.birth && intYear <= composer.death) {
                if (composer.isDisplaying !== true && composer.isUpdatedGraphicDisplaying !== true) {
                    graphicsLayer.graphics.items.forEach(function (graphic) {
                        if (graphic.geometry.longitude === composer.coordinates.longitude && graphic.geometry.latitude === composer.coordinates.latitude) {
                            composer.coordinates.longitude = composer.coordinates.longitude + .08;
                        }
                    });
                    var marker = new PictureMarkerSymbol({
                        url: composer.url,
                        width: "32px",
                        height: "32px"
                    });
                    var point = new Point({
                        longitude: composer.coordinates.longitude,
                        latitude: composer.coordinates.latitude
                    });
                    var popupTemplate = new PopupTemplate({
                        title: composer.popupTitle,
                        content: composer.popupContent
                    });
                    // use the window object to store unique variable names for each composer graphic so they can later be removed by name
                    window[composer.name + 'Graphic'] = new Graphic({
                        geometry: point,
                        symbol: marker,
                        popupTemplate: popupTemplate
                    });
                    graphicsLayer.graphics.add(window[composer.name + 'Graphic']);
                    composer.isDisplaying = true;
                }
            }
        });
        // remove any composer graphics that are not living at the specified year
        composers_1.default.forEach(function (composer) {
            if (intYear < composer.birth || intYear > composer.death) {
                graphicsLayer.graphics.remove(window[composer.name + 'Graphic']);
                graphicsLayer.graphics.remove(window[composer.name + 'enlargedGraphic']);
                composer.isDisplaying = false;
                composer.isUpdatedGraphicDisplaying = false;
            }
        });
    }, 100);
    map.add(graphicsLayer);
    function changeCursor(res) {
        if (res.results.length > 0) {
            document.getElementById('viewDiv').style.cursor = 'pointer';
        }
        else {
            document.getElementById('viewDiv').style.cursor = 'default';
        }
    }
    function changeImgSize(res) {
        year = document.getElementById('year').value;
        var intYear = parseInt(year, 10);
        if (res.results.length > 0) {
            composers_1.default.forEach(function (composer) {
                if (intYear >= composer.birth && intYear <= composer.death) {
                    if (composer.isUpdatedGraphicDisplaying !== true
                        && res.results[0].graphic.geometry.latitude === composer.coordinates.latitude
                        && res.results[0].graphic.geometry.longitude === composer.coordinates.longitude) {
                        var updatedMarker = new PictureMarkerSymbol({
                            url: composer.url,
                            width: "50px",
                            height: "50px"
                        });
                        var point = new Point({
                            longitude: composer.coordinates.longitude,
                            latitude: composer.coordinates.latitude
                        });
                        var popupTemplate = new PopupTemplate({
                            title: composer.popupTitle,
                            content: composer.popupContent
                        });
                        window[composer.name + 'enlargedGraphic'] = new Graphic({
                            geometry: point,
                            symbol: updatedMarker,
                            popupTemplate: popupTemplate
                        });
                        // when you're adding graphics, remove one before adding another
                        var preexistingGraphics_1 = graphicsLayer.graphics.filter(function (graphic) {
                            return graphic.popupTemplate.title === composer.popupTitle;
                        });
                        if (preexistingGraphics_1.length > 1 && composer.isUpdatedGraphicDisplaying === false) {
                            graphicsLayer.graphics.removeMany(preexistingGraphics_1);
                        }
                        // add the new, hovered graphic to the view
                        if (preexistingGraphics_1.length === 1) {
                            graphicsLayer.graphics.add(window[composer.name + 'enlargedGraphic']);
                            composer.isUpdatedGraphicDisplaying = true;
                        }
                        // remove the original graphic with a bit of delay for a smooth transition 
                        setTimeout(function () {
                            if (preexistingGraphics_1.length === 1 && composer.isUpdatedGraphicDisplaying === true) {
                                graphicsLayer.graphics.remove(window[composer.name + 'Graphic']);
                                composer.isDisplaying = false;
                            }
                        }, 250);
                    }
                }
            });
        }
        else {
            composers_1.default.forEach(function (composer) {
                if (intYear >= composer.birth && intYear <= composer.death && window[composer.name + 'enlargedGraphic']
                    && composer.isUpdatedGraphicDisplaying !== false) {
                    var preexistingGraphics_2 = graphicsLayer.graphics.filter(function (graphic) {
                        return graphic.popupTemplate.title === composer.popupTitle;
                    });
                    setTimeout(function () {
                        if (preexistingGraphics_2.length === 1) {
                            graphicsLayer.graphics.remove(window[composer.name + 'enlargedGraphic']);
                            composer.isUpdatedGraphicDisplaying = false;
                        }
                    }, 25);
                    if (preexistingGraphics_2.length === 1) {
                        graphicsLayer.graphics.add(window[composer.name + 'Graphic']);
                        composer.isDisplaying = true;
                    }
                }
            });
        }
    }
    view.on("pointer-move", function (event) {
        var screenPoint = {
            x: event.x,
            y: event.y
        };
        view.hitTest(screenPoint)
            .then(function (response) {
            changeCursor(response);
            changeImgSize(response);
        });
    });
    var inputDiv = document.getElementsByClassName('input-div')[0];
    var domYear = document.getElementById('year');
    view.ui.add(inputDiv, "top-right");
    view.ui.add(domYear);
});
//# sourceMappingURL=main.js.map