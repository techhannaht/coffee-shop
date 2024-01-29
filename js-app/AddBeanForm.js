import { sendNewBean } from "./database.js";

export const AddBeanForm = () => {
    let html = `
    <form id="beanVarietyForm">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br>
        
        <label for="region">Region:</label><br>
        <input type="text" id="region" name="region" required><br>

        <label for="notes">Notes:</label><br>
        <textarea id="notes" name="notes"></textarea><br>
        
        <button type="submit" id="submitRequest">Add Bean Variety</button>
    </form>
`
    return html
}

 // Get the main container where the form will be inserted
 const beansContainer = document.querySelector("#beans");

 // Add click event listener to the main container
 beansContainer.addEventListener("click", clickEvent => {
     if (clickEvent.target.id === "submitRequest") {
         // Get the values from the form fields
         const name = document.querySelector("input[name='name']").value;
         const region = document.querySelector("input[name='region']").value;
         const notes = document.querySelector("textarea[name='notes']").value;

         // Construct the data object to send to the API
         const dataToSendToAPI = {
             Name: name,
             Region: region,
             Notes: notes,
         };

         // Send the data to the API for permanent storage
         sendNewBean(dataToSendToAPI);
     }
 });