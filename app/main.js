define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "esri/Graphic"], function (require, exports, EsriMap, MapView, Point, PictureMarkerSymbol, Graphic) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // josquin
    var josquinMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Josquin.jpg/166px-Josquin.jpg",
        width: "32px",
        height: "32px"
    });
    var josquinPoint = new Point({
        longitude: 4.0621,
        latitude: 50.5257
    });
    var josquinPointGraphic = new Graphic({
        geometry: josquinPoint,
        symbol: josquinMarker
    });
    // byrd
    var byrdMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/William_Byrd.jpg/220px-William_Byrd.jpg",
        width: "32px",
        height: "32px"
    });
    var byrdPoint = new Point({
        longitude: 0.1278,
        latitude: 51.5074
    });
    var byrdPointGraphic = new Graphic({
        geometry: byrdPoint,
        symbol: byrdMarker
    });
    // palestrina
    var palestrinaMarker = new PictureMarkerSymbol({
        url: "http://www.belcanto.ru/media/images/persons/palestrina.jpg",
        width: "32px",
        height: "32px"
    });
    var palestrinaPoint = new Point({
        longitude: 12.8887,
        latitude: 41.8383
    });
    var palestrinaPointGraphic = new Graphic({
        geometry: palestrinaPoint,
        symbol: palestrinaMarker
    });
    // lassus
    var lassusMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Orlande_de_Lassus.jpg/250px-Orlande_de_Lassus.jpg",
        width: "32px",
        height: "32px"
    });
    var lassusPoint = new Point({
        longitude: 3.9567,
        latitude: 50.4542
    });
    var lassusPointGraphic = new Graphic({
        geometry: lassusPoint,
        symbol: lassusMarker
    });
    // dowland
    var dowlandMarker = new PictureMarkerSymbol({
        url: "https://lyricstranslate.com/files/styles/large/public/1563%20john%20dowland%20%283%29.jpg?itok=Q8dh9kY-",
        width: "32px",
        height: "32px"
    });
    var dowlandPoint = new Point({
        longitude: 0.1357,
        latitude: 51.4975
    });
    var dowlandPointGraphic = new Graphic({
        geometry: dowlandPoint,
        symbol: dowlandMarker
    });
    // purcell
    var purcellMarker = new PictureMarkerSymbol({
        url: "https://cdn.radiofrance.fr/s3/cruiser-production/2013/09/76733558-1a3f-42e0-992b-7e7733459327/200x200_550px-henry_purcell_by_john_clostermanr.jpg",
        width: "32px",
        height: "32px"
    });
    var purcellPoint = new Point({
        longitude: 0.1357,
        latitude: 51.4975
    });
    var purcellPointGraphic = new Graphic({
        geometry: purcellPoint,
        symbol: purcellMarker
    });
    // monteverdi
    var monteverdiMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bernardo_Strozzi_-_Claudio_Monteverdi_%28c.1630%29.jpg/220px-Bernardo_Strozzi_-_Claudio_Monteverdi_%28c.1630%29.jpg",
        width: "32px",
        height: "32px"
    });
    var monteverdiPoint = new Point({
        longitude: 10.0227,
        latitude: 45.1332
    });
    var monteverdiPointGraphic = new Graphic({
        geometry: monteverdiPoint,
        symbol: monteverdiMarker
    });
    // vivaldi
    var vivaldiMarker = new PictureMarkerSymbol({
        url: "https://cdn.britannica.com/s:300x300/30/154530-004-8D3A7064.jpg",
        width: "32px",
        height: "32px"
    });
    var vivaldiPoint = new Point({
        longitude: 12.3155,
        latitude: 45.4408
    });
    var vivaldiPointGraphic = new Graphic({
        geometry: vivaldiPoint,
        symbol: vivaldiMarker
    });
    // couperin
    var couperinMarker = new PictureMarkerSymbol({
        url: "https://i.pinimg.com/236x/65/d7/6f/65d76fa412911cc067707743e836b499--francois-couperin-composers.jpg",
        width: "32px",
        height: "32px"
    });
    var couperinPoint = new Point({
        longitude: 2.3522,
        latitude: 48.8566
    });
    var couperinPointGraphic = new Graphic({
        geometry: couperinPoint,
        symbol: couperinMarker
    });
    // albinoni
    var albinoniMarker = new PictureMarkerSymbol({
        url: "https://www.noviscore.fr/artiste-photo-tomaso-albinoni.jpg",
        width: "32px",
        height: "32px"
    });
    var albinoniPoint = new Point({
        longitude: 12.3155,
        latitude: 45.4408
    });
    var albinoniPointGraphic = new Graphic({
        geometry: albinoniPoint,
        symbol: albinoniMarker
    });
    // telemann
    var telemannMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Telemann.jpg/220px-Telemann.jpg",
        width: "32px",
        height: "32px"
    });
    var telemannPoint = new Point({
        longitude: 11.6276,
        latitude: 52.1205
    });
    var telemannPointGraphic = new Graphic({
        geometry: telemannPoint,
        symbol: telemannMarker
    });
    // bach
    var bachMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Johann_Sebastian_Bach.jpg/260px-Johann_Sebastian_Bach.jpg",
        width: "32px",
        height: "32px"
    });
    var bachPoint = new Point({
        longitude: 10.3147,
        latitude: 50.9796
    });
    var bachPointGraphic = new Graphic({
        geometry: bachPoint,
        symbol: bachMarker
    });
    // scarlatti
    var scarlattiMarker = new PictureMarkerSymbol({
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYcRCu-Frpguw_l3tq99XfyEZbr06IXkPMlJqokvXu6ex-fsXE",
        width: "32px",
        height: "32px"
    });
    var scarlattiPoint = new Point({
        longitude: 81.7948,
        latitude: 26.1420
    });
    var scarlattiPointGraphic = new Graphic({
        geometry: scarlattiPoint,
        symbol: scarlattiMarker
    });
    // handel
    var handelMarker = new PictureMarkerSymbol({
        url: "https://www.klassika.info/Komponisten/Haendel/Bild.png",
        width: "32px",
        height: "32px"
    });
    var handelPoint = new Point({
        longitude: 11.9688,
        latitude: 51.4970
    });
    var handelPointGraphic = new Graphic({
        geometry: handelPoint,
        symbol: handelMarker
    });
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
    // vonWeber
    var vonWeberMarker = new PictureMarkerSymbol({
        url: "http://artist1.cdn107.com/0fc/0fc72c078c1aa0e0289084b97907ee88_lg.jpg",
        width: "32px",
        height: "32px"
    });
    var vonWeberPoint = new Point({
        longitude: 10.6095,
        latitude: 54.1330
    });
    var vonWeberPointGraphic = new Graphic({
        geometry: vonWeberPoint,
        symbol: vonWeberMarker
    });
    // schubert
    var schubertMarker = new PictureMarkerSymbol({
        url: "https://gramophoneproduction.s3-accelerate.amazonaws.com/s3fs-public/styles/6_columns_wide/public/franz_schubert_composer_0.jpg?itok=L3q61elg",
        width: "32px",
        height: "32px"
    });
    var schubertPoint = new Point({
        longitude: 16.3524,
        latitude: 48.2266
    });
    var schubertPointGraphic = new Graphic({
        geometry: schubertPoint,
        symbol: schubertMarker
    });
    // berlioz
    var berliozMarker = new PictureMarkerSymbol({
        url: "http://artist3.cdn107.com/51a/51a67dfa8bd1296d2060cf4a84063e97_lg.jpg",
        width: "32px",
        height: "32px"
    });
    var berliozPoint = new Point({
        longitude: 5.2600,
        latitude: 45.3938
    });
    var berliozPointGraphic = new Graphic({
        geometry: berliozPoint,
        symbol: berliozMarker
    });
    // chopin
    var chopinMarker = new PictureMarkerSymbol({
        url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNTg2OTc5MzQx/frederic-chopin-9247162-1-402.jpg",
        width: "32px",
        height: "32px"
    });
    var chopinPoint = new Point({
        longitude: 20.3249,
        latitude: 52.2574
    });
    var chopinPointGraphic = new Graphic({
        geometry: chopinPoint,
        symbol: chopinMarker
    });
    // liszt
    var lisztMarker = new PictureMarkerSymbol({
        url: "https://music.osu.edu/sites/music.osu.edu/files/styles/250_square_thumbnail/public/events-images/Liszt_%28Lehmann_portrait%29%20250x.png?itok=C-W2kmV5",
        width: "32px",
        height: "32px"
    });
    var lisztPoint = new Point({
        longitude: 16.5311,
        latitude: 47.5653
    });
    var lisztPointGraphic = new Graphic({
        geometry: lisztPoint,
        symbol: lisztMarker
    });
    // mendelssohn
    var mendelssohnMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mendelssohn_Bartholdy.jpg/220px-Mendelssohn_Bartholdy.jpg",
        width: "32px",
        height: "32px"
    });
    var mendelssohnPoint = new Point({
        longitude: 9.9937,
        latitude: 53.5511
    });
    var mendelssohnPointGraphic = new Graphic({
        geometry: mendelssohnPoint,
        symbol: mendelssohnMarker
    });
    // brahms
    var brahmsMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Johannes_Brahms_1853.jpg/170px-Johannes_Brahms_1853.jpg",
        width: "32px",
        height: "32px"
    });
    var brahmsPoint = new Point({
        longitude: 9.9937,
        latitude: 53.5511
    });
    var brahmsPointGraphic = new Graphic({
        geometry: brahmsPoint,
        symbol: brahmsMarker
    });
    // schumann
    var schumannMarker = new PictureMarkerSymbol({
        url: "https://cdn.britannica.com/s:300x300/49/142349-004-5E7648E4.jpg",
        width: "32px",
        height: "32px"
    });
    var schumannPoint = new Point({
        longitude: 12.4734,
        latitude: 50.7102
    });
    var schumannPointGraphic = new Graphic({
        geometry: schumannPoint,
        symbol: schumannMarker
    });
    // grieg
    var griegMarker = new PictureMarkerSymbol({
        url: "http://www.classical-music.com/sites/default/files/imagecache/250px_wide/images/Grieg%20for%20site.jpg",
        width: "32px",
        height: "32px"
    });
    var griegPoint = new Point({
        longitude: 5.3221,
        latitude: 60.3913
    });
    var griegPointGraphic = new Graphic({
        geometry: griegPoint,
        symbol: griegMarker
    });
    // dvorak
    var dvorakMarker = new PictureMarkerSymbol({
        url: "https://www.azquotes.com/public/pictures/authors/0d/f8/0df864663774534293442f461d9d5670/54824f05b5506_anton%C3%ADn_dvo%C5%99%C3%A1k.jpg",
        width: "32px",
        height: "32px"
    });
    var dvorakPoint = new Point({
        longitude: 14.2988,
        latitude: 50.2615
    });
    var dvorakPointGraphic = new Graphic({
        geometry: dvorakPoint,
        symbol: dvorakMarker
    });
    // mussorgsky
    var mussorgskyMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RepinMussorgsky.jpg/170px-RepinMussorgsky.jpg",
        width: "32px",
        height: "32px"
    });
    var mussorgskyPoint = new Point({
        longitude: 31.2825,
        latitude: 56.2811
    });
    var mussorgskyPointGraphic = new Graphic({
        geometry: mussorgskyPoint,
        symbol: mussorgskyMarker
    });
    // bruckner
    var brucknerMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anton_Bruckner.jpg/220px-Anton_Bruckner.jpg",
        width: "32px",
        height: "32px"
    });
    var brucknerPoint = new Point({
        longitude: 14.2913,
        latitude: 48.2077
    });
    var brucknerPointGraphic = new Graphic({
        geometry: brucknerPoint,
        symbol: brucknerMarker
    });
    // tchaikovsky
    var tchaikovskyMarker = new PictureMarkerSymbol({
        url: "https://www.onthisday.com/images/people/pyotr-ilyich-tchaikovsky-200.jpg",
        width: "32px",
        height: "32px"
    });
    var tchaikovskyPoint = new Point({
        longitude: 53.9769,
        latitude: 57.0409
    });
    var tchaikovskyPointGraphic = new Graphic({
        geometry: tchaikovskyPoint,
        symbol: tchaikovskyMarker
    });
    // puccini
    var pucciniMarker = new PictureMarkerSymbol({
        url: "http://www.calend.ru/img/content_events/i3/3302.jpg",
        width: "32px",
        height: "32px"
    });
    var pucciniPoint = new Point({
        longitude: 10.5027,
        latitude: 43.8429
    });
    var pucciniPointGraphic = new Graphic({
        geometry: pucciniPoint,
        symbol: pucciniMarker
    });
    // saintSaëns
    var saintSaënsMarker = new PictureMarkerSymbol({
        url: "https://images.findagrave.com/photos250/photos/2010/282/924_128673077144.jpg",
        width: "32px",
        height: "32px"
    });
    var saintSaënsPoint = new Point({
        longitude: 2.3522,
        latitude: 48.8566
    });
    var saintSaënsPointGraphic = new Graphic({
        geometry: saintSaënsPoint,
        symbol: saintSaënsMarker
    });
    // strauss
    var straussMarker = new PictureMarkerSymbol({
        url: "https://gramophoneproduction.s3-accelerate.amazonaws.com/s3fs-public/styles/6_columns_wide/public/richard-strauss_1.jpg?itok=B41zFmKq",
        width: "32px",
        height: "32px"
    });
    var straussPoint = new Point({
        longitude: 11.5820,
        latitude: 48.1351
    });
    var straussPointGraphic = new Graphic({
        geometry: straussPoint,
        symbol: straussMarker
    });
    // mahler
    var mahlerMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Photo_of_Gustav_Mahler_by_Moritz_N%C3%A4hr_01.jpg/220px-Photo_of_Gustav_Mahler_by_Moritz_N%C3%A4hr_01.jpg",
        width: "32px",
        height: "32px"
    });
    var mahlerPoint = new Point({
        longitude: 15.3041,
        latitude: 49.5926
    });
    var mahlerPointGraphic = new Graphic({
        geometry: mahlerPoint,
        symbol: mahlerMarker
    });
    // debussy
    var debussyMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Claude_Debussy_atelier_Nadar.jpg/220px-Claude_Debussy_atelier_Nadar.jpg",
        width: "32px",
        height: "32px"
    });
    var debussyPoint = new Point({
        longitude: 2.0938,
        latitude: 48.8989
    });
    var debussyPointGraphic = new Graphic({
        geometry: debussyPoint,
        symbol: debussyMarker
    });
    // rachmaninoff
    var rachmaninoffMarker = new PictureMarkerSymbol({
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sergei_Rachmaninoff-gb.jpg/220px-Sergei_Rachmaninoff-gb.jpg",
        width: "32px",
        height: "32px"
    });
    var rachmaninoffPoint = new Point({
        longitude: 31.4013,
        latitude: 57.9124
    });
    var rachmaninoffPointGraphic = new Graphic({
        geometry: rachmaninoffPoint,
        symbol: rachmaninoffMarker
    });
    // sibelius
    var sibeliusMarker = new PictureMarkerSymbol({
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufHRebU2QHl_uWno-xZweWpcsiAuBHtBk01OXWvCWV86WM61G",
        width: "32px",
        height: "32px"
    });
    var sibeliusPoint = new Point({
        longitude: 24.4590,
        latitude: 60.9929
    });
    var sibeliusPointGraphic = new Graphic({
        geometry: sibeliusPoint,
        symbol: sibeliusMarker
    });
    // esri map
    var map = new EsriMap({
        basemap: "national-geographic"
    });
    var view = new MapView({
        map: map,
        container: "viewDiv",
        center: [1.8253548901935233, 48.70224135068023],
        zoom: 4
    });
    var year;
    window.setInterval(function () {
        year = document.getElementById('year').value;
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
});
// view.graphics.addMany([beethovenPointGraphic, haydnPointGraphic, mozartPointGraphic, salieriPointGraphic]);
//# sourceMappingURL=main.js.map