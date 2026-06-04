import React from "react";
import "./ChartCard.css";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className="chart-card">
      <div className="chart-card__header">{title}</div>
      <div className="chart-card__content">{children}</div>
    </div>
  );
}
