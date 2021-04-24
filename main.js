canvas = document.getElementById('myCanvas');
ctx = canvas.getcontext("2d");

var car1
car1_width = 120;
car1_height = 70;
car1_image = car_1.png;
car1_x = 10;
car1_y = 10;

var car2
car2_width = 120;
car2_height = 70;
car2_image = car_2.png;
car2_x = 10;
car2_y = 10;

var img
background_image = "racing.jpeg";


function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;  

	car_1_imgTag = new Image(); 
	car_1_imgTag.onload = uploadrover; 
	car_1_imgTag.src = car_1_image;  
}

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;  

	car_2_imgTag = new Image(); 
	car_2_imgTag.onload = uploadrover; 
	car_2_imgTag.src = car_2_image;  
}




function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(car_1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(car_1_y >=0)
	{
		car_1_y = car_1_y - 10;
		console.log("When up arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(car_1_y <=500)
	{
		car_1_y =car_1_y+ 10;
		console.log("When down arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(car_1_x >= 0)
	{
		car_1_x =car_1_x - 10;
		console.log("When left arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(car_1_x <= 700)
	{
		car_1_x =car_1_x + 10;
		console.log("When right arrow is pressed,  x = " + car_1_x + " | y = " +car_1_y);
		uploadBackground();
		uploadrover();
   }
}
	




function up()
{
	if(car_2_y >=0)
	{
		car_2_y = car_2_y - 10;
		console.log("When up arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(car_1_y <=500)
	{
		car_2_y =car_2_y+ 10;
		console.log("When down arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(car_2_x >= 0)
	{
		car_2_x =car_2_x - 10;
		console.log("When left arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(car_2_x <= 700)
	{
		car_2_x =car_2_x + 10;
		console.log("When right arrow is pressed,  x = " + car_2_x + " | y = " +car_2_y);
		uploadBackground();
		uploadrover();
   }
}
	