var p1b=document.querySelector("#p1");
var p2b=document.querySelector("#p2");
var p2current=0;
var p1current=0;
var maxcurrent=5;
var max=document.getElementById("max");
var p1S=document.getElementById("p1s");
var p2S=document.getElementById("p2s");
var rbutton=document.querySelector("#reset");
var gameover=false;

rbutton.addEventListener("click",function(){
    p1S.textContent=0;
    p2S.textContent=0;
    gameover=false;
    p1current=0;
    p2current=0;
    p1S.style.color="black";
    p2S.style.color="black";
})
p1b.addEventListener("click",function(){
	    if(!gameover)
	    {
            p1current++;
            if(p1current==maxcurrent)
            	{
            		gameover=true;
                    p1S.style.color="red";
            	}
            p1S.textContent=p1current;
	    }
});

p2b.addEventListener("click",function(){
		if(!gameover)
	    {
            p2current++;
            if(p2current==maxcurrent)
            {
                gameover=true;
                p2S.style.color="red";
            }
            p2S.textContent=p2current;
	    }
});

var input=document.querySelector("input");

input.addEventListener("change",function(){
    max.textContent=input.value;
    maxcurrent=input.value;
})


