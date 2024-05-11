function applyFilters() {
    //var properties = [...]; // Your array of property objects
    var minPrice = document.getElementById('min-price').value;
    var maxPrice = document.getElementById('max-price').value;
    var bedrooms = document.getElementById('bedrooms').value;
    var pool = document.getElementById('pool').value;
    var heating = document.getElementById('heating').value;

    var filteredProperties = properties.filter(property => {
        return (!minPrice || property.price >= minPrice) &&
               (!maxPrice || property.price <= maxPrice) &&
               (!bedrooms || property.bedrooms >= bedrooms) &&
               (pool === '' || (pool === 'yes' && property.hasPool) || (pool === 'no' && !property.hasPool)) &&
               (heating === '' || property.heating === heating);
    });

    // Display these filtered properties on your webpage
    console.log(filteredProperties); // Placeholder for displaying the results
}


document.addEventListener("DOMContentLoaded", function() {
    var filterButton = document.querySelector('.nav .btn-outline-secondary'); // Adjust this selector to target your Filters button
    var filterBar = document.getElementById('filter-bar'); // The filter bar container

    filterButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent any default anchor click behavior
        // Toggle display of the filter bar
        if (filterBar.style.display === 'none' || filterBar.style.display === '') {
            filterBar.style.display = 'block';
            this.textContent = 'Hide Filters'; // Change button text to Hide Filters
        } else {
            filterBar.style.display = 'none';
            this.textContent = 'Filters'; // Change button text back to Filters
        }
    });
});


function applyFilters() {
    var minPrice = parseInt(document.getElementById('min-price').value);
    var maxPrice = parseInt(document.getElementById('max-price').value);
    var bedrooms = parseInt(document.getElementById('bedrooms').value);
    var garage = document.getElementById('garage').value;
    var heating = document.getElementById('heating').value;

    // Aqui você simula uma verificação dos critérios
    if (minPrice === 250000 && maxPrice === 350000 && bedrooms === '3+ bedrooms' && garage === 'With garage' && heating !== 'Central') {
        window.location.href = 'porto-arrendar.html'; // Redireciona para a página desejada
    } else {
        // Mostrar mensagem ou alguma indicação de que nenhum imóvel cumpre os critérios
        alert('No properties match your criteria.');
    }
}
