advice=document.querySelector("#advice");
button=document.querySelector(".button");
advice_id=document.querySelector("#advice_id");
button.addEventListener("click",(e)=>fetch("https://api.adviceslip.com/advice")           
                                    .then(function (response){ 
                                            return response.json();                            
                                        })//end of 
                                    .then(function (data){  
                                            advice_id.innerHTML="ADVICE # "+data.slip.id;                           
                                             advice.innerHTML=` ❝${data.slip.advice}❞`;
                                        }).catch(e=>{
                                             alert(e);
                                                })                    
);       //end of addEventListener




/*another version of above code

obj1=fetch('url name');

obj2=obj1.then(
function (response){
    return resopnse.jason()
}
);

obj2.then(
function (data){
    alert(data);
}
);





*/