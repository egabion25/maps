
const mapStyle = [{
  'featureType': 'administrative',
  'elementType': 'all',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'lightness': 33,
  },
  ],
},
{
  'featureType': 'landscape',
  'elementType': 'all',
  'stylers': [{
    'color': '#f2e5d4',
  }],
},
{
  'featureType': 'poi.park',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#c5dac6',
  }],
},
{
  'featureType': 'poi.park',
  'elementType': 'labels',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'lightness': 20,
  },
  ],
},
{
  'featureType': 'road',
  'elementType': 'all',
  'stylers': [{
    'lightness': 20,
  }],
},
{
  'featureType': 'road.highway',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#c5c6c6',
  }],
},
{
  'featureType': 'road.arterial',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#e4d7c6',
  }],
},
{
  'featureType': 'road.local',
  'elementType': 'geometry',
  'stylers': [{
    'color': '#fbfaf7',
  }],
},
{
  'featureType': 'water',
  'elementType': 'all',
  'stylers': [{
    'visibility': 'on',
  },
  {
    'color': '#acbcc9',
  },
  ],
},
];

function sanitizeHTML(strings) {
  const entities = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;'};
  let result = strings[0];
  for (let i = 1; i < arguments.length; i++) {
    result += String(arguments[i]).replace(/[&<>'"]/g, (char) => {
      return entities[char];
    });
    result += strings[i];
  }
  return result;
}


function initMap() {

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 10.3156992, lng: 123.8854366},
    styles: mapStyle,
  });



  var storesJSON = {
    "type": "FeatureCollection",
    "features": [{
            "geometry": {
                "type": "Point",
                "coordinates": [-0.1428115,
                    51.5125168
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "patisserie",
                "hours": "10am - 6pm",
                "description": "Modern twists on classic pastries. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Patisserie Mayfair",
                "phone": "+44 20 1234 5678",
                "storeid": "01"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-2.579623,
                    51.452251
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "patisserie",
                "hours": "10am - 6pm",
                "description": "Come and try our award-winning cakes and pastries. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Patisserie Bristol",
                "phone": "+44 117 121 2121",
                "storeid": "02"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    1.273459,
                    52.638072
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "patisserie",
                "hours": "10am - 6pm",
                "description": "Whatever the occasion, whether it's a birthday or a wedding, Josie's Patisserie has the perfect treat for you. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Patisserie Norwich",
                "phone": "+44 1603 123456",
                "storeid": "03"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-1.9912838,
                    50.8000418
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "patisserie",
                "hours": "10am - 6pm",
                "description": "A gourmet patisserie that will delight your senses. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Patisserie Wimborne",
                "phone": "+44 1202 343434",
                "storeid": "04"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-2.985933,
                    53.408899
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "patisserie",
                "hours": "10am - 6pm",
                "description": "Spoil yourself or someone special with our classic pastries. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Patisserie Liverpool",
                "phone": "+44 151 444 4444",
                "storeid": "05"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-1.689423,
                    52.632469
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "patisserie",
                "hours": "10am - 6pm",
                "description": "Come and feast your eyes and tastebuds on our delicious pastries and cakes. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Patisserie Tamworth",
                "phone": "+44 5555 55555",
                "storeid": "06"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-3.155305,
                    51.479756
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "patisserie",
                "hours": "10am - 6pm",
                "description": "Josie's Patisserie is family-owned, and our delectable pastries, cakes, and great coffee are renowed. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Patisserie Cardiff",
                "phone": "+44 29 6666 6666",
                "storeid": "07"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-0.725019,
                    52.668891
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "cafe",
                "hours": "8am - 9:30pm",
                "description": "Oakham's favorite spot for fresh coffee and delicious cakes. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Cafe Oakham",
                "phone": "+44 7777 777777",
                "storeid": "08"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-2.477653,
                    53.735405
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "cafe",
                "hours": "8am - 9:30pm",
                "description": "Enjoy freshly brewed coffe, and home baked cakes in our homely cafe. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Cafe Blackburn",
                "phone": "+44 8888 88888",
                "storeid": "09"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-0.211363,
                    51.108966
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "cafe",
                "hours": "8am - 9:30pm",
                "description": "A delicious array of pastries with many flavours, and fresh coffee in an snug cafe. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Cafe Crawley",
                "phone": "+44 1010 101010",
                "storeid": "10"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-0.123559,
                    50.832679
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "cafe",
                "hours": "8am - 9:30pm",
                "description": "Grab a freshly brewed coffee, a decadent cake and relax in our idyllic cafe. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Cafe Brighton",
                "phone": "+44 1313 131313",
                "storeid": "11"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [-3.319575,
                    52.517827
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "cafe",
                "hours": "8am - 9:30pm",
                "description": "Come in and unwind at this idyllic cafe with fresh coffee and home made cakes. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Cafe Newtown",
                "phone": "+44 1414 141414",
                "storeid": "12"
            }
        },
        {
            "geometry": {
                "type": "Point",
                "coordinates": [
                    1.158167,
                    52.071634
                ]
            },
            "type": "Feature",
            "properties": {
                "category": "cafe",
                "hours": "8am - 9:30pm",
                "description": "Fresh coffee and delicious cakes in an snug cafe. We're part of a larger chain of patisseries and cafes.",
                "name": "Josie's Cafe Ipswich",
                "phone": "+44 1717 17171",
                "storeid": "13"
            }
        }
    ]
};


  // Load the stores GeoJSON onto the map.
  map.data.addGeoJson(storesJSON, {idPropertyName: 'storeid'});

  // Define the custom marker icons, using the store's "category".
  map.data.setStyle((feature) => {
    return {
      icon: {
        url: `img/icon_${feature.getProperty('category')}.png`,
        scaledSize: new google.maps.Size(64, 64),
      },
    };
  });

  const apiKey = 'AIzaSyDSCTkiWuux0aCqgqjxfmVRBmr2N1hb2ms';
  const infoWindow = new google.maps.InfoWindow();

  // Show the information for a store when its marker is clicked.
  map.data.addListener('click', (event) => {
    const category = event.feature.getProperty('category');
    const name = event.feature.getProperty('name');
    const description = event.feature.getProperty('description');
    const hours = event.feature.getProperty('hours');
    const phone = event.feature.getProperty('phone');
    const position = event.feature.getGeometry().get();
    const content = sanitizeHTML`
      <img style="float:left; width:200px; margin-top:30px" src="img/logo_${category}.png">
      <div style="margin-left:220px; margin-bottom:20px;">
        <h2>${name}</h2><p>${description}</p>
        <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
        <p><img src="https://maps.googleapis.com/maps/api/streetview?size=350x120&location=${position.lat()},${position.lng()}&key=${apiKey}"></p>
      </div>
      `;

    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
    infoWindow.open(map);
  });

  // Build and add the search bar
  const card = document.createElement('div');
  const titleBar = document.createElement('div');
  const title = document.createElement('div');
  const container = document.createElement('div');
  const input = document.createElement('input');
  const options = {
    types: ['address'],
    componentRestrictions: {country: 'gb'},
  };

  card.setAttribute('id', 'pac-card');
  title.setAttribute('id', 'title');
  title.textContent = 'Find the nearest store';
  titleBar.appendChild(title);
  container.setAttribute('id', 'pac-container');
  input.setAttribute('id', 'pac-input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter an address');
  container.appendChild(input);
  card.appendChild(titleBar);
  card.appendChild(container);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

  // Make the search bar into a Places Autocomplete search bar and select
  // which detail fields should be returned about the place that
  // the user selects from the suggestions.
  const autocomplete = new google.maps.places.Autocomplete(input, options);

  autocomplete.setFields(
      ['address_components', 'geometry', 'name']);

  // Set the origin point when the user selects an address
  const originMarker = new google.maps.Marker({map: map});
  originMarker.setVisible(false);
  let originLocation = map.getCenter();

  autocomplete.addListener('place_changed', async () => {
    originMarker.setVisible(false);
    originLocation = map.getCenter();
    const place = autocomplete.getPlace();

    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert('No address available for input: \'' + place.name + '\'');
      return;
    }

    // Recenter the map to the selected address
    originLocation = place.geometry.location;
    map.setCenter(originLocation);
    map.setZoom(9);
    console.log(place);

    originMarker.setPosition(originLocation);
    originMarker.setVisible(true);

    // Use the selected address as the origin to calculate distances
    // to each of the store locations
    const rankedStores = await calculateDistances(map.data, originLocation);
    showStoresList(map.data, rankedStores);

    return;
  });
}

/**
 * Use Distance Matrix API to calculate distance from origin to each store.
 * @param {google.maps.Data} data The geospatial data object layer for the map
 * @param {google.maps.LatLng} origin Geographical coordinates in latitude
 * and longitude
 * @return {Promise<object[]>} n Promise fulfilled by an array of objects with
 * a distanceText, distanceVal, and storeid property, sorted ascending
 * by distanceVal.
 */
async function calculateDistances(data, origin) {
  const stores = [];
  const destinations = [];

  // Build parallel arrays for the store IDs and destinations
  data.forEach((store) => {
    const storeNum = store.getProperty('storeid');
    const storeLoc = store.getGeometry().get();

    stores.push(storeNum);
    destinations.push(storeLoc);
  });

  // Retrieve the distances of each store from the origin
  // The returned list will be in the same order as the destinations list
  const service = new google.maps.DistanceMatrixService();
  const getDistanceMatrix =
    (service, parameters) => new Promise((resolve, reject) => {
      service.getDistanceMatrix(parameters, (response, status) => {
        if (status != google.maps.DistanceMatrixStatus.OK) {
          reject(response);
        } else {
          const distances = [];
          const results = response.rows[0].elements;
          for (let j = 0; j < results.length; j++) {
            const element = results[j];
            const distanceText = element.distance.text;
            const distanceVal = element.distance.value;
            const distanceObject = {
              storeid: stores[j],
              distanceText: distanceText,
              distanceVal: distanceVal,
            };
            distances.push(distanceObject);
          }

          resolve(distances);
        }
      });
    });

  const distancesList = await getDistanceMatrix(service, {
    origins: [origin],
    destinations: destinations,
    travelMode: 'DRIVING',
    unitSystem: google.maps.UnitSystem.METRIC,
  });

  distancesList.sort((first, second) => {
    return first.distanceVal - second.distanceVal;
  });

  return distancesList;
}

/**
 * Build the content of the side panel from the sorted list of stores
 * and display it.
 * @param {google.maps.Data} data The geospatial data object layer for the map
 * @param {object[]} stores An array of objects with a distanceText,
 * distanceVal, and storeid property.
 */
function showStoresList(data, stores) {
  if (stores.length == 0) {
    console.log('empty stores');
    return;
  }

  let panel = document.createElement('div');
  // If the panel already exists, use it. Else, create it and add to the page.
  if (document.getElementById('panel')) {
    panel = document.getElementById('panel');
    // If panel is already open, close it
    if (panel.classList.contains('open')) {
      panel.classList.remove('open');
    }
  } else {
    panel.setAttribute('id', 'panel');
    const body = document.body;
    body.insertBefore(panel, body.childNodes[0]);
  }


  // Clear the previous details
  while (panel.lastChild) {
    panel.removeChild(panel.lastChild);
  }

  stores.forEach((store) => {
    // Add store details with text formatting
    const name = document.createElement('p');
    name.classList.add('place');
    const currentStore = data.getFeatureById(store.storeid);
    name.textContent = currentStore.getProperty('name');
    panel.appendChild(name);
    const distanceText = document.createElement('p');
    distanceText.classList.add('distanceText');
    distanceText.textContent = store.distanceText;
    panel.appendChild(distanceText);
  });

  // Open the panel
  panel.classList.add('open');

  return;
}
