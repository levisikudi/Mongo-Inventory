//get id from url

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
})
 let id = params.itemId
 console.log(params.itemId);
 
// use id to get info from collection

const getSingleItem = async () =>{
    let response = await fetch(`http://localhost:4000/item/${id}`)
    console.log({response});

    let finalData = await response.json()

    console.log(finalData);

    let itemName = document.getElementById('item-name')
    itemName.textContent = finalData.name


}
getSingleItem()


let backButton = document.getElementById('back-to-items-btn')
backButton.addEventListener('click', ()=>{
    window.location.href = '../index.html'
})


