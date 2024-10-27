interface userDataType {
    id: number
    name: string
    isLoggedIn: boolean
    hasPermission: boolean
    role: string
    email: string
    password: string
}

export const userData: userDataType[] = [
    {
        id: 1,
        name: "Murali Samui",
        isLoggedIn: true,
        hasPermission: true,
        role: 'admin',
        email:'murali@gmail.com',
        password:'123456'
    },
    {
        id: 2,
        name: "John Snow",
        isLoggedIn: true,
        hasPermission: false,
        role: 'user',
        email:'john@gmial.com',
        password:'111111'
    },
    {
        id: 1,
        name: "Jane Smith",
        isLoggedIn: false,
        hasPermission: false,
        role: 'guest',
        email:'jane@gmail.com',
        password:'000000'
    },
]