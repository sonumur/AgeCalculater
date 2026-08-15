// Unit Converter JavaScript - Full Interactive Engine

document.addEventListener('DOMContentLoaded', function () {
    const categories = {
        length: {
            title: 'Length',
            defaultFrom: 'm',
            defaultTo: 'ft',
            units: {
                m: { name: 'Meters (m)', factor: 1, symbol: 'm' },
                km: { name: 'Kilometers (km)', factor: 1000, symbol: 'km' },
                cm: { name: 'Centimeters (cm)', factor: 0.01, symbol: 'cm' },
                mm: { name: 'Millimeters (mm)', factor: 0.001, symbol: 'mm' },
                mi: { name: 'Miles (mi)', factor: 1609.344, symbol: 'mi' },
                yd: { name: 'Yards (yd)', factor: 0.9144, symbol: 'yd' },
                ft: { name: 'Feet (ft)', factor: 0.3048, symbol: 'ft' },
                in: { name: 'Inches (in)', factor: 0.0254, symbol: 'in' }
            }
        },
        weight: {
            title: 'Weight',
            defaultFrom: 'kg',
            defaultTo: 'lb',
            units: {
                kg: { name: 'Kilograms (kg)', factor: 1, symbol: 'kg' },
                g: { name: 'Grams (g)', factor: 0.001, symbol: 'g' },
                mg: { name: 'Milligrams (mg)', factor: 0.000001, symbol: 'mg' },
                lb: { name: 'Pounds (lb)', factor: 0.45359237, symbol: 'lb' },
                oz: { name: 'Ounces (oz)', factor: 0.028349523125, symbol: 'oz' },
                t: { name: 'Metric Tons (t)', factor: 1000, symbol: 't' }
            }
        },
        temperature: {
            title: 'Temperature',
            defaultFrom: 'c',
            defaultTo: 'f',
            units: {
                c: { name: 'Celsius (°C)', symbol: '°C' },
                f: { name: 'Fahrenheit (°F)', symbol: '°F' },
                k: { name: 'Kelvin (K)', symbol: 'K' }
            }
        },
        area: {
            title: 'Area',
            defaultFrom: 'sqm',
            defaultTo: 'sqft',
            units: {
                sqm: { name: 'Square Meters (m²)', factor: 1, symbol: 'm²' },
                sqkm: { name: 'Square Kilometers (km²)', factor: 1000000, symbol: 'km²' },
                sqft: { name: 'Square Feet (ft²)', factor: 0.09290304, symbol: 'ft²' },
                sqmi: { name: 'Square Miles (mi²)', factor: 2589988.110336, symbol: 'mi²' },
                ac: { name: 'Acres (ac)', factor: 4046.8564224, symbol: 'ac' },
                ha: { name: 'Hectares (ha)', factor: 10000, symbol: 'ha' }
            }
        }
    };

    let activeCategoryKey = 'length';

    // DOM Elements
    const categoryButtons = document.querySelectorAll('.unit-cat-btn');
    const fromValueInput = document.getElementById('fromValue');
    const fromUnitSelect = document.getElementById('fromUnit');
    const toValueInput = document.getElementById('toValue');
    const toUnitSelect = document.getElementById('toUnit');
    const swapUnitsBtn = document.getElementById('swapUnitsBtn');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');

    const resultSubtitle = document.getElementById('resultSubtitle');
    const resultMainValue = document.getElementById('resultMainValue');
    const resultMainUnit = document.getElementById('resultMainUnit');
    const quickRefTitle = document.getElementById('quickRefTitle');
    const quickRefList = document.getElementById('quickRefList');

    if (!fromValueInput || !fromUnitSelect || !toUnitSelect) return;

    // Format number nicely
    function formatNumber(num) {
        if (isNaN(num)) return '0';
        if (Math.abs(num) >= 1000000 || (Math.abs(num) < 0.0001 && num !== 0)) {
            return num.toExponential(4);
        }
        // Round up to 6 decimal places max, avoiding unnecessary trailing zeros
        const rounded = Math.round(num * 1000000) / 1000000;
        return rounded.toLocaleString('en-US', { maximumFractionDigits: 6 });
    }

    // Perform Temperature conversion
    function convertTemperature(val, fromKey, toKey) {
        if (fromKey === toKey) return val;
        let celsius = val;
        if (fromKey === 'f') celsius = (val - 32) * (5 / 9);
        else if (fromKey === 'k') celsius = val - 273.15;

        if (toKey === 'c') return celsius;
        if (toKey === 'f') return (celsius * 9 / 5) + 32;
        if (toKey === 'k') return celsius + 273.15;
        return val;
    }

    // Perform conversion between two units
    function calculateConversionValue(val, categoryKey, fromKey, toKey) {
        const cat = categories[categoryKey];
        if (!cat) return 0;

        if (categoryKey === 'temperature') {
            return convertTemperature(val, fromKey, toKey);
        } else {
            const fromUnitObj = cat.units[fromKey];
            const toUnitObj = cat.units[toKey];
            if (!fromUnitObj || !toUnitObj) return 0;

            const baseVal = val * fromUnitObj.factor;
            return baseVal / toUnitObj.factor;
        }
    }

    // Populate select options for active category
    function populateSelects() {
        const cat = categories[activeCategoryKey];
        if (!cat) return;

        fromUnitSelect.innerHTML = '';
        toUnitSelect.innerHTML = '';

        Object.keys(cat.units).forEach(unitKey => {
            const unitObj = cat.units[unitKey];
            const optionFrom = document.createElement('option');
            optionFrom.value = unitKey;
            optionFrom.textContent = unitObj.name;
            fromUnitSelect.appendChild(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.value = unitKey;
            optionTo.textContent = unitObj.name;
            toUnitSelect.appendChild(optionTo);
        });

        fromUnitSelect.value = cat.defaultFrom;
        toUnitSelect.value = cat.defaultTo;
    }

    // Update Quick Reference
    function updateQuickReference(val, categoryKey, fromKey) {
        const cat = categories[categoryKey];
        if (!cat) return;

        quickRefTitle.textContent = `Quick Reference (${cat.title})`;
        quickRefList.innerHTML = '';

        const fromUnitObj = cat.units[fromKey];
        const fromSymbol = fromUnitObj ? fromUnitObj.symbol : '';

        const otherUnitKeys = Object.keys(cat.units).filter(k => k !== fromKey).slice(0, 4);

        otherUnitKeys.forEach(targetKey => {
            const targetObj = cat.units[targetKey];
            const convertedVal = calculateConversionValue(val, categoryKey, fromKey, targetKey);

            const li = document.createElement('li');
            li.className = 'flex justify-between items-center py-2 border-b border-outline-variant/10';
            li.innerHTML = `
                <span class="font-body-md text-body-md text-on-surface-variant">${val} ${fromSymbol} to ${targetObj.name.split(' ')[0]}</span>
                <span class="font-label-sm text-label-sm text-primary tabular-nums">${formatNumber(convertedVal)} ${targetObj.symbol}</span>
            `;
            quickRefList.appendChild(li);
        });
    }

    // Main Calculation Update
    function convert() {
        const val = parseFloat(fromValueInput.value);
        if (isNaN(val)) {
            toValueInput.value = '';
            resultMainValue.textContent = '—';
            return;
        }

        const fromKey = fromUnitSelect.value;
        const toKey = toUnitSelect.value;
        const cat = categories[activeCategoryKey];

        const convertedVal = calculateConversionValue(val, activeCategoryKey, fromKey, toKey);

        const fromUnitObj = cat.units[fromKey];
        const toUnitObj = cat.units[toKey];

        toValueInput.value = formatNumber(convertedVal);

        const fromNameClean = fromUnitObj ? fromUnitObj.name.split(' (')[0] : '';
        resultSubtitle.textContent = `${val} ${fromNameClean} equals`;
        resultMainValue.textContent = formatNumber(convertedVal);
        resultMainUnit.textContent = toUnitObj ? toUnitObj.symbol : '';

        updateQuickReference(val, activeCategoryKey, fromKey);
    }

    // Switch Category
    function setCategory(categoryKey) {
        activeCategoryKey = categoryKey;

        categoryButtons.forEach(btn => {
            const isSelected = btn.getAttribute('data-category') === categoryKey;
            if (isSelected) {
                btn.classList.add('bg-surface-blue', 'text-primary', 'border-primary/20', 'active');
                btn.classList.remove('bg-surface', 'text-secondary', 'border-outline-variant/50');
            } else {
                btn.classList.remove('bg-surface-blue', 'text-primary', 'border-primary/20', 'active');
                btn.classList.add('bg-surface', 'text-secondary', 'border-outline-variant/50');
            }
        });

        populateSelects();
        convert();
    }

    // Event Listeners
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const catKey = btn.getAttribute('data-category');
            if (catKey) setCategory(catKey);
        });
    });

    fromValueInput.addEventListener('input', convert);
    fromUnitSelect.addEventListener('change', convert);
    toUnitSelect.addEventListener('change', convert);

    if (swapUnitsBtn) {
        swapUnitsBtn.addEventListener('click', () => {
            const temp = fromUnitSelect.value;
            fromUnitSelect.value = toUnitSelect.value;
            toUnitSelect.value = temp;
            convert();
        });
    }

    if (calculateBtn) {
        calculateBtn.addEventListener('click', convert);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            fromValueInput.value = '100';
            setCategory('length');
        });
    }

    // Initial setup
    populateSelects();
    convert();
});
