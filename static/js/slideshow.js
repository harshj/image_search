{% verbatim %}

<script language="javascript">
var i = 0;
var path = new Array();

path[0]= 'static/images/slide1.jpg';
path[1]= 'static/images/slide2.jpg';
path[2]= 'static/images/slide3.jpg';

function swapImage(){
	console.log(i);
	document.slide.src = path[i];
	//if(i < path.length - 1) 
	//	i++;
	//else
	//	i = 0;
	i = (i+1) % path.length;
	timeout = setTimeout("swapImage()", 3500);
}

function prev_img(){
	i -= 2;
	if(i < 0)
		i = path.length + i;
		
	clearTimeout(timeout);
	swapImage();
}

function next_img(){
	clearTimeout(timeout);	
	swapImage();
}
document.getElementById("prev_slide").onclick = prev_img;
document.getElementById("next_slide").onclick = next_img;
window.onload = swapImage;

</script>

{% endverbatim %}
