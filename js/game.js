var color = ["red", "blue", "green", "yellow"];
var pattern=[];
var userPattern=[];
var level = 0;

if(level === 0)
{
  $(document).on("keypress", function()
  {
      nextSeq();
  })
};



$('.btn').on('click',function(){

let choosen = $(this).attr("id");
userPattern.push(choosen);
flash(choosen);
son(choosen);
verif();
});

function verif()
{
  if(userPattern[userPattern.length-1] == pattern[userPattern.length-1] && userPattern.length == pattern.length)
  {
    userPattern.length=0;
    setTimeout(nextSeq,1000);
  }
  else if (userPattern[userPattern.length-1] != pattern[userPattern.length-1])
  {
    $('#level-title').text('Game Over ! appuyez sur une touche pour recommencer');
    level = 0;
    userPattern.length=0;
    pattern.length=0;
    var audio = new Audio("sounds\\wrong.mp3");
    audio.play();
    $('body').toggleClass('game-over');
    setTimeout(function(){
      $('body').toggleClass('game-over');

    },200);



  };



};

function nextSeq() {


  var alea = Math.floor(Math.random() * 4);
  pattern.push(color[alea]);
  $("#" + color[alea]).fadeIn(100).fadeOut(100).fadeIn(100);
  son(color[alea]);
  level++;
  $('#level-title').text('niveau '+ level);


};

function son(color){
  var audio = new Audio("sounds\\"+color+".mp3");
  audio.play();
};
function flash(color){
  $('.'+color).toggleClass('pressed');
  setTimeout(function() {
    $('.'+color).toggleClass('pressed');
}, 100);
};
