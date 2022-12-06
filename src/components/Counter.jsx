import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Counter = () => {
    let [state, setState] = useState({
        count: 0
    }); 

    const incr = () => {
        setState({
            ...state,
            count: state.count + 1
        });
    };

    const decr = () => {
        setState({
            ...state,
            count: state.count - 1 >=0 ? state.count - 1 : 0
        });
    };

    return (
        <>
            <div class="grid">
                <div className='col-4'>
                    <Card className='m-3 shadow-5 bg-blue-600'>
                        <h3 className='text-4xl p-0 m-2'>{state.count}</h3>
                        <Button onClick={incr} label={'Increment'} className='p-button-success mr-2' />
                        <Button onClick={decr} label={'Decrement'} className='p-button-warning' />
                    </Card>
                </div>
            </div>
        </>
    );
}
export default Counter;