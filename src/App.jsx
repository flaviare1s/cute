import "./i18n";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { initTheme } from "./utils/theme";

function App() {
  initTheme();

  return (
    <div className="h-screen p-5 sm:p-8 transition-all max-w-[500px] m-auto flex flex-col justify-center items-center">
      <ThemeProvider>
        <LanguageProvider>
          <div className="flex flex-col justify-evenly h-full">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <Toaster position="top-center" />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
