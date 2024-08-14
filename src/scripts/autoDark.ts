const getUserColorMode = (): "dark" | "light" =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const setMode = (mode: string) =>
  document.documentElement.setAttribute("data-bs-theme", mode);

setMode(getUserColorMode());

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    const changedMode = getUserColorMode();
    setMode(changedMode);
  });
