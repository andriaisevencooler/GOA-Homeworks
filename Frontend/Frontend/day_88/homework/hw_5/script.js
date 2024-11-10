function formatDateInLocales(date, locales) {
    return locales.map(locale => {
        return date.toLocaleDateString(locale);
    });
}

const date = new Date("2024-10-10");
const locales = ["en-US", "fr-FR", "de-DE"];
const formattedDates = formatDateInLocales(date, locales);
console.log(formattedDates);
