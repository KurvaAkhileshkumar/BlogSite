let searchIcon=document.querySelector('.fa-solid')
let searchBox=document.querySelector('.search-box')
let searchDesign=document.querySelector('.search-design')
let searchClose=document.querySelector('.searchclose')
searchClose.style.display='none'

searchIcon.addEventListener('click',()=>{
    
    if(searchBox.value=='')
    {
        searchBox.style.display='flex' 
        searchDesign.style.padding='5px 20px'
        searchDesign.style.width='auto'
        searchDesign.style.background="#fff"
        searchDesign.style.borderRadius="5px"
        searchIcon.style.color='black'  
        searchClose.style.display='flex'  
        searchClose.style.color='black'
    }
    else
    {
        let searchingKeyWord=searchBox.value
        console.log(searchingKeyWord)
        if(searchingKeyWord=='technology' || searchingKeyWord=='Technology')
        {
                searchBox.value=''
                location.href=`technology.html`                
        }
        else if(searchingKeyWord=='culture' || searchingKeyWord=='Culture')
        {
            searchBox.value=''
            location.href=`culture.html`            
        }
        else if(searchingKeyWord=='ideas' || searchingKeyWord=='Ideas')
        {
            searchBox.value=''
            location.href=`ideas.html`
        }
        else
        {
            searchBox.value=''
            location.href=`blogPostPage.html?searchingKeyWord=${searchingKeyWord}`
        }
    }

})

searchClose.addEventListener('click',()=>{
    searchBox.value=''    
    searchBox.style.display='none' 
    searchDesign.style.padding='auto'
    searchDesign.style.width='auto'
    searchDesign.style.background="none"
    searchDesign.style.borderRadius="0px"
    searchIcon.style.color='white'  
    searchClose.style.display='none'  
    searchClose.style.color='white'  
})


function searchingFromSearchBar()
{

}