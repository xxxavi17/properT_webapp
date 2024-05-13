function searchProperties() {
    var input = document.getElementById('search-input').value.toLowerCase();
    var transactionType = document.getElementById('transaction-type').value; // Tipo de transação (comprar ou alugar)
    var propertyType = document.getElementById('property-type').value; // Tipo de propriedade (casa ou apartamento)

    // Normaliza a entrada removendo espaços e caracteres especiais, exceto números para manter coisas como "T2"
    var normalizedInput = input.replace(/[^a-z0-9]+/gi, '');

    // Construa a URL baseada no input e tipos de transação e propriedade
    if (normalizedInput.includes('lisboa') && transactionType === 'buy' && propertyType === 'apartment') {
        window.location.href = 'lisboa-comprar.html'; // Página específica para comprar casa em Lisboa
    } else {
        // Redireciona para uma página de não encontrado se nenhum termo específico ou condição de transação for correspondida
        window.location.href = 'notfound-page.html';
    }
}


function searchPropertiesAdmin() {
    var input = document.getElementById('search-input').value.toLowerCase();
    var transactionType = document.getElementById('transaction-type').value; // Tipo de transação (comprar ou alugar)
    var propertyType = document.getElementById('property-type').value; // Tipo de propriedade (casa ou apartamento)

    // Normaliza a entrada removendo espaços e caracteres especiais, exceto números para manter coisas como "T2"
    var normalizedInput = input.replace(/[^a-z0-9]+/gi, '');

    // Construa a URL baseada no input e tipos de transação e propriedade
    if (normalizedInput.includes('lisboa') && transactionType === 'buy' && propertyType === 'apartment') {
        window.location.href = 'lisboa-comprar-admin.html'; // Página específica para comprar casa em Lisboa
    } else if (normalizedInput.includes('porto') && transactionType === 'rent' && propertyType === 'house') {
        window.location.href = 'porto-arrendar-admin.html'; // Página específica para alugar apartamento no Porto
    } else {
        // Redireciona para uma página de não encontrado se nenhum termo específico ou condição de transação for correspondida
        window.location.href = 'notfound-page-admin.html';
    }
}

