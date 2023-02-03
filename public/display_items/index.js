let formButton = document.getElementById('form-button')

let container = document.getElementById('container')

formButton.addEventListener('click',() =>{
    window.location.href = "../index.html"
})

const getData = async () =>{
    let data = await fetch('/items');
    data.json().then((parsedData) =>{

        parsedData.forEach(element => {
            let pTag = document.createElement('p');
            pTag.textContent = element.name
            pTag.id = element._id
            container.appendChild(pTag)
            console.log({element})

            pTag.addEventListener('click', (event) =>{
                console.log({event});
                console.log(event.target);
                window.location.href = `./single_item?itemId=${event.target.id}`
            })
        });
    })
}

getData()