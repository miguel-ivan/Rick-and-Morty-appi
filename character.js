async function fetching(){
    const url= window.location.search
    const urlParans= new URLSearchParams(url)
    const id= urlParans.get("id")||1

    const resonse = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
    const json = await resonse.json()
    return json
}

fetching().then(
    item => {
        let template = `
            <div class="item-detail">
               <img src="${item.image}"/>
               <div class="item-detail-description">
               <h2>${item.name}</h2>
               <h3>${item.status}</h3>
               <h4>${item.species}</h4>
               <p>${item.gender}</p>
               </div>
            </div>
            `

        results_detail.innerHTML = template
    }
)


