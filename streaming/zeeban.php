<html>
    
    <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Zee Bangla Live | Watch Zee Bangla Free | Zee Bangla JioTv</title>
    <link href="https://videojs.com/zee/player/video-js.css" rel="stylesheet">
    <script src='https://videojs.com/zee/player/video.js'></script>

    <!-- the libraries below are optional, if you want to have quality selector for the end user. -->
    <script src="https://unpkg.com/videojs-contrib-quality-levels@2.0.9/dist/videojs-contrib-quality-levels.min.js"></script>
    <script src="https://unpkg.com/videojs-hls-quality-selector@1.1.0/dist/videojs-hls-quality-selector.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@videojs/http-streaming@1.13.0/dist/videojs-http-streaming.cjs.min.js"></script>
    <style>
        @media (max-width:767px){
#my-video {
width:100% !important;
height:150px !important;
}

}
    </style>
</head>

<body>
<video-js id="my-video" class="video-js vjs-default-skin" controls preload="metadata"
          poster="https://image.airtel.tv/MWTV/MWTV_LIVETVCHANNEL_770/PORTRAIT/USKY2MD6.png"
          data-setup='{}'
          autoplay="true"
          width="835"
	height="490">
    <source src="http://z5ams.akamaized.net/zeebanglahd/index.m3u8?hdnts=st=1599491951~exp=1599494951~acl=/*~hmac=302a53d98bdc2daecfa959a5d4cdb7f43ba385d5b71019a0b0e0796ebebb4d0a"" type='application/x-mpegURL'>
    <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
    </p>
</video-js>
<script>
    // only needed, when you want the quality selector. Otherwise you can skip the whole script block
    var player = videojs('my-video', {liveui: true});
    player.hlsQualitySelector({
    displayCurrentQuality: true,
});
</script>
</body>
</html>