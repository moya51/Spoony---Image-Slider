// var imagedic = ["2023_dodge_challenger_shakedown.jpg", "525636-dodge-challenger-d-occasion-quelle-version-choisir.jpeg", "chelseatruckcompanyblackhawkjeep.jpg", "hennessey_dodge_challenger_38_0095003406c804ff.jpg", "jeep-wrangler-black-hawk-edition-luxury-suv-by-project-kahn-chelsea-truck-co-designboom-01.jpg", "mahindra-thar-adventures-series.jpg"]


 var pic1 = "2023_dodge_challenger_shakedown.jpg"
 var pic2 = "525636-dodge-challenger-d-occasion-quelle-version-choisir.jpeg"
 var pic3 = "ChelseaTruckCompanyBlackHawkJeep.jpg"
 var pic4 = "hennessey_dodge_challenger_38_0095003406c804ff.jpg"
 var pic5 = "JEEP-wrangler-black-hawk-edition-luxury-SUV-by-project-kahn-chelsea-truck-co-designboom-01.jpg"
 var pic6 = "mahindra-thar-adventures-series.jpg"

 var pic = [pic1, pic2, pic3, pic4, pic5, pic6]



var element = document.querySelector("img");
var slidenum = 0;



function prev(){
    slidenum--;
    if(slidenum < 0){
        slidenum = pic.length -1;
        element.src = pic[slidenum];
    }else{
        element.src = pic[slidenum];
    }
}


function next(){
    slidenum++;
    if(slidenum >= pic.length){
        slidenum = 0;
        element.src = pic[slidenum];
    }else{
        element.src = pic[slidenum];
    }
}


