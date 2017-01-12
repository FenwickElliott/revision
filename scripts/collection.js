var itemTemplate =
'<div class="collection-album-container column fourth">' +
'  <img src="assets/images/album_covers/08.png"/>' +
'  <div class="collection-album-info caption">' +
'    <p>' +
'      <a class="album-name" href="album.html"> The Colors </a>' +
'      <br/>' +
'      <a href="album.html"> Pablo Picasso </a>' +
'      <br/>' +
'      X songs' +
'      <br/>' +
'    </p>' +
'  </div>' +
'</div>'
;

window.onload = function(){
	var container = document.getElementsByClassName('album-covers')[0];
	container.innerHTML = '';
	for (var i=0; i<12; i++){
		container.innerHTML += itemTemplate;
	}
};
