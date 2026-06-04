declare const window: any;

const BASE = "/api/now/table";
const PARAMS = "sysparm_display_value=all";

function headers(): Record<string, string> {
  return {
    Accept: "application/json",
    "X-UserToken": window.g_ck,
  };
}

async function fetchTable(table: string, query?: string): Promise<any[]> {
  let url = `${BASE}/${table}?${PARAMS}`;
  if (query) url += `&${query}`;
  const res = await fetch(url, { headers: headers() });
  if (!res.ok) throw new Error(`Failed to fetch ${table}: ${res.status}`);
  const json = await res.json();
  return json.result || [];
}

async function fetchRecord(table: string, sysId: string): Promise<any> {
  const url = `${BASE}/${table}/${sysId}?${PARAMS}`;
  const res = await fetch(url, { headers: headers() });
  if (!res.ok) throw new Error(`Failed to fetch record: ${res.status}`);
  const json = await res.json();
  return json.result;
}

export const DataService = {
  getApplications: () => fetchTable("x_1658278_riskview_application"),
  getVulnerabilities: () => fetchTable("x_1658278_riskview_vulnerability"),
  getRiskControls: () => fetchTable("x_1658278_riskview_risk_control"),
  getSecurityIncidents: () => fetchTable("x_1658278_riskview_security_incident"),
  getVulnerabilityById: (sysId: string) =>
    fetchRecord("x_1658278_riskview_vulnerability", sysId),
};
