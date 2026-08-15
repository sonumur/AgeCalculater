// Percentage Calculator JavaScript - Precision Utility Engine

document.addEventListener('DOMContentLoaded', function () {
    let currentMode = 'basic';

    // DOM Elements
    const modeButtons = document.querySelectorAll('.pct-mode-btn');
    const labelInput1 = document.getElementById('labelInput1');
    const labelInput2 = document.getElementById('labelInput2');
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');

    const resultSubtitle = document.getElementById('resultSubtitle');
    const resultMainValue = document.getElementById('resultMainValue');
    const formulaStep = document.getElementById('formulaStep');
    const quickRefTitle = document.getElementById('quickRefTitle');
    const quickRefList = document.getElementById('quickRefList');

    if (!input1 || !input2) return;

    // Helper: format numbers neatly
    function formatNum(num, maxDigits = 4) {
        if (isNaN(num) || !isFinite(num)) return '0';
        const rounded = Math.round(num * Math.pow(10, maxDigits)) / Math.pow(10, maxDigits);
        return rounded.toLocaleString('en-US', { maximumFractionDigits: maxDigits });
    }

    // Update Form Labels based on selected Mode
    function updateFormLabels() {
        modeButtons.forEach(btn => {
            const mode = btn.getAttribute('data-mode');
            if (mode === currentMode) {
                btn.classList.add('bg-surface-blue', 'text-primary', 'border-primary/20', 'active');
                btn.classList.remove('bg-surface', 'text-secondary', 'border-outline-variant/50');
            } else {
                btn.classList.remove('bg-surface-blue', 'text-primary', 'border-primary/20', 'active');
                btn.classList.add('bg-surface', 'text-secondary', 'border-outline-variant/50');
            }
        });

        if (currentMode === 'basic') {
            labelInput1.textContent = 'Part Value (X)';
            input1.placeholder = 'Enter part value (e.g. 25)';
            labelInput2.textContent = 'Total Value (Y)';
            input2.placeholder = 'Enter total value (e.g. 200)';
        } else if (currentMode === 'change') {
            labelInput1.textContent = 'Initial Value (Start)';
            input1.placeholder = 'Enter starting value (e.g. 100)';
            labelInput2.textContent = 'Final Value (End)';
            input2.placeholder = 'Enter ending value (e.g. 125)';
        } else if (currentMode === 'difference') {
            labelInput1.textContent = 'First Value (A)';
            input1.placeholder = 'Enter first value (e.g. 50)';
            labelInput2.textContent = 'Second Value (B)';
            input2.placeholder = 'Enter second value (e.g. 60)';
        }

        calculate();
    }

    // Generate Quick Reference Table
    function renderQuickReference(baseVal) {
        if (isNaN(baseVal) || baseVal === 0) {
            quickRefList.innerHTML = '<li class="text-secondary font-body-md py-2">Enter a valid total to view common percentages.</li>';
            return;
        }

        quickRefTitle.textContent = `Common Percentages of Total (${formatNum(baseVal)})`;
        quickRefList.innerHTML = '';

        const percentages = [5, 10, 15, 20, 25, 50, 75];
        percentages.forEach(pct => {
            const calculatedVal = (pct / 100) * baseVal;
            const li = document.createElement('li');
            li.className = 'flex justify-between items-center py-2 border-b border-outline-variant/10';
            li.innerHTML = `
                <span class="font-body-md text-body-md text-on-surface-variant">${pct}% of ${formatNum(baseVal)}</span>
                <span class="font-label-sm text-label-sm text-primary tabular-nums font-semibold">${formatNum(calculatedVal)}</span>
            `;
            quickRefList.appendChild(li);
        });
    }

    // Perform Calculation
    function calculate() {
        const val1 = parseFloat(input1.value);
        const val2 = parseFloat(input2.value);

        if (isNaN(val1) || isNaN(val2)) {
            resultSubtitle.textContent = 'Please enter valid numbers';
            resultMainValue.textContent = '—';
            formulaStep.textContent = 'Awaiting input values...';
            quickRefList.innerHTML = '';
            return;
        }

        if (currentMode === 'basic') {
            if (val2 === 0) {
                resultSubtitle.textContent = 'Total value cannot be zero';
                resultMainValue.textContent = 'Error';
                formulaStep.textContent = 'Division by zero is undefined.';
                return;
            }
            const pct = (val1 / val2) * 100;
            resultSubtitle.textContent = `${formatNum(val1)} is what % of ${formatNum(val2)}`;
            resultMainValue.textContent = `${formatNum(pct)}%`;
            formulaStep.textContent = `(${formatNum(val1)} / ${formatNum(val2)}) × 100 = ${formatNum(pct)}%`;
            renderQuickReference(val2);

        } else if (currentMode === 'change') {
            if (val1 === 0) {
                resultSubtitle.textContent = 'Initial value cannot be zero';
                resultMainValue.textContent = 'Error';
                formulaStep.textContent = 'Percentage change from zero is undefined.';
                return;
            }
            const change = ((val2 - val1) / val1) * 100;
            const direction = change >= 0 ? 'Increase' : 'Decrease';
            resultSubtitle.textContent = `Percentage change from ${formatNum(val1)} to ${formatNum(val2)}`;
            resultMainValue.textContent = `${change >= 0 ? '+' : ''}${formatNum(change)}% (${direction})`;
            formulaStep.textContent = `(( ${formatNum(val2)} - ${formatNum(val1)} ) / ${formatNum(val1)}) × 100 = ${formatNum(change)}%`;
            renderQuickReference(val1);

        } else if (currentMode === 'difference') {
            const avg = (val1 + val2) / 2;
            if (avg === 0) {
                resultSubtitle.textContent = 'Average of values cannot be zero';
                resultMainValue.textContent = 'Error';
                formulaStep.textContent = 'Percentage difference with zero average is undefined.';
                return;
            }
            const diff = (Math.abs(val1 - val2) / avg) * 100;
            resultSubtitle.textContent = `Percentage difference between ${formatNum(val1)} and ${formatNum(val2)}`;
            resultMainValue.textContent = `${formatNum(diff)}%`;
            formulaStep.textContent = `(|${formatNum(val1)} - ${formatNum(val2)}| / (( ${formatNum(val1)} + ${formatNum(val2)} ) / 2)) × 100 = ${formatNum(diff)}%`;
            renderQuickReference(val1);
        }
    }

    // Event Listeners
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentMode = btn.getAttribute('data-mode');
            updateFormLabels();
        });
    });

    input1.addEventListener('input', calculate);
    input2.addEventListener('input', calculate);

    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculate);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            currentMode = 'basic';
            input1.value = '25';
            input2.value = '200';
            updateFormLabels();
        });
    }

    // Initial setup
    updateFormLabels();
});
