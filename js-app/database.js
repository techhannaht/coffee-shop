const beanVarietyUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

export function getAllBeanVarieties() {
    return fetch(beanVarietyUrl).then(resp => resp.json());
}

export function getAllCoffees() {
    return fetch(coffeeUrl).then(resp => resp.json());
}


export const sendNewBean = (addedBean) => {
    const beansContainer = document.querySelector("#beans")

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(addedBean)
    }


    return fetch(`${beanVarietyUrl}`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            beansContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

