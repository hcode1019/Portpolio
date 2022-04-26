$(".q-list").hide();
$(".q-list").first().show();

$(".kind-contain li").click(function(){
  $(".kind-contain li").removeClass("selected");
  $(this).addClass("selected");

  $(".q-list").hide();

  var selectedItem = "#" + $(this).attr("rel");
  $(selectedItem).show()
})