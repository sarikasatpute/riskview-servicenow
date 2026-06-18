import React, { useEffect, useState } from "react";
import { DataService } from "../services/DataService";
import { display, value, sysId } from "../utils/fields";
import { ChartCard } from "./ChartCard";
import { BarChart } from "./BarChart";
import { HeatmapChart } from "./HeatmapChart";
import { DonutChart } from "./DonutChart";
import { KpiCard } from "./KpiCard";
import { RiskGauge } from "./RiskGauge";
import { CriticalVulnTable } from "./CriticalVulnTable";
import { IncidentTimeline } from "./IncidentTimeline";
import "./Dashboard.css";

const SEV_COLORS: Record<string, string> = {
  critical: "#d32f2f", high: "#f57c00", medium: "#fbc02d", low: "#388e3c",
};

interface DashboardProps {
  onNavigate: (view: string, id?: string) => void;
}

function calcRiskScore(vulns: any[], controls: any[]): number {
  const critCount = vulns.filter((v) => value(v.severity) === "critical").length;
  const highCount = vulns.filter((v) => value(v.severity) === "high").length;
  const effective = controls.filter((c) => value(c.effectiveness) === "effective").length;
  const total = controls.length || 1;
  const effectiveness = effective / total;
  const raw = critCount * 15 + highCount * 8;
  const score = Math.min(100, Math.max(0, raw * (1 - effectiveness * 0.5)));
  return Math.round(score);
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [apps, setApps] = useState<any[]>([]);
  const [vulns, setVulns] = useState<any[]>([]);
  const [controls, setControls] = useState<any[]>([]);
  const [incidents, setIncidents] = useState<any[]>([]);

  useEffect(() => {
    DataService.getApplications().then(setApps);
    DataService.getVulnerabilities().then(setVulns);
    DataService.getRiskControls().then(setControls);
    DataService.getSecurityIncidents().then(setIncidents);
  }, []);

  const openVulns = vulns.filter((v) => ["open", "in_progress"].includes(value(v.status))).length;
  const activeControls = controls.filter((c) => value(c.implementation_status) === "implemented").length;
  const activeIncidents = incidents.filter((i) =>
    ["new", "investigating", "contained"].includes(value(i.status))
  ).length;

  const appData = ["critical", "high", "medium", "low"].map((c) => ({
    label: c, value: apps.filter((a) => value(a.criticality) === c).length, color: SEV_COLORS[c],
  }));

  const controlData = [
    { label: "Effective", value: controls.filter((c) => value(c.effectiveness) === "effective").length, color: "#388e3c" },
    { label: "Partial", value: controls.filter((c) => value(c.effectiveness) === "partially_effective").length, color: "#fbc02d" },
    { label: "Ineffective", value: controls.filter((c) => value(c.effectiveness) === "ineffective").length, color: "#d32f2f" },
  ];

  const incidentData = ["critical", "high", "medium", "low"].map((s) => ({
    label: s, value: incidents.filter((i) => value(i.severity) === s).length, color: SEV_COLORS[s],
  }));

  return (
    <div className="dashboar">
      <header className="dashboard-header">
        <span className="dashboard-header__titles">
          <h1 className="dashboard-header__title">Cyber Risk Intelligence</h1>
          <h2 className="dashboard-header__welcome">Welcome to my dashboard</h2>
        </span>
        <p className="dashboard-header__subtitle">Executive Risk Overview</p>
      </header>

      <div className="dashboard-kpi-row">
        <KpiCard title="Applications" count={apps.length} icon="🛡️" color="#3b82f6" />
        <KpiCard title="Open Vulnerabilities" count={openVulns} icon="🐛" color="#ef4444" />
        <KpiCard title="Active Controls" count={activeControls} icon="✓" color="#10b981" />
        <KpiCard title="Active Incidents" count={activeIncidents} icon="⚠️" color="#f59e0b" />
      </div>

      <div className="dashboard-grid-2">
        <ChartCard title="Risk Score">
          <RiskGauge score={calcRiskScore(vulns, controls)} label="Overall Risk" />
        </ChartCard>
        <ChartCard title="Risk Control Coverage">
          <DonutChart data={controlData} title="" />
        </ChartCard>
      </div>

      <div className="dashboard-grid-2">
        <ChartCard title="Applications by Criticality">
          <BarChart data={appData} title="" />
        </ChartCard>
        <ChartCard title="Vulnerability Heatmap">
          <HeatmapChart data={vulns} />
        </ChartCard>
      </div>

      <div className="dashboard-grid-full">
        <ChartCard title="Security Incidents by Severity">
          <BarChart data={incidentData} title="" />
        </ChartCard>
      </div>

      <div className="dashboard-grid-2">
        <ChartCard title="Critical Vulnerabilities">
          <CriticalVulnTable vulns={vulns} onSelect={onNavigate} />
        </ChartCard>
        <ChartCard title="Recent Security Incidents">
          <IncidentTimeline incidents={incidents} />
        </ChartCard>
      </div>
    </div>
  );
}
