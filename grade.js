function Calculate(){
     var a=parseInt (document.getElementById('bookone').value);
     var b=parseInt (document.getElementById('booktwo').value);
     var c=parseInt (document.getElementById('bookthree').value);
     var d=parseInt (document.getElementById('bookfour').value);
     var e=parseInt (document.getElementById('bookfive').value);
    if (a>100 || b>100 || c>100 || d>100 || e>100)
    {
        alert("Please enter correct value");
    }
    else{
        let Obtain=a+b+c+d+e;
        document.getElementById("obtain").innerHTML=Obtain;
        let per=(a+b+c+d+e)/5;
        //alert(Obtain);
        //alert(per);
        //console.log(Obtain);
        //console.log(per);
        document.getElementById("per").innerHTML=per;
        if (a>40 && b>40 && c>40 && d>40 && e>40)
         {
            document.getElementById("remarks").innerHTML="<span style='color:#292'> Pass </span> ";
        }
        else{
            document.getElementById("remarks").innerHTML="<span style='color:red'> Fail </span> ";
        }
        if(per>=80){
            document.getElementById("grade").textContent="A";
        }
        else if(per>=70){
            document.getElementById("grade").textContent="B";
        }
        else if(per>=60){
            document.getElementById("grade").textContent="C";
        }
        else if(per>=50){
            document.getElementById("grade").textContent="D";
        }
        else if(per>=40){
            document.getElementById("grade").textContent="E";
        }
        else
        {
            document.getElementById("grade").textContent="F";
        }
    }

}