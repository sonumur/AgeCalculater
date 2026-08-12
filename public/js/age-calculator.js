// Function to calculate age based on birth date
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    
    // Check if birthday has occurred this year
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

// Function to calculate detailed age (years, months, days)
function calculateDetailedAge(birthDate) {
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    
    // Adjust if days is negative
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }
    
    // Adjust if months is negative
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months, days };
}

// Function to show modal popup
function showResultModal(content) {
    const modal = document.getElementById('resultModal');
    const modalResult = document.getElementById('modalResult');
    modalResult.innerHTML = content;
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('resultModal');
    modal.style.display = 'none';
}

// Function to validate and calculate age from input
function handleCalculateAge() {
    const dateInput = document.getElementById('birthDate');
    
    if (!dateInput.value) {
        showResultModal('<p style="color: red; text-align: center; font-size: 18px;">Please enter a birth date.</p>');
        return;
    }
    
    const birthDate = new Date(dateInput.value);
    
    // Validate date
    if (isNaN(birthDate.getTime())) {
        showResultModal('<p style="color: red; text-align: center; font-size: 18px;">Invalid date format.</p>');
        return;
    }
    
    // Check if birth date is in the future
    if (birthDate > new Date()) {
        showResultModal('<p style="color: red; text-align: center; font-size: 18px;">Birth date cannot be in the future.</p>');
        return;
    }
    
    const { years, months, days } = calculateDetailedAge(birthDate);
    const totalDays = Math.floor((new Date() - birthDate) / (1000 * 60 * 60 * 24));
    
    const resultHTML = `
        <h3>Your Age Calculation</h3>
        <p><strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days</p>
        <p style="color: #666; margin-top: 20px; border-top: 1px solid #ddd; padding-top: 15px;">
            Total days lived: <strong>${totalDays}</strong> days
        </p>
    `;
    
    showResultModal(resultHTML);
}

// Add event listener to form when page loads
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ageForm');
    const modal = document.getElementById('resultModal');
    const closeBtn = document.querySelector('.close');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleCalculateAge();
        });
    }
    
    // Close modal when close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside of it
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});
