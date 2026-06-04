import React from "react";
import { display, value } from "../utils/fields";
import "./IncidentTimeline.css";

const SEV_COLORS: Record<string, string> = {
  critical: "#d32f2f", high: "#f57c00", medium: "#fbc02d", low: "#388e3c",
};

interface IncidentTimelineProps {
  incidents: any[];
}

export function IncidentTimeline({ incidents }: IncidentTimelineProps) {
  const sorted = [...incidents]
    .sort((a, b) => value(b.reported_date).localeCompare(value(a.reported_date)))
    .slice(0, 5);

  return (
    <div className="incident-timeline">
      {sorted.map((inc, i) => (
        <div key={i} className="timeline-item">
          <span
            className="timeline-item__dot"
            style={{ background: SEV_COLORS[value(inc.severity)] || "#9ca3af" }}
          />
          <div className="timeline-item__title">{display(inc.title)}</div>
          <div>
            <span className="timeline-item__date">{display(inc.reported_date)}</span>
            <span className="timeline-item__badge">{display(inc.status)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
