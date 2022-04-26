$(function () {
  $(".brands-banner").hover(function () {
    $(this).children(".bg-contain,.para-inner,.circle-el").addClass("active");
  });

  $(window).on("load", function () {
    $(".main-slider").slider({ height: "49vw" });
  });

  //움직이는 퀵메뉴
  var defalutTop = parseInt($("aside").css("top")); //기본위치

  $(window).scroll(function () {
    var st = $(this).scrollTop(); //스크롤 이벤트 발생시 이동한 거리 계산
    $("aside")
      .stop()
      .animate({ top: defalutTop + st }, 800); //기본위치에 스크롤 발생한 거리만큼 1초동안 이동
  });
  // 퀵 사이드 메뉴
  $("aside .inner").hide();

  $("aside label").click(function () {
    var checked = $("aside input").is(":checked");
    if (checked) {
      $("aside .inner").stop().hide(600);
    } else {
      $("aside .inner").stop().show(600);
    }
  });

  // 퀵탑 버튼
  $(".quick_btn .inner").hide();
  $(window).scroll(function () {
    var scrollVal = $(window).scrollTop();
    if (scrollVal > 1000) {
      $(".quick_btn .inner").fadeIn();
    } else {
      $(".quick_btn .inner").fadeOut();
    }
  });

  //구글맵
  $("#googleMapBtn").click(function () {
    $(".google-map_sec").show(); //버튼이 클릭되면 구글맵 배너 블럭
  });

  $(".google-map_sec")
    .find(".close-btn")
    .click(function () {
      $(".google-map_sec").hide(); //닫기 버튼을 누를시 다시 디스플레이 none으로 변경
    });

  //공지사항 탭메뉴
  $(".list-el").on("click", function () {
    $(".list-el").removeClass("active"); //모든 탭메뉴 active제거, 기본값
    $(this).addClass("active"); //클릭된 메뉴에만 클래스추가

    var targetEl = "#" + $(this).attr("rel"); //메뉴가 가지고 있는 rel값을 저장
    $(".banner-contain .item").removeClass("selected"); //모든 배너 숨기기
    $(targetEl).addClass("selected"); //해당 rel값을 가진 아이디 요소 보여짐
  });

  //카테고리 배너
  $(".cate_banner").hover(function () {
    $(this).find(".item").addClass("active");
  });

  //인기도서 슬라이드

  //function rl_slides(containerID, buttonID, autoStart)
  fn_article3("rl-notice", "rl-btn", true);

  //도서 슬라이드 배너
  var i = 1; //초기값 i 설정
  $(".most-book_banner .wrap:first-child").addClass("active");
  $(".most-book_banner .goods img:first-child").addClass("active");
  $(".most-book_banner .goods img").not(":first-child").addClass("next"); //초기값으로 보여질 이미지를 제외하고 클래스를 추가하여 위치를 이동
  $(".most-book_banner .next-btn").click(function () {
    if (i < 5) {
      //버튼 클릭시 이미지의 최대,최소갯수를 초과하지 않게 조건문 제시
      i++; // 다음 버튼 클릭시 i가 1개씩 증가,i의 해당하는 인덱스를 화면에 보여지게함
      changer();
      $(".most-book_banner .goods img:nth-child(" + (i - 1) + ")")
        .removeClass("active")
        .addClass("prev");
      $(".most-book_banner .goods img:nth-child(" + i + ")")
        .removeClass("next")
        .addClass("active");
    }
  });

  $(".most-book_banner .prev-btn").click(function () {
    if (i > 1) {
      i--;
      changer();
      $(".most-book_banner .goods img:nth-child(" + (i + 1) + ")")
        .removeClass("active")
        .addClass("next");
      $(".most-book_banner .goods img:nth-child(" + i + ")")
        .removeClass("prev")
        .addClass("active");
    }
  });

  function changer() {
    $(".most-book_banner .pager .state li").removeClass("active");
    $(".most-book_banner .pager .state li:nth-child(" + i + ")").addClass("active");
    $(".most-book_banner .wrap").removeClass("active");
    $(".most-book_banner .wrap:nth-child(" + i + ")").addClass("active");
  }

  //도서 슬라이드 메뉴
  var slideItems = "#slideInner .list-contain";

  //$(tab_menu + ":first-child").css({ fontWeight: "bold" });
  $(slideItems).removeClass("on");
  $(slideItems).filter(".essay").addClass("on");

  var mySlider = $("#slideInner .list-contain .slider").bxSlider({
    mode: "horizontal", // 가로 방향 수평 슬라이드
    speed: 500, // 이동 속도를 설정
    pager: false, // 현재 위치 페이징 표시 여부 설정
    moveSlides: 1, // 슬라이드 이동시 개수
    slideWidth: 340, // 슬라이드 너비
    minSlides: 4, // 최소 노출 개수
    maxSlides: 4, // 최대 노출 개수
    slideMargin: 30, // 슬라이드간의 간격
    auto: true, // 자동 실행 여부
    autoHover: true, // 마우스 호버시 정지 여부
    controls: false, // 이전 다음 버튼 노출 여부
    onSliderLoad: function () {
      $(".bxslider li img").css("display", "block");
    },
  });

  $(".list-contain .bx-prev").click(function () {
    mySlider.goToPrevSlide();
    return false;
  });
  $(".list-contain .bx-next").click(function () {
    mySlider.goToNextSlide();
    return false;
  });

  $(".book-cast_banner").hover(function () {
    $(this).addClass("visit");
  });
});
