// EMI Calculator with real-time updates
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

