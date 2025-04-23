let check = document.querySelectorAll('.tree')
console.log(check);
check.forEach(function(element) 
{console.log(element.innerText);    
})
    

    check.forEach(function(element){
        if(element.innerText.includes('here')){
          element.style.backgroundColor = "blue";
          element.style.color = "white";
        }
        else{
            element.style.backgroundColor = "black";
            element.style.color = "white";
        }

    })

