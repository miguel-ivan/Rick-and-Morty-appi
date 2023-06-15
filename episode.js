async function fetching(){
    const resonse = await fetch ("https://rickandmortyapi.com/api/episode")
    const json = await resonse.json()
    return json
}

fetching().then(
    resonse => {
        let template = ``
        resonse.results.forEach(item =>{
            template += `
            <div class="item-episod">
               <h2>${item.name}</h2>
               <h3>${item.air_date}--</h3>
               <h4>${item.episode}</h4>
               <p>${item.characters} </p>
               </div>
            </div>
            `
        })
        results.innerHTML = template
    }
)