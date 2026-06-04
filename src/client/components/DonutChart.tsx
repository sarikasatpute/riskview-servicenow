import React from "react";

interface DonutData {
  label: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DonutData[];
  title: string;
}

export function DonutChart({ data, title }: DonutChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0) || 1;
  const radius = 50;
  const strokeWidth = 18;
  const center = 60;
  let cumulative = 0;

  const segments = data.map((d) => {
    const startAngle = (cumulative / total) * 360;
    cumulative += d.value;
    const endAngle = (cumulative / total) * 360;
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;
    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);
    return { ...d, path: `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}` };
  });

  return (
    <div>
      <h3 style={{ margin: "0 0 8px", fontSize: "14px" }}>{title}</h3>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <svg width="120" height="120" viewBox="0 0 120 120">
          {segments.map((s, i) => (
            <path key={i} d={s.path} fill="none" stroke={s.color} strokeWidth={strokeWidth} />
          ))}
          <text x={center} y={center + 5} textAnchor="middle" fontSize="14" fontWeight="bold">
            {total}
          </text>
        </svg>
        <div style={{ fontSize: "12px" }}>
          {data.map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
              <span style={{ width: 12, height: 12, background: d.color, borderRadius: 2, display: "inline-block" }} />
              <span>{d.label}: {d.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
