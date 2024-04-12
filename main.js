

require([

  "esri/Map",
  "esri/views/MapView",
  "esri/symbols/PictureMarkerSymbol",
  "esri/Graphic",
  "esri/layers/GraphicsLayer"

  ], function(Map, MapView, PictureMarkerSymbol, Graphic, GraphicsLayer) {


//data

var diveSites = {
    'Buddy Dive': [12.170535566368748,-68.2883658225989],
    'Buddy Dive ': [12.170535566368748,-68.2883658225989],
    "Sharon's Serenity": [12.156386883189201, -68.3277144848515],
    'Something Special': [12.161301569695356,-68.28365669786443],
    'Something Special ': [12.161301569695356,-68.28365669786443],
    'Rock Pile': [12.147492692008155,-68.31121178213303],
    'Thousand Steps': [12.210470886557829,-68.3216199871125],
    "Petrie's Pilar": [12.18695490100768,-68.29696786537608],
    'Bacheloar Beach': [12.125544775691129,-68.28755478921485],
    'Bari': [12.169051826423809,-68.28790119161755],
    'Mi Dushi': [12.164113120667405,-68.32305192947389],
    'Knife': [12.168702215949589,-68.30641686916353],
    'Oil Slick Leap': [12.199813023532597,-68.30865383148195],

};

var diveLog = {
    'Buddy Dive': [
        {
            date: "2023-09-09",
            time: "04:30 PM",
            notes: " During this dive, we had the opportunity to observe some remarkable marine life. We encountered impressive, large eels and even spotted some majestic tarpon. This was a quick 45-minute check-out dive, and it was reassuring to see that all our equipment was working perfectly. I also tried out my new booties, and they proved to be quite comfortable."
        },
        {
            date: "2023-09-11",
            time: "9:30 PM",
            notes: "Our first night dive of the trip turned out to be a great success. We witnessed the tarpon darting around in the darkness, and there were plenty of eels, both out in the open and nestled in their rocky homes. To add to the excitement, I was thrilled to spot not one but two octopuses. One was relatively small, about 5 inches in size, and it displayed mesmerizing color changes while hiding from my light. The other was a larger octopus that almost seemed to blend into the coral as it escaped from my flash lights pearing eye."
        }
    ],
    'Buddy Dive ': [
        {
            date: "2023-09-11",
            time: "9:30 PM",
            notes: "Our first night dive of the trip turned out to be a great success. We witnessed the tarpon darting around in the darkness, and there were plenty of eels, both out in the open and nestled in their rocky homes. To add to the excitement, I was thrilled to spot not one but two octopuses. One was relatively small, about 5 inches in size, and it displayed mesmerizing color changes while hiding from my light. The other was a larger octopus that almost seemed to blend into the coral as it escaped from my flash lights pearing eye."
        }
    ],
    'Something Special': [
        {
            date: "2023-09-10",
            time: "8:40 AM",
            notes: "This dive at Something Special treated us to an array of fascinating marine life. I was delighted to encounter my favorite fish, a Scorpionfish, along with Jacks, Eels, Anemones, and Urchins. We also had a memorable moment helping a fellow diver navigate over the broken coral on the sandy ocean floor. I'm grateful that we safely explored this underwater wonderland!"
        },
        {
            date: "2023-09-13",
            time: "1:30 PM",
            notes: "Octopus!! What a thrilling dive it was! Just beneath the boat at the tail end of the dive, we stumbled upon a moderately sized octopus gracefully moving around the sandy seabed. Its eyes closely observed us and the other divers. Additionally, we had the pleasure of witnessing some captivating Scorpionfish during this dive."
        },
    ],
    'Something Special ': [
        {
            date: "2023-09-13",
            time: "1:30 PM",
            notes: "Octopus!! What a thrilling dive it was! Just beneath the boat at the tail end of the dive, we stumbled upon a moderately sized octopus gracefully moving around the sandy seabed. Its eyes closely observed us and the other divers. Additionally, we had the pleasure of witnessing some captivating Scorpionfish during this dive."
        },
    ],
    'Thousand Steps': [
        {
            date: "2023-09-12",
            time: "8:40 AM",
            notes: "The underwater world at Thousand Steps presented us with spectacular coral structures, including various pillars and arches. It was a truly captivating dive experience."
        },
    ],
    "Petrie's Pilar": [
        {
            date: "2023-09-13",
            time: "10:30 AM",
            notes: "During this dive, we had the privilege of encountering the first seahorses of the trip! The dive site also featured some lovely drum fish swimming about."
        },
    ],
    "Sharon's Serenity": [
        {
            date: "2023-09-11",
            time: "10:30 AM",
            notes: "Our dive at Sharon's Serenity was eventful, with sightings of squid, a sleepy turtle, dolphins near the boat, a giant green moray eel, and a touch of current. We also crossed paths with a large barracuda, adding to the excitement of the dive."
        },
    ],
    'Rock Pile': [
        {
            date: "2023-09-11",
            time: "8:30 AM",
            notes: "Our dive at Rock Pile was marked by its tranquility, with minimal current. We had the pleasure of encountering a couple of eels, adding to the charm of the dive."
        },
    ],
    'Bacheloar Beach': [
        {
            date: "2023-09-12",
            time: "1:30 PM",
            notes: "This dive treated us to the sight of drum fish and a beautiful shallow reef adorned with Stag and Elkhorn coral, along with an abundance of soft corals. The underwater landscape was truly captivating."
        },
    ],
    'Bari': [
        {
            date: "2023-09-13",
            time: "3:30 PM",
            notes: "Our dive at Bari turned into quite an adventure. Initially, we decided to drift dive from Bari reef to Buddy Dive. At the time, the current was flowing north toward Buddy Dive. However, about 15 minutes into the dive, the current shifted, and we found ourselves swimming against a decent current. This turned the dive into more of a workout than expected, but it was somewhat enjoyable. It was my first time exploring this area, and I noticed that Buddy Dive has planted some magnificent Elk Horn coral to the south of the property in about 20 feet of water. It was a pleasant surprise!",
        }
    ],
    'Mi Dushi': [
        {
            date: "2023-09-14",
            time: "8:15 AM",
            notes: "Relaxing dive.",
        }
    ],
    'Knife': [
        {
            date: "2023-09-14",
            time: "9:30 AM",
            notes: "Saw the smallest Scorpian Fish I have ever seen! Near the end of the dive we also saw a black tip reef shark!",
        }
    ],
    'Oil Slick Leap': [
        {
            date: "2023-09-15",
            time: "9:30 AM",
            notes: "Frist time I dove this location. The leap is not too bad, 9ft or so kinda fun. Saw a couple adult Drum Fish. Some golden eels. Light north south current."
        }
    ]
};


const map = new Map({
  basemap: "osm" // basemap styles service
});

const view = new MapView({
  map: map,
  center: [-68.2883658225989, 12.170535566368748], //Longitude, latitude
  zoom: 11,
  container: "viewDiv"
});

const graphicsLayer = new GraphicsLayer();
map.add(graphicsLayer);

const point = { //Create a point
  type: "point",
  longitude: -118.80657463861,
  latitude: 34.0005930608889
};
const simpleMarkerSymbol = {
  type: "simple-marker",
  color: [226, 119, 40],  // Orange
  outline: {
      color: [255, 255, 255], // White
      width: 1
  }
};

const pointGraphic = new Graphic({
  geometry: point,
  symbol: simpleMarkerSymbol
});
graphicsLayer.add(pointGraphic);

  // Create a picture marker symbol for the dive sites
var diveFlag = new PictureMarkerSymbol({
    url: "./Diver_Down_flag.png",
    width: "20px",
    height: "20px"
});

for (var site in diveSites) {
    console.log(diveSites[site])
    
        var coordinates = diveSites[site];
        var lat = coordinates[0];
        var lng = coordinates[1];
        var pointGeom = { //Create a point
            type: "point",
            longitude: lng,
            latitude: lat
        };

        var diveAttribute = {
            Name: site,
            date: diveLog[site][0]['date'],
            notes: diveLog[site][0]['notes']
        };

        var divePopUp = {
            title: "{Name}",
            content: "<b>Date:</b> {date}<br><b>Notes:</b> {notes}"
        };

        var pointGraphic1 = new Graphic({
            geometry: pointGeom,
            popupTemplate: divePopUp,
            attributes: diveAttribute,
            symbol: diveFlag
        });
        graphicsLayer.add(pointGraphic1);
  
    
}


});
