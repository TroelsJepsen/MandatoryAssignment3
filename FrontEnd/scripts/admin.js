//Request that the new text written will replace the old text



let textbutton = document.getElementById("textbutton")
textbutton.addEventListener("click", function(){
    console.log("clicked 1")
})
textbutton.addEventListener("click", function(){
    let newText = document.getElementById("newabouttext").value
    let addText = new XMLHttpRequest()

    addText.onreadystatechange = function(){

        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("newabouttext").value = "Your new text was added"
         }
         else{
             console.log(this.readyState + " " + this.status)
         }
    }
    
    addText.open("POST", ("http://127.0.0.1:55567/api/text/" + newText) ,true)
    addText.send()
}
)


// Converts the image chosen by the user to a data URL and requests it to be saved by server
let photobutton = document.getElementById("photobutton")
photobutton.addEventListener("click", function(){
    let newPhotoPath = document.getElementById("newphoto").value
    let addPhoto = new XMLHttpRequest()

    addPhoto.onreadystatechange = function(){

        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("newphoto").value = "Your new photo was added"
        }
        else{
            console.log(this.readyState + " " + this.status)
        }
    }
            
        let canvas = document.createElement("canvas")
            context = canvas.getContext("2d")
            let newPhoto = new Image()
            newPhoto.src = newPhotoPath
            newPhoto.onload = function(){
                context.drawImage(newPhoto,0,0)
            }
            let photoURI = canvas.toDataURL()

            addPhoto.open("POST", ("http://127.0.0.1:55567/api/images/" + photoURI) ,true)
            addPhoto.send()
        }
            
    )