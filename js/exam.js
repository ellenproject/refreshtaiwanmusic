$(document).ready(function () {
  $(".play").addClass("active"); //打開網頁時play鍵顯示
  //加載頁面後，影片自動播放
  window.onload = function() {
    var player = document.querySelector('video#videos');
    player.play();
  }
  //手機加截頁面後，點擊播放鍵，影片播放
  window.onload=function (){
    var myVid=document.querySelector("video#videos");
    function enableAutoplay()
      { 
      myVid.autoplay=true;
      myVid.load();
      } ;
      enableAutoplay();
  }

  videojs('videos').ready(function() {
    this.play();
  });
    
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
      // if ($("video").prop("muted")) {
      //   $("video").prop("muted", false);
      //   $(".play").addClass("active");
      //   $(".pause").removeClass("active");
      // } else {
      //   $("video").prop("muted", true);
      //   $(".pause").addClass("active");
      //   $(".play").removeClass("active");
      // }
    });
    $(".next").click(function(){
      window.location.hreft='./exam1.html'
    })
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
        
        // audio.currentTime = 0;  //音樂從頭播放
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
  

  