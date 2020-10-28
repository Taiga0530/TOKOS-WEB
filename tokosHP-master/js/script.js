
$(function(){
  function move(box){
    
    var animated = 'animated';
    box.each(function(){
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
      }
    });
  }


  $(window).on('load scroll', function (){

    var box = $('#greeting h1');
    move(box);
    box = $('#greeting p');
    move(box);
    box = $('#service .box1');
    move(box);
    box = $('#service .box2');
    move(box);
    box = $('#service .box3');
    move(box);
    box = $('#service .box4');
    move(box);
    box = $('#service h1');
    move(box);
    box = $('.develop h1');
    move(box);
    box = $('.develop');
    move(box);
    box = $('.develop .box');
    move(box);
    box = $('.design h1');
    move(box);
    box = $('.design p');
    move(box);
    box = $('.design .box');
    move(box);
    box = $('#company');
    move(box);
    box = $('#company h1');
    move(box);
    box = $('#contact');
    move(box);
    box = $('#contact h1');
    move(box);

  });
});


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


window.addEventListener("DOMContentLoaded", function(){
    var timeoutId ;

    window.addEventListener("resize", function(){
      // リサイズを停止して500ms後に終了とする
      clearTimeout( timeoutId ) ;

      timeoutId = setTimeout(function(){
        // 処理内容
        var tmp = document.getElementById("img1");
        var foo = window.innerWidth;
        if(foo > 800){
          tmp.setAttribute("src","img/web/app_web@2x.png");
        } else if(foo > 400){
          tmp.setAttribute("src","img/tablet/app_tab@2x.png");
        } else if(foo > 100){
          tmp.setAttribute("src","img/web/app_web@2x.png");
        }
      },300);
    });
})



window.addEventListener("DOMContentLoaded", function(){
  var timeoutId ;

  window.addEventListener("resize", function(){
    // リサイズを停止して500ms後に終了とする
    clearTimeout( timeoutId ) ;

    timeoutId = setTimeout(function(){
      // 処理内容
      var tmp = document.getElementById("img2");
      var foo = window.innerWidth;
      if(foo > 800){
        tmp.setAttribute("src","img/web/systm_web@2x.png");
      } else if(foo > 400){
        tmp.setAttribute("src","img/tablet/systm_tab@2x.png");
      }
    },300);
  });
})



window.addEventListener("DOMContentLoaded", function(){
  var timeoutId ;

  window.addEventListener("resize", function(){
    // リサイズを停止して500ms後に終了とする
    clearTimeout( timeoutId ) ;

    timeoutId = setTimeout(function(){
      // 処理内容
      var tmp = document.getElementById("img3");
      var foo = window.innerWidth;
      if(foo > 800){
        tmp.setAttribute("src","img/web/design_web@2x.png");
      } else if(foo > 400){
        tmp.setAttribute("src","img/tablet/design_tab@2x.png");
      }
    },300);
  });
})



window.addEventListener("DOMContentLoaded", function(){
  var timeoutId ;

  window.addEventListener("resize", function(){
    // リサイズを停止して500ms後に終了とする
    clearTimeout( timeoutId ) ;

    timeoutId = setTimeout(function(){
      // 処理内容
      var tmp = document.getElementById("img4");
      var foo = window.innerWidth;
      if(foo > 800){
        tmp.setAttribute("src","img/web/agency_web@2x.png");
      }else if(foo > 400){
        tmp.setAttribute("src","img/tablet/agency_tab@2x.png");
      } 
    },300);
  });
})

////////////////////////////////////////////////////////////////////////////

$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


////////////////////////////////////////////////////////////////////////////////////////

