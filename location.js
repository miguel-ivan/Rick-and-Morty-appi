async function fetching(){
    const resonse = await fetch ("https://rickandmortyapi.com/api/location")
    const json = await resonse.json()
    return json
}

fetching().then(
    resonse => {
        let template = ``
        resonse.results.forEach(item =>{
            template += `
            <div class="item-local">
               <h2>${item.name}</h2>
               <h3>${item.type}--</h3>
               <h4>${item.dimension}</h4>
               <p>${item.residents} </p>
               </div>
            </div>
            `
        })
        results.innerHTML = template
    }
)



