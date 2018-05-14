//request JSON with about-me text from server and add it to page
let requestText = new XMLHttpRequest()
requestText.onreadystatechange = function(){

    if (this.readyState == 4 && this.status == 200) {
        console.log("response received")
        let text = getElementById("aboutmetext")
        let URIarray = JSON.parse(this.responseText)
        
        URIarray.array.forEach(element => {
            text.appendChild(element)
        });

     }
     else{
         console.log(this.readyState + " " + this.status)
     }
}

requestText.open("GET", "http://127.0.0.1:55567/api/text" ,true)
requestText.send()