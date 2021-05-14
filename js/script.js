// const div=document.querySelector('.div')

// let i=0;
// setInterval((item)=>{
//         div.innerHTML+=`<p>hello ${i++}</p>` 

// },1000)
// https://jsonplaceholder.typicode.com/posts

// ---------------------------------

// const $btn=document.querySelector('.getPOst')
// const $container=document.querySelector('.cardsContainer')    


// const getPost=(cb)=>{
//     let xhr=new XMLHttpRequest();

//     xhr.open('GET','https://jsonplaceholder.typicode.com/comments')
//     console.log(xhr);

//     xhr.addEventListener('load', ()=>{
//         const respons=JSON.parse(xhr.response)
//         cb(respons)
//     })
//     xhr.addEventListener('error', (err)=>{
//         console.log('что то не так');
//         console.log(err);
//     })
//     xhr.send()
// }


// $btn.addEventListener('click', e =>{
//     e.preventDefault()

//     getPost(response =>{
//         const template = response.map(item => cars(item)).join('');
//         $container.innerHTML=template


//     })
// })
// function cars({title,body}){
//     return`
//     <div class="col-lg-3 mt-3">
//     <div class="card">
//     <div class="card-header">
//         <h5>${title}</h5>
//     </div>
//     <div class="card-body">comments
//         ${body}
//     </div>
//     </div>
//     </div>`
// }



// const comments=document.querySelector('.comments')
// const can=document.querySelector('.can')
// const ball=document.querySelectorAll('.ball')

// comments.addEventListener('click', e =>{
//     getPost(response =>{
//         const template = response.map(item => comment(item)).join('');

//         can.innerHTML=template


//     })
// })


// function comment({email,body,name}){
    
//     return`
//     <div  class="container">
//         <div class="con">
//             <div class="ball"></div>
//             <div>
//                 <h3>${name}</h3>
//             </div>
//         </div>
//         <p class="mail">${email}</p>
//         <div class="text">
//             <P>${body}</P>
//         </div>
//     </div>`
// }
const posts=document.querySelector('.posts')
const comments=document.querySelector('.comments')
const albums=document.querySelector('.albums')
const photos=document.querySelector('.photos')
const todos=document.querySelector('.todos')
const users=document.querySelector('.users')
const can=document.querySelector('.can')


const fun=(url,cb)=>{
    let xhr= new XMLHttpRequest();

    xhr.open('GET',url)
    xhr.addEventListener('load', () =>{
        let response=JSON.parse(xhr.response)
        cb(response)
    })
    xhr.send();
}

posts.addEventListener('click', () =>{
    let urlcom='https://jsonplaceholder.typicode.com/posts'
    fun(urlcom,response =>{
        const template = response.map(item => post(item)).join('');
        can.innerHTML=template
    })
})
comments.addEventListener('click', () =>{
    let urlcom='https://jsonplaceholder.typicode.com/comments'
    fun(urlcom,response =>{
        const template = response.map(item => comment(item)).join('');
        can.innerHTML=template
    })
})
albums.addEventListener('click', () =>{
    let urlcom='https://jsonplaceholder.typicode.com/albums'
    fun(urlcom,response =>{
        const template = response.map(item => album(item)).join('');
        can.innerHTML=template
    })
})
photos.addEventListener('click', () =>{
    let urlcom='https://jsonplaceholder.typicode.com/photos'
    fun(urlcom,response =>{
        const template = response.map(item => photo(item)).join('');
        can.innerHTML=template
    })
})
todos.addEventListener('click', () =>{
    let urlcom='https://jsonplaceholder.typicode.com/todos'
    fun(urlcom,response =>{
        const template = response.map(item => tod(item)).join('');
        can.innerHTML=template
    })
})
users.addEventListener('click', () =>{
    let urlcom='https://jsonplaceholder.typicode.com/users'
    fun(urlcom,response =>{
        const template = response.map(item => user(item)).join('');
        can.innerHTML=template
    })
})

function comment({email,body,name}){
    
    return`
    <div  class="container">
        <div class="con">
            <div class="ball"></div>
            <div>
                <h3>${name}</h3>
            </div>
        </div>
        <p class="mail">${email}</p>
        <div class="text">
            <P>${body}</P>
        </div>
    </div>`
}
function album({userId,id,title}){
    return`
    <div class="albums">
    <div class="albumtext">
    <h3>${title}</h3>
    <p>${userId}</p>
    </div>
    <div class="albumbox"></div>
    </div>`
}
function photo({userId,id,title,url}){
    return`
    <div class="albums">
    <div class="albumtext">
    <h3>${title}</h3>
    </div>
    <div class="photobox"><img src="${url}" alt=" "></div>
    </div>`
}
function user({username,name,email,address:{street,suite,city,zipcode, geo:{lat,lng}}}){
    return`
    <div class="cards">
    <div class="usertext">
    <h3 class="cen">${username}</h3>
    <h3 class="cen">${name}</h3>
    <p class="gray">${email}</p>
    </div>
    <div class="useradres">
        <h3 class="cen">address</h3>
        <p>street${street}:</p>
            <p>suite:${suite}</p>
            <p>city:${city}</p>
            <p>zipcode:${zipcode}</p>
            <h3 class="cen">Geo</h3>
            <p>lat:${lat}</p>
            <p>lng:${lng}</p>

    </div>
    </div>
    </div>`
}
function tod({id,title,completed}){
    return`
    <div class="todobox">
            <div class="title">${title}</div>
            <div class="bull">${completed}</div>
            <p>${id}</p>
    </div>`
}
function post({title,body}){
    return`
    <div class="postbox">
            <h3>${title}</h3>
            <p>${body}</p>
        </div>`
}