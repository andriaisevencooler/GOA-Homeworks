function getDayOfWeek(dateString, locale = 'en-US') {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date format. Please use 'YYYY-MM-DD'.");
    }
    
    const dayOfWeek = date.toLocaleString(locale, { weekday: 'long' });
    
    return dayOfWeek;
}

const dateStr = "2024-10-10";
const locale = "en-US";
const dayOfWeek = getDayOfWeek(dateStr, locale);
console.log(`Day of the Week: ${dayOfWeek}`);
