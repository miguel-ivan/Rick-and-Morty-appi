async function fetching(){
    const url= window.location.search
    const urlParans= new URLSearchParams(url)
    const page= urlParans.get("page")||1

    const endpoint=`https://rickandmortyapi.com/api/character?page=${page}`

    const resonse = await fetch (endpoint)
    const json = await resonse.json()
    return json
}

fetching().then(
    resonse => {
        let template = ``
        resonse.results.forEach(item =>{
            paginationtrapper(resonse.info)
            template += `
            <div class="item">
            <a href="character.html"=${item.id}>
               <img src="${item.image}"/>
               <div class="item-description">
               <h2>${item.name}</h2>
               <h3>${item.status}-${item.species}-${item.gender}</h3>
               </div>
               </a>
            </div>
            `
        })
        results.innerHTML = template
    }
)

function paginationtrapper(info){
let template= ``
for (let index = 1; index <= info.pages; index++) {
    template+=`
    <div class="page">
    <a href="index.html?page=${index}">${index}</>
    </div>
    ` 
}
pagination.innerHTML= template
}