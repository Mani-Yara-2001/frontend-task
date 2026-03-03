"use client";

import { useEffect } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "@/store";
import { toggleTheme as toggleThemeAction } from "@/store/themeSlice";

export function useTheme() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return {
    theme,
    toggleTheme: () => dispatch(toggleThemeAction()),
  };
}

function ThemeSync({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    const timeout = setTimeout(() => root.classList.remove("theme-transition"), 450);
    return () => clearTimeout(timeout);
  }, [theme]);

  return <>{children}</>;
}

export function ThemeProvider({ children }) {
  return (
    <Provider store={store}>
      <ThemeSync>{children}</ThemeSync>
    </Provider>
  );
}
