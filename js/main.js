const panoContainer = document.getElementById("panorama")
const panorama = new PANOLENS.ImagePanorama( './equirectengular/iStock-2.jpg' );
const viewer = new PANOLENS.Viewer({
    container:panoContainer,
    autoRotate:true,
    autoRotateSpeed:0.1,
    controlBar:false,
});
viewer.add( panorama );