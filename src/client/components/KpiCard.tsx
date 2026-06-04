import React from "react";
import "./KpiCard.css";

interface KpiCardProps {
  title: string;
  count: number;
  icon: string;
  color: string;
  trend?: string;
}

export function KpiCard({ title, count, icon, color, trend }: KpiCardProps) {
  return (
    <div className="kpi-card" style={{ borderLeftColor: color }}>
      <div className="kpi-card__content">
        <span className="kpi-card__count">{count}</span>
        <span className="kpi-card__title">{title}</span>
        {trend && (
          <span className="kpi-card__trend" style={{ color }}>
            {trend}
          </span>
        )}
      </div>
      <span className="kpi-card__icon">{icon}</span>
    </div>
  );
}
