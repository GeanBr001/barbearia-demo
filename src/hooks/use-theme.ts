import { useEffect, useState } from "react";

const STORAGE_KEY = "folicula-theme";

function saveTheme(dark: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  } catch {
    // Armazenamento indisponível (modo privado, por exemplo): o tema só vale nesta visita.
  }
}

export function useTheme() {
  const [darkMode, setDarkMode] = useState(false);

  // Só no cliente: usa a escolha salva ou, na falta dela, a preferência do sistema.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }
    setDarkMode(
      saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    saveTheme(next);
  };

  return { darkMode, toggleTheme };
}
