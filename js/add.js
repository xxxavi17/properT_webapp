document.addEventListener("DOMContentLoaded", function() {
    var priceInput = document.getElementById('priceInput');
    var squareFeetInput = document.getElementById('squareFeetInput');
    var bedroomsInput = document.getElementById('bedroomsInput');
    var bathroomsInput = document.getElementById('bathroomsInput');

    function validateNumericInput(event) {
        // Allow backspace, delete, tab, escape, and enter
        if ([46, 8, 9, 27, 13].indexOf(event.keyCode) !== -1 ||
            // Allow Ctrl+A, Ctrl+C, Ctrl+X
            (event.ctrlKey === true && (event.keyCode === 65 || event.keyCode === 67 || event.keyCode === 88)) ||
            // Allow navigation keys: home, end, left, right
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            return; // let it happen, don't do anything
        }

        // Ensure that it is a number and stop the keypress if not
        if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
            event.preventDefault();
        }
    }

    function handleInput(e) {
        // Remove leading zeros and non-numeric characters
        let value = e.target.value;
        value = value.replace(/[^0-9]+/g, ''); // Remove non-digits
        value = value.replace(/^0+/, ''); // Remove leading zeros
        e.target.value = value;
    }

    [priceInput, squareFeetInput].forEach(input => {
        input.addEventListener('keydown', validateNumericInput);
        input.addEventListener('input', handleInput);
    });

    function validatePositiveNumericInput(event) {
        validateNumericInput(event); // reuse the numeric validation
    }

    [bedroomsInput, bathroomsInput].forEach(input => {
        input.addEventListener('keydown', validatePositiveNumericInput);
        input.addEventListener('input', handleInput);
    });

    document.getElementById('propertyImages').addEventListener('change', function(event) {
        var imageCarousel = document.getElementById('imageCarousel');
        imageCarousel.innerHTML = ''; // Clear existing images

        Array.from(event.target.files).forEach((file, index) => {
            var reader = new FileReader();
            reader.onload = function(e) {
                var activeClass = index === 0 ? ' active' : '';
                var itemHTML = `<div class="carousel-item${activeClass}">
                                    <img src="${e.target.result}" class="d-block w-100" alt="Uploaded Image">
                                </div>`;
                imageCarousel.innerHTML += itemHTML;
            };
            reader.readAsDataURL(file);
        });
    });
});
