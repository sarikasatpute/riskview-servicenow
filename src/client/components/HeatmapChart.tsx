import React from "react";

interface HeatmapChartProps {
  data: any[];
}

const SEVERITIES = ["critical", "high", "medium", "low"];
const STATUSES = ["open", "in_progress", "mitigated", "closed"];
const COLORS: Record<string, string> = {
  critical: "#d32f2f",
  high: "#f57c00",
  medium: "#fbc02d",
  low: "#388e3c",
};

export function HeatmapChart({ data }: HeatmapChartProps) {
  const counts: Record<string, number> = {};
  data.forEach((v) => {
    const sev = (v.severity?.value || v.severity || "").toLowerCase();
    const st = (v.status?.value || v.status || "").toLowerCase();
    const key = `${sev}-${st}`;
    counts[key] = (counts[key] || 0) + 1;
  });
  const maxCount = Math.max(...Object.values(counts), 1);

  return (
    <div>
      <h3 style={{ margin: "0 0 8px", fontSize: "14px" }}>Vulnerability Heatmap</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "12px" }}>
          <thead>
            <tr>
              <th style={{ padding: "4px 8px" }}></th>
              {STATUSES.map((s) => (
                <th key={s} style={{ padding: "4px 8px", textTransform: "capitalize" }}>
                  {s.replace("_", " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SEVERITIES.map((sev) => (
              <tr key={sev}>
                <td style={{ padding: "4px 8px", fontWeight: 600, textTransform: "capitalize" }}>
                  {sev}
                </td>
                {STATUSES.map((st) => {
                  const count = counts[`${sev}-${st}`] || 0;
                  const opacity = count > 0 ? 0.3 + (count / maxCount) * 0.7 : 0.05;
                  return (
                    <td
                      key={st}
                      style={{
                        padding: "8px 12px",
                        textAlign: "center",
                        backgroundColor: COLORS[sev],
                        opacity,
                        color: opacity > 0.5 ? "#fff" : "#333",
                        borderRadius: "3px",
                      }}
                    >
                      {count}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
