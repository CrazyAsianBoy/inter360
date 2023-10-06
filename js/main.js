const panoContainer = document.getElementById("panorama")

const panorama = new PANOLENS.ImagePanorama( './equirectengular/iStock-1.jpg' );
const viewer = new PANOLENS.Viewer({
    container:panoContainer,
    autoRotate:true,
    autoRotateSpeed:0.3,
    controlBar:true,
});
viewer.add( panorama );