export type UserType = {
    name: string
    hair: number
    address: {
        city: string,
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type WithCompaniesType = UserType & {
    companies: Array<{id: number, title: string}>
}



export type UserWithBooksType = UserType & {
    books: string[]
}

export type UserWithLaptopType = UserType & { // это обычный тип UserType в котором дополнительно есть св-во laptop
    laptop: LaptopType
}

export function makeHairstyle(u: UserType) {
    const copy = {
        ...u,
        hair: u.hair / 2

    }
    return copy
}

export function moveUser(u:UserWithLaptopType, city: string) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            title: city
        }
    }
    return copy
}

export const upgradeUserLaptop = (u:UserWithLaptopType, laptop: string)=>{
    const userWithNewLaptop = {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
    return userWithNewLaptop
}

export function moveUserToPtherHouse(u:UserWithLaptopType & UserWithBooksType, house: number) {
    const copy = {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
    return copy
}

export function addNewBooksToUser(u:UserWithLaptopType & UserWithBooksType, book: string[]) {
    return {
        ...u,
        books: [...u.books.concat(book)]
    }
}

export const updateNewBooksToUser =(u:UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) =>({
    ...u,
    books: u.books.map(el => el === oldBook ? newBook : el)
    })

export const removeNewBooksToUser = (u:UserWithLaptopType & UserWithBooksType, book: string) =>{

    return{
        ...u,
        books: u.books.filter(el=> el !== book)
    }
}

export const addNewCompany = (u:UserWithLaptopType & WithCompaniesType, company: {id: number, title: string}) => {
    return {
        ...u,
        companies: [
            ...u.companies,
            company
        ]
    }
}

export const updateNewCompany = (user: WithCompaniesType, id: number, newTitle: string) => {

    const copy: WithCompaniesType = {
        ...user,
        companies: user.companies.map(el=> el.id === id ? {...el, title: newTitle} : el)
    }
return copy

    }





export const updateCompanyTitle  = (companies: {[key: string]: Array<{id: number, title: string}>}, userName: string, companyID: number, newTitle: string) => {
    let companyCopy = {...companies}

    companyCopy[userName] = companyCopy[userName].map(el => el.id === companyID ? {...el, title: newTitle} : el)



    return companyCopy
}

















