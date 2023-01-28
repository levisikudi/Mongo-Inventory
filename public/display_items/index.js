let formButton = document.getElementById('form-button')

let container = document.getElementById('container')

formButton.addEventListener('click',() =>{
    window.location.href = "../index.html"
    console.log("Chicken flakes");
})

const getData = async () =>{
    let data = await fetch('/items');
    data.json().then((parsedData) =>{
        console.log(parsedData);

        parsedData.forEach(element => {
            let pTag = document.createElement('p');
            pTag.textContent = element.name
            container.appendChild(pTag)
        });
    })
}
getData()