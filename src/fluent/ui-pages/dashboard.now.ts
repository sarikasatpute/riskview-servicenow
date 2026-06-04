import "@servicenow/sdk/global";
import { UiPage } from "@servicenow/sdk/core";
import page from "../../client/index.html";

export const riskview_dashboard = UiPage({
  $id: Now.ID["riskview-dashboard"],
  endpoint: "x_1658278_riskview_dashboard.do",
  html: page,
  direct: true,
});
