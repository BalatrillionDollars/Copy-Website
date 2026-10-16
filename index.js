const images = ["https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10","https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"];
let index = 0;
function forward(){
    index += 1;
    document.getElementById("carouselImage").src = images[index % images.length];
}
function back(){
    index += images.length - 1;
    document.getElementById("carouselImage").src = images[index % images.length];
}
function toggle(id){
    if (document.getElementById(id).style.display === "none"){
        document.getElementById(id).style.visibility="block";
    }
    else{
        document.getElementById(id).style.visibility="none";
    }
}
function updateColor(){
    if(document.getElementById("MC").style.display==="none"){
        document.getElementById('menuButton').style.color='white';
    }
    else{
        document.getElementById('menuButton').style.color = 'black';
    }
}