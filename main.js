canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
images_array=["1.jpg","2.jpg","3.jpg","4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);

rover_x=10;
rover_y=10;
rover_width=100;
rover_height=100;
rover_img="rover.png";
background_img=images_array[random_number];
function add(){
rover_image=new Image();
rover_image.onload= upload_rover;
rover_image.src= rover_img;
background_image=new Image();
background_image.onload= upload_backgroundimage;
background_image.src=background_img;
}
function upload_backgroundimage(){
ctx.drawImage(background_image,0,0 , canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_image, rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e)


{
  keypress=e.keyCode;
  if(keypress=='40'){
      console.log("down");
      down();
  }
  if(keypress=='38'){
    console.log("up");
    up();
}
if(keypress=='37'){
    console.log("left");
    left();
}
if(keypress=='39'){
    console.log("right");
    right();
}
}
function up(){
    if(rover_y>=0){
        rover_y= rover_y-10;
        console.log("When up pressed,x="+rover_x+" y="+rover_y);
         upload_backgroundimage();
             upload_rover();
         
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("When down pressed,x="+rover_x+" y="+rover_y);
         upload_backgroundimage();
             upload_rover();
         
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When right pressed,x="+rover_x+" y="+rover_y);
         upload_backgroundimage();
             upload_rover();
         
    }
} 
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When left pressed,x="+rover_x+" y="+rover_y);
         upload_backgroundimage();
             upload_rover();
         
    }
}



