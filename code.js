var myValue = '';
var secondv = '';
var firstActive = false;
var count = 0;
var secondCount = 0;



function myfunc() {

        

        if(count%2 == 0) {
        
            // myValue = document.getElementById('myinput').value;
            // document.getElementById('myinput').value = '';
            // for(i=0;i<myValue.length;i++) {
            //     document.getElementById('myinput').value += "*";
            // }
            document.getElementById('mybutton').innerHTML = 'show';
            document.getElementById("myinput").type = "password";
            
        }

        if(count%2 == 1) {
            
            // document.getElementById('myinput').value = myValue;
            document.getElementById('mybutton').innerHTML = 'hide';
            // myValue = '';
            document.getElementById("myinput").type = "text";

            
            
    }
        
    count = count + 1;
}

//add more char to input
