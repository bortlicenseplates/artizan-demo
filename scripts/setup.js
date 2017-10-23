var invocation = new XMLHttpRequest();
var url = 'http://www.thewifiproject.com/data/';
   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', url, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}

var viewer = new Cesium.Viewer('cesiumContainer', {
    skyBox : false,
    skyAtmosphere : false,
    animation: false,
    timeline: false,
    contextOptions : {
        webgl: {
            alpha: true
        }
    }
});
viewer.scene.backgroundColor = Cesium.Color.TRANSPARENT;

//Add basic drag and drop functionality
viewer.extend(Cesium.viewerDragDropMixin);

//Show a pop-up alert if we encounter an error when processing a dropped file
viewer.dropError.addEventListener(function(dropHandler, name, error) {
    console.log(error);
    window.alert(error);
});
var dataPath = "";
function setData(path){
    dataPath = path;
}

viewer.dataSources.add(Cesium.GeoJsonDataSource.load(url, {
  stroke: Cesium.Color.HOTPINK,
  fill: Cesium.Color.PINK,
  strokeWidth: 3,
  markerSymbol: '?'
}));