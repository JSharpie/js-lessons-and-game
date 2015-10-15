var text;
var choice = 0;
var score = 0;
function start(){
  document.getElementById("node-id").innerHTML="Would you like to play? (Y/N)";
  choice = 0;
}
function clearText(){
  document.getElementById("input1").value = "";
}
function myJsFunction(){
text=document.getElementById('input1').value;
if(text === "Y"){
  document.getElementById("node-id").innerHTML+="<br />Great! Lets get started. <br /> You are stuck in a dungeon without much lighting. You can see a faint glint near your feet. Will you 'PICK IT UP', 'FIND A DOOR', or 'FLAIL AROUND VIOLENTLY'?";
  choice++;
  text=document.getElementById('input1').value;
  }
  else if(text === "N"){
    document.getElementById("node-id").innerHTML+="<br />Awh, that's too bad :("
  }
if(text === "PICK IT UP" && choice === 1){
  document.getElementById("node-id").innerHTML+="<br />You pick up the ring and put it on. Suddenly you can see your surroundings! You found a Ring of Light. You look around for an exit. You see a door to the north. Although you can't shake this feeling that someone is behind you. Will you 'RUN TO THE DOOR', 'TURN AROUND SLOWLY', or 'FLAIL AROUND VIOLENTLY'?";
  score = score + 100;
  choice++;
}
else if(text === "FIND A DOOR" && choice === 1){
  document.getElementById("node-id").innerHTML+="<br />You grope around in the darkness and and feel a slightly warm, slightly wet, fleshy material. Shortly after your eyes adjust and you look up in horror at the very unhappy looking ogre towering over you. Behind his shoulder you can see the edge of a door. Will you 'ATTEMPT TO REASON WITH IT', 'REACH FOR A WEAPON', or 'RUN AND SCREAM TOWARDS THE DOOR'?";
  score = score + 50;
  choice=choice+5;
}
else if(text === "FLAIL AROUND VIOLENTLY" && choice === 1){
  document.getElementById("node-id").innerHTML+="<br />You swing your arms as if you were covered in spiders and gasp in horror as you slam your arms against a fleshy, wet surface. You hear a quick snarl and a sudden metallic sound of a sword being unsheathed. Will you 'DODGE ROLL OUT OF THE WAY', 'PUNCH THE FOWL BEAST', or 'CURL UP INTO THE FETAL POSITION'?";
  score = score + 25;
  choice=choice + 7;
}
if(text === "RUN TO THE DOOR" && choice === 2){
  document.getElementById("node-id").innerHTML+="<br />As quickly as you can you make your way to the door. Without much hesitation of resistance, you pull the door open, slip inside, and slam it behind you. The ring glows and illuminates the hallway, it splits into a four-way intersection. Which way will you go? ('NORTH', 'EAST', 'WEST')";
  score = score + 50;
  choice++;
}
else if(text === "TURN AROUND SLOWLY" && choice === 2){
  document.getElementById("node-id").innerHTML+="<br />You turn around slowly, but before you can even complete your rotation you feel a snap in your neck and crumple over dead. <br />GAME OVER. Your score is: " + score;

}
else if(text === "FLAIL AROUND VIOLENTLY" && choice === 2){
  document.getElementById("node-id").innerHTML+="<br />You swing your arms as if you were covered in spiders and gasp in horror as you slam your arms against a fleshy, wet surface. You hear a quick snarl and a sudden metallic sound of a sword being unsheathed. Will you 'DODGE ROLL OUT OF THE WAY', 'PUNCH THE FOWL BEAST', or 'CURL UP INTO THE FETAL POSITION'?";
  score = score + 25;
  choice=choice + 6;
}
if(text === "ATTEMPT TO REASON WITH IT" && choice === 6){
  score = score + 250;
  document.getElementById("node-id").innerHTML+="<br />After a long discussion, you reason with the ogre and he carries you through the dungeon, splitting the loot 50/50.<br />YOU WIN! Your score is: " + score;
}
if(text === "REACH FOR A WEAPON" && choice === 6){
  document.getElementById("node-id").innerHTML+="<br />You reach tenderly for any nearby weapon. Your heart jumps as you wrap your fingers around a handle and bring it up with as much force as you can, colliding with the ogre... You hear a loud snap and realize you just hit him with the leg of a table. The ogre eats your face.<br />GAME OVER. Your score is: " + score;
}
if(text === "RUN AND SCREAM TOWARDS THE DOOR" && choice === 6){
  document.getElementById("node-id").innerHTML+="<br />You slip around the ogre, screaming and running towards the door behind him. Even with him hot on your trail you manage to slip through the door and slam it behind you. You can faintly make out the hallway as it splits into a four-way intersection. Which way will you go? ('NORTH', 'EAST', 'WEST')"
  score = score + 25;
  choice = 3;
}
if(text === "DODGE ROLL OUT OF THE WAY" && choice === 8){
  score = score + 250;
  document.getElementById("node-id").innerHTML+="<br />You dodge roll out of the way. As you reposition yourself you notice the ring nearby. You put it on in desperation and illuminate the area. The ogre is holding a bag of coins and other decorative jewelries out to you. Who knew he was just trying to give precious metals?<br />YOU WIN! Your score is: " + score;
}
if(text === "PUNCH THE FOWL BEAST" && choice === 8){
  document.getElementById("node-id").innerHTML+="<br />You wind your arm up and give a solid punch to the ogre's chest... but it's an ogre. Did you really think that was going to work? With little effort he slays you.<br />GAME OVER. Your score is: " + score;
}
if(text === "CURL UP INTO THE FETAL POSITION" && choice === 8){
  score = 1;
  document.getElementById("node-id").innerHTML+="<br />You curl up on the ground and sob violently as you prepare for death. The ogre, confused, and half-laughing, picks you up and rocks you gently to sleep.<br />You win..? Your score is: " + score;
}
if(text === "NORTH" && choice === 3){
  document.getElementById("node-id").innerHTML+="<br />You head north and open the door, and are immediately incinerated by dragon fire. You weren't going to win that one even if you did find the sword back in room one.<br />GAME OVER. Your score is: " + score;
}
if(text === "EAST" && choice === 3){
  score = score + 1000000;
  document.getElementById("node-id").innerHTML+="<br />You take the door to the east and open it up, revealing vast riches and magnificent weapons of one-hit-killing. You slay everything that comes up to you and make it out alive with more gold than you ever thought you'd have. Eventually you become king of the land and marry seven or eight wives. You were pretty black out drunk that night and only like four of them stuck around. <br />YOU WIN!!! Your score is: " + score;
}
if(text === "WEST" && choice === 3){
  score = score + 10;
  document.getElementById("node-id").innerHTML+="<br /> You take the door to the west and... And it was the way out. Huh, neat. <br />YOU WIN! (but you don't win much.) Your score is: " + score;
}
}
