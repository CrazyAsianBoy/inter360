const panoContainer = document.getElementById("panorama6")

const panorama = new PANOLENS.ImagePanorama( './equirectengular/iStock-6.jpg' );
const viewer = new PANOLENS.Viewer({
    container:panoContainer,
    autoRotate:true,
    autoRotateSpeed:0.3,
    controlBar:true,
    DeviceOrientationControls: true
});
viewer.add( panorama );