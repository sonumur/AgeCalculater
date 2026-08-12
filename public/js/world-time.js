// World Time JavaScript

const timezones = [
    { name: 'New York', timezone: 'America/New_York', offset: -5 },
    { name: 'Los Angeles', timezone: 'America/Los_Angeles', offset: -8 },
    { name: 'London', timezone: 'Europe/London', offset: 0 },
    { name: 'Paris', timezone: 'Europe/Paris', offset: 1 },
    { name: 'Dubai', timezone: 'Asia/Dubai', offset: 4 },
    { name: 'India (IST)', timezone: 'Asia/Kolkata', offset: 5.5 },
    { name: 'Bangkok', timezone: 'Asia/Bangkok', offset: 7 },
    { name: 'Hong Kong', timezone: 'Asia/Hong_Kong', offset: 8 },
    { name: 'Tokyo', timezone: 'Asia/Tokyo', offset: 9 },
    { name: 'Sydney', timezone: 'Australia/Sydney', offset: 10 },
    { name: 'Auckland', timezone: 'Pacific/Auckland', offset: 12 },
    { name: 'Toronto', timezone: 'America/Toronto', offset: -5 },
    { name: 'Mexico City', timezone: 'America/Mexico_City', offset: -6 },
    { name: 'São Paulo', timezone: 'America/Sao_Paulo', offset: -3 },
    { name: 'Moscow', timezone: 'Europe/Moscow', offset: 3 },
    { name: 'Dubai', timezone: 'Asia/Dubai', offset: 4 },
    { name: 'Singapore', timezone: 'Asia/Singapore', offset: 8 },
    { name: 'Seoul', timezone: 'Asia/Seoul', offset: 9 },
    { name: 'Bangkok', timezone: 'Asia/Bangkok', offset: 7 },
    { name: 'Istanbul', timezone: 'Europe/Istanbul', offset: 3 },
];

let userTimezone = null;
let userCity = 'Your Location';

// Get user's location from IP address
async function getUserLocationFromIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        userTimezone = data.timezone;
        userCity = data.city || data.country_name || 'Your Location';
        console.log('User Location:', userCity, 'Timezone:', userTimezone);
    } catch (error) {
        console.log('Could not fetch IP location, using browser default:', error);
        // Fallback to browser timezone
        userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
}

// Update local time
function updateLocalTime() {
    const now = new Date();
    
    let timeString, dateString, displayTimezone;
    
    if (userTimezone) {
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: userTimezone,
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const dateFormatter = new Intl.DateTimeFormat('en-US', {
            timeZone: userTimezone,
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        timeString = formatter.format(now);
        dateString = dateFormatter.format(now);
        displayTimezone = userCity + ' (' + userTimezone + ')';
    } else {
        timeString = now.toLocaleTimeString('en-US', { hour12: true });
        dateString = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        displayTimezone = 'Local Time';
    }
    
    document.getElementById('localTime').textContent = timeString;
    document.getElementById('localDate').textContent = dateString;
    document.getElementById('localTimezone').textContent = displayTimezone;
}

// Format time for display
function formatTime(date) {
    return date.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// Format date for display
function formatDate(date) {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

// Get time in specific timezone
function getTimeInTimezone(timezone) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });
    
    return {
        time: formatter.format(new Date()),
        date: dateFormatter.format(new Date())
    };
}

// Get timezone offset
function getTimezoneOffset(timezone) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    const now = new Date();
    const parts = formatter.formatToParts(now);
    
    const tzTime = new Date();
    const localTime = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    
    const diff = (tzDate - localTime) / (1000 * 60 * 60);
    
    return diff;
}

// Render timezone cards
function renderTimezones(filter = '') {
    const grid = document.getElementById('timezoneGrid');
    grid.innerHTML = '';
    
    const filteredTimezones = timezones.filter(tz => 
        tz.name.toLowerCase().includes(filter.toLowerCase()) ||
        tz.timezone.toLowerCase().includes(filter.toLowerCase())
    );
    
    if (filteredTimezones.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">No timezones found</p>';
        return;
    }
    
    filteredTimezones.forEach(tz => {
        const timeData = getTimeInTimezone(tz.timezone);
        const offset = getTimezoneOffset(tz.timezone);
        
        const card = document.createElement('div');
        card.className = 'timezone-card';
        
        const offsetStr = offset > 0 ? `GMT+${offset.toFixed(1)}` : `GMT${offset.toFixed(1)}`;
        
        card.innerHTML = `
            <h3>${tz.name}</h3>
            <div class="time">${timeData.time}</div>
            <div class="date">${timeData.date}</div>
            <div class="offset">${offsetStr}</div>
        `;
        
        grid.appendChild(card);
    });
}

// Search functionality
document.getElementById('searchTimezone').addEventListener('input', (e) => {
    renderTimezones(e.target.value);
});

// Initialize
window.addEventListener('load', async () => {
    await getUserLocationFromIP();
    updateLocalTime();
    renderTimezones();
    
    // Update time every second
    setInterval(updateLocalTime, 1000);
    setInterval(() => renderTimezones(document.getElementById('searchTimezone').value), 1000);
});
