export interface Validator {
    name: string;
    validator: any;
    message: string;
}

export interface SelectOption {
    value: string;
    description?: string;
    enabled: boolean;
}

export interface Field {
    id: string;
    label?: string;
    inputType?: string;
    type: string;
    value?: any;
    options?: SelectOption[];
    validations?: Validator[];
    selected?: boolean;
    rows?: number;
    columns?: number;
    disabled?: boolean;
    dateFormat?: string;
    cls?: string;
    placeholder?: string;
}
