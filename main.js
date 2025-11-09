let theInput = document.querySelector("input")
let buttons = document.querySelectorAll(".buttons > span")
let theResult = document.querySelector(".result")
let theResultSpan = document.querySelector(".result span")
buttons.forEach((span)=>{
    span.addEventListener("click" , (e) =>{
        if(e.target.classList.contains("add")){
            addItem()
        }
        if(e.target.classList.contains("delete")){
            deleteItem()
        }
        if(e.target.classList.contains("show")){
            showItem()
        }
        if(e.target.classList.contains("check")){
            checkItem()
            console.log("tt")
        }
        if(e.target.classList.contains("delete-all")){
            deleteAll() 
        }
    })
})


let inputEmptyER = function(){
    theResult.innerHTML = `<span class="error">please write any thing before clicking</span>`
}

let checkItem = function(){
    if(theInput.value === ""){
        inputEmptyER()
        theResult.children[0].classList.add("vibr")
            setTimeout(()=>{
                theResult.children[0].classList.remove("vibr")
            },1300)
    }else{
        if(localStorage.getItem(theInput.value)){
            theResult.innerHTML = `<span>We found <span>${theInput.value} </span> in the local storage</span>`
            
        }else{
            theResult.innerHTML = `<span>  <span>${theInput.value}</span> not found</span>`
            if(theResult.classList.contains("error")){
                theResult.children[0].classList.add("vibr")
                setTimeout(()=>{
                    theResult.children[0].classList.remove("vibr")
                },1300)
            }
            theResult.classList.add("error")
        }
        theInput.value = ""
    }
}
let addItem = function(){
    if(theInput.value !== ""){
        if(localStorage.getItem(theInput.value)){
            theResult.innerHTML = `<span><span>${theInput.value}</span> is in your storage</span>`
            theInput.value = ""
        }else{
            localStorage.setItem(theInput.value , "test")
            theResult.innerHTML = `<span><span>${theInput.value}</span> is sucssesfully added</span>`
            theInput.value = ""
        }
    }else{
        inputEmptyER()
    }
    
}

let deleteItem = function(){
    if(theInput.value !== ""){
        if(localStorage.getItem(theInput.value)){
            localStorage.removeItem(theInput.value)
            theResult.innerHTML = `<span><span>${theInput.value}</span> is deleted</span>`
            theInput.value = ""
        }else{
            theResult.innerHTML = `<span><span>${theInput.value}</span> is not found to delete</span>`
            theInput.value = ""
        }
    }else{
        inputEmptyER()
    }
}
let showItem = function(){
    theResult.innerHTML = ""
    if(localStorage.length !== 0){
        for (let [key , value] of Object.entries(localStorage)){
            theResult.innerHTML += `<span class ="show"><span>${key}</span></span>`
            console.log(key)
        }
    }else{
        theResult.innerHTML = `<span>You storage is empty</span>`
    }
}
let deleteAll = function(){
    for(let [key , value] of Object.entries(localStorage)){
        localStorage.removeItem(key)
        theResult.innerHTML = `<span>All Items is deleted</span>`
    }
}