const toggleDark = () => {
    const darkModeKey = 'darkMode';
    const darkModeValue = localStorage.getItem(darkModeKey)
    const isDark = darkModeValue === "dark"
    if (!isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem(darkModeKey, "dark");
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem(darkModeKey, "light");
    }
}

const loadDarkMode = () => {
    const darkModeKey = 'darkMode';
    const darkModeValue = localStorage.getItem(darkModeKey)
    const isDark = darkModeValue === "dark"
    if (!isDark) {
        document.documentElement.classList?.remove("dark");
    } else {
        document.documentElement.classList.add("dark");
    }
}
export { toggleDark, loadDarkMode }