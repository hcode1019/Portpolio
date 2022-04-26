$(function () {
  $("#searchBtn").on("click", function () {
    $("#searchBar").fadeIn();
  });

  $("#closeBtn").on("click", function () {
    $("#searchBar").fadeOut();
  });

  $(".tag-item").click(function () {
    var getTag = $(this).text();
    console.log(getTag);
    $("#searchItem").val(getTag);
  });

  $(".depth-02 > .menu-item").hover(
    function (el) {
      $("#menu-bg-df").hide();
    },
    function () {
      $("#menu-bg-df").show();
    }
  );

  //도서소개 메뉴 하위메뉴 선택시 이미지 변경
  $(".category-books .depth-02 .menu-item").hover(function () {
    $(".books-intro .depth-contain .pic-contain").hide(); //호버시 이미지 모두 가림
    var i = $(this).index() + 2; // 2를 더하는 이유,기본으로 생성되는 배경 1개와 index가 0부터 시작하기 때문에
    $(`.depth-contain .pic-contain:nth-of-type(${i})`).show(); //선택된 메뉴에 인덱스 번호에 해당하는 이미지 보여줌
  });

  //도서소개 메뉴에 올렸을 시 초기값 설정
  $(".books-intro > a").mouseover(function () {
    $(".depth-contain .pic-contain").hide(); // 모든 요소 가려짐
    $(".depth-contain .pic-contain:nth-of-type(1)").show(); //기본이미지 보여짐
  });

  ////고객지원 메뉴 배경이미지 변경
  //var menuListEl = $(".menu-item.about.ano-type.left-el .depth-contain .depth-item");
  //var menuBgEl =  $(".menu-item.about.ano-type.left-el .depth-contain .bg-contain");

  //$(menuListEl).hover(function(){
  //  $(menuBgEl).removeClass("active");

  //  var tarEl = "#" + $(this).attr("rel");
  //  $(tarEl).addClass("active");
  //});
  ////고객지원 메뉴 초기값 설정
  //$(".menu-item.about.ano-type.left-el > a").mouseover(function(){
  //  $(".menu-item.about.ano-type.left-el .depth-contain .bg-contain:").removeClass("active");
  //  $(".menu-item.about.ano-type.left-el .depth-contain .bg-contain#menu-supprot-bg").addClass("active");
  //})
});
