// Percentage Calculator JavaScript
function calculatePercentage() {
    const part = parseFloat(document.getElementById('part').value);
    const total = parseFloat(document.getElementById('total').value);
    
    if (isNaN(part) || isNaN(total) || total === 0 || part < 0 || total < 0) {
        showResultModal('<p style="color: red; text-align: center; font-size: 18px;">Please enter valid values.</p>');
        return;
    }
    
    const percentage = (part / total) * 100;
    
    const resultHTML = `
        <h3>Percentage Calculation Result</h3>
        <p><strong>${part}</strong> is <strong style="color: #007bff; font-size: 24px;">${percentage.toFixed(2)}%</strong> of <strong>${total}</strong></p>
        <p style="color: #666; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 15px; font-size: 14px;">
            Calculation: (${part} / ${total}) × 100 = ${percentage.toFixed(2)}%
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
    const form = document.getElementById('percentageForm');
    const modal = document.getElementById('resultModal');
    const closeBtn = document.querySelector('.close');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            calculatePercentage();
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
