/**
 * Field extraction utilities for ServiceNow Table API responses.
 * When sysparm_display_value=all is used, fields return as objects
 * with "display_value" and "value" properties.
 */

interface FieldObject {
  display_value: string;
  value: string;
}

type FieldValue = string | FieldObject | null | undefined;

export function display(field: FieldValue): string {
  if (field === null || field === undefined) return "";
  if (typeof field === "string") return field;
  return field.display_value || "";
}

export function value(field: FieldValue): string {
  if (field === null || field === undefined) return "";
  if (typeof field === "string") return field;
  return field.value || "";
}

export function sysId(record: any): string {
  return value(record?.sys_id) || record?.sys_id || "";
}
