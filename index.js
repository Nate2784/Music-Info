function addSong() {

    var artist = document.getElementById('artist').value;
    var song = document.getElementById('song').value;
    var lyrics = document.getElementById('lyrics').value;
    var cover = document.getElementById('cover').files[0];
    if(artist.length > 0 &&  song.length > 0 && lyrics.length > 0 ){

    document.getElementById("message").innerText = ""
    var table = document.getElementById('songsTable').getElementsByTagName('tbody')[0];
    var row = table.insertRow();
    row.insertCell().innerText = artist;
    row.insertCell().innerText = song;
    var lyricsCell = row.insertCell();
    var coverCell = row.insertCell(); 

    var btn = document.createElement('BUTTON');
    btn.innerHTML = 'Show Lyrics';
    btn.onclick = function() { 
        lyricsCell.innerText = lyrics;
        btn.remove();
     };
    lyricsCell.appendChild(btn);

    if(cover){
        var reader = new FileReader();
    
    reader.onload = function(e) {
        var img = document.createElement('IMG');
        img.src = e.target.result;
        coverCell.appendChild(img);
    }
    reader.readAsDataURL(cover);
    }else{
        coverCell.innerText = "No cover. :(";
    }
    
    }
    else{
        document.body.appendChild(document.getElementById("message").innerText = "Please fill in the appropriate forms :)");
    }

    document.getElementById('artist').value = '';
    document.getElementById('song').value = '';
    document.getElementById('lyrics').value = '';
    document.getElementById('cover').value = '';
}
