// EMI Calculator with real-time updates
if (document.getElementById('principal')) {
let chart = null;

// Format currency with Indian rupee format
function formatCurrency(value) {
    return "₹ " + Math.round(value).toLocaleString('en-IN');
}

// Calculate EMI using formula: EMI = [P × R × (1+R)^N] / [(1+R)^N-1]
function calculateEMI() {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualRate = parseFloat(document.getElementById('rate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // Convert annual rate to monthly rate
    const monthlyRate = annualRate / 12 / 100;
    const months = tenure * 12;

    let emi = 0;
    if (monthlyRate === 0) {
        emi = principal / months;
    } else {
        emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalPayable = emi * months;
    const totalInterest = totalPayable - principal;

    // Update display values
    document.getElementById('emiResult').textContent = formatCurrency(emi);
    document.getElementById('principalResult').textContent = formatCurrency(principal);
    document.getElementById('interestResult').textContent = formatCurrency(totalInterest);
    document.getElementById('totalResult').textContent = formatCurrency(totalPayable);

    // Update chart
    updateChart(principal, totalInterest);
}

// Update the pie chart
function updateChart(principal, interest) {
    const ctx = document.getElementById('emiChart').getContext('2d');
    
    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Principal', 'Interest'],
            datasets: [{
                data: [principal, interest],
                backgroundColor: [
                    '#1f4788',
                    '#6b9fd9'
                ],
                borderColor: ['#1f4788', '#6b9fd9'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });
}

// Format display values with commas
function formatDisplay(value, isCurrency = false, isPercentage = false) {
    if (isCurrency) {
        return "₹ " + parseInt(value).toLocaleString('en-IN');
    } else if (isPercentage) {
        return parseFloat(value).toFixed(2) + " %";
    }
    return parseInt(value).toLocaleString('en-IN');
}

// Initialize sliders with event listeners
document.addEventListener('DOMContentLoaded', function() {
    const principalSlider = document.getElementById('principal');
    const rateSlider = document.getElementById('rate');
    const tenureSlider = document.getElementById('tenure');

    // Update display and calculation on input
    principalSlider.addEventListener('input', function() {
        document.getElementById('principalDisplay').textContent = formatDisplay(this.value, true);
        calculateEMI();
    });

    rateSlider.addEventListener('input', function() {
        document.getElementById('rateDisplay').textContent = formatDisplay(this.value, false, true);
        calculateEMI();
    });

    tenureSlider.addEventListener('input', function() {
        document.getElementById('tenureDisplay').textContent = this.value;
        calculateEMI();
    });

    // Initial calculation
    calculateEMI();
});
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('emiDesignForm');
    if (!form) return;

    const principalInput = document.getElementById('emiPrincipal');
    const rateInput = document.getElementById('emiRate');
    const tenureInput = document.getElementById('emiTenure');
    const yearsButton = document.getElementById('emiYears');
    const monthsButton = document.getElementById('emiMonths');
    const resetButton = document.getElementById('emiReset');
    let tenureUnit = 'years';
    let chartInstance;

    // Restore the original calculator values whenever the page is loaded or refreshed.
    principalInput.value = 2500000;
    rateInput.value = 7.75;
    tenureInput.value = 20;

    const formatCurrency = value => `₹${Math.round(value).toLocaleString('en-IN')}`;

    function updateChart(principal, interest) {
        if (chartInstance) chartInstance.destroy();
        chartInstance = new Chart(document.getElementById('emiDesignChart'), {
            type: 'doughnut',
            data: { labels: ['Principal', 'Interest'], datasets: [{ data: [principal, interest], backgroundColor: ['#004cca', '#b4c5ff'], borderWidth: 0 }] },
            options: { responsive: true, maintainAspectRatio: false, cutout: '72%', plugins: { legend: { position: 'bottom', labels: { padding: 16, usePointStyle: true, font: { family: 'Inter', size: 12 } } } } }
        });
    }

    function calculate() {
        const principal = Number(principalInput.value);
        const annualRate = Number(rateInput.value);
        const tenure = Number(tenureInput.value);
        if (!(principal > 0) || annualRate < 0 || !(tenure > 0)) return;

        const months = tenureUnit === 'years' ? tenure * 12 : tenure;
        const monthlyRate = annualRate / 1200;
        const emi = monthlyRate === 0 ? principal / months : principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
        const total = emi * months;
        const interest = total - principal;

        document.getElementById('emiDesignResult').textContent = formatCurrency(emi);
        document.getElementById('emiDesignInterest').textContent = formatCurrency(interest);
        document.getElementById('emiDesignTotal').textContent = formatCurrency(total);
        document.getElementById('emiDesignPrincipalPercent').textContent = `${(principal / total * 100).toFixed(1)}%`;
        updateChart(principal, interest);
    }

    function setTenureUnit(unit) {
        tenureUnit = unit;
        yearsButton.classList.toggle('active', unit === 'years');
        monthsButton.classList.toggle('active', unit === 'months');
        calculate();
    }

    form.addEventListener('submit', event => { event.preventDefault(); calculate(); });
    [principalInput, rateInput, tenureInput].forEach(input => input.addEventListener('input', calculate));
    yearsButton.addEventListener('click', () => setTenureUnit('years'));
    monthsButton.addEventListener('click', () => setTenureUnit('months'));
    resetButton.addEventListener('click', () => {
        principalInput.value = 0;
        rateInput.value = 0;
        tenureInput.value = 0;
        tenureUnit = 'years';
        yearsButton.classList.add('active');
        monthsButton.classList.remove('active');
        document.getElementById('emiDesignResult').textContent = formatCurrency(0);
        document.getElementById('emiDesignInterest').textContent = formatCurrency(0);
        document.getElementById('emiDesignTotal').textContent = formatCurrency(0);
        document.getElementById('emiDesignPrincipalPercent').textContent = '0%';
        updateChart(0, 0);
    });
    calculate();
});

