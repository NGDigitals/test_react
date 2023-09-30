import React, {useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../redux/features/userSlice';

const Account = () => {
    // const [users, setUsers] = useState([])
    const first_name = useSelector((state) => state.user.user.first_name)
    const last_name = useSelector((state) => state.user.user.last_name)
    const age = useSelector((state) => state.user.user.age)

    const dispatch = useDispatch()

    useEffect(() =>{
        let data = {
            first_name: 'Wale',
            last_name: 'Thompson',
            age: 33
        }
        dispatch(updateUser(data))
    }, [])

    const memoizedCallback = useCallback(() => {
        doSomething(a, b);
    }, [a, b]);

    return (
        <div>
            <h1>Welcome to Account Page</h1>
            <h1>First Name: {first_name}</h1>
            <h1>Last Name: {last_name}</h1>
            <h1>Name: {age}</h1>
        </div>
    );
};

export default Account;