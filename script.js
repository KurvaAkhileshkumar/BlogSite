let shmbtn=document.querySelector('.btnShowmore')
let mainArticleExp=document.querySelector('.mainArticle')
let rhome=document.querySelector('.relatedPostsHome')
let relatedPostsLeftCard=document.querySelector('.relatedPostsCol1')
let relatedPostsRightCard=document.querySelector('.relatedPostsCol2')               
let parentRelatedPostsGrid=document.querySelector(".todaysPostsGrid2")
let trendingTopicsLeftCard=document.querySelector(".todaysPostsCol1")
let trendingTopicsRightCard=document.querySelector(".todaysPostsCol2")
document.querySelector('.todaysPostsLeftPrototype').style.display='none'    
document.querySelector('.todaysPostsRightPrototype').style.display='none'
let idBlogMainArticle
console.log(location.href)
let cardPointer=0
let globalJsonData=[]

console.log(`hello world`)
console.log(relatedPostsLeftCard)
document.addEventListener('DOMContentLoaded',()=>{  
    let toggleSwitch = document.getElementById('toggleMode');
    let lightDark=document.querySelector('.lightDark')
    let brandColor=document.querySelectorAll('.brandColor')
    function calculateSettingAsThemeString() {
        let localStorageTheme=localStorage.getItem('mode')
        if (localStorageTheme !== null) {
          return localStorageTheme;
        }              
      
        return "light-mode";
      }    
    console.log(`toggle switch`)    
    let checkingTheMode=calculateSettingAsThemeString() 
    console.log(checkingTheMode) 
    if(checkingTheMode)
    {
        localStorage.setItem('mode',checkingTheMode);
    }
    else
    {
        localStorage.setItem('mode',checkingTheMode)    
    }
    let currentMode = localStorage.getItem('mode');        
    if (currentMode) {
        if(currentMode=='dark-mode')        
        {
            lightDark.style.color='white'            
            document.querySelector('.articleTitle').style.color='white'
            changeBrandColors(currentMode)
        }
        else
        {
            lightDark.style.color='black'             
            document.querySelector('.articleTitle').style.color='black'
            changeBrandColors(currentMode)   
        }
        document.body.classList.add(currentMode);              
        toggleSwitch.checked = currentMode === 'dark-mode';        
    }

    function toggleMode() {
        document.body.classList.toggle('dark-mode');
        let newMode = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('mode', newMode); 
        if(newMode=='dark-mode')        
        {
            lightDark.style.color='white'            
            document.querySelector('.articleTitle').style.color='white'
            changeBrandColors(newMode)
        }
        else
        {
            lightDark.style.color='black'             
            document.querySelector('.articleTitle').style.color='black'   
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
        then(data=>{    
            globalJsonData=data 
            if(location.href=="https://kurvaakhileshkumar.github.io/BlogSite/" || location.href=="https://kurvaakhileshkumar.github.io/BlogSite/index.html")                               
            loadData(data)                          
        }).
        catch(e=>{
            console.log("Error")
            console.log(e)
        })    
    console.log('Content Loading')
})
function loadData(data){
    globalJsonData=data
    console.log(globalJsonData) 
    console.log('loading')    
    //mainArticleContentUpdation
    document.querySelector('.mainImg').src = data[cardPointer].img    
    document.querySelector('.mainFilterButton').textContent=data[cardPointer].filter
    document.querySelector('.authorDetails').textContent=data[cardPointer].author + " | " + data[cardPointer].role + "| " + data[cardPointer].time
    document.querySelector('.date').textContent=data[cardPointer].date
    document.querySelector('.articleTitle').textContent=data[cardPointer].title       
    document.querySelector('.articleDescription').textContent=data[cardPointer].description
    document.querySelector('.postId').textContent=data[cardPointer].id
    mainArticleExp.setAttribute('id','C'+cardPointer)
    mainArticleExp.classList.add("theme")
    cardPointer++    
    for(let i=0;i<=1;i++)
    {
        if(i==0)
        {                                                
            relatedPostsLeftCard.childNodes[1].childNodes[1].src=data[cardPointer].img    
            relatedPostsLeftCard.childNodes[3].textContent=data[cardPointer].filter    
            relatedPostsLeftCard.childNodes[5].textContent=data[cardPointer].author + " | " + data[cardPointer].role + " | " + data[cardPointer].time
            relatedPostsLeftCard.childNodes[7].textContent=data[cardPointer].date
            relatedPostsLeftCard.childNodes[9].childNodes[0].textContent=data[cardPointer].title
            relatedPostsLeftCard.childNodes[9].childNodes[1].textContent=data[cardPointer].description            
            relatedPostsLeftCard.childNodes[11].textContent=data[cardPointer].id            
            relatedPostsLeftCard.setAttribute('id','C'+cardPointer)   
            relatedPostsLeftCard.classList.add("theme")                                
            cardPointer++            
        }
        else
        {                                                
            relatedPostsRightCard.childNodes[1].childNodes[1].src=data[cardPointer].img    
            relatedPostsRightCard.childNodes[3].textContent=data[cardPointer].filter    
            relatedPostsRightCard.childNodes[5].textContent=data[cardPointer].author + " | " + data[cardPointer].role + " | " + data[cardPointer].time
            relatedPostsRightCard.childNodes[7].textContent=data[cardPointer].date
            relatedPostsRightCard.childNodes[9].childNodes[0].textContent=data[cardPointer].title
            relatedPostsRightCard.childNodes[9].childNodes[1].textContent=data[cardPointer].description            
            relatedPostsRightCard.childNodes[11].textContent=data[cardPointer].id            
            relatedPostsRightCard.setAttribute('id','C'+cardPointer) 
            relatedPostsLeftCard.classList.add("theme")                                   
            cardPointer++            
        }
    }
    loadAndUpadateData(globalJsonData,0)
    setTimeout(()=>{
        foo()
    },'1000')
    shmbtn.addEventListener('click',()=>{                    
        loadAndUpadateData(globalJsonData,1) 
        setTimeout(()=>{
            foo()
        },'500')               
    })
    
}
function loadAndUpadateData(jsonData,ch){                        

    for(let i=1;i<=((ch===0)?6:10);i++)
    {
        if(i&1)
        {
            if(cardPointer<jsonData.length)
            {
            let copyLeft=trendingTopicsLeftCard.cloneNode(true)            
            copyLeft.childNodes[1].childNodes[1].src=jsonData[cardPointer].img    
            copyLeft.childNodes[3].textContent=jsonData[cardPointer].filter    
            copyLeft.childNodes[5].textContent=jsonData[cardPointer].author + " | " + jsonData[cardPointer].role + " | " + jsonData[cardPointer].time
            copyLeft.childNodes[7].textContent=jsonData[cardPointer].date
            copyLeft.childNodes[9].childNodes[0].textContent=jsonData[cardPointer].title
            copyLeft.childNodes[9].childNodes[1].textContent=jsonData[cardPointer].description            
            copyLeft.childNodes[11].textContent=jsonData[cardPointer].id
            parentRelatedPostsGrid.appendChild(copyLeft)
            copyLeft.setAttribute('id','C'+cardPointer) 
            copyLeft.classList.add("theme")                                  
            cardPointer++
            }
        }
        else
        {
            if(cardPointer<jsonData.length)
            {                
            let copyRight=trendingTopicsRightCard.cloneNode(true)            
            copyRight.childNodes[1].childNodes[1].src=jsonData[cardPointer].img    
            copyRight.childNodes[3].textContent=jsonData[cardPointer].filter    
            copyRight.childNodes[5].textContent=jsonData[cardPointer].author + " | " + jsonData[cardPointer].role + " | " + jsonData[cardPointer].time
            copyRight.childNodes[7].textContent=jsonData[cardPointer].date
            copyRight.childNodes[9].childNodes[0].textContent=jsonData[cardPointer].title
            copyRight.childNodes[9].childNodes[1].textContent=jsonData[cardPointer].description            
            copyRight.childNodes[11].textContent=jsonData[cardPointer].id
            parentRelatedPostsGrid.appendChild(copyRight)            
            copyRight.setAttribute('id','C'+cardPointer) 
            copyRight.classList.add("theme")           
            cardPointer++
            }
        }
        if(cardPointer>=jsonData.length){
            shmbtn.style.display="none";
        }
    }              
}

function foo(){
    for(let i=0;i<cardPointer;i++)
    {
        let chhh=document.querySelector('#C'+i) 
        console.log(chhh)       
        chhh.addEventListener('click',()=>{
            location.href=`blogPostPage.html?id=${i}`            
        })

    }
}






