const card=document.getElementById('card');
const btn=document.getElementById('btn');
fetch('https://dog.ceo/api/breeds/image/random')
.then(res=>res.json())
.then(res=>randomImage(res))

function randomImage(res){
    let image=Object.entries(res);
    console.log(image[0][1]);
    let img= `<img src="${image[0][1]}" class="card-img-top" alt="img"/>`
       card.innerHTML += img;
}

btn.addEventListener("click",()=>{
    location.reload();
})
