document.addEventListener("DOMContentLoaded", function () {
    const vehicleForm = document.getElementById("vehicle-form");
    const vehicleList = document.getElementById("vehicle-list");
    const placaRegex = /^[A-Z0-9]+$/;

    vehicleForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const placa = document.getElementById("placa").value;
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const color = document.getElementById("color").value;
        const tipo = document.getElementById("tipo").value;

        if (!placa.match(placaRegex)) {
            alert("La placa debe contener solo letras mayúsculas y números, sin símbolos ni espacios.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>Placa: ${placa}, Marca: ${marca}, Modelo: ${modelo}, Color: ${color}, Tipo: ${tipo}</span>
            <button class="edit-button">Editar</button>
            <button class="delete-button">Eliminar</button>
        `;

        vehicleList.appendChild(listItem);

        const editButtons = listItem.getElementsByClassName("edit-button");
        for (let editButton of editButtons) {
            editButton.addEventListener("click", function () {
                const newPlaca = prompt("Editar Placa:", placa);
                const newMarca = prompt("Editar Marca:", marca);
                const newModelo = prompt("Editar Modelo:", modelo);
                const newColor = prompt("Editar Color:", color);
                const newTipo = prompt("Editar Tipo:", tipo);

                if (newPlaca !== null && newMarca !== null && newModelo !== null && newColor !== null && newTipo !== null) {
                    if (!newPlaca.match(placaRegex)) {
                        alert("La placa debe contener solo letras mayúsculas y números, sin símbolos ni espacios.");
                        return;
                    }

                    placa = newPlaca;
                    marca = newMarca;
                    modelo = newModelo;
                    color = newColor;
                    tipo = newTipo;
                    listItem.querySelector("span").textContent = `Placa: ${placa}, Marca: ${marca}, Modelo: ${modelo}, Color: ${color}, Tipo: ${tipo}`;
                }
            });
        }

        const deleteButtons = listItem.getElementsByClassName("delete-button");
        for (let deleteButton of deleteButtons) {
            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
        }

        // Limpiar el formulario
        vehicleForm.reset();
    });
});
