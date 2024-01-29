import { getAllCoffees } from "./database.js"


export const coffeeButton = document.querySelector("#run-coffee-button");
coffeeButton.addEventListener("click", () => {
    getAllCoffees()
        .then(coffees => {
            renderCoffees(coffees);
        })
});

function renderCoffees(coffees) {
    const coffeesContainer = document.querySelector("#coffees");
    coffeesContainer.innerHTML = Coffees(coffees);
}

function AddCoffeeForm() { 
    let html = `
        <div class="form">
            <label for="title">Title</label>
            <input type="text" name="title" class="input" />
        </div>
        <div class="form">
            <label for="beanvarietyId">Bean Variety Id</label>
            <input type="text" name="beanvarietyId" class="input" />
        </div>
        <button id="submitRequest" class="button">Submit Request</button>
    `;
    return html; 
}
// click event listener for service form
const mainContainer = document.querySelector("#coffees")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const title = document.querySelector("input[name='title']").value
        const beanvarietyId = document.querySelector("input[name='beanvarietyId']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            Title: title,
            BeanVarietyId: beanvarietyId,
        }

        // Send the data to the API for permanent storage
        sendCoffee(dataToSendToAPI)
    }
})

export const Coffees = (coffees) => {
    let html = "<h2>Coffees</h2>";
    html += '<div id="coffees">';
    const arrayOfOptions = coffees.map(coffee => {
        return `<p>${coffee.title}</p>`;
    });
    html += arrayOfOptions.join("");
    html += "</div>";
    html += ` <title>Add New Bean Variety</title>
<body>
    <h4>Add New Bean Variety</h4>
        ${AddCoffeeForm()}
</body> `

    return html;
}
