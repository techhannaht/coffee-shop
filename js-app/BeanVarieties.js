import { getAllBeanVarieties } from "./database.js"
import { AddBeanForm } from "./AddBeanForm.js";

export const beanVarietiesButton = document.querySelector("#run-coffeeVariety-button");
beanVarietiesButton.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            renderBeanVarieties(beanVarieties);
        });
});

function renderBeanVarieties(beans) {
    const beansContainer = document.querySelector("#beans");
    beansContainer.innerHTML = BeanVarieties(beans);
}

export const BeanVarieties = (beans) => {
    let html = "<h2>Beans</h2>";
    html += '<div id="differentBeans">';
    const arrayOfOptions = beans.map(bean => {
        return `<p>${bean.name}</p>`;
    });
    html += arrayOfOptions.join("");
    html += "</div>";
    html += ` <title>Add New Bean Variety</title>
    <body>
        <h4>Add New Bean Variety</h4>
            ${AddBeanForm()}
    </body> `
    return html;
}





