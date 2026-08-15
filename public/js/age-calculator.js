function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function calculateDetailedAge(birthDate, comparisonDate) {
    let years = comparisonDate.getFullYear() - birthDate.getFullYear();
    let months = comparisonDate.getMonth() - birthDate.getMonth();
    let days = comparisonDate.getDate() - birthDate.getDate();
    if (days < 0) {
        months--;
        days += daysInMonth(comparisonDate.getFullYear(), comparisonDate.getMonth() - 1);
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    return { years, months, days };
}

function formatNumber(value) {
    return new Intl.NumberFormat().format(value);
}

function updateResults(birthDate, comparisonDate) {
    const age = calculateDetailedAge(birthDate, comparisonDate);
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const totalDays = Math.floor((Date.UTC(comparisonDate.getFullYear(), comparisonDate.getMonth(), comparisonDate.getDate()) - Date.UTC(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate())) / millisecondsPerDay);
    const nextBirthday = new Date(comparisonDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < comparisonDate) nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    const birthdayDays = Math.ceil((Date.UTC(nextBirthday.getFullYear(), nextBirthday.getMonth(), nextBirthday.getDate()) - Date.UTC(comparisonDate.getFullYear(), comparisonDate.getMonth(), comparisonDate.getDate())) / millisecondsPerDay);
    document.getElementById('resultYears').textContent = age.years;
    document.getElementById('resultMonths').textContent = age.months;
    document.getElementById('resultDays').textContent = age.days;
    document.getElementById('totalDays').textContent = formatNumber(totalDays);
    document.getElementById('totalWeeks').textContent = formatNumber(Math.floor(totalDays / 7));
    document.getElementById('totalMonths').textContent = formatNumber((age.years * 12) + age.months);
    document.getElementById('nextBirthday').textContent = birthdayDays;
}

function resetResults() {
    ['resultYears', 'resultMonths', 'resultDays', 'totalDays', 'totalWeeks', 'totalMonths', 'nextBirthday'].forEach(function (id) {
        document.getElementById(id).textContent = '—';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ageForm');
    const day = document.getElementById('birthDay');
    const month = document.getElementById('birthMonth');
    const year = document.getElementById('birthYear');
    const comparison = document.getElementById('ageAtDate');
    const message = document.getElementById('ageMessage');
    const today = new Date();
    for (let number = 1; number <= 31; number++) day.add(new Option(String(number).padStart(2, '0'), number));
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].forEach(function (name, index) { month.add(new Option(name, index)); });
    for (let number = today.getFullYear(); number >= 1900; number--) year.add(new Option(number, number));
    comparison.value = today.toISOString().slice(0, 10);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        message.textContent = '';
        if (!day.value || month.value === '' || !year.value) {
            message.textContent = 'Please select your complete date of birth.';
            return;
        }
        const birthDate = new Date(Number(year.value), Number(month.value), Number(day.value));
        const selectedDate = comparison.value ? new Date(comparison.value + 'T00:00:00') : new Date();
        if (birthDate.getFullYear() !== Number(year.value) || birthDate.getMonth() !== Number(month.value) || birthDate.getDate() !== Number(day.value)) {
            message.textContent = 'Please select a valid date of birth.';
            return;
        }
        if (birthDate > selectedDate) {
            message.textContent = 'Your birth date cannot be after the age-at date.';
            return;
        }
        updateResults(birthDate, selectedDate);
    });
    form.addEventListener('reset', function () {
        window.setTimeout(function () {
            comparison.value = today.toISOString().slice(0, 10);
            message.textContent = '';
            resetResults();
        }, 0);
    });
});
