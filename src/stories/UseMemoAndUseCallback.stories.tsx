import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'UseMemoAndUseCallbackStories',
    //component
}

export const Example1 = () => {

    const [a, setA] = useState(1)
    const [b, setB] = useState(1)

    let resultB = 1

    let resultA = useMemo(() => {

        let tempResultA = 1

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1) {
                fake++
                const fakeValue = Math.random()
                console.log(fakeValue)
            }
            tempResultA = tempResultA * i

        }

        return tempResultA

    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => {
            setA(Number(e.currentTarget.value))
        }}/>
        <input value={b} onChange={(e) => {
            setB(Number(e.currentTarget.value))
        }}/>
        <div>
            Result for a: {resultA}
        </div>

        <div>
            Result for b: {resultB}
        </div>

    </>

}


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return <div>
        {props.users.map((el, index) => <div key={index}>{el}</div>)}
    </div>
}


const Users = React.memo(UsersSecret)

export const ExampleWithReactMemo = () => {

    const [count, setCount] = useState(0)
    const [users, SetUsers] = useState(['asd', 'dasda', 'werwer'])

    return (
        <div>


            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            {count}
            <Users users={users}/>
        </div>
    )
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const UsersSecret1 = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return <div>
        {props.users.map((el, index) => <div key={index}>{el}</div>)}
    </div>
}


const Users1 = React.memo(UsersSecret1)

export const ExampleReactMemoWithUseMemo = () => {

    const [count, setCount] = useState(0)
    const [users, SetUsers] = useState(['asd', 'dasda', 'werwer'])

    let usersForRender = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users]
        newUsers.push('Sveta' + new Date().getTime())
        SetUsers(newUsers)
    }

    return (
        <div>


            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            {count}
            <button onClick={addUser}>add user</button>
            <Users1 users={usersForRender}/> {/*// мы передаем только тех пользователей в имени которых есть хотя бы одна буква а, users.filter(el => el.toLowerCase().indexOf("a") > -1)
            // и так как filter возвращает каждый раз новый массив , React.memo нам не поможет, он будет думать что пропсы каждый раз разные. Поэтому будем использовать useMemo которому отдадим
             функцию фильтрации и сделаем зависимость от изменения самого массива users
             */}
        </div>
    )
}


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////




export const LikeUseCallback = () => {
    console.log('LikeUseCallBack')

    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'TS'])


    const memoisedAddbook = useCallback(()=> {
            const newBooks = [...books, 'Sveta' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])


    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>new count: {count}</button>

            <Books addBook={memoisedAddbook} books={books}/>
        </div>
    )
}


type BooksSecretPropsType = {
    books: Array<string>
    addBook: ()=> void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BOOKS SECRET')



    return <div>
        <button onClick={props.addBook}>ADD BOOK</button>
        {props.books.map((b, index) => <div key={index}>{b}</div>)}
    </div>
}

const Books = React.memo(BooksSecret)


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

