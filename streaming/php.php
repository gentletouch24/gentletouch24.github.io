<style type="text/css">@import url("style.css");</style>
<a href="<?php echo $_SERVER["REQUEST_URI"];?>">Home</a><hr/>



    <html>
    <head>
    <meta charset=utf-8 />
    <title>Live TV</title>
       <link href="video-js.css" rel="stylesheet">

	   
      <script src="video.js"></script>
      <script src="videojs-contrib-hls.js"></script>
       
    </head>
    <body>
      <video id="playthis" class="video-js vjs-fluid vjs-default-skin" controls preload="auto" data-setup='{}'>
        <source src="https://itpolly.iptv.digijadoo.net/live/zee_cinema/chunks.m3u8" type="application/x-mpegURL">
      </video>
      
    <script>
    var player = videojs('playthis');
    player.play();
    </script>
      
    </body>
.............
