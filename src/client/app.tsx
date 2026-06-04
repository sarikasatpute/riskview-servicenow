import React, { useState, useEffect, useCallback } from "react";
import { Dashboard } from "./components/Dashboard";
import { VulnerabilityDetail } from "./components/VulnerabilityDetail";
import "./app.css";

declare const window: any;

function getParams(): URLSearchParams {
  return new URLSearchParams(window.location.search);
}

export function App() {
  const [view, setView] = useState("dashboard");
  const [id, setId] = useState("");

  const syncFromUrl = useCallback(() => {
    const params = getParams();
    setView(params.get("view") || "dashboard");
    setId(params.get("id") || "");
  }, []);

  useEffect(() => {
    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, [syncFromUrl]);

  const navigate = (newView: string, newId?: string) => {
    const params = new URLSearchParams();
    params.set("view", newView);
    if (newId) params.set("id", newId);
    const url = `?${params.toString()}`;
    if (window.self !== window.top) {
      window.history.replaceState(null, "", url);
    } else {
      window.history.pushState(null, "", url);
    }
    setView(newView);
    setId(newId || "");
  };

  if (view === "vulnerability" && id) {
    return <VulnerabilityDetail id={id} onBack={() => navigate("dashboard")} />;
  }

  return <Dashboard onNavigate={navigate} />;
}
