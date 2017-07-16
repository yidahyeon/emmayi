// var weaponsList = ["AK-47", "Gun", "Machete", "Knife"];
// var countries =["Kor", "Japan", "Greece", "Colombia"];
//
// // var soldier = {
// //   name: "emma" ,
// //   weapon: weaponsList[2],
// //   countries: countries[0],
// //   isDead: false,
// //   shoot: function() {
// //     console.log("pew pew pew");
// //   },
// //   sayHi: function(sargent){
// //     console.log("hello "+sargent+" my name is "+ this.name);
// //   }
// // };
// //
// // var age = prompt("How old are you?");
// //
// // if (age < 18){
// //   console.log("you can't drink");
// // }else if(age>18 && age<45){
// //   console.log("you're and adult");
// // }else {
// //   console.log("you're getting old");
// // }

$(document). ready(function(){
  var $heart = $(".heart");
  $heart.click(function(){
    $(this).toggleClass("fa-heart-o");
    $(this).toggleClass("fa-heart heart-click");
  });
    var $comment = $(".comment");
    $comment.click(function(){
      $(this).toggleClass("fa-comment-o");
      $(this).toggleClass("fa-comment ");
  });
});
