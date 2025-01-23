function searchCharacter() {
    const searchInput = document.getElementById('searchInput').value;
    const resultDiv = document.getElementById('result');

    fetch(`/characters/${searchInput}`)
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                resultDiv.textContent = data.message;
            } else {
                resultDiv.innerHTML = `
                    <img src="${data.image}" alt="${data.name}">
                    <h2>${data.name}</h2>
                    <p>Estado: ${data.status}</p>
                    <p>Especie: ${data.species}</p>
                    <p>Género: ${data.gender}</p>
                    <p>Origen: ${data.origin.name}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.textContent = 'Error al buscar el personaje';
        });
}