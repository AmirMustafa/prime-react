import React, { useState, useEffect } from 'react';
import { UserService } from '../service/User';

const UserList = () => {

    let [state, setState] = useState({
        loading: false,
        users: [],
        errorMessage: null
    });

    useEffect( () => {
        try {
            const fetchData = async () => {
                setState({...state, loading: true});
                const response = await UserService.getAllUsers();
                let { results } = response.data;
                console.log(results);
                setState({...state, users: results, loading: false});
            };
            fetchData();
        } catch (err) {
            console.log(err);
            setState({...state, errorMessage: err});
        }
    }, []);

    return (
        <>
            <h2>User List</h2>
            <pre>
                {JSON.stringify(state.users)}
            </pre>
        </>
    )
};
export default UserList;