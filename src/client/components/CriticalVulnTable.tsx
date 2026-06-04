import React from "react";
import { display, value, sysId } from "../utils/fields";
import "./CriticalVulnTable.css";

interface CriticalVulnTableProps {
  vulns: any[];
  onSelect: (view: string, id?: string) => void;
}

function daysOpen(discovered: string): number {
  if (!discovered) return 0;
  const diff = Date.now() - new Date(discovered).getTime();
  return Math.max(0, Math.floor(diff / 86400000));
}

function cvssClass(score: number): string {
  if (score >= 9) return "crit-vuln-table__cvss--red";
  if (score >= 7) return "crit-vuln-table__cvss--orange";
  return "crit-vuln-table__cvss--default";
}

export function CriticalVulnTable({ vulns, onSelect }: CriticalVulnTableProps) {
  const critical = vulns.filter((v) => {
    const sev = value(v.severity);
    return sev === "critical" || sev === "high";
  });

  return (
    <table className="crit-vuln-table">
      <thead>
        <tr>
          <th>Title</th><th>Severity</th><th>CVSS</th><th>Application</th><th>Days Open</th>
        </tr>
      </thead>
      <tbody>
        {critical.map((v) => (
          <tr key={sysId(v)} onClick={() => onSelect("vulnerability", sysId(v))}>
            <td>{display(v.title)}</td>
            <td>
              <span className={`crit-vuln-table__sev crit-vuln-table__sev--${value(v.severity)}`}>
                {display(v.severity)}
              </span>
            </td>
            <td className={cvssClass(parseFloat(value(v.cvss_score)))}>{value(v.cvss_score)}</td>
            <td>{display(v.affected_application)}</td>
            <td>{daysOpen(value(v.discovered_date))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
