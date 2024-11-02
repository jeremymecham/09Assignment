let foodList = [];

function createTable() {
    let candyTable = document.getElementById("food");
    let table = document.getElementById("candyTable");

    if (!table) {
        table = document.createElement("table");
        table.id = "candyTable";
        candyTable.appendChild(table);

        let headerRow = document.createElement("tr");
        let headers = ["Name", "Type", "Cost"];
        for (const headerText of headers) {
            let th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        };
        table.appendChild(headerRow);
    }
}

function renderTable() {
    createTable();

    let table = document.getElementById("candyTable");
    table.querySelectorAll("tr:not(:first-child)").forEach(row => row.remove());

    for (const object of foodList) {
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = object.foodName;
        row.appendChild(nameCell);

        let typeCell = document.createElement("td");
        typeCell.textContent = object.foodType;
        row.appendChild(typeCell);

        let costCell = document.createElement("td");
        costCell.textContent = object.foodCost;
        row.appendChild(costCell);

        table.appendChild(row);
    }
}

function addElements(object) {
    foodList.push(object);
    renderTable();
}

window.onload = function() {
    createTable();

    document.getElementById("submitBTN").addEventListener("click", function() {
        let name = document.getElementById("txtName").value;
        let type = document.getElementById("txtType").value;
        let cost = document.getElementById("txtCost").value;

        if (name && type && cost) {
            let foodObject = {
                foodName: name,
                foodType: type,
                foodCost: cost
            };
            addElements(foodObject);

            document.getElementById("txtName").value = '';
            document.getElementById("txtType").value = '';
            document.getElementById("txtCost").value = '';
        } else {
            alert("Please fill out all fields before adding a food item.");
        }
    });
}
