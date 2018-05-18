var mapData = {
  'Intro Maze': [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 0, 3, 1, 0, 0],
  [0, 0, 0, 1, 2, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  'Repeat Maze': [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 3, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 2, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0]
  ],
  'Corners Maze': [
  [1, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 3, 0, 1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 1, 2, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1]
  ],
  'Spiral Maze': [
  [3, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 2, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  'Easy Maze': [
  [0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 3, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 0],
  [2, 0, 0, 0, 1, 0, 0, 0, 0]
  ],
  'Hard Maze': [
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 0, 1, 3, 0],
  [1, 1, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [2, 1, 0, 0, 0, 0, 1, 1, 0]
  ]
}

var mapTiles = {
  0: 'tile',
  1: 'wall',
  2: 'start',
  3: 'end'
}

function setupSelector() {
  var selector = document.getElementById('mapSelect');
  Object.keys(mapData).forEach(function (mapName) {
    var optionEl = document.createElement('option');
    optionEl.value = mapName;
    optionEl.innerText = mapName;
    selector.appendChild(optionEl);
  });

  selector.onchange = function (evt) {
    createMap(evt.target.value);
  }

}

function createMap(selectedMap) {
  var mapName = document.getElementById('mapName');
  mapName.innerText = selectedMap;

  var map = document.getElementById('mapbody');
  while (map.firstChild) {
    map.removeChild(map.firstChild);
  }

  mapData[selectedMap].forEach(function (row) {
    var rowEl = document.createElement('tr');
    row.forEach(function (col) {
      var colEl = document.createElement('td');
      colEl.className = mapTiles[col];
      rowEl.appendChild(colEl);
    })
    map.appendChild(rowEl);
  })
}

window.addEventListener("load", function(event) {
  setupSelector();
  createMap('Intro Maze');
});
