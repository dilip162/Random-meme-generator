const meme=document.getElementById('meme');
const title=document.getElementById('title');
const memeBtn=document.getElementById('memeBtn');


// choose subreddit

let subreddit=["catmemes","wholesomemes","dogmemes","me_irl"]

// function to generate the memes 

let getMemes=()=>{
    let randomSubreddits=subreddit[Math.floor(Math.random()*subreddit.length)]
    let URL=`https://meme-api.com/gimme/${randomSubreddits}`
    //fetching data from the api
    fetch(URL)
    .then((res)=>res.json())
    .then((data)=>{
        let memeImg=new Image()
        //display meme image and title only after the image loads

        memeImg.onload=()=>{
            meme.src=data.url;           
                title.innerHTML=data.title;            
        }

        memeImg.src=data.url
    })
}

//function calling 

memeBtn.addEventListener('click',getMemes)

window.addEventListener('load',getMemes)