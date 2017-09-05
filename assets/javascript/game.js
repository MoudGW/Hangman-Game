var imgArray=[
["assets/images/juventus.jpeg","Turin"],
["assets/images/arsenal.jpg","london"],
["assets/images/barca.jpeg","barcelona"],
["assets/images/realmadrid.jpg","Madrid"],
["assets/images/Psg.png","Paris"]];
var i;
var word_=[];
var guess=8;
var name=null;
var win;
var guessT=[];
var sound1=new Audio("assets/audio/fall.wav");
sound1.playbackRate=3;
sound1.play();
document.addEventListener('keypress', start);
function  init(){
  document.getElementById("alert").style='animation-iteration-count: 2;';
  document.getElementById("alert").innerHTML="guess team city";
  var backsound=new Audio("assets/audio/backsound.mp3");
  backsound.play();
  i=Math.floor(Math.random() *imgArray.length);
  document.getElementById('img').src=imgArray[i][0];
  name=imgArray[i][1].toLowerCase();
  document.getElementById("anim").style="animation-iteration-count:0";
  for (var j = 0; j < imgArray[i][1].length ; j++) 
  {
    word_.push("_");
  }
  document.getElementById("wins").innerHTML="wins "+win;
  document.getElementById("ng").innerHTML=" number of guesses remaining";
  Affiche();
  document.addEventListener('keypress', algo);
}
function  start(){
 win=0;
 init();
 document.removeEventListener('keypress', start); 
}
function  algo(e){
      var press=String.fromCharCode(e.charCode).toLowerCase();
      var ocurence=[];
      if(guessT.join().indexOf(press)!=-1)
      {
        var audio = new Audio("assets/audio/beep.wav");
        audio.play();
        return  Affiche ();
      }
      if (name.indexOf(press)!=-1) 
      {
      guessT.push(press);
      ocurence.push(name.indexOf(press));
      for(var index=0; index<name.length;index++) 
        {
          if (name[index] == press)
          {
           ocurence.push(index);
          }
        }
      for(var k=0;k<ocurence.length;k++)
      {
      word_[ocurence[k]]=press;
      }
      guess--;
      }else
      {
      guessT.push(press);
      guess--;
      }
      if(guess<0){
       var right=document.getElementById("right");
       right.setAttribute("style", "font-size: 20px;text-align: center");   
       document.getElementById("left").innerHTML=" ";
       document.getElementById("right").innerHTML=" ";
       return document.getElementById("right").innerHTML=("<a  href='index.html'><button style='    border-radius: 10px 10px;padding: 20px 40px;font-size: 20px;background-color: rgb(33, 150, 243);border: none; margin-top: 155px;'>replay</button></a>");
      }
      if (word_.join("")==name) {
      word_=[];
      guess=8;
      name=null;
      guessT=[];
      win++;
      return init();
      }
      Affiche ();
      }
function Affiche(){
      document.getElementById("word").innerHTML=word_.join(" ");
      document.getElementById("Gletter").innerHTML=guessT.join();
      document.getElementById("numberofwin").innerHTML=guess;
}