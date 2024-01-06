let technologiesLeftCard=document.querySelector('.relatedPostsCol1')
let technologiesRightCard=document.querySelector('.relatedPostsCol2') 
let leftPrototype=document.querySelector('.leftPrototype')
let rightPrototype=document.querySelector('.rightPrototype') 

console.log(leftPrototype)
console.log(rightPrototype)

console.log(technologiesLeftCard)
console.log(technologiesRightCard)

let cardPointer=0
let cultureIds=[]
document.addEventListener('DOMContentLoaded',()=>{
    let toggleSwitch = document.getElementById('toggleMode');
    let brandColor=document.querySelectorAll('.brandColor')
    function calculateSettingAsThemeString() {
        let localStorageTheme=localStorage.getItem('mode')
        if (localStorageTheme !== null) {
          return localStorageTheme;
        }              
      
        return "light-mode";
      }    
      console.log('toggle switch')    
    let checkingTheMode=calculateSettingAsThemeString()  
    console.log(checkingTheMode)
    if(checkingTheMode)
        localStorage.setItem('mode',checkingTheMode);
    else
        localStorage.setItem('mode',checkingTheMode)
    let currentMode = localStorage.getItem('mode');
    if (currentMode) {
        if(currentMode=='dark-mode')        
        {            
            changeBrandColors(currentMode)
        }
        else
        {            
            changeBrandColors(currentMode)   
        }
        document.body.classList.add(currentMode);
        toggleSwitch.checked = currentMode === 'dark-mode';
    }

    function toggleMode() {
        document.body.classList.toggle('dark-mode');
        let newMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('mode', newMode);
        if(currentMode=='dark-mode')        
        {            
            changeBrandColors(newMode)
        }
        else
        {            
            changeBrandColors(newMode)   
        }
    }  
    function changeBrandColors(brandMode)
    {
        for(let i=0;i<brandColor.length;i++)
        {
            if(brandMode=='dark-mode')
            {
                brandColor[i].style.color='white'
            }
            else
            {
                brandColor[i].style.color='black'
            }
        }

    }
    toggleSwitch.addEventListener('change', toggleMode);   
    fetch('data.json').
        then(response=>response.json()).
        then(data=>loadData(data)).
        catch(e=>{
            console.log("Error")
            console.log(e)
        })    
    console.log('Content Loading')
    setTimeout(()=>{
        foo()
    },'1000')    
})

function loadData(jsonData){    
    leftPrototype.style.display='none'
    rightPrototype.style.display='none' 
    let left=true
    let right=false    
    let parent=document.querySelector('.relatedPostsGrid1')        
    let leftChild=document.querySelector('.relatedPostsCol1')
    let rightChild=document.querySelector('.relatedPostsCol2')        
    for(let i=0;i<jsonData.length;i++)
    {        
        if(left==true && jsonData[i].filter=='Culture')
        {
            // console.log(filterSelected)
            let copyLeft=leftChild.cloneNode(true)
            copyLeft.childNodes[1].childNodes[1].src=jsonData[i].img    
            copyLeft.childNodes[3].textContent=jsonData[i].filter    
            copyLeft.childNodes[5].textContent=jsonData[i].author + " | " + jsonData[i].role + " | " + jsonData[i].time
            copyLeft.childNodes[7].textContent=jsonData[i].date
            copyLeft.childNodes[9].childNodes[0].textContent=jsonData[i].title
            copyLeft.childNodes[9].childNodes[1].textContent=jsonData[i].description            
            parent.appendChild(copyLeft)
            copyLeft.setAttribute('id','C'+jsonData[i].id) 
            cultureIds.push(jsonData[i].id) 
            left=false
            right=true
        }
        else if(right==true && jsonData[i].filter=='Culture')
        {
            // console.log(filterSelected)
            let copyRight=rightChild.cloneNode(true)
            copyRight.childNodes[1].childNodes[1].src=jsonData[i].img    
            copyRight.childNodes[3].textContent=jsonData[i].filter    
            copyRight.childNodes[5].textContent=jsonData[i].author + " | " + jsonData[i].role + " | " + jsonData[i].time
            copyRight.childNodes[7].textContent=jsonData[i].date
            copyRight.childNodes[9].childNodes[0].textContent=jsonData[i].title
            copyRight.childNodes[9].childNodes[1].textContent=jsonData[i].description            
            parent.appendChild(copyRight)
            copyRight.setAttribute('id','C'+jsonData[i].id) 
            cultureIds.push(jsonData[i].id)
            left=true
            right=false
        }
    }     
}

function foo(){
    console.log(cultureIds)
    for(let i=0;i<cultureIds.length;i++)
    {
        let chhh=document.querySelector('#C'+cultureIds[i]) 
        console.log(chhh)       
        chhh.addEventListener('click',()=>{
            location.href=`blogPostPage.html?id=${cultureIds[i]}`            
        })

    }
}

function loadFilterSelectedPosts(jsonData,filterSelected)
{

}

// console.log(filterSelected)
// console.log('Printing......')
//     let cultureFilter=document.querySelector('.culturePosts')
//     let ideasFilter=document.querySelector('.ideasPosts')
//     let technologyFilter=document.querySelector('.technologyPosts')     
//     cultureFilter.addEventListener('click',()=>{        
//         console.log(cultureFilter)                      
//         loadFilterSelectedPosts(jsonData,'Culture')                     
//     })    
//     ideasFilter.addEventListener('click',()=>{
//         console.log(ideasFilter)    
//         bodyContent.innerHTML=''                             
//         loadFilterSelectedPosts(jsonData,'Ideas')                
//     })
//     technologyFilter.addEventListener('click',()=>{
//         console.log(technologyFilter)   
//         bodyContent.innerHTML=''                                        
//         loadFilterSelectedPosts(jsonData,'Technology')                
//     })  