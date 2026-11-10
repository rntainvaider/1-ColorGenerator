const languageButton = document.getElementById("language");
const languageHTML = document.documentElement;
const themeButton = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");

const LANGUAGES = {
    RU: "RU",
    EN: "EN",
};

const THEMES = {
    LIGHT: "light",
    DARK: "dark",
};

let currentLanguage = LANGUAGES.RU;
let currentTheme = THEMES.LIGHT;

function updateLanguageButton() {
    languageButton.textContent = currentLanguage;

    languageHTML.setAttribute("lang", currentLanguage.toLowerCase());
}

function toggleLanguage() {
    currentLanguage = currentLanguage === LANGUAGES.RU ? LANGUAGES.EN : LANGUAGES.RU;

    updateLanguageButton();
}

languageButton.addEventListener("click", toggleLanguage);

updateLanguageButton();

function updateThemeButton() {
    if (currentTheme === THEMES.LIGHT) {
        themeIcon.setAttribute("href", "assets/sprite.svg#icon-sun");
    } else {
        themeIcon.setAttribute("href", "assets/sprite.svg#icon-moon");
    }
}

function toggleTheme() {
    currentTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    updateThemeButton();
}

themeButton.addEventListener("click", toggleTheme);

updateThemeButton();