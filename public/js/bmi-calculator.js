document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmiForm');
    if (!form) return;

    const height = document.getElementById('height');
    const weight = document.getElementById('weight');
    const buttons = document.querySelectorAll('.unit-toggle button');
    let unit = 'metric';
    const categories = {
        underweight: ['Underweight', '#4384dc', 'bi-arrow-down-circle-fill', 'Your BMI is below the healthy range. Consider speaking with a healthcare professional about a healthy plan for you.'],
        normal: ['Normal', '#10b981', 'bi-check-circle-fill', 'Your BMI is within the healthy range. Maintaining a balanced diet and regular exercise will help you stay in this category.'],
        overweight: ['Overweight', '#d9900a', 'bi-exclamation-circle-fill', 'Your BMI is above the healthy range. Small, sustainable lifestyle changes can support your health goals.'],
        obese: ['Obese', '#c8474c', 'bi-exclamation-circle-fill', 'Your BMI is in the higher range. A healthcare professional can offer personalised guidance and support.']
    };

    function setUnits(nextUnit) {
        unit = nextUnit;
        const metric = unit === 'metric';
        buttons.forEach((button, index) => {
            const active = (index === 0) === metric;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', active);
        });
        document.getElementById('heightLabel').textContent = metric ? 'Height (cm)' : 'Height (in)';
        document.getElementById('weightLabel').textContent = metric ? 'Weight (kg)' : 'Weight (lb)';
        document.getElementById('heightUnit').textContent = metric ? 'cm' : 'in';
        document.getElementById('weightUnit').textContent = metric ? 'kg' : 'lb';
        height.placeholder = metric ? 'e.g. 175' : 'e.g. 69';
        weight.placeholder = metric ? 'e.g. 70' : 'e.g. 154';
        form.reset();
    }

    function renderResult(bmi, heightCm, metric) {
        const category = bmi < 18.5 ? categories.underweight : bmi < 25 ? categories.normal : bmi < 30 ? categories.overweight : categories.obese;
        document.getElementById('bmiScore').textContent = bmi.toFixed(1);
        const status = document.getElementById('bmiStatus');
        status.style.color = category[1];
        status.innerHTML = `<i class="bi ${category[2]}" aria-hidden="true"></i><span>${category[0]}</span>`;
        document.getElementById('bmiAnalysis').textContent = category[3];
        const min = 18.5 * (heightCm / 100) ** 2;
        const max = 24.9 * (heightCm / 100) ** 2;
        const displayMin = metric ? min : min * 2.20462;
        const displayMax = metric ? max : max * 2.20462;
        const suffix = metric ? 'kg' : 'lb';
        document.getElementById('weightRange').textContent = `${displayMin.toFixed(1)} ${suffix} - ${displayMax.toFixed(1)} ${suffix}`;
        document.getElementById('rangeBasis').textContent = `Based on height ${metric ? heightCm.toFixed(1) + ' cm' : (heightCm / 2.54).toFixed(1) + ' in'}`;
        document.getElementById('gaugePin').style.left = `${Math.max(1, Math.min(99, ((bmi - 15) / 25) * 100))}%`;
    }

    buttons.forEach((button, index) => button.addEventListener('click', () => setUnits(index === 0 ? 'metric' : 'imperial')));
    form.addEventListener('submit', event => {
        event.preventDefault();
        const h = Number(height.value);
        const w = Number(weight.value);
        if (!h || !w || h <= 0 || w <= 0) { height.focus(); return; }
        const heightCm = unit === 'metric' ? h : h * 2.54;
        const weightKg = unit === 'metric' ? w : w * 0.453592;
        renderResult(weightKg / (heightCm / 100) ** 2, heightCm, unit === 'metric');
    });
    form.addEventListener('reset', () => setTimeout(() => renderResult(22.9, 175, true), 0));
});
