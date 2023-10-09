const panoContainer = document.getElementById("panorama4")

const panorama = new PANOLENS.ImagePanorama( './equirectengular/iStock-4.jpg' );
const viewer = new PANOLENS.Viewer({
    container:panoContainer,
    autoRotate:true,
    autoRotateSpeed:0.3,
    controlBar:true,
    DeviceOrientationControls: true
});
viewer.add( panorama );