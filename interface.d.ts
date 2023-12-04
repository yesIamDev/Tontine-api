/**
 * User
 */

export interface IUser {
    email: string,
    password: string
}

/**
 * Member
 */

export interface IMember {
    name: string,
    postname: string,
    phone: string
}


/**
 * Activity
 */

export interface IActivity {
    designation: string,
    description: string,
    start: Date,
    end: Date,
    cycle: Date,
    amount_to_give: number,
    status: string,
    members: number,
    currency: string
}
