import React from "react";

interface BarData {
  label: string;
  value: number;
  color: string;
}

interface BarChartProps {
  data: BarData[];
  title: string;
}

export function BarChart({ data, title }: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value), 1);
  const barHeight = 28;
  const gap = 8;
  const labelWidth = 90;
  const chartWidth = 300;
  const svgHeight = data.length * (barHeight + gap) + gap;

  return (
    <div>
      <h3 style={{ margin: "0 0 8px", fontSize: "14px" }}>{title}</h3>
      <svg width="100%" viewBox={`0 0 ${labelWidth + chartWidth + 50} ${svgHeight}`}>
        {data.map((d, i) => {
          const y = i * (barHeight + gap) + gap;
          const barWidth = (d.value / maxValue) * chartWidth;
          return (
            <g key={i}>
              <text x={labelWidth - 4} y={y + barHeight / 2 + 5} textAnchor="end" fontSize="12">
                {d.label}
              </text>
              <rect x={labelWidth} y={y} width={barWidth} height={barHeight} fill={d.color} rx={3} />
              <text x={labelWidth + barWidth + 6} y={y + barHeight / 2 + 5} fontSize="12">
                {d.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
