// World Time Engine - Modern Precision System

const timezones = [
    { name: 'London', country: 'United Kingdom', tag: 'BST/GMT', timezone: 'Europe/London' },
    { name: 'New York', country: 'United States', tag: 'EDT/EST', timezone: 'America/New_York' },
    { name: 'Tokyo', country: 'Japan', tag: 'JST', timezone: 'Asia/Tokyo' },
    { name: 'Dubai', country: 'United Arab Emirates', tag: 'GST', timezone: 'Asia/Dubai' },
    { name: 'Paris', country: 'France', tag: 'CEST/CET', timezone: 'Europe/Paris' },
    { name: 'Sydney', country: 'Australia', tag: 'AEST', timezone: 'Australia/Sydney' },
    { name: 'Singapore', country: 'Singapore', tag: 'SGT', timezone: 'Asia/Singapore' },
    { name: 'Los Angeles', country: 'United States', tag: 'PDT/PST', timezone: 'America/Los_Angeles' },
    { name: 'Hong Kong', country: 'China', tag: 'HKT', timezone: 'Asia/Hong_Kong' },
    { name: 'New Delhi', country: 'India', tag: 'IST', timezone: 'Asia/Kolkata' },
    { name: 'Auckland', country: 'New Zealand', tag: 'NZST', timezone: 'Pacific/Auckland' },
    { name: 'São Paulo', country: 'Brazil', tag: 'BRT', timezone: 'America/Sao_Paulo' },
];

let hourOffset = 0;
let userTimezone = null;
let userCityName = 'Local Time';

// Attempt to resolve local timezone
try {
    userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (userTimezone) {
        userCityName = userTimezone.split('/').pop().replace('_', ' ') + ' Time';
    }
} catch (e) {
    userTimezone = 'UTC';
}

// Formatters
function formatTimeWithOffset(now, tz, offsetHours) {
    const targetDate = new Date(now.getTime() + offsetHours * 3600 * 1000);
    
    // Formatters for target timezone
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const hour24Formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: 'numeric',
        hour12: false
    });

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });

    const yearMonthDayFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });

    // Local Date formatting for relative day check
    const localYMD = new Intl.DateTimeFormat('en-US', {
        timeZone: userTimezone || 'UTC',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }).format(now);

    const targetYMD = yearMonthDayFormatter.format(targetDate);

    // Calculate relative day
    const localDateObj = new Date(localYMD);
    const targetDateObj = new Date(targetYMD);
    const diffDays = Math.round((targetDateObj - localDateObj) / (1000 * 60 * 60 * 24));

    let relativeDayStr = 'Today';
    let relativeDayClass = 'text-secondary';
    if (diffDays > 0) {
        relativeDayStr = 'Tomorrow';
        relativeDayClass = 'text-primary font-semibold';
    } else if (diffDays < 0) {
        relativeDayStr = 'Yesterday';
        relativeDayClass = 'text-outline font-medium';
    }

    // Determine Day/Night mode (6:00 to 18:00 = Day, otherwise Night)
    const hourVal = parseInt(hour24Formatter.format(targetDate), 10);
    const isDay = hourVal >= 6 && hourVal < 18;

    // Calculate relative hour difference from local
    const localDateForDiff = new Date(now.toLocaleString('en-US', { timeZone: userTimezone || 'UTC' }));
    const targetDateForDiff = new Date(targetDate.toLocaleString('en-US', { timeZone: tz }));
    const hourDiff = Math.round((targetDateForDiff - localDateForDiff) / (1000 * 60 * 60));

    const offsetStr = hourDiff >= 0 ? `+${hourDiff} hrs` : `${hourDiff} hrs`;

    return {
        timeStr: timeFormatter.format(targetDate),
        dateStr: dateFormatter.format(targetDate),
        relativeDayStr,
        relativeDayClass,
        isDay,
        offsetStr
    };
}

// Update Local Banner Time
function updateLocalTimeBanner() {
    const now = new Date();
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: userTimezone || undefined,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: userTimezone || undefined,
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    });

    const localTimeEl = document.getElementById('localTimeDisplay');
    const localDateEl = document.getElementById('localDateDisplay');
    const localTzEl = document.getElementById('localTimezone');

    if (localTimeEl) localTimeEl.textContent = timeFormatter.format(now);
    if (localDateEl) localDateEl.textContent = `${dateFormatter.format(now)} • ${userTimezone || 'Local'}`;
    if (localTzEl) localTzEl.textContent = userCityName;
}

// Render Timezone Cards
function renderTimezoneCards() {
    const grid = document.getElementById('timezoneGrid');
    const searchVal = (document.getElementById('searchTimezone')?.value || '').toLowerCase().trim();
    if (!grid) return;

    const now = new Date();
    const filtered = timezones.filter(tz =>
        tz.name.toLowerCase().includes(searchVal) ||
        tz.country.toLowerCase().includes(searchVal) ||
        tz.tag.toLowerCase().includes(searchVal)
    );

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-12 text-secondary font-body-md">No matching cities found. Try searching another city.</div>';
        return;
    }

    grid.innerHTML = filtered.map(tz => {
        const info = formatTimeWithOffset(now, tz.timezone, hourOffset);

        const iconBg = info.isDay ? 'bg-surface-blue text-primary' : 'bg-inverse-surface text-inverse-primary';
        const iconName = info.isDay ? 'light_mode' : 'dark_mode';
        const cardBg = info.isDay 
            ? 'bg-surface-container-lowest' 
            : 'bg-gradient-to-br from-surface-container-lowest to-[#f1f5f9]';

        return `
            <div class="${cardBg} rounded-[16px] p-6 md:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition-all duration-300 border border-outline-variant/30 relative flex flex-col justify-between min-h-[220px]">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h3 class="font-headline-md text-headline-md text-on-surface">${tz.name}</h3>
                        <p class="font-caption text-caption text-secondary mt-1">${tz.country} • ${tz.tag}</p>
                    </div>
                    <div class="w-10 h-10 rounded-full ${iconBg} flex items-center justify-center">
                        <span class="material-symbols-outlined text-[20px]">${iconName}</span>
                    </div>
                </div>
                <div>
                    <div class="font-display-lg text-[36px] md:text-[40px] leading-tight font-bold text-on-background tabular-nums tracking-tight">
                        ${info.timeStr}
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <span class="font-label-sm text-label-sm bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full">${info.offsetStr}</span>
                        <span class="font-caption text-caption ${info.relativeDayClass}">${info.relativeDayStr}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Event Setup
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchTimezone');
    const timeSlider = document.getElementById('timeSlider');
    const resetSliderBtn = document.getElementById('resetSliderBtn');
    const sliderLabel = document.getElementById('sliderLabel');

    if (searchInput) {
        searchInput.addEventListener('input', renderTimezoneCards);
    }

    if (timeSlider) {
        timeSlider.addEventListener('input', (e) => {
            hourOffset = parseInt(e.target.value, 10);
            if (sliderLabel) {
                sliderLabel.textContent = `Compare Offset: ${hourOffset >= 0 ? '+' : ''}${hourOffset}h`;
            }
            renderTimezoneCards();
        });
    }

    if (resetSliderBtn) {
        resetSliderBtn.addEventListener('click', () => {
            hourOffset = 0;
            if (timeSlider) timeSlider.value = 0;
            if (sliderLabel) sliderLabel.textContent = 'Compare Offset: +0h';
            renderTimezoneCards();
        });
    }

    // Initial render
    updateLocalTimeBanner();
    renderTimezoneCards();

    // Clock update interval (every second)
    setInterval(() => {
        updateLocalTimeBanner();
        renderTimezoneCards();
    }, 1000);
});
