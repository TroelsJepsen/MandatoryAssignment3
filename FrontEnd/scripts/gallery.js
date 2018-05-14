
 //request JSON with image URIs from server and add them to canvas
let requestImages = new XMLHttpRequest()
requestImages.onreadystatechange = function(){

    if (this.readyState == 4 && this.status == 200) {
        console.log("response received")
        let gallery = getElementById("gallery")
        let URIarray = JSON.parse(this.responseText)
        
        URIarray.array.forEach(element => {
            let canvas = document.createElement("canvas")
            let context = canvas.getContext("2d")
            let img = new Image()
            img.onload = function(){
              context.drawImage(img, 0, 0)  
            }
            img.src = element
            gallery.appendChild(canvas)
        });
     }
     else{
         console.log(this.readyState + " " + this.status)
     }
}

requestImages.open("GET", "http://127.0.0.1:55567/api/images" ,true)
requestImages.send()

