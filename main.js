/**
 * 
 * @param {number} age heres go the age in number
 * @param {number} distance heres go the km in number
 */

/* create the function (i already had some script avaliable from old work to convert) */
function calculateTicketPrice (age, distance){

const pricePerKm = 0.21 

let travelPrice = distance * pricePerKm

let discount = 0

if (age < 18) {

discount = 20

} 

else if (age >= 65) {

    discount = 40

}

const finalPrice = travelPrice * (1 - discount / 100)

return finalPrice
}

/* create the "bridge" (connect html elements with js with DOM) */
const userNameEl = document.getElementById("user-name-input")
const userKMEl = document.getElementById ("km-input")
const userAgeEl = document.getElementById ("user-age")
const finalPriceEl = document.getElementById ("final-price")
const generateButton = document.getElementById ("generate-btn")
const cancelButton = document.getElementById ("cancel-btn")

/* connect the "Genera" button to the JS listener, and use calculate function */
generateButton.addEventListener("click", function () {
    const name = userNameEl.value
    const age = Number(userAgeEl.value)
    const km = Number(userKMEl.value)
    
/* if condition to check if insert element are ok */
    if (km > 0 && age > 0 && name !== "")
    {
        const price = calculateTicketPrice(age, km)
        finalPriceEl.innerText = `Il suo prezzo finale : ${name} il suo prezzo è di ${price} €`

    }

    else {
        finalPriceEl.innerText= `I campi non sono validi!`
    }
})

/* add cancel button */

cancelButton.addEventListener("click", function(){
userNameEl.value= ""
userKMEl.value=""
userAgeEl.value=""
ticketSection.classList.add("d-none");
finalPriceEl.innerText = "Il suo prezzo finale :"
})



/* recreate the "bridge" for the ticket infos */
const ticketSection = document.getElementById("ticket-result")
const ticketNameEl = document.getElementById("ticket-name")
const ticketDiscountEl = document.getElementById("ticket-discount")
const ticketCarriageEl = document.getElementById("ticket-carriage")
const ticketPriceEl = document.getElementById("ticket-price")

/* when we click "Genera" the data will be transfered to the "Il tuo biglietto" spans */

generateButton.addEventListener("click", function () {
    const name = userNameEl.value
    const age = userAgeEl.value
    const km = userKMEl.value
/* condition for the discount */
    if (km > 0 && age > 0 && name !== "")
    {
        const price = calculateTicketPrice(age, km)

        let offerName = "Biglietto standard"

        if (age < 18 )    
             {offerName = "Biglietto minorenni"}

        else if (age >= 65) 
            {offerName = "Sconto Silver"}
    
        const carriageNumber = Math.floor(Math.random() * 12) + 1;
        ticketNameEl.innerText = name;
        ticketDiscountEl.innerText = offerName;
        ticketCarriageEl.innerText = carriageNumber;
        ticketPriceEl.innerText = price.toFixed(2);
        ticketSection.classList.remove("d-none");
        
    }

    else {
        "I campi non sono validi"
    }
    
});

