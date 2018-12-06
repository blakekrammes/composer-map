define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/geometry/Point", "esri/symbols/PictureMarkerSymbol", "esri/Graphic", "esri/layers/GraphicsLayer", "esri/PopupTemplate"], function (require, exports, EsriMap, MapView, Point, PictureMarkerSymbol, Graphic, GraphicsLayer, PopupTemplate) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // josquin
    var josquinMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/xFLKVGI.jpg",
        width: "32px",
        height: "32px"
    });
    var josquinPoint = new Point({
        longitude: 4.0621,
        latitude: 50.5257
    });
    var josquinPopupTemplate = new PopupTemplate({
        title: 'Josquin des Prez (c. 1450/1455 – 1521)',
        content: "Composer of Renaissance polyphonic vocal music <br> Born in either Hainaut (modern-day Belgium) or modern-day France <br> Died in Cond\u00E9-sur-l'Escaut <br> Composition | <a href=\"https://www.youtube.com/watch?v=LUAgAF4Khmg\" target=\"_blank\">Ave Maria</a>"
    });
    var josquinPointGraphic = new Graphic({
        geometry: josquinPoint,
        symbol: josquinMarker,
        popupTemplate: josquinPopupTemplate
    });
    // byrd
    var byrdMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/es7RrXK.jpg",
        width: "32px",
        height: "32px"
    });
    var byrdPoint = new Point({
        longitude: 0.1278,
        latitude: 51.5074
    });
    var byrdPopupTemplate = new PopupTemplate({
        title: 'William Byrd (c.1539/40 or 1543 – 1623)',
        content: 'Composer of sacred and secular polyphonic music <br> Born in London <br> Died in Stondon Massey <br> Composition | <a href="https://www.youtube.com/watch?v=Z2ckGcpx6xI" target="_blank">Ave Verum Corpus</a>'
    });
    var byrdPointGraphic = new Graphic({
        geometry: byrdPoint,
        symbol: byrdMarker,
        popupTemplate: byrdPopupTemplate
    });
    // palestrina
    var palestrinaMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/7g3CEfI.jpg",
        width: "32px",
        height: "32px"
    });
    var palestrinaPoint = new Point({
        longitude: 12.8887,
        latitude: 41.8383
    });
    var palestrinaPopupTemplate = new PopupTemplate({
        title: 'Giovanni Pierluigi da Palestrina (c. 1525 – 1594)',
        content: 'Composer of sacred polyphonic vocal music <br> Born in Palestrina <br> Died in Rome <br> Composition | <a href="https://www.youtube.com/watch?v=EJj0as_Mic4" target="_blank">Missa Papae Marcelli, Kyrie</a>'
    });
    var palestrinaPointGraphic = new Graphic({
        geometry: palestrinaPoint,
        symbol: palestrinaMarker,
        popupTemplate: palestrinaPopupTemplate
    });
    // lassus
    var lassusMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/liq7FG1.jpg",
        width: "32px",
        height: "32px"
    });
    var lassusPoint = new Point({
        longitude: 3.9567,
        latitude: 50.4542
    });
    var lassusPopupTemplate = new PopupTemplate({
        title: 'Orlande de Lassus (1532, possibly 1530 – 1594)',
        content: 'Composer of sacred and secular polyphonic works <br> Born in Mons (modern-day Belgium) <br> Died in Munich <br> Composition | <a href="https://www.youtube.com/watch?v=UQN6gFnsGI4" target="_blank">La Nuict Froide et Sombre</a>'
    });
    var lassusPointGraphic = new Graphic({
        geometry: lassusPoint,
        symbol: lassusMarker,
        popupTemplate: lassusPopupTemplate
    });
    // dowland
    var dowlandMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/Iybfzct.jpg",
        width: "32px",
        height: "32px"
    });
    var dowlandPoint = new Point({
        longitude: 0.1357,
        latitude: 51.4975
    });
    var dowlandPopupTemplate = new PopupTemplate({
        title: 'John Dowland (1563 – 1626)',
        content: 'Composer of songs and music for lute <br> Born in London <br> Died in London <br> Composition | <a href="https://www.youtube.com/watch?v=Y9HKl8H0PWg" target="_blank">Flow My Tears</a>'
    });
    var dowlandPointGraphic = new Graphic({
        geometry: dowlandPoint,
        symbol: dowlandMarker,
        popupTemplate: dowlandPopupTemplate
    });
    // purcell
    var purcellMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/cLSPqMw.jpg",
        width: "32px",
        height: "32px"
    });
    var purcellPoint = new Point({
        longitude: 0.1357,
        latitude: 51.4975
    });
    var purcellPopupTemplate = new PopupTemplate({
        title: 'Henry Purcell (1659 – 1695)',
        content: "Composer of opera, sacred, and incidental music <br> Born in London <br> Died in London <br> Composition | <a href=\"https://www.youtube.com/watch?v=S9xwlWfHWv4\" target=\"_blank\">Dido's Lament</a>"
    });
    var purcellPointGraphic = new Graphic({
        geometry: purcellPoint,
        symbol: purcellMarker,
        popupTemplate: purcellPopupTemplate
    });
    // monteverdi
    var monteverdiMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/FcDnpoQ.jpg",
        width: "32px",
        height: "32px"
    });
    var monteverdiPoint = new Point({
        longitude: 10.0227,
        latitude: 45.1332
    });
    var monteverdiPopupTemplate = new PopupTemplate({
        title: 'Claudio Monteverdi (1567 – 1643)',
        content: "Composer of opera, sacred, and secular music <br> Born in Cremona <br> Died in Venice <br> Composition | <a href=\"https://www.youtube.com/watch?v=zsL4MGFh6QI\" target=\"_blank\">Lamento della Ninfa</a>"
    });
    var monteverdiPointGraphic = new Graphic({
        geometry: monteverdiPoint,
        symbol: monteverdiMarker,
        popupTemplate: monteverdiPopupTemplate
    });
    // vivaldi
    var vivaldiMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/eiWjRJ6.jpg",
        width: "32px",
        height: "32px"
    });
    var vivaldiPoint = new Point({
        longitude: 12.3155,
        latitude: 45.4408
    });
    var vivaldiPopupTemplate = new PopupTemplate({
        title: 'Antonio Vivaldi (1678 – 1741)',
        content: "Composer of concertos, choral, and operatic music <br> Born in Venice <br> Died in Vienna <br> Composition | <a href=\"https://www.youtube.com/watch?v=QPba-i26YNA\" target=\"_blank\">Violin Concerto in A Minor RV356</a>"
    });
    var vivaldiPointGraphic = new Graphic({
        geometry: vivaldiPoint,
        symbol: vivaldiMarker,
        popupTemplate: vivaldiPopupTemplate
    });
    // couperin
    var couperinMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/JvHJWNa.jpg",
        width: "32px",
        height: "32px"
    });
    var couperinPoint = new Point({
        longitude: 2.3522,
        latitude: 48.8566
    });
    var couperinPopupTemplate = new PopupTemplate({
        title: 'François Couperin (1668 – 1733)',
        content: "Composer of harpsichord and vocal music <br> Born in Paris <br> Died in Paris <br> Composition | <a href=\"https://www.youtube.com/watch?v=R2mGjvrGbcE\" target=\"_blank\">Les Baricades Mist\u00E9rieuses</a>"
    });
    var couperinPointGraphic = new Graphic({
        geometry: couperinPoint,
        symbol: couperinMarker,
        popupTemplate: couperinPopupTemplate
    });
    // albinoni
    var albinoniMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/YkKO4SF.jpg",
        width: "32px",
        height: "32px"
    });
    var albinoniPoint = new Point({
        longitude: 12.3155,
        latitude: 45.4408
    });
    var albinoniPopupTemplate = new PopupTemplate({
        title: 'Tomaso Albinoni (1671 – 1751)',
        content: "Composer of instrumental and operatic music <br> Born in Venice <br> Died in Venice <br> Composition | <a href=\"https://www.youtube.com/watch?v=LjgndGuy77o\" target=\"_blank\">Oboe Concerto #2 in D Minor Op. 9</a>"
    });
    var albinoniPointGraphic = new Graphic({
        geometry: albinoniPoint,
        symbol: albinoniMarker,
        popupTemplate: albinoniPopupTemplate
    });
    // telemann
    var telemannMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/fj3Bpub.jpg",
        width: "32px",
        height: "32px"
    });
    var telemannPoint = new Point({
        longitude: 11.6276,
        latitude: 52.1205
    });
    var telemannPopupTemplate = new PopupTemplate({
        title: 'Georg Philipp Telemann (1681 – 1767)',
        content: "Composer of concertos, operas, orchestral and keyboard music <br> Born in Magdeburg <br> Died in Hamburg <br> Composition | <a href=\"https://www.youtube.com/watch?v=ZySASwzVDR0\" target=\"_blank\">Suite in A major</a>"
    });
    var telemannPointGraphic = new Graphic({
        geometry: telemannPoint,
        symbol: telemannMarker,
        popupTemplate: telemannPopupTemplate
    });
    // bach
    var bachMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/WOe4Dto.jpg",
        width: "32px",
        height: "32px"
    });
    var bachPoint = new Point({
        longitude: 10.3147,
        latitude: 50.9796
    });
    var bachPopupTemplate = new PopupTemplate({
        title: 'Johann Sebastian Bach (1685 – 1750)',
        content: "Composer of contrapuntal sacred music and keyboard music <br> Born in Eisenach <br> Died in Leipzig <br> Composition | <a href=\"https://www.youtube.com/watch?v=5Belbi3tSQw\" target=\"_blank\">Mass in B minor - Gratias</a>"
    });
    var bachPointGraphic = new Graphic({
        geometry: bachPoint,
        symbol: bachMarker,
        popupTemplate: bachPopupTemplate
    });
    // scarlatti
    var scarlattiMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/kMhmFcc.jpg",
        width: "32px",
        height: "32px"
    });
    var scarlattiPoint = new Point({
        longitude: 14.2681,
        latitude: 40.8518
    });
    var scarlattiPopupTemplate = new PopupTemplate({
        title: 'Domenico Scarlatti (1685 – 1757)',
        content: "Composer of keyboard sonatas <br> Born in Naples <br> Died in Madrid <br> Composition | <a href=\"https://www.youtube.com/watch?v=wjghYFgt8Zk\" target=\"_blank\">Sonata in D minor K141</a>"
    });
    var scarlattiPointGraphic = new Graphic({
        geometry: scarlattiPoint,
        symbol: scarlattiMarker,
        popupTemplate: scarlattiPopupTemplate
    });
    // handel
    var handelMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/l6frukP.png",
        width: "32px",
        height: "32px"
    });
    var handelPoint = new Point({
        longitude: 11.9688,
        latitude: 51.4970
    });
    var handelPopupTemplate = new PopupTemplate({
        title: 'George Frideric Handel (1685 – 1759)',
        content: "Composer of operas, oratorios, <br> Born in Halle-upon-Saale <br> Died in London <br> Composition | <a href=\"https://www.youtube.com/watch?v=MiXgOQ9_-RI\" target=\"_blank\">Zadok the Priest</a>"
    });
    var handelPointGraphic = new Graphic({
        geometry: handelPoint,
        symbol: handelMarker,
        popupTemplate: handelPopupTemplate
    });
    // beethoven
    var beethovenMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/WjOGtt6.png",
        width: "32px",
        height: "32px"
    });
    var beethovenPoint = new Point({
        longitude: 7.104469222936351,
        latitude: 50.736576630668395
    });
    var beethovenPopupTemplate = new PopupTemplate({
        title: 'Ludwig van Beethoven (1770 – 1827)',
        content: "Composer of symphonies, chamber works, and piano music <br> Born in Bonn <br> Died in Vienna <br> Composition | <a href=\"https://www.youtube.com/watch?v=-uSME7Bv4JE\" target=\"_blank\">Missa Solemnis, Kyrie</a>"
    });
    var beethovenPointGraphic = new Graphic({
        geometry: beethovenPoint,
        symbol: beethovenMarker,
        popupTemplate: beethovenPopupTemplate
    });
    // haydn
    var haydnMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/TMJAuLB.jpg",
        width: "32px",
        height: "32px"
    });
    var haydnPoint = new Point({
        longitude: 16.8589,
        latitude: 48.0656
    });
    var haydnPopupTemplate = new PopupTemplate({
        title: 'Joseph Haydn (1732 – 1809)',
        content: "Composer of symphonies, chamber works, and piano music <br> Born in Rohrau <br> Died in Vienna <br> Composition | <a href=\"https://www.youtube.com/watch?v=diz1sVIhNDA\" target=\"_blank\">Piano Sonata no. 47 in B minor Hob. XVI:32</a>"
    });
    var haydnPointGraphic = new Graphic({
        geometry: haydnPoint,
        symbol: haydnMarker,
        popupTemplate: haydnPopupTemplate
    });
    // mozart
    var mozartMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/ysrVQLo.jpg",
        width: "32px",
        height: "32px"
    });
    var mozartPoint = new Point({
        longitude: 13.0550,
        latitude: 47.8095
    });
    var mozartPopupTemplate = new PopupTemplate({
        title: 'Wolfgang Amadeus Mozart (1756 – 1791)',
        content: "Composer of symphonies, chamber works, and piano music <br> Born in Salzburg <br> Died in Vienna <br> Composition | <a href=\"https://www.youtube.com/watch?v=8oESM64gU5M&t=136s\" target=\"_blank\">Lacrimosa</a>"
    });
    var mozartPointGraphic = new Graphic({
        geometry: mozartPoint,
        symbol: mozartMarker,
        popupTemplate: mozartPopupTemplate
    });
    // salieri
    var salieriMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/Tt77SAc.jpg",
        width: "32px",
        height: "32px"
    });
    var salieriPoint = new Point({
        longitude: 11.3032,
        latitude: 45.1936
    });
    var salieriPopupTemplate = new PopupTemplate({
        title: 'Antonio Salieri (1750 – 1825)',
        content: "Composer of operas, sacred, and instrumental works <br> Born in Legnago <br> Died in Vienna <br> Composition | <a href=\"https://www.youtube.com/watch?v=G_5Dr8Bz5Bc\" target=\"_blank\">Sinfonia Veneziana</a>"
    });
    var salieriPointGraphic = new Graphic({
        geometry: salieriPoint,
        symbol: salieriMarker,
        popupTemplate: salieriPopupTemplate
    });
    // vonWeber
    var vonWeberMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/BAdxWJB.jpg",
        width: "32px",
        height: "32px"
    });
    var vonWeberPoint = new Point({
        longitude: 10.6095,
        latitude: 54.1330
    });
    var vonWeberPopupTemplate = new PopupTemplate({
        title: 'Carl Maria von Weber (1786 – 1826)',
        content: "Composer of operas, symphonies, and concertos <br> Born in Eutin <br> Died in London <br> Composition | <a href=\"https://www.youtube.com/watch?v=ZdMqHNcL6xI\" target=\"_blank\">Der Freischutz, Overture</a>"
    });
    var vonWeberPointGraphic = new Graphic({
        geometry: vonWeberPoint,
        symbol: vonWeberMarker,
        popupTemplate: vonWeberPopupTemplate
    });
    // schubert
    var schubertMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/LFbwZoP.jpg",
        width: "32px",
        height: "32px"
    });
    var schubertPoint = new Point({
        longitude: 16.3524,
        latitude: 48.2266
    });
    var schubertPopupTemplate = new PopupTemplate({
        title: 'Franz Schubert (1797 – 1828)',
        content: "Composer of songs, symphonies, chamber and piano music <br> Born in Vienna <br> Died in Vienna <br> Composition | <a href=\"https://www.youtube.com/watch?v=X3JVZZ-INyM\" target=\"_blank\">Gute Nacht</a>"
    });
    var schubertPointGraphic = new Graphic({
        geometry: schubertPoint,
        symbol: schubertMarker,
        popupTemplate: schubertPopupTemplate
    });
    // berlioz
    var berliozMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/Lc466V3.jpg",
        width: "32px",
        height: "32px"
    });
    var berliozPoint = new Point({
        longitude: 5.2600,
        latitude: 45.3938
    });
    var berliozPopupTemplate = new PopupTemplate({
        title: 'Hector Berlioz (1803 – 1869)',
        content: "Composer of symphonies, choral music and operas <br> Born in La C\u00F4te-Saint-Andr\u00E9 (south-eastern France) <br> Died in Paris <br> Composition | <a href=\"https://www.youtube.com/watch?v=Rp45bQkRLGM\" target=\"_blank\">L'enfance du Christ, L'Adieu des bergers \u00E0 la sainte famille</a>"
    });
    var berliozPointGraphic = new Graphic({
        geometry: berliozPoint,
        symbol: berliozMarker,
        popupTemplate: berliozPopupTemplate
    });
    // chopin
    var chopinMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/VKavVnU.jpg",
        width: "32px",
        height: "32px"
    });
    var chopinPoint = new Point({
        longitude: 20.3249,
        latitude: 52.2574
    });
    var chopinPopupTemplate = new PopupTemplate({
        title: 'Frédéric Chopin (1810 – 1849)',
        content: "Composer of piano music <br> Born in \u017Belazowa Wola (near Warsaw) <br> Died in Paris <br> Composition | <a href=\"https://www.youtube.com/watch?v=X65vRfdHmCc\" target=\"_blank\">Andante Spianato</a>"
    });
    var chopinPointGraphic = new Graphic({
        geometry: chopinPoint,
        symbol: chopinMarker,
        popupTemplate: chopinPopupTemplate
    });
    // liszt
    var lisztMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/gdX8VaD.png",
        width: "32px",
        height: "32px"
    });
    var lisztPoint = new Point({
        longitude: 16.5311,
        latitude: 47.5653
    });
    var lisztPopupTemplate = new PopupTemplate({
        title: 'Franz Liszt (1811 – 1886)',
        content: "Composer of piano music, piano transcriptions and symphonic poems <br> Born in Doborj\u00E1n <br> Died in Bayreuth <br> Composition | <a href=\"https://www.youtube.com/watch?v=3JXMdpGpfBU\" target=\"_blank\">Un Sospiro</a>"
    });
    var lisztPointGraphic = new Graphic({
        geometry: lisztPoint,
        symbol: lisztMarker,
        popupTemplate: lisztPopupTemplate
    });
    // mendelssohn
    var mendelssohnMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/g4NELR0.jpg",
        width: "32px",
        height: "32px"
    });
    var mendelssohnPoint = new Point({
        longitude: 9.9937,
        latitude: 53.5511
    });
    var mendelssohnPopupTemplate = new PopupTemplate({
        title: 'Felix Mendelssohn (1809 – 1847)',
        content: "Composer of symphonies, concertos, chamber and piano music <br> Born in Hamburg <br> Died in Leipzig <br> Composition | <a href=\"https://www.youtube.com/watch?v=zcogD-hHEYs\" target=\"_blank\">Hebrides Overture (Fingal's Cave)</a>"
    });
    var mendelssohnPointGraphic = new Graphic({
        geometry: mendelssohnPoint,
        symbol: mendelssohnMarker,
        popupTemplate: mendelssohnPopupTemplate
    });
    // brahms
    var brahmsMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/dtaPoWo.jpg",
        width: "32px",
        height: "32px"
    });
    var brahmsPoint = new Point({
        longitude: 9.9937,
        latitude: 53.5511
    });
    var brahmsPopupTemplate = new PopupTemplate({
        title: 'Johannes Brahms (1833 – 1897)',
        content: "Composer of orchestral, choral, chamber and piano music <br> Born in Hamburg <br> Died in Vienna <br> Composition | <a href=\"https://www.youtube.com/watch?v=YD8i0jUmbF8\" target=\"_blank\">Intermezzo Op. 117, No. 1</a>"
    });
    var brahmsPointGraphic = new Graphic({
        geometry: brahmsPoint,
        symbol: brahmsMarker,
        popupTemplate: brahmsPopupTemplate
    });
    // schumann
    var schumannMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/UFuEMXZ.jpg",
        width: "32px",
        height: "32px"
    });
    var schumannPoint = new Point({
        longitude: 12.4734,
        latitude: 50.7102
    });
    var schumannPopupTemplate = new PopupTemplate({
        title: 'Robert Schumann (1810 – 1856)',
        content: "Composer of songs, piano, chamber and orchestral music  <br> Born in Zwickau <br> Died in Bonn <br> Composition | <a href=\"https://www.youtube.com/watch?v=dZX5YGhUuoE\" target=\"_blank\">Widmung (transcribed by Liszt)</a>"
    });
    var schumannPointGraphic = new Graphic({
        geometry: schumannPoint,
        symbol: schumannMarker,
        popupTemplate: schumannPopupTemplate
    });
    // grieg
    var griegMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/UPRtAbf.jpg",
        width: "32px",
        height: "32px"
    });
    var griegPoint = new Point({
        longitude: 5.3221,
        latitude: 60.3913
    });
    var griegPopupTemplate = new PopupTemplate({
        title: 'Edvard Grieg (1843 – 1907)',
        content: "Composer of piano, vocal, orchestral, chamber, and incidental music <br> Born in Bergen <br> Died in Bergen <br> Composition | <a href=\"https://www.youtube.com/watch?v=-rh8gMvzPw0\" target=\"_blank\">Peer Gynt, Morning Mood</a>"
    });
    var griegPointGraphic = new Graphic({
        geometry: griegPoint,
        symbol: griegMarker,
        popupTemplate: griegPopupTemplate
    });
    // dvorak
    var dvorakMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/q7QkYUR.jpg",
        width: "32px",
        height: "32px"
    });
    var dvorakPoint = new Point({
        longitude: 14.2988,
        latitude: 50.2615
    });
    var dvorakPopupTemplate = new PopupTemplate({
        title: 'Antonín Dvořák (1841 – 1904)',
        content: "Composer of concertos, symphonic, choral and operatic music <br> Born in Nelahozeves (near Prague) <br> Died in Prague <br> Composition | <a href=\"https://www.youtube.com/watch?v=ASlch7R1Zvo\" target=\"_blank\">Symphony no. 9, \"From The New World\" mvt. II, Largo</a>"
    });
    var dvorakPointGraphic = new Graphic({
        geometry: dvorakPoint,
        symbol: dvorakMarker,
        popupTemplate: dvorakPopupTemplate
    });
    // mussorgsky
    var mussorgskyMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/2mrJZ6C.jpg",
        width: "32px",
        height: "32px"
    });
    var mussorgskyPoint = new Point({
        longitude: 31.2825,
        latitude: 56.2811
    });
    var mussorgskyPopupTemplate = new PopupTemplate({
        title: 'Modest Mussorgsky (1839 – 1881)',
        content: "Composer of orchestral, opera, vocal and piano music <br> Born in Karevo (Pskov Governorate) <br> Died in Saint Petersburg <br> Composition | <a href=\"https://www.youtube.com/watch?v=iCEDfZgDPS8\" target=\"_blank\">Night on Bald Mountain</a>"
    });
    var mussorgskyPointGraphic = new Graphic({
        geometry: mussorgskyPoint,
        symbol: mussorgskyMarker,
        popupTemplate: mussorgskyPopupTemplate
    });
    // bruckner
    var brucknerMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/NH9XDp3.jpg",
        width: "32px",
        height: "32px"
    });
    var brucknerPoint = new Point({
        longitude: 14.2913,
        latitude: 48.2077
    });
    var brucknerPopupTemplate = new PopupTemplate({
        title: 'Anton Bruckner (1824 – 1896)',
        content: "Composer of orchestral and choral music <br> Born in Ansfelden (now a suburb of Linz) <br> Died in Vienna <br> Composition | <a href=\"https://www.youtube.com/watch?v=ov-OAmpcRfw\" target=\"_blank\">Os Justi Meditabitur</a>"
    });
    var brucknerPointGraphic = new Graphic({
        geometry: brucknerPoint,
        symbol: brucknerMarker,
        popupTemplate: brucknerPopupTemplate
    });
    // tchaikovsky
    var tchaikovskyMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/AjyiFbl.jpg",
        width: "32px",
        height: "32px"
    });
    var tchaikovskyPoint = new Point({
        longitude: 53.9769,
        latitude: 57.0409
    });
    var tchaikovskyPopupTemplate = new PopupTemplate({
        title: 'Pyotr Ilyich Tchaikovsky (1840 – 1893)',
        content: "Composer of orchestral, ballet, chamber, piano and liturgical music <br> Born in Votkinsk (Vyatka Governorate) <br> Died in Saint Petersburg <br> Composition | <a href=\"https://www.youtube.com/watch?v=BWerj8FcprM\" target=\"_blank\">Piano Concerto No. 1, B Flat Minor</a>"
    });
    var tchaikovskyPointGraphic = new Graphic({
        geometry: tchaikovskyPoint,
        symbol: tchaikovskyMarker,
        popupTemplate: tchaikovskyPopupTemplate
    });
    // puccini
    var pucciniMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/CcPAFvs.jpg",
        width: "32px",
        height: "32px"
    });
    var pucciniPoint = new Point({
        longitude: 10.5027,
        latitude: 43.8429
    });
    var pucciniPopupTemplate = new PopupTemplate({
        title: 'Giacomo Puccini (1858 – 1924)',
        content: "Composer of opera <br> Born in Lucca <br> Died in Brussels <br> Composition | <a href=\"https://www.youtube.com/watch?v=rTFUM4Uh_6Y\" target=\"_blank\">Nessun Dorma (from Turandot)</a>"
    });
    var pucciniPointGraphic = new Graphic({
        geometry: pucciniPoint,
        symbol: pucciniMarker,
        popupTemplate: pucciniPopupTemplate
    });
    // saintSaëns
    var saintSaënsMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/2XBAaUc.jpg",
        width: "32px",
        height: "32px"
    });
    var saintSaënsPoint = new Point({
        longitude: 2.3522,
        latitude: 48.8566
    });
    var sainSaënsPopupTemplate = new PopupTemplate({
        title: 'Camille Saint-Saëns (1835 – 1921)',
        content: "Composer of orchestral, opera, piano and chamber music <br> Born in Paris <br> Died in Algiers <br> Composition | <a href=\"https://www.youtube.com/watch?v=b44-5M4e9nI\" target=\"_blank\">The Swan, Carnival of the Animals</a>"
    });
    var saintSaënsPointGraphic = new Graphic({
        geometry: saintSaënsPoint,
        symbol: saintSaënsMarker,
        popupTemplate: sainSaënsPopupTemplate
    });
    // strauss
    var straussMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/l7QzLRB.jpg",
        width: "32px",
        height: "32px"
    });
    var straussPoint = new Point({
        longitude: 11.5820,
        latitude: 48.1351
    });
    var straussPopupTemplate = new PopupTemplate({
        title: 'Richard Strauss (1864 – 1949)',
        content: "Composer of orchestral, opera, ballet, piano and chamber music <br> Born in Munich <br> Died in Garmisch-Partenkirchen (Bavaria) <br> Composition | <a href=\"https://www.youtube.com/watch?v=bMrg9blUTig\" target=\"_blank\">Morgen</a>"
    });
    var straussPointGraphic = new Graphic({
        geometry: straussPoint,
        symbol: straussMarker,
        popupTemplate: straussPopupTemplate
    });
    // mahler
    var mahlerMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/1Vxqtm3.jpg",
        width: "32px",
        height: "32px"
    });
    var mahlerPoint = new Point({
        longitude: 15.3041,
        latitude: 49.5926
    });
    var mahlerPopupTemplate = new PopupTemplate({
        title: 'Gustav Mahler (1860 – 1911)',
        content: "Composer of songs and orchestral music <br> Born in Kali\u0161t\u011B <br> Died in Vienna <br> Composition | <a href=\"https://www.youtube.com/watch?v=TzJyIWxjX9o\" target=\"_blank\">Ich bin der Welt abhanden gekommen</a>"
    });
    var mahlerPointGraphic = new Graphic({
        geometry: mahlerPoint,
        symbol: mahlerMarker,
        popupTemplate: mahlerPopupTemplate
    });
    // debussy
    var debussyMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/nkPhHSq.jpg",
        width: "32px",
        height: "32px"
    });
    var debussyPoint = new Point({
        longitude: 2.0938,
        latitude: 48.8989
    });
    var debussyPopupTemplate = new PopupTemplate({
        title: 'Claude Debussy (1862 – 1918)',
        content: "Composer of orchestral, piano, chamber and ballet music <br> Born in Paris <br> Died in Paris <br> Composition | <a href=\"https://www.youtube.com/watch?v=JjKaOfpJkWY\" target=\"_blank\">Children's Corner, I. Doctor Gradus ad Parnassum</a>"
    });
    var debussyPointGraphic = new Graphic({
        geometry: debussyPoint,
        symbol: debussyMarker,
        popupTemplate: debussyPopupTemplate
    });
    // rachmaninoff
    var rachmaninoffMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/WJL8Ran.jpg",
        width: "32px",
        height: "32px"
    });
    var rachmaninoffPoint = new Point({
        longitude: 31.4013,
        latitude: 57.9124
    });
    var rachmaninoffPopupTemplate = new PopupTemplate({
        title: 'Sergei Rachmaninoff (1873 – 1943)',
        content: "Composer of piano, orchestral and liturgical music <br> Born in Starorussky Uyezd <br> Died in Beverly Hills <br> Composition | <a href=\"https://www.youtube.com/watch?v=InMhSNBlIg8\" target=\"_blank\">Bogoroditse Devo (from All-Night-Vigil)</a>"
    });
    var rachmaninoffPointGraphic = new Graphic({
        geometry: rachmaninoffPoint,
        symbol: rachmaninoffMarker,
        popupTemplate: rachmaninoffPopupTemplate
    });
    // sibelius
    var sibeliusMarker = new PictureMarkerSymbol({
        url: "https://i.imgur.com/hcmJmyO.jpg",
        width: "32px",
        height: "32px"
    });
    var sibeliusPoint = new Point({
        longitude: 24.4590,
        latitude: 60.9929
    });
    var sibeliusPopupTemplate = new PopupTemplate({
        title: 'Jean Sibelius (1865 – 1957)',
        content: "Composer of orchestral, chamber and vocal music <br> Born in H\u00E4meenlinna <br> Died in Ainola <br> Composition | <a href=\"https://www.youtube.com/watch?v=F5zg_af9b8c\" target=\"_blank\">Finlandia</a>"
    });
    var sibeliusPointGraphic = new Graphic({
        geometry: sibeliusPoint,
        symbol: sibeliusMarker,
        popupTemplate: sibeliusPopupTemplate
    });
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
    // list of whether composers are displaying
    var isComposerDisplaying = {
        josquin: false, palestrina: false, lassus: false, byrd: false, dowland: false, purcell: false,
        monteverdi: false, couperin: false, vivaldi: false, albinoni: false, telemann: false, handel: false, bach: false,
        scarlatti: false, haydn: false, mozart: false, beethoven: false, salieri: false, vonWeber: false, schubert: false,
        berlioz: false, chopin: false, mendelssohn: false, schumann: false, liszt: false, brahms: false,
        grieg: false, dvorak: false, mussorgsky: false, bruckner: false, tchaikovsky: false, puccini: false,
        saintSaëns: false, mahler: false, debussy: false, strauss: false, rachmaninoff: false, sibelius: false
    };
    var year;
    window.setInterval(function () {
        year = document.getElementById('year').value;
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
    view.on("pointer-move", eventHandler);
    function eventHandler(ev) {
        view.hitTest(ev)
            .then(getGraphics);
    }
    function getGraphics(res) {
        console.log(res);
    }
});
//# sourceMappingURL=main.js.map