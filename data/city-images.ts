// Wikimedia Commons에서 받은 사진(퍼블릭 도메인·CC). 작가와 라이선스를 카드에 표시합니다.
export type CityImage = { src: string; w: number; h: number; author: string; license: string; licenseUrl: string; source: string; file: string };
export const CITY_IMAGES: Record<string, CityImage> = {
 "colosseum": {
  "src": "/city/colosseum.jpg",
  "w": 800,
  "h": 533,
  "author": "Nicholas Hartmann",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Rome_Colosseum_exterior_2.jpg",
  "file": "Rome Colosseum exterior 2.jpg"
 },
 "forum": {
  "src": "/city/forum.jpg",
  "w": 800,
  "h": 450,
  "author": "Nicholas Hartmann",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Roman_Forum_looking_East_panorama.jpg",
  "file": "Roman Forum looking East panorama.jpg"
 },
 "palatine": {
  "src": "/city/palatine.jpg",
  "w": 800,
  "h": 483,
  "author": "Livioandronico2013",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Ruins_of_the_Domus_Augustana_on_Palatine_Hill..jpg",
  "file": "Ruins of the Domus Augustana on Palatine Hill..jpg"
 },
 "capitoline": {
  "src": "/city/capitoline.jpg",
  "w": 800,
  "h": 537,
  "author": "Jakub Hałun",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Campidoglio_Rome_20140808_2768.jpg",
  "file": "Campidoglio Rome 20140808 2768.jpg"
 },
 "circus": {
  "src": "/city/circus.jpg",
  "w": 800,
  "h": 532,
  "author": "Livioandronico2013",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Circus_Maximus_seen_from_Palatine_hill.JPG",
  "file": "Circus Maximus seen from Palatine hill.JPG"
 },
 "pompey": {
  "src": "/city/pompey.jpg",
  "w": 800,
  "h": 600,
  "author": "Wknight94",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "source": "https://commons.wikimedia.org/wiki/File:Largo_di_Torre_Argentina_4.jpg",
  "file": "Largo di Torre Argentina 4.jpg"
 },
 "pantheon": {
  "src": "/city/pantheon.jpg",
  "w": 800,
  "h": 548,
  "author": "Julian Lupyan",
  "license": "CC0",
  "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "source": "https://commons.wikimedia.org/wiki/File:Fa%C3%A7ade_of_the_Pantheon,_Rome,_Italy.jpg",
  "file": "Façade of the Pantheon, Rome, Italy.jpg"
 },
 "mausaug": {
  "src": "/city/mausaug.jpg",
  "w": 800,
  "h": 599,
  "author": "Alexander Z.",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
  "source": "https://commons.wikimedia.org/wiki/File:Rome,_Mausoleum_of_Augustus_02.jpg",
  "file": "Rome, Mausoleum of Augustus 02.jpg"
 },
 "arapacis": {
  "src": "/city/arapacis.jpg",
  "w": 800,
  "h": 509,
  "author": "Rabax63",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Ara_Pacis_(SW).jpg",
  "file": "Ara Pacis (SW).jpg"
 },
 "santangelo": {
  "src": "/city/santangelo.jpg",
  "w": 800,
  "h": 530,
  "author": "Jebulon",
  "license": "CC0",
  "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "source": "https://commons.wikimedia.org/wiki/File:Castel_Sant%27Angelo_at_dusk,_Rome,_Italy.jpg",
  "file": "Castel Sant'Angelo at dusk, Rome, Italy.jpg"
 },
 "caracalla": {
  "src": "/city/caracalla.jpg",
  "w": 800,
  "h": 533,
  "author": "Pascal Reusch",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "source": "https://commons.wikimedia.org/wiki/File:Baths_of_Caracalla_2.JPG",
  "file": "Baths of Caracalla 2.JPG"
 },
 "diocletian": {
  "src": "/city/diocletian.jpg",
  "w": 800,
  "h": 603,
  "author": "Jan van de Velde (1593–1641), 동판화",
  "license": "CC BY 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:View_of_the_Santa_Maria_degli_Angeli,_part_of_the_Baths_of_Diocletian_in_Rome_PK-T-AW-1200,_PK-T-AW-687.tiff",
  "file": "View of the Santa Maria degli Angeli, part of the Baths of Diocletian in Rome PK-T-AW-1200, PK-T-AW-687.tiff"
 },
 "trajan": {
  "src": "/city/trajan.jpg",
  "w": 800,
  "h": 587,
  "author": "Gary Todd",
  "license": "CC0",
  "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "source": "https://commons.wikimedia.org/wiki/File:Rome_Trajan%27s_Column_(9808898326).jpg",
  "file": "Rome Trajan's Column (9808898326).jpg"
 },
 "constantine": {
  "src": "/city/constantine.jpg",
  "w": 800,
  "h": 528,
  "author": "Livioandronico2013",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Arch_of_Constantine_at_Night_(Rome).jpg",
  "file": "Arch of Constantine at Night (Rome).jpg"
 },
 "titus": {
  "src": "/city/titus.jpg",
  "w": 800,
  "h": 743,
  "author": "Jebulon",
  "license": "CC0",
  "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "source": "https://commons.wikimedia.org/wiki/File:Arch_Titus,_Forum_Romanum,_Rome,_Italy.jpg",
  "file": "Arch Titus, Forum Romanum, Rome, Italy.jpg"
 },
 "domus": {
  "src": "/city/domus.jpg",
  "w": 800,
  "h": 600,
  "author": "Davide Mauro",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Domus_Aurea_03.jpg",
  "file": "Domus Aurea 03.jpg"
 },
 "mamertine": {
  "src": "/city/mamertine.jpg",
  "w": 800,
  "h": 346,
  "author": "Chris 73",
  "license": "CC BY-SA 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
  "source": "https://commons.wikimedia.org/wiki/File:Mamertine_Prison.jpg",
  "file": "Mamertine Prison.jpg"
 },
 "appia": {
  "src": "/city/appia.jpg",
  "w": 800,
  "h": 644,
  "author": "Ardeatino",
  "license": "CC BY 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:PortSSebastian(face_externe).jpg",
  "file": "PortSSebastian(face externe).jpg"
 },
 "marcellus": {
  "src": "/city/marcellus.jpg",
  "w": 800,
  "h": 600,
  "author": "Nicholas Hartmann",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Rome_Theater_of_Marcellus_1.jpg",
  "file": "Rome Theater of Marcellus 1.jpg"
 },
 "island": {
  "src": "/city/island.jpg",
  "w": 800,
  "h": 533,
  "author": "Alexkom000",
  "license": "CC BY 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:2024-10-12_Rome,_Tiber_Island.jpg",
  "file": "2024-10-12 Rome, Tiber Island.jpg"
 },
 "maxentius": {
  "src": "/city/maxentius.jpg",
  "w": 800,
  "h": 533,
  "author": "Jebulon",
  "license": "CC0",
  "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "source": "https://commons.wikimedia.org/wiki/File:Basilica_Maxentius_Constantine_Rome.jpg",
  "file": "Basilica Maxentius Constantine Rome.jpg"
 },
 "stpeter": {
  "src": "/city/stpeter.jpg",
  "w": 800,
  "h": 533,
  "author": "argenberg",
  "license": "CC BY 2.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
  "source": "https://commons.wikimedia.org/wiki/File:The_Vatican_obelisk_at_St._Peter%27s_Square.jpg",
  "file": "The Vatican obelisk at St. Peter's Square.jpg"
 },
 "aventine": {
  "src": "/city/aventine.jpg",
  "w": 800,
  "h": 533,
  "author": "Sailko",
  "license": "CC BY 3.0",
  "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
  "source": "https://commons.wikimedia.org/wiki/File:Santa_sabina,_veduta_dall%27aventino_04.jpg",
  "file": "Santa sabina, veduta dall'aventino 04.jpg"
 },
 "lateran": {
  "src": "/city/lateran.jpg",
  "w": 800,
  "h": 725,
  "author": "Livioandronico2013",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Archbasilica_of_St._John_Lateran_HD.jpg",
  "file": "Archbasilica of St. John Lateran HD.jpg"
 },
 "aurelian": {
  "src": "/city/aurelian.jpg",
  "w": 800,
  "h": 463,
  "author": "Karelj",
  "license": "Public domain",
  "licenseUrl": "",
  "source": "https://commons.wikimedia.org/wiki/File:Aurelian_Walls_Rome_2011_1.jpg",
  "file": "Aurelian Walls Rome 2011 1.jpg"
 },
 "milvian": {
  "src": "/city/milvian.jpg",
  "w": 800,
  "h": 532,
  "author": "Livioandronico2013",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Ponte_Milvio_HD.jpg",
  "file": "Ponte Milvio HD.jpg"
 },
 "campus": {
  "src": "/city/campus.jpg",
  "w": 800,
  "h": 504,
  "author": "Dietmar Rabich",
  "license": "CC BY-SA 4.0",
  "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
  "source": "https://commons.wikimedia.org/wiki/File:Rome_(Italy),_Piazza_Navona_--_2013_--_4418.jpg",
  "file": "Rome (Italy), Piazza Navona -- 2013 -- 4418.jpg"
 }
};
