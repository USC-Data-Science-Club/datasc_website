// Runs in <head> before first paint so a saved dark preference never flashes light.
export const THEME_INIT_SCRIPT = `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;
