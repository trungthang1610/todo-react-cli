export interface IForm {
  mode?: FormMode;
  code?: string;
  title?: string;
  description?: string;
  dataType?: string;
  rows?: IFormRow[];
}

export interface IFormRow {
  title?: string;
  controls?: IFormControl[];
}

export interface IFormControl {
  id: string;
  title?: string;
  placeHolder?: string;
  type: ControlType;
  required?: boolean;
  readOnly?: boolean;
  choiceDisplay?: ChoiceType;
  choiceSchema?: ChoiceSchema;
  items?: IDropdownOption[];
  descriptions?: string;
  inputMask?: string;
  preview?: boolean;
}

export interface IDropdownOption {
  key: number;
  text: string;
}

export enum FormMode {
  AddNew = 1,
  Edit = 2,
  Display = 3,
  List = 4,
  Search = 5,
  Manage = 6,
}

export enum ControlType {
  Text = 1,
  Number = 2,
  Choice = 3,
  Switch = 4,
}
export enum ChoiceType {
  Combobox = 1,
  Dropdown = 2,
  Checkbox = 3,
  Radio = 4,
  Suggest = 5,
}
export interface ChoiceSchema {
  dataType?: string;
  displayName?: string;
  displayValue?: string;
  targetField?: string;
  targetValue?: string;
  autoRequest?: boolean;
  changeField?: string;
  allowAll?: boolean;
}

export enum IFormAction {
  NONE = 0,
  ADD = 1,
  UPDATE = 2,
  DELETE = 3,

  UPLOAD = 5,
  SEARCH = 6,
}

export interface IFormValidation {
  mode: FormMode;
  dataType: string;
  validationSchema: any;
  initValues?: any;
}
