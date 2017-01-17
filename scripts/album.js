var albumPicasso={
	title: 'The Colors',
	artist: 'Pablo Picasso',
	label: 'Cubism',
	year: '1881',
	albumArtUrl: 'assets/images/album_covers/01.png',
	songs: [
		{title: 'Blue', duration: '4:26'},
		{title: 'Green', duration: '3:14'},
		{title: 'Red', duration: '5:01'},
		{title: 'Pink', duration: '3:21'},
		{title: 'Magenta', duration: '2:15'}
	]
};

var albumMarconi = {
	title: 'The Telephone',
	artist: 'Guglielmo Marconi',
	label: 'EM',
	year: '1909',
	albumArtUrl: 'assets/images/album_covers/20.png',
	songs: [
		{title: 'Hello, Operator?', duration: '1:01'},
		{title: 'Ring, ring, ring', duration: '5:01'},
		{title: 'Fits in your pocket', duration: '3:21'},
		{title: 'Can you hear me now?', duration: '3:14'},
		{title: 'Wrong phone number', duration: '2:15'}
	]
};

var albumGrey = {
	title: 'The Grey Album',
	artist: 'The Beatles vs Jay-z',
	label: 'bootleg',
	year: '2004',
	albumArtUrl: 'assets/images/album_covers/Grey.jpg',
	songs: [
		{title: 'Public Service Announcement', duration: '2:45'},
		{title: 'What More Can I Say', duration: '4:25'},
		{title: 'Encore', duration: '2:40'},
		{title: 'December 4th', duration: '3:34'},
		{title: '99 Problems', duration: '4:06'},
		{title: 'Dirt Off Your Shoulder', duration: '3:59'},
		{title: 'Change Clothes', duration: '4:00'},
		{title: 'Allure', duration: '4:04'},
		{title: 'Justify My Thug', duration: '4:06'},
		{title: 'Lucifer 9 (Interlude)', duration: '4:12'},
		{title: 'My 1st Song', duration: '2:01'}
	]
};

var createRow = function (number, name, length){
	var template = 
		'<tr class="album-view-song-item">' +
		'	<td class="song-number" data-song-number="' + number + '">' + number + '</td>' +
		'	<td class="song-title">' + name + '</td>' +
		'	<td class="song-duration">' + length +'</td>' +
		'</tr>';
	return template;
};

var setAlbum = function(album){
	document.getElementById('title').firstChild.nodeValue = album.title;
	document.getElementById('artist').firstChild.nodeValue = album.artist;
	document.getElementById('info').firstChild.nodeValue = album.year + ' ' + album.label;
	document.getElementById('albumArt').setAttribute('src', album.albumArtUrl);
	document.getElementById('songList').innerHTML = '';
	
	for(var i=0; i<album.songs.length; i++){
		document.getElementById('songList').innerHTML += createRow(i+1, album.songs[i].title, album.songs[i].duration);
	}
};

var songList = document.getElementById('songList');
var songRows = document.getElementsByClassName('album-view-song-item');

var playButton = '<a class="song-button"><span class="ion-play"></span></a>';


//window.onload = function(){
//	
//	setAlbum(albumGrey);
//	document.addEventListener('click', function(){
//		
//		var x = event.target;
//		console.log("event:" + event);
//		console.log("event.target" + x);
//		console.log("parent:" + x.parentElement);
//		console.log("innerHTML: " + x.innerHTML);
//		
//	});
//};

window.onload = function(){
	setAlbum(albumGrey);
	
	console.log(songRows[0]);
	
	songList.addEventListener('mouseover', function(e){	
		e.target.parentElement.querySelector('.song-number').innerHTML = playButton;
	});

	for (var i = 0; i< songRows.length; i++){
		
		songRows[i].addEventListener('mouseleave', function(e){
			var x = e.target.children[0];
			x.innerHTML = x.getAttribute('data-song-number');
		});
	}
};