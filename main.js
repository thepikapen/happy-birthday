var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        thing = Img;

        thing.scaleToWidth(700);
        thing.scaleToHeight(510);
        thing.set({
        top:0,
        left:0
        });
            canvas.add(thing);
        });
	
}

function Play_Sound(){
	x.play();
}
