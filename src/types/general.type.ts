export interface branch {
  id?: string;
  b_id?: number | null;
  org_id: number;
  name: string;
  c_by: number;
  location: string;
}

export interface deleteBranch {
  b_id: number;
  org_id: number;
  d_by: number;
  b_name: string;
  reason: string;
}

export interface component {
  id?: string;
  c_id?: number;
  prefix?: string;
  name: string;
  w_id: number;
  c_by: number;
}

export interface deleteComponent {
  c_id: number;
  name: string;
  d_by: number;
  reason: string;
}

export interface Unit {
  id?: string;
  c_id: number;
  u_id?: string;
  assigned: boolean;
  w_id: number;
  dw_id?: number;
  warenty_date: string;
  status: string;
  c_by: number;
  cost?: number;
  m_cost?: number;
}

export interface updateUnit {
  id: string;
  u_id: string;
  new_status: string;
}

export interface updateUnitMaintainCost {
  id: string;
  u_id: string;
  new_status: string;
}

export interface UpdateUnitWarentyDate {
  id: string;
  u_id: string;
  e_days: string;
}

export interface Warehouse {
  id?: string;
  w_id?: number;
  name: string;
  b_id: number; 
}
