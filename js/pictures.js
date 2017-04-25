function main() {
  $(".fade").hover( function(){
    $(".paris").show().offset($(this).offset());
}, function(){
    $(".paris").hide();
});
}

$(document).ready(main);