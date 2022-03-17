import React, {useState} from 'react'


export default {
    title: 'React Memo Demo'
    //component:
}

const NewMessagesCounter = (props: {count: number}) =>{
    return <div>
        {props.count}
    </div>
}

const Users = (props:{users: Array<string>}) =>{
    console.log('+++')
    return <div>
        {props.users.map((el, index) => <div key={index}>{el}</div>)}
    </div>
}


const UsersMemo =  React.memo(Users)

export const Example1 = () =>  {

    const [count, setCount] = useState(0)
    const [users, SetUsers] = useState(['asd', 'dasda', 'werwer'])

    const addUser = () =>{
        const newUsers = [...users]
        newUsers.push('Sveta' + new Date().getTime())
        SetUsers(newUsers)
    }

return (
    <div>


        <button onClick={()=>{setCount(count + 1)}}>+</button>
<button onClick={addUser}>add user</button>
        <NewMessagesCounter count={count} />
        <UsersMemo users={users} />
   </div>
)}