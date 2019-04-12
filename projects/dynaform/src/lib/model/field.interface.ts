export interface Validator {
    name: string;
    validator: any;
    message: string;
}

export interface SelectOption {
    value: string;
    enabled: boolean;
}

export interface Field {
    name?: string;
    label?: string;
    inputType?: string;
    type: string;
    value?: any;
    options?: SelectOption[];
    validations?: Validator[];
    rows?: number;
    columns?: number;
    disabled?: boolean;
}