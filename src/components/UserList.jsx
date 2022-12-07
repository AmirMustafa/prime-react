import React, { useState, useEffect } from 'react';
import { UserService } from '../service/User';

const UserList = () => {

    let [state, setState] = useState({
        loading: false,
        users: [],
        error: null
    });

    useEffect(async () => {
        try {
            setState({...state, loading: true});
            const response = await UserService.getAllUsers();
            setState({...state, users: response, loading: false});
            console.log(response);
        } catch (err) {
            console.log(err);
            setState({...state, error: err});
        }
    }, []);

    return (
        <>
            <h2>User List</h2>
        </>
    )
};
export default UserList;