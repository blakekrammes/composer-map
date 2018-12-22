// import 'fancybox'; 
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var composers = [
        {
            name: "duFay",
            birth: 1397,
            death: 1474,
            url: "https://i.imgur.com/40eBzRI.png",
            coordinates: {
                longitude: 4.3517,
                latitude: 50.8503
            },
            popupTitle: "Guillaume Du Fay (1397 – 1474)",
            popupContent: "Composer of masses, motets and secular songs <br> Born in Brussels <br> Died in Cambrai <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Nuper rosarum flores</a>",
            youtubeLink: 'https://www.youtube.com/embed/_dV5b8AuLHg?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "dunstaple",
            birth: 1390,
            death: 1453,
            url: "https://i.imgur.com/uaXMran.png",
            coordinates: {
                longitude: 0.1357,
                latitude: 51.4975
            },
            popupTitle: "John Dunstaple (c. 1390 – 1453)",
            popupContent: "Composer of sacred polyphonic music <br> Born in Dunstable <br> Died in London <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Veni Creator Spiritus</a>",
            youtubeLink: 'https://www.youtube.com/embed/NPYmHyv1KeE?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "josquin",
            birth: 1450,
            death: 1521,
            url: "https://i.imgur.com/mnduALO.png",
            coordinates: {
                longitude: 4.0621,
                latitude: 50.5257
            },
            popupTitle: "Josquin des Prez (c. 1450/1455 – 1521)",
            popupContent: "Composer of Renaissance polyphonic vocal music <br> Born in either Hainaut (modern-day Belgium) or modern-day France <br> Died in Cond\u00E9-sur-l'Escaut <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Ave Maria</a>",
            youtubeLink: 'https://www.youtube.com/embed/LUAgAF4Khmg?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "byrd",
            birth: 1539,
            death: 1623,
            url: "https://i.imgur.com/YinSaRf.png",
            coordinates: {
                longitude: -0.4278,
                latitude: 51.5074
            },
            popupTitle: "William Byrd (c.1539/40 or 1543 – 1623)",
            popupContent: "Composer of sacred and secular polyphonic music <br> Born in London <br> Died in Stondon Massey <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Agnus Dei</a>",
            youtubeLink: 'https://www.youtube.com/embed/4qlgQoVshf4?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "palestrina",
            birth: 1525,
            death: 1594,
            url: "https://i.imgur.com/Wm7Ud5w.png",
            coordinates: {
                longitude: 12.8887,
                latitude: 41.8383
            },
            popupTitle: "Giovanni Pierluigi da Palestrina (c. 1525 – 1594)",
            popupContent: "Composer of sacred polyphonic vocal music <br> Born in Palestrina <br> Died in Rome <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Missa Papae Marcelli, Kyrie</a>",
            youtubeLink: 'https://www.youtube.com/embed/3n8XdKkrqgo?&autoplay=1',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "lassus",
            birth: 1532,
            death: 1594,
            url: "https://i.imgur.com/5jYd4oj.png",
            coordinates: {
                longitude: 3.9567,
                latitude: 50.4542
            },
            popupTitle: 'Orlande de Lassus (1532, possibly 1530 – 1594)',
            popupContent: "Composer of sacred and secular polyphonic works <br> Born in Mons (modern-day Belgium) <br> Died in Munich <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">La Nuict Froide et Sombre</a>",
            youtubeLink: 'https://www.youtube.com/embed/UQN6gFnsGI4?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "gabrieli",
            birth: 1554,
            death: 1612,
            url: "https://i.imgur.com/FJGA2J8.png",
            coordinates: {
                longitude: 12.3155,
                latitude: 45.4408
            },
            popupTitle: 'Giovanni Gabrieli (c. 1554/1557 – 1612)',
            popupContent: "Composer of sacred vocal and instrumental music <br> Born in Venice <br> Died in Venice <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Suscipe</a>",
            youtubeLink: 'https://www.youtube.com/embed/DP8zh3-4qrU?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "dowland",
            birth: 1563,
            death: 1626,
            url: "https://i.imgur.com/lKagHqO.png",
            coordinates: {
                longitude: 0.3278,
                latitude: 51.5074
            },
            popupTitle: 'John Dowland (1563 – 1626)',
            popupContent: 'Composer of songs and music for lute <br> Born in London <br> Died in London <br> Composition | <a class="youtubeLinkAlias" href="javascript:void(0)">Flow My Tears</a>',
            youtubeLink: 'https://www.youtube.com/embed/Y9HKl8H0PWg?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "purcell",
            birth: 1659,
            death: 1695,
            url: "https://i.imgur.com/lkaBZUG.png",
            coordinates: {
                longitude: 0.1357,
                latitude: 51.4975
            },
            popupTitle: 'Henry Purcell (1659 – 1695)',
            popupContent: "Composer of opera, sacred, and incidental music <br> Born in London <br> Died in London <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Dido's Lament</a>",
            youtubeLink: 'https://www.youtube.com/embed/ou8A0g_jYyA?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "monteverdi",
            birth: 1567,
            death: 1643,
            url: "https://i.imgur.com/ItaJtij.png",
            coordinates: {
                longitude: 10.0227,
                latitude: 45.1332
            },
            popupTitle: 'Claudio Monteverdi (1567 – 1643)',
            popupContent: "Composer of opera, sacred, and secular music <br> Born in Cremona <br> Died in Venice <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Lamento della Ninfa</a>",
            youtubeLink: 'https://www.youtube.com/embed/zsL4MGFh6QI?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "vivaldi",
            birth: 1678,
            death: 1741,
            url: "https://i.imgur.com/kvlbpU3.png",
            coordinates: {
                longitude: 12.3155,
                latitude: 45.4408
            },
            popupTitle: 'Antonio Vivaldi (1678 – 1741)',
            popupContent: "Composer of concertos, choral, and operatic music <br> Born in Venice <br> Died in Vienna <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Violin Concerto in A Minor RV356</a>",
            youtubeLink: 'https://www.youtube.com/embed/QPba-i26YNA?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "couperin",
            birth: 1668,
            death: 1733,
            url: "https://i.imgur.com/vJDhyXC.png",
            coordinates: {
                longitude: 2.3522,
                latitude: 48.8566
            },
            popupTitle: 'François Couperin (1668 – 1733)',
            popupContent: "Composer of harpsichord and vocal music <br> Born in Paris <br> Died in Paris <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Les Baricades Mist\u00E9rieuses</a>",
            youtubeLink: 'https://www.youtube.com/embed/R2mGjvrGbcE?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "albinoni",
            birth: 1671,
            death: 1751,
            url: "https://i.imgur.com/Kxt8UZm.png",
            coordinates: {
                longitude: 12.3155,
                latitude: 45.4408
            },
            popupTitle: 'Tomaso Albinoni (1671 – 1751)',
            popupContent: "Composer of instrumental and operatic music <br> Born in Venice <br> Died in Venice <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Oboe Concerto #2 in D Minor Op. 9</a>",
            youtubeLink: 'https://www.youtube.com/embed/LjgndGuy77o?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "telemann",
            birth: 1681,
            death: 1767,
            url: "https://i.imgur.com/2kIShhC.png",
            coordinates: {
                longitude: 11.6276,
                latitude: 52.1205
            },
            popupTitle: 'Georg Philipp Telemann (1681 – 1767)',
            popupContent: "Composer of concertos, operas, orchestral and keyboard music <br> Born in Magdeburg <br> Died in Hamburg <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Suite in A major</a>",
            youtubeLink: 'https://www.youtube.com/embed/ZySASwzVDR0?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "bach",
            birth: 1685,
            death: 1750,
            url: "https://i.imgur.com/AOHp6Qt.png",
            coordinates: {
                longitude: 10.3147,
                latitude: 50.9796
            },
            popupTitle: 'Johann Sebastian Bach (1685 – 1750)',
            popupContent: "Composer of contrapuntal sacred music and keyboard music <br> Born in Eisenach <br> Died in Leipzig <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Mass in B minor - Gratias</a>",
            youtubeLink: 'https://www.youtube.com/embed/5Belbi3tSQw?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "scarlatti",
            birth: 1685,
            death: 1757,
            url: "https://i.imgur.com/yxwn3mE.png",
            coordinates: {
                longitude: 14.2681,
                latitude: 40.8518
            },
            popupTitle: 'Domenico Scarlatti (1685 – 1757)',
            popupContent: "Composer of keyboard sonatas <br> Born in Naples <br> Died in Madrid <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Sonata in D minor K141</a>",
            youtubeLink: 'https://www.youtube.com/embed/wjghYFgt8Zk?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "handel",
            birth: 1685,
            death: 1759,
            url: "https://i.imgur.com/wuR9Uvb.png",
            coordinates: {
                longitude: 11.9688,
                latitude: 51.4970
            },
            popupTitle: 'George Frideric Handel (1685 – 1759)',
            popupContent: "Composer of operas, oratorios, <br> Born in Halle-upon-Saale <br> Died in London <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Zadok the Priest</a>",
            youtubeLink: 'https://www.youtube.com/embed/3kucFS9Gafk?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "beethoven",
            birth: 1770,
            death: 1827,
            url: "https://i.imgur.com/CzuvuUB.png",
            coordinates: {
                longitude: 7.104469222936351,
                latitude: 50.736576630668395
            },
            popupTitle: 'Ludwig van Beethoven (1770 – 1827)',
            popupContent: "Composer of symphonies, chamber works, and piano music <br> Born in Bonn <br> Died in Vienna <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Missa Solemnis, Kyrie</a>",
            youtubeLink: 'https://www.youtube.com/embed/FNXMVzH_Dys?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "haydn",
            birth: 1732,
            death: 1809,
            url: "https://i.imgur.com/uRY4P3d.png",
            coordinates: {
                longitude: 16.8589,
                latitude: 48.0656
            },
            popupTitle: 'Joseph Haydn (1732 – 1809)',
            popupContent: "Composer of symphonies, chamber works, and piano music <br> Born in Rohrau <br> Died in Vienna <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">The Creation, Overture</a>",
            youtubeLink: 'https://www.youtube.com/embed/8omYmytYvlo?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "mozart",
            birth: 1756,
            death: 1791,
            url: "https://i.imgur.com/pCaNEzz.png",
            coordinates: {
                longitude: 13.0550,
                latitude: 47.8095
            },
            popupTitle: 'Wolfgang Amadeus Mozart (1756 – 1791)',
            popupContent: "Composer of symphonies, chamber works, and piano music <br> Born in Salzburg <br> Died in Vienna <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Lacrimosa</a>",
            youtubeLink: 'https://www.youtube.com/embed/8oESM64gU5M?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "salieri",
            birth: 1750,
            death: 1825,
            url: "https://i.imgur.com/8cInoGd.png",
            coordinates: {
                longitude: 11.3032,
                latitude: 45.1936
            },
            popupTitle: 'Antonio Salieri (1750 – 1825)',
            popupContent: "Composer of operas, sacred, and instrumental works <br> Born in Legnago <br> Died in Vienna <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Sinfonia Veneziana</a>",
            youtubeLink: 'https://www.youtube.com/embed/G_5Dr8Bz5Bc?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "vonWeber",
            birth: 1786,
            death: 1826,
            url: "https://i.imgur.com/MCmdGRp.png",
            coordinates: {
                longitude: 10.6095,
                latitude: 54.1330
            },
            popupTitle: 'Carl Maria von Weber (1786 – 1826)',
            popupContent: "Composer of operas, symphonies, and concertos <br> Born in Eutin <br> Died in London <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Der Freischutz, Overture</a>",
            youtubeLink: 'https://www.youtube.com/embed/ZdMqHNcL6xI?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "schubert",
            birth: 1797,
            death: 1828,
            url: "https://i.imgur.com/u5qnikQ.png",
            coordinates: {
                longitude: 16.3524,
                latitude: 48.2266
            },
            popupTitle: 'Franz Schubert (1797 – 1828)',
            popupContent: "Composer of songs, symphonies, chamber and piano music <br> Born in Vienna <br> Died in Vienna <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Gute Nacht</a>",
            youtubeLink: 'https://www.youtube.com/embed/_LpiqWJ1Jl4?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "berlioz",
            birth: 1803,
            death: 1869,
            url: "https://i.imgur.com/atfcCBo.png",
            coordinates: {
                longitude: 5.2600,
                latitude: 45.3938
            },
            popupTitle: 'Hector Berlioz (1803 – 1869)',
            popupContent: "Composer of symphonies, choral music and operas <br> Born in La C\u00F4te-Saint-Andr\u00E9 (south-eastern France) <br> Died in Paris <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">L'enfance du Christ, L'Adieu des bergers \u00E0 la sainte famille</a>",
            youtubeLink: 'https://www.youtube.com/embed/Rp45bQkRLGM?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "chopin",
            birth: 1810,
            death: 1849,
            url: "https://i.imgur.com/PSkUJRd.png",
            coordinates: {
                longitude: 20.3249,
                latitude: 52.2574
            },
            popupTitle: 'Frédéric Chopin (1810 – 1849)',
            popupContent: "Composer of piano music <br> Born in \u017Belazowa Wola (near Warsaw) <br> Died in Paris <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Andante Spianato</a>",
            youtubeLink: 'https://www.youtube.com/embed/X65vRfdHmCc?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "liszt",
            birth: 1811,
            death: 1886,
            url: "https://i.imgur.com/nDeLYBz.png",
            coordinates: {
                longitude: 16.5311,
                latitude: 47.5653
            },
            popupTitle: 'Franz Liszt (1811 – 1886)',
            popupContent: "Composer of piano music, piano transcriptions and symphonic poems <br> Born in Doborj\u00E1n <br> Died in Bayreuth <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Un Sospiro</a>",
            youtubeLink: 'https://www.youtube.com/embed/3JXMdpGpfBU?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "mendelssohn",
            birth: 1809,
            death: 1847,
            url: "https://i.imgur.com/tbivf4W.png",
            coordinates: {
                longitude: 9.9937,
                latitude: 53.5511
            },
            popupTitle: 'Felix Mendelssohn (1809 – 1847)',
            popupContent: "Composer of symphonies, concertos, chamber and piano music <br> Born in Hamburg <br> Died in Leipzig <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Hebrides Overture (Fingal's Cave)</a>",
            youtubeLink: 'https://www.youtube.com/embed/MdQyN7MYSN8?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "brahms",
            birth: 1833,
            death: 1897,
            url: "https://i.imgur.com/1CNdSwu.png",
            coordinates: {
                longitude: 9.9937,
                latitude: 53.5511
            },
            popupTitle: 'Johannes Brahms (1833 – 1897)',
            popupContent: "Composer of orchestral, choral, chamber and piano music <br> Born in Hamburg <br> Died in Vienna <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Intermezzo Op. 117, No. 1</a>",
            youtubeLink: 'https://www.youtube.com/embed/dvhfG__SPbQ?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "grieg",
            birth: 1843,
            death: 1907,
            url: "https://i.imgur.com/eGcxAEa.png",
            coordinates: {
                longitude: 5.3221,
                latitude: 60.3913
            },
            popupTitle: 'Edvard Grieg (1843 – 1907)',
            popupContent: "Composer of piano, vocal, orchestral, chamber, and incidental music <br> Born in Bergen <br> Died in Bergen <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Peer Gynt, Morning Mood</a>",
            youtubeLink: 'https://www.youtube.com/embed/kzTQ9fjforY?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "dvorak",
            birth: 1841,
            death: 1904,
            url: "https://i.imgur.com/MaMOYEU.png",
            coordinates: {
                longitude: 14.2988,
                latitude: 50.2615
            },
            popupTitle: 'Antonín Dvořák (1841 – 1904)',
            popupContent: "Composer of concertos, symphonic, choral and operatic music <br> Born in Nelahozeves (near Prague) <br> Died in Prague <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Symphony no. 9, \"From The New World\" mvt. II, Largo</a>",
            youtubeLink: 'https://www.youtube.com/embed/uCydQm83cJQ?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "mussorgsky",
            birth: 1839,
            death: 1881,
            url: "https://i.imgur.com/VLXL6g5.png",
            coordinates: {
                longitude: 31.2825,
                latitude: 56.2811
            },
            popupTitle: 'Modest Mussorgsky (1839 – 1881)',
            popupContent: "Composer of orchestral, opera, vocal and piano music <br> Born in Karevo (Pskov Governorate) <br> Died in Saint Petersburg <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Night on Bald Mountain</a>",
            youtubeLink: 'https://www.youtube.com/embed/by4khgR7Q5k?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "bruckner",
            birth: 1824,
            death: 1896,
            url: "https://i.imgur.com/fCijWKa.png",
            coordinates: {
                longitude: 14.2913,
                latitude: 48.2077
            },
            popupTitle: 'Anton Bruckner (1824 – 1896)',
            popupContent: "Composer of orchestral and choral music <br> Born in Ansfelden (now a suburb of Linz) <br> Died in Vienna <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Os Justi Meditabitur</a>",
            youtubeLink: 'https://www.youtube.com/embed/AXv-QUU2mgk?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "tchaikovsky",
            birth: 1840,
            death: 1893,
            url: "https://i.imgur.com/InFzWpv.png",
            coordinates: {
                longitude: 53.9769,
                latitude: 57.0409
            },
            popupTitle: 'Pyotr Ilyich Tchaikovsky (1840 – 1893)',
            popupContent: "Composer of orchestral, ballet, chamber, piano and liturgical music <br> Born in Votkinsk (Vyatka Governorate) <br> Died in Saint Petersburg <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Piano Concerto No. 1, B Flat Minor</a>",
            youtubeLink: 'https://www.youtube.com/embed/BWerj8FcprM?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "puccini",
            birth: 1858,
            death: 1924,
            url: "https://i.imgur.com/Pqgm1i2.png",
            coordinates: {
                longitude: 10.5027,
                latitude: 43.8429
            },
            popupTitle: 'Giacomo Puccini (1858 – 1924)',
            popupContent: "Composer of opera <br> Born in Lucca <br> Died in Brussels <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Nessun Dorma (from Turandot)</a>",
            youtubeLink: 'https://www.youtube.com/embed/LvUIITL0QqQ?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "saintSaëans",
            birth: 1835,
            death: 1921,
            url: "https://i.imgur.com/DVhvkzu.png",
            coordinates: {
                longitude: 2.3522,
                latitude: 48.8566
            },
            popupTitle: 'Camille Saint-Saëns (1835 – 1921)',
            popupContent: "Composer of orchestral, opera, piano and chamber music <br> Born in Paris <br> Died in Algiers <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">The Swan, Carnival of the Animals</a>",
            youtubeLink: 'https://www.youtube.com/embed/zNbXuFBjncw?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "strauss",
            birth: 1864,
            death: 1949,
            url: "https://i.imgur.com/GXW5eDL.png",
            coordinates: {
                longitude: 11.5820,
                latitude: 48.1351
            },
            popupTitle: 'Richard Strauss (1864 – 1949)',
            popupContent: "Composer of orchestral, opera, ballet, piano and chamber music <br> Born in Munich <br> Died in Garmisch-Partenkirchen (Bavaria) <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Morgen</a>",
            youtubeLink: 'https://www.youtube.com/embed/bMrg9blUTig?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "mahler",
            birth: 1860,
            death: 1911,
            url: "https://i.imgur.com/sjVf3Vl.png",
            coordinates: {
                longitude: 15.3041,
                latitude: 49.5926
            },
            popupTitle: 'Gustav Mahler (1860 – 1911)',
            popupContent: "Composer of songs and orchestral music <br> Born in Kali\u0161t\u011B <br> Died in Vienna <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Ich bin der Welt abhanden gekommen</a>",
            youtubeLink: 'https://www.youtube.com/embed/TzJyIWxjX9o?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "debussy",
            birth: 1862,
            death: 1918,
            url: "https://i.imgur.com/XZ41ovV.png",
            coordinates: {
                longitude: 2.0938,
                latitude: 48.8989
            },
            popupTitle: 'Claude Debussy (1862 – 1918)',
            popupContent: "Composer of orchestral, piano, chamber and ballet music <br> Born in Paris <br> Died in Paris <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Children's Corner, I. Doctor Gradus ad Parnassum</a>",
            youtubeLink: 'https://www.youtube.com/embed/o0rApPwATew?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "rachmaninoff",
            birth: 1873,
            death: 1943,
            url: "https://i.imgur.com/SaJABrE.png",
            coordinates: {
                longitude: 31.4013,
                latitude: 57.9124
            },
            popupTitle: 'Sergei Rachmaninoff (1873 – 1943)',
            popupContent: "Composer of piano, orchestral and liturgical music <br> Born in Starorussky Uyezd <br> Died in Beverly Hills <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Bogoroditse Devo (from All-Night-Vigil)</a>",
            youtubeLink: 'https://www.youtube.com/embed/InMhSNBlIg8?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "sibelius",
            birth: 1865,
            death: 1957,
            url: "https://i.imgur.com/7uT2DIa.png",
            coordinates: {
                longitude: 24.4590,
                latitude: 60.9929
            },
            popupTitle: 'Jean Sibelius (1865 – 1957)',
            popupContent: "Composer of orchestral, chamber and vocal music <br> Born in H\u00E4meenlinna <br> Died in Ainola <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Finlandia</a>",
            youtubeLink: 'https://www.youtube.com/embed/qOSaT6U4e-8?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "schoenberg",
            birth: 1874,
            death: 1951,
            url: "https://i.imgur.com/jqZoxwx.png",
            coordinates: {
                longitude: 16.3738,
                latitude: 48.2082
            },
            popupTitle: 'Arnold Schoenberg (1874 – 1951)',
            popupContent: "Composer of orchestral, chamber, piano and vocal music <br> Born in Vienna <br> Died in Los Angeles <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Gurre-Lieder</a>",
            youtubeLink: 'https://www.youtube.com/embed/FXhAtBT57zA?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "stravinsky",
            birth: 1882,
            death: 1971,
            url: "https://i.imgur.com/gID0Xfg.png",
            coordinates: {
                longitude: 29.7544,
                latitude: 59.9153
            },
            popupTitle: 'Igor Stravinsky (1882 – 1971)',
            popupContent: "Composer of ballet, orchestral, operatic, incidental, choral and chamber music <br> Born in Oranienbaum (a suburb of St. Petersburg) <br> Died in New York <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Firebird, Finale</a>",
            youtubeLink: 'https://www.youtube.com/embed/-WsqK1mCGeY?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "bartok",
            birth: 1881,
            death: 1945,
            url: "https://i.imgur.com/YIpmGs5.png",
            coordinates: {
                longitude: 20.6225,
                latitude: 46.0593
            },
            popupTitle: 'Béla Bartók (1881 – 1945)',
            popupContent: "Composer of orchestral, operatic, piano, choral and chamber music <br> Born in Nagyszentmikl\u00F3s (now S\u00E2nnicolau Mare Romania) <br> Died in New York <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Romanian Folk Dances</a>",
            youtubeLink: 'https://www.youtube.com/embed/4HAIHSqiwAA?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "ravel",
            birth: 1875,
            death: 1937,
            url: "https://i.imgur.com/rFTahiO.png",
            coordinates: {
                longitude: 1.6754,
                latitude: 43.3875
            },
            popupTitle: 'Maurice Ravel (1875 – 1937)',
            popupContent: "Composer of piano, orchestral, operatic and chamber music <br> Born in Ciboure (near Biarritz) <br> Died in Paris <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Daybreak (from Daphnis et Chloe)</a>",
            youtubeLink: 'https://www.youtube.com/embed/ovfu-5RO278?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "shostakovich",
            birth: 1906,
            death: 1975,
            url: "https://i.imgur.com/2UDd3Bi.png",
            coordinates: {
                longitude: 30.3351,
                latitude: 59.9343
            },
            popupTitle: 'Dmitri Shostakovich (1906 – 1975)',
            popupContent: "Composer of symphonic, orchestral, operatic, piano, choral, chamber and film music <br> Born in St. Petersburg <br> Died in Moscow <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Symphony No. 5, Finale</a>",
            youtubeLink: 'https://www.youtube.com/embed/xU9_uAb7pZs?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "prokofiev",
            birth: 1891,
            death: 1953,
            url: "https://i.imgur.com/YRjC7KG.png",
            coordinates: {
                longitude: 37.1907,
                latitude: 48.0468
            },
            popupTitle: 'Sergei Prokofiev (1906 – 1975)',
            popupContent: "Composer of orchestral, symphonic, operatic, piano, choral, chamber and film music <br> Born in Sontsivka <br> Died in Moscow <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Troika (from Lieutenant Kij\u00E9)</a>",
            youtubeLink: 'https://www.youtube.com/embed/5QsRDpsItq0?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "britten",
            birth: 1913,
            death: 1976,
            url: "https://i.imgur.com/dNCwHEp.png",
            coordinates: {
                longitude: 1.7534,
                latitude: 52.4811
            },
            popupTitle: 'Benjamin Britten (1913 – 1976)',
            popupContent: "Composer of operatic, orchestral, chamber and vocal music <br> Born in Lowestoft <br> Died in Aldeburgh <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">A Hymn to the Virgin</a>",
            youtubeLink: 'https://www.youtube.com/embed/kmocmreevF8?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "webern",
            birth: 1883,
            death: 1945,
            url: "https://i.imgur.com/GOo0auz.png",
            coordinates: {
                longitude: 16.3738,
                latitude: 48.2082
            },
            popupTitle: 'Anton Webern (1883 – 1945)',
            popupContent: "Composer of chamber, orchestral, piano and vocal music <br> Born in Vienna <br> Died in Mittersill <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Passacaglia Op. 1</a>",
            youtubeLink: 'https://www.youtube.com/embed/9VMIhkU_XpQ?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "messiaen",
            birth: 1908,
            death: 1992,
            url: "https://i.imgur.com/cehnNlC.png",
            coordinates: {
                longitude: 4.8055,
                latitude: 43.9493
            },
            popupTitle: 'Olivier Messiaen (1908 – 1992)',
            popupContent: "Composer of chamber, orchestral, organ, piano and choral music <br> Born in Avignon <br> Died in Clichy <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Quartet for the End of Time, Praise to the Eternity of Jesus</a>",
            youtubeLink: 'https://www.youtube.com/embed/pJsG02KIcLM?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "berg",
            birth: 1885,
            death: 1935,
            url: "https://i.imgur.com/7Vg2cOz.png",
            coordinates: {
                longitude: 16.3738,
                latitude: 48.2082
            },
            popupTitle: 'Alban Berg (1885 – 1935)',
            popupContent: "Composer of operatic, vocal, chamber, orchestral and piano works <br> Born in Vienna <br> Died in Vienna <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Violin Concerto, mvt. 2</a>",
            youtubeLink: 'https://www.youtube.com/embed/wxRLgWYcW70?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        },
        {
            name: "satie",
            birth: 1866,
            death: 1925,
            url: "https://i.imgur.com/92n6aOZ.png",
            coordinates: {
                longitude: 0.2333,
                latitude: 49.4188
            },
            popupTitle: 'Erik Satie (1866 – 1925)',
            popupContent: "Composer of piano, orchestral, dramatic and vocal music <br> Born in Honfleur <br> Died in Arcueil <br> Composition | <a class=\"youtubeLinkAlias\" href=\"javascript:void(0)\">Gymnop\u00E9die No. 1</a>",
            youtubeLink: 'https://www.youtube.com/embed/eMnxjdGTK4w?&autoplay=1;',
            isDisplaying: false,
            isUpdatedGraphicDisplaying: false
        }
    ];
    exports.default = composers;
});
//# sourceMappingURL=composers.js.map