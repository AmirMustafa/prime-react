import React, { useState, useEffect } from 'react';
import { UserService } from '../service/User';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

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

    let displaySNo = (rowData) => {
        return rowData.login.uuid.substring(1,5);
    }
    let displayName = (rowData) => {
        return <span>{rowData.name.title}. {rowData.name.first} {rowData.name.last}</span>;
    }
    let displayImage = (rowData) => {
        return <img src={rowData.picture.thumbnail} alt="" />;
    }
    let displayAge = (rowData) => {
        return <span>{rowData.dob.age} years</span>;
    }

    return (
        <>
            <div className='grid'>
                <div className='col'>
                    <DataTable value={state.users}>
                        <Column sortable field="login.uuid" header={'S No.'} body={displaySNo} />
                        <Column sortable field="picture.thumbnail" header={'Image'} body={displayImage} />
                        <Column sortable field="name" header={'Name'} body={displayName} />
                        <Column sortable field="dob.age" header={'Age'} body={displayAge} />
                        <Column sortable field="email" header={'Email'} />
                        <Column sortable field="location.city" header={'City'} />
                        <Column sortable field="location.state" header={'State'} />
                        <Column sortable field="location.country" header={'Country'} />
                    </DataTable>
                </div>
            </div>
        </>
    )
};
export default UserList;