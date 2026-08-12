// Unit Converter JavaScript
const conversionRates = {
    // Length conversions (to meters)
    'meter': 1,
    'm': 1,
    'km': 1000,
    'kilometer': 1000,
    'cm': 0.01,
    'centimeter': 0.01,
    'mm': 0.001,
    'millimeter': 0.001,
    'mile': 1609.34,
    'miles': 1609.34,
    'yard': 0.9144,
    'yards': 0.9144,
    'feet': 0.3048,
    'foot': 0.3048,
    'ft': 0.3048,
    'inch': 0.0254,
    'inches': 0.0254,
    'in': 0.0254,
    // Weight conversions (to kg)
    'kilogram': 1,
    'kg': 1,
    'gram': 0.001,
    'g': 0.001,
    'milligram': 0.000001,
    'mg': 0.000001,
    'pound': 0.453592,
    'lb': 0.453592,
    'lbs': 0.453592,
    'ounce': 0.0283495,
    'oz': 0.0283495,
    'ton': 1000,
    'tonne': 1000
};

function convertUnits() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value.toLowerCase().trim();
    const toUnit = document.getElementById('toUnit').value.toLowerCase().trim();
    
    if (isNaN(value) || value < 0 || !fromUnit || !toUnit) {
        showResultModal('<p style="color: red; text-align: center; font-size: 18px;">Please enter valid values and units.</p>');
        return;
    }
    
    if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
        showResultModal('<p style="color: red; text-align: center; font-size: 18px;">Unit not supported. Try: meter, km, mile, feet, kg, gram, pound, etc.</p>');
        return;
    }
    
    const baseValue = value * conversionRates[fromUnit];
    const result = baseValue / conversionRates[toUnit];
    
    const resultHTML = `
        <h3>Unit Conversion Result</h3>
        <p><strong>${value} ${fromUnit}</strong> = <strong>${result.toFixed(4)} ${toUnit}</strong></p>
    `;
    
    showResultModal(resultHTML);
}

function showResultModal(content) {
    const modal = document.getElementById('resultModal');
    const modalResult = document.getElementById('modalResult');
    modalResult.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('resultModal');
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('converterForm');
    const modal = document.getElementById('resultModal');
    const closeBtn = document.querySelector('.close');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            convertUnits();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});
