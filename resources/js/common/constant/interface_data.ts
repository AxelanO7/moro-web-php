// activity
export interface IActivity {
    id: number,
    name: string,
    objective: string,
    date: string,
    target: string
    status: string,
    file: string,
}

export interface IReportActivity {
    id: number,
    name: string,
    objective: string,
    start_date: string,
    end_date: string
    file: string
}

// plan
export interface IPlan {
    id: number,
    name: string,
    objective: string,
    period: string,
    target: string
}

export interface IReportPlan {
    id: number,
    organization_name: string,
    period: string,
    status_unimplemented: string,
    file_budget: string,
    file_documentation: string,
    file_resposibility: string
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    username: string
    password: string
}
