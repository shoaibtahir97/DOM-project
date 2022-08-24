function myFunction(){
    document.getElementById("font-style").style.fontFamily = "Arial, sans-serif";
}

function myInfo(){
    var nickname = document.getElementById("nickname");
    var favorites = document.getElementById("favorites");
    var hometown = document.getElementById("hometown");
    nickname.innerHTML = "Shoaib";
    favorites.innerHTML = "Book Reading, Watching Anime, Coding";
    hometown.innerHTML = "Liaqutabad Town" 
}

function redColor() {
    var listItem = document.getElementsByTagName("li")
    for(var i = 0; i <= listItem.length; i++){
        listItem[i].className = "listitem";
    }
}

function insertImage(){
    var image = document.createElement("img")
    image.src = "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600"
    document.getElementById("font-style").appendChild(image)
}