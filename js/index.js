$(document).ready(function () {

  //影片靜音按鈕
  $(".audio-controls").click(function () {
    //影片音樂
    if ($("audio".prop("muted"))) {
      $("audio").prop("muted", false);
      $(".play").addClass("active");
      $(".pause").removeClass("active");
    } else {
      $("audio").prop("muted", true);
      $(".pause").addClass("active");
      $(".play").removeClass("active");
    }
  });

});

//audio bgm
window.onload = function(){
    var audio = document.getElementById('music');
    audio.pause(); //打開網頁時不播放音樂
    $(".play").addClass("active"); //打開網頁時play鍵顯示
}

//音樂暫停
function play(){
    var audio = document.getElementById('music');
    if(audio.paused){
        audio.play();
        $("audio").prop("muted", false);
        $(".pause").addClass("active");
        $(".play").removeClass("active");
    }else{
        audio.pause();
        $("audio").prop("muted", true);
        $(".play").addClass("active");
        $(".pause").removeClass("active");
        
        audio.currentTime = 0;  //音樂從頭播放
    }
    audio.volume = 0.3;  //音量調小
    // audio.loop = false;  //無限循環
}

//音樂從頭
function playReply(){
  var audio = document.getElementById('music');
  if($(".pause").hasClass("active")){
      audio.currentTime = 0;
  }
  audio.volume = 0.3;  //音量調小
}


//animsition
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});
