// // import chhhhh from "./script.js";

// // setTimeout(()=>{
// //     console.log(chhhhh)
// // },'10000')

// import ch from "./script.js"

// console.log(ch)

let articlePost=document.querySelector('.blogMainArticle')
let blogArticleTitle=document.querySelector('.blogArticleTitle')
console.log(articlePost)

let queryString=window.location.search
console.log(queryString)
let urlParams= new URLSearchParams(queryString)


document.addEventListener('DOMContentLoaded',()=>{ 
    let brandColor=document.querySelectorAll('.brandColor')
    let lightDark=document.querySelector('.lightDark')
    let toggleSwitch = document.getElementById('toggleMode');

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
        document.body.classList.add(currentMode);
        toggleSwitch.checked = currentMode === 'dark-mode';
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
            if(location.href!="https://kurvaakhileshkumar.github.io/BlogSite/" || location.href!="https://kurvaakhileshkumar.github.io/BlogSite/index.html")                               
            loadData(data)
                          
        }).
        catch(e=>{
            console.log("Error")
            console.log(e)
        })    
    console.log('Content Loading')
    let sliderFontSize=document.querySelector('#sliderFontSize')
    let changeFontSize=document.querySelectorAll('.changeFontSize')
    console.log(changeFontSize)
    setTimeout(() => {
        sliderFontSize.addEventListener('input',()=>{
            console.log('hellow world')
            console.log(sliderFontSize.value)
            console.log(changeFontSize)
            if(sliderFontSize.value==1)
            {
                document.body.style.fontSize='20px'
                document.querySelectorAll('.ccc').style.fontSize='20px'
            }
            else if(sliderFontSize.value==2)
            {
                document.body.style.fontSize='30px'
                document.querySelectorAll('.ccc').style.fontSize='30px'
            }
            else if(sliderFontSize.value==3)
            {
                document.body.style.fontSize='40px'
                document.querySelectorAll('.ccc').style.fontSize='40px'
            }
            else if(sliderFontSize.value==4)
            {
                document.body.style.fontSize='50px'
                document.querySelectorAll('.ccc').style.fontSize='50px'
            }
            else if(sliderFontSize.value==5)
            {
                document.body.style.fontSize='60px'
                document.querySelectorAll('.ccc').style.fontSize='60px'
            }
        
        })    
    }, '5000');
    
})

function loadData(data){
    globalJsonData=data
    console.log(globalJsonData) 
    console.log('loading')    
    //mainArticleContentUpdation
    if(urlParams.has('id'))       
    {
        updateArticleData(data,urlParams.get('id'))
    }
    else
    {
        let searchingKeyWord=urlParams.get('searchingKeyWord')        
        for(let i=0;i<data.length;i++)
        {            
            if(data[i].title===searchingKeyWord || data[i].author===searchingKeyWord || 
                data[i].title.toLowerCase()===searchingKeyWord || data[i].author.toLowerCase()===searchingKeyWord)
            {
                console.log(searchingKeyWord+'found')
                updateArticleData(data,data[i].id)
            }
        }
    }    
}

let shareBtnifClicked=0
let sharBtn=document.querySelector('.shareBtn')

sharBtn.addEventListener('click',()=>{
    
    if(shareBtnifClicked==0)
    {
        document.querySelector('.listShare').style.display='block'
        document.querySelector('#fb').style.display='block'
        document.querySelector('#wtsapp').style.display='block'
        document.querySelector('#twitter').style.display='block'
        document.querySelector('#insta').style.display='block'
        shareBtnifClicked=1        
    }
    else if(shareBtnifClicked==1)
    {
        document.querySelector('.listShare').style.display='none'
        document.querySelector('#fb').style.display='none'
        document.querySelector('#wtsapp').style.display='none'
        document.querySelector('#twitter').style.display='none'
        document.querySelector('#insta').style.display='none'
        shareBtnifClicked=0
    }

})


function updateArticleData(data,cardPointer)
{    
    document.querySelector('.blogMainImg').src = data[cardPointer].img    
    document.querySelector('.blogMainFilterButton').textContent=data[cardPointer].filter
    document.querySelector('.blogAuthorDetails').textContent=data[cardPointer].author + " | " + data[cardPointer].role
    document.querySelector('.blogDate').textContent=data[cardPointer].date + " | " + data[cardPointer].time
    document.querySelector('.blogArticleTitle').textContent=data[cardPointer].title       
    document.querySelector('.blogArticleDescription').textContent=data[cardPointer].description
    document.querySelector('.postId').textContent=data[cardPointer].id
    let totalRelatedPostsIds=[]
    for(let i=0;i<data.length;i++)
    {
        if(data[cardPointer].filter===data[i].filter && data[cardPointer].id != data[i].id)
        {
            totalRelatedPostsIds.push(data[i].id)
        }

    }
    console.log(totalRelatedPostsIds.length)
    console.log(totalRelatedPostsIds)
    let blogRelatedPostsLeftCard=document.querySelector('.blogRelatedPostsCol1')
    let blogRelatedPostsRightCard=document.querySelector('.blogRelatedPostsCol2')        
    console.log(blogRelatedPostsLeftCard)
    console.log(blogRelatedPostsRightCard)
    if(totalRelatedPostsIds.length==0)
    {
        blogRelatedPostLeftCard.style.display='none'
        blogRelatedPostRightCard.style.display='none'
    }
    else if(totalRelatedPostsIds.length==1)
    {
        cardPointer=totalRelatedPostsIds[0]
        blogRelatedPostsLeftCard.childNodes[1].childNodes[1].src=data[cardPointer].img    
        blogRelatedPostsLeftCard.childNodes[3].textContent=data[cardPointer].filter    
        blogRelatedPostsLeftCard.childNodes[5].textContent=data[cardPointer].author + " | " + data[cardPointer].role + " | " + data[cardPointer].time
        blogRelatedPostsLeftCard.childNodes[7].textContent=data[cardPointer].date
        blogRelatedPostsLeftCard.childNodes[9].childNodes[0].textContent=data[cardPointer].title
        blogRelatedPostsLeftCard.childNodes[9].childNodes[1].textContent=data[cardPointer].description            
        blogRelatedPostsLeftCard.childNodes[11].textContent=data[cardPointer].id
        RelatedPostRightCard.style.display='none'
    }
    else if(totalRelatedPostsIds.length>=2)
    {
        cardPointer=totalRelatedPostsIds[0]
        blogRelatedPostsLeftCard.childNodes[1].childNodes[1].src=data[cardPointer].img    
        blogRelatedPostsLeftCard.childNodes[3].textContent=data[cardPointer].filter    
        blogRelatedPostsLeftCard.childNodes[5].textContent=data[cardPointer].author + " | " + data[cardPointer].role + " | " + data[cardPointer].time
        blogRelatedPostsLeftCard.childNodes[7].textContent=data[cardPointer].date
        blogRelatedPostsLeftCard.childNodes[9].childNodes[0].textContent=data[cardPointer].title
        blogRelatedPostsLeftCard.childNodes[9].childNodes[1].textContent=data[cardPointer].description            
        blogRelatedPostsLeftCard.childNodes[11].textContent=data[cardPointer].id            

        cardPointer=totalRelatedPostsIds[1]
        blogRelatedPostsRightCard.childNodes[1].childNodes[1].src=data[cardPointer].img    
        blogRelatedPostsRightCard.childNodes[3].textContent=data[cardPointer].filter    
        blogRelatedPostsRightCard.childNodes[5].textContent=data[cardPointer].author + " | " + data[cardPointer].role + " | " + data[cardPointer].time
        blogRelatedPostsRightCard.childNodes[7].textContent=data[cardPointer].date
        blogRelatedPostsRightCard.childNodes[9].childNodes[0].textContent=data[cardPointer].title
        blogRelatedPostsRightCard.childNodes[9].childNodes[1].textContent=data[cardPointer].description            
        blogRelatedPostsRightCard.childNodes[11].textContent=data[cardPointer].id            
           
           
    }

}


