function addDaysAndGetWeekday(dateString, days) {

    const originalDate = new Date(dateString);
    
    if (isNaN(originalDate.getTime())) {
        throw new Error("Invalid date format. Please use 'YYYY-MM-DD'.");
    }
    
    originalDate.setDate(originalDate.getDate() + days);
    
    const newDate = originalDate.toISOString().split('T')[0]; 
    const weekday = originalDate.toLocaleString('en-US', { weekday: 'long' });
    
    return { newDate, weekday };
}

dateStr = "2024-10-10";
const daysToAdd = 5;
const result = addDaysAndGetWeekday(dateStr, daysToAdd);
console.log(`New Date: ${result.newDate}, Day of the Week: ${result.weekday}`);
