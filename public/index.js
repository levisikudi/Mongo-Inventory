console.log("Hello");

let submitButton = document.getElementById('submit-button')


submitButton.addEventListener('click', async () =>{
    let nameInput = document.getElementById('name-input').value
    let priceInput = +document.getElementById('price-input').value
    let dateInput = document.getElementById('date-input').value
    let inventoryInput= +document.getElementById('inventory-input').value
    let  deliveryInput = +document.getElementById('deliveryAmt-input').value
    console.log(nameInput + priceInput+ dateInput + inventoryInput + deliveryInput);

    let item = {
        priceInput,
        inventoryInput,
        dateInput,
        deliveryInput,
        nameInput
    }

    let response = await fetch('/create_item',{
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(item)
    })
    console.log(response.status);   
})