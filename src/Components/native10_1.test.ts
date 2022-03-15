import {
    addNewBooksToUser, addNewCompany,
    makeHairstyle,
    moveUser, moveUserToPtherHouse, removeNewBooksToUser, updateCompanyTitle, updateNewBooksToUser, updateNewCompany,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./native10_1";
import exp from "constants";




test ('reference type test', ()=>{

    let user = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }

const awesome = makeHairstyle(user);

    expect(user.hair).toBe(32)
    expect(awesome.hair).toBe(16)
    expect(awesome.address).toBe(user.address)
})

test ('change address', ()=>{

    let user:UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'ZenBook'}
    }

    const movedUser = moveUser(user, 'Kiev');


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Kiev')


})

test ('upgrade laptop to macbook', ()=>{

    let user:UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = upgradeUserLaptop(user, 'macbook');


    expect(user).not.toBe(movedUser)
    expect(movedUser.laptop.title).toBe('macbook')
    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(movedUser.address).toBe(user.address)
    expect(user.laptop.title).toBe('ZenBook')


})

test ('upgrade house', ()=>{

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToPtherHouse(user, 99);


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address).not.toBe(user.address)
    expect(userCopy.address.house).toBe(99)

})

test ('add book', ()=>{

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api']);


    expect(userCopy.books.length).toBe(6)
    expect(user.books.length).toBe(4)
    expect(user.books).not.toBe(userCopy.books)


})

test ('update book', ()=>{

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateNewBooksToUser(user, 'js', 'ts');


    expect(user.books[2]).toBe('js')
    expect(userCopy.books[2]).toBe('ts')
    expect(user.books).not.toBe(userCopy.books)


})

test ('remove book', ()=>{

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = removeNewBooksToUser(user, 'js');



    expect(userCopy.books[2]).toBe('react')
    expect(userCopy.books[2]).not.toBe(user.books[2])


})

test ('add new company', ()=>{

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'it-incubator'}
        ]
    }

    const userCopy = addNewCompany(user, {id: 3, title: 'google'});



    expect(userCopy.companies.length).toBe(3)
    expect(user.companies.length).toBe(2)
    expect(userCopy.companies).not.toBe(user.companies)


})

test ('update new company', ()=>{

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [
            {id: 1, title: 'EPAM'},
            {id: 2, title: 'it-incubator'}
        ]
    }

    const userCopy = updateNewCompany(user,2,'google') as UserWithLaptopType & WithCompaniesType



    expect(userCopy.companies).not.toBe(user.companies)
    expect(userCopy.companies.length).toBe(2)
    expect(userCopy.companies[1].title).toBe('google')


})

test ('update company 2', ()=>{



    let companies =  {
        'Dimych': [{id: 1, title: 'EPAM'}, {id: 2, title: 'it-incubator'}],
        'Artem': [{id: 2, title: 'it-incubator'}]
    }

    const Copy = updateCompanyTitle(companies,'Dimych', 2, 'google' )



    expect(Copy['Dimych'][1].title).toBe('google')
    expect(Copy['Dimych'].length).toBe(2)
    expect(Copy).not.toBe(companies)


})