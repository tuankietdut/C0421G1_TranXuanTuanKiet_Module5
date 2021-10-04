import {PositionEmployee} from "./positionEmployee";
import {EducationDegree} from "./education-degree";
import {Division} from "./division";

export interface Employee {
  employee_id?: number;
  employee_name?: string;
  employee_birthday?: string;
  employee_id_card?: string;
  employee_salary?: number;
  employee_phone?: string;
  employee_email?: string;
  employee_address?: string;
  position_id?: PositionEmployee;
  education_id?: EducationDegree;
  division_id?: Division;
}
