var count = 0;
var count_com = 0;
var name=prompt("Enter your name")
while(name==""){
    alert("Please Enter your name")
    var name=prompt("Enter your name")


}


 let getpoints=document.querySelector(".points .row .main1")
 let getcompoints=document.querySelector(".points .row .main2")
 getpoints.innerHTML="<h2>"+name+":"+"<span class='chgcount'>0</span></h2>"
 getcompoints.innerHTML="<h2>"+"Computer"+":"+"<span class='chgcomcount'>0</span></h2>"
 let chgcount=document.querySelector(".chgcount")


let get=document.querySelectorAll(".btn").length
console.log(get)
 for (let i = 0; i < get; i++) {
    
     document.querySelectorAll(".btn")[i].addEventListener("click",function(){
         console.log(i)
         if(i==0){
             backmain("✊🏻")
         }else if(i==1){
             backmain("🤚🏻")
         }
         else{
             backmain("✌🏻")
         }

     })
 }

     function backmain(key){
         var arr=["🤚🏻","✊🏻","✌🏻"]
        
      console.log(count)
         let getdiv=document.querySelector(".container tr .putinside")
         let getpoints=document.querySelector(".points .row .main1")
         getpoints.innerHTML="<h2>"+name+"<span class='chgcount'>0</span></h2>"
        if(key=="✊🏻"){
            var ma=Math.floor(Math.random(0,3)*3)
            getdiv.innerHTML="<h1 class='vs'>✊🏻</h1>"+
            "<h1 class='vs'>"+arr[ma]+"</h1>"
           if(arr[ma]==="✌🏻"){
               count+=1
           }
           else if(arr[ma]==="🤚🏻"){
            count_com+=1
        }
        
        else{
            count++
            count_com++
        }
                console.log(count+"  "+count_com)

        }
        
       else if(key=="🤚🏻"){

            var ma=Math.floor(Math.random(0,3)*3)
            getdiv.innerHTML="<h1 class='vs'>🤚🏻</h1>"+
            "<h1 class='vs'>"+arr[ma]+"</h1>"
            if(arr[ma]=="✊🏻"){
                count=count+1
            }
                else if(arr[ma]=="✌🏻"){
                    count_com+=1

                }
                else{
                    count++
                    count_com++
                }
                console.log(count+" "+count_com)
        }
      else if(key=="✌🏻"){

            var ma=Math.floor(Math.random(0,3)*3)
            getdiv.innerHTML="<h1 class='vs'>✌🏻</h1>"+
            "<h1 class='vs'>"+arr[ma]+"</h1>"
            if(arr[ma]=="🤚🏻"){
                count=count+1
            }
                else if(arr[ma]=="✊🏻"){
                    count_com+=1

                }
                else{
                    count++
                    count_com++
                }
                console.log(count+" "+count_com)
        }
        getpoints.innerHTML="<h2>"+name+"<span class='chgcount'>:"+count+"</span></h2>"
         getcompoints.innerHTML="<h2>"+"Computer"+":"+"<span class='chgcomcount'>"+count_com+"</span></h2>"
        
     }
   
     
 
