import React from "react";
import "./RiskGauge.css";

interface RiskGaugeProps {
  score: number;
  label: string;
}

function getColor(score: number): string {
  if (score >= 85) return "#d32f2f";
  if (score >= 70) return "#f57c00";
  if (score >= 40) return "#fbc02d";
  return "#388e3c";
}

export function RiskGauge({ score, label }: RiskGaugeProps) {
  const clamped = Math.max(0, Math.min(100, score));
  const angle = (clamped / 100) * 180;
  const rad = (angle * Math.PI) / 180;
  const cx = 100, cy = 90, r = 70;
  const x = cx - r * Math.cos(rad);
  const y = cy - r * Math.sin(rad);
  const largeArc = angle > 180 ? 1 : 0;
  const color = getColor(clamped);
  const arcPath = `M ${cx - r} ${cy} A ${r} ${r} 0 ${largeArc} 1 ${x} ${y}`;
  const bgPath = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;

  return (
    <div className="risk-gauge">
      <svg width="200" height="110" viewBox="0 0 200 120">
        <path d={bgPath} fill="none" stroke="#e5e7eb" strokeWidth="14" strokeLinecap="round" />
        <path d={arcPath} fill="none" stroke={color} strokeWidth="14" strokeLinecap="round" />
      </svg>
      <span className="risk-gauge__score" style={{ color }}>{clamped}</span>
      <span className="risk-gauge__label">{label}</span>
    </div>
  );
}
