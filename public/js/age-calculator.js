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
    
    // Populate Days
    for (let number = 1; number <= 31; number++) {
        day.add(new Option(String(number).padStart(2, '0'), number));
    }

    // Populate Months based on current locale
    function populateMonths() {
        const currentLang = localStorage.getItem('pepstudio_lang') || 'en';
        const selectedVal = month.value;
        const monthPlaceholderKey = 'month';
        let placeholderText = 'Month';
        if (window.pepstudioI18n && window.pepstudioI18n.getTranslation) {
            placeholderText = window.pepstudioI18n.getTranslation(monthPlaceholderKey) || 'Month';
        }

        // Clear existing options except we build standard set
        month.innerHTML = `<option value="" data-i18n="month">${placeholderText}</option>`;
        
        const langMap = { en: 'en-US', es: 'es-ES', fr: 'fr-FR', de: 'de-DE', hi: 'hi-IN', zh: 'zh-CN' };
        const locale = langMap[currentLang] || 'en-US';

        for (let i = 0; i < 12; i++) {
            const date = new Date(2000, i, 15);
            let monthName = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
            monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
            const opt = new Option(monthName, i);
            if (String(i) === selectedVal) opt.selected = true;
            month.add(opt);
        }
    }

    populateMonths();

    // Populate Years
    for (let number = today.getFullYear(); number >= 1900; number--) {
        year.add(new Option(number, number));
    }
    comparison.value = today.toISOString().slice(0, 10);

    let lastErrorKey = null;

    function getErrorMessage(key) {
        const errorTranslations = {
            'select_dob': {
                en: 'Please select your complete date of birth.',
                es: 'Por favor, seleccione su fecha de nacimiento completa.',
                fr: 'Veuillez sélectionner votre date de naissance complète.',
                de: 'Bitte wählen Sie Ihr vollständiges Geburtsdatum aus.',
                hi: 'कृपया अपनी पूरी जन्म तिथि चुनें।',
                zh: '请选择您完整的出生日期。'
            },
            'valid_dob': {
                en: 'Please select a valid date of birth.',
                es: 'Por favor, seleccione una fecha de nacimiento válida.',
                fr: 'Veuillez sélectionner une date de naissance valide.',
                de: 'Bitte wählen Sie ein gültiges Geburtsdatum aus.',
                hi: 'कृपया एक वैध जन्म तिथि चुनें।',
                zh: '请选择有效的出生日期。'
            },
            'future_dob': {
                en: 'Your birth date cannot be after the age-at date.',
                es: 'Su fecha de nacimiento no puede ser posterior a la fecha de cálculo.',
                fr: 'Votre date de naissance ne peut pas être postérieure à la date de calcul.',
                de: 'Ihr Geburtsdatum kann nicht nach dem Berechnungsdatum liegen.',
                hi: 'आपकी जन्म तिथि आयु-गणना तिथि के बाद नहीं हो सकती।',
                zh: '您的出生日期不能晚于计算日期。'
            }
        };
        const currentLang = localStorage.getItem('pepstudio_lang') || 'en';
        return (errorTranslations[key] && errorTranslations[key][currentLang]) || errorTranslations[key]['en'];
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        message.textContent = '';
        lastErrorKey = null;

        if (!day.value || month.value === '' || !year.value) {
            lastErrorKey = 'select_dob';
            message.textContent = getErrorMessage(lastErrorKey);
            return;
        }
        const birthDate = new Date(Number(year.value), Number(month.value), Number(day.value));
        const selectedDate = comparison.value ? new Date(comparison.value + 'T00:00:00') : new Date();
        if (birthDate.getFullYear() !== Number(year.value) || birthDate.getMonth() !== Number(month.value) || birthDate.getDate() !== Number(day.value)) {
            lastErrorKey = 'valid_dob';
            message.textContent = getErrorMessage(lastErrorKey);
            return;
        }
        if (birthDate > selectedDate) {
            lastErrorKey = 'future_dob';
            message.textContent = getErrorMessage(lastErrorKey);
            return;
        }
        updateResults(birthDate, selectedDate);
    });

    form.addEventListener('reset', function () {
        window.setTimeout(function () {
            comparison.value = today.toISOString().slice(0, 10);
            message.textContent = '';
            lastErrorKey = null;
            resetResults();
        }, 0);
    });

    window.addEventListener('languageChanged', function () {
        populateMonths();
        if (lastErrorKey) {
            message.textContent = getErrorMessage(lastErrorKey);
        }
    });
});
