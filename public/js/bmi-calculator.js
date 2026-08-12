// BMI Calculator JavaScript
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        showResultModal('<p style="color: red; text-align: center; font-size: 18px;">Please enter valid height and weight.</p>');
        return;
    }
    
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    let category = '';
    let color = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3498db';
    } else if (bmi < 25) {
        category = 'Normal Weight';
        color = '#2ecc71';
    } else if (bmi < 30) {
        category = 'Overweight';
        color = '#f39c12';
    } else {
        category = 'Obese';
        color = '#e74c3c';
    }
    
    const resultHTML = `
        <h3>BMI Calculation Result</h3>
        <p><strong>Your BMI:</strong> <span style="font-size: 28px; color: ${color};">${bmi.toFixed(2)}</span></p>
        <p><strong>Category:</strong> <span style="color: ${color}; font-weight: bold;">${category}</span></p>
        <p style="color: #666; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 15px; font-size: 14px;">
            Height: ${height} cm | Weight: ${weight} kg
        </p>
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
    const form = document.getElementById('bmiForm');
    const modal = document.getElementById('resultModal');
    const closeBtn = document.querySelector('.close');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            calculateBMI();
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
