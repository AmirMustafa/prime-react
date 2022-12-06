import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Counter = () => {
    return (
        <>
            <div class="grid">
                <div className='col-4'>
                    <Card className='m-3 shadow-5 bg-blue-600'>
                        <h3 className='text-4xl p-0 m-2'>Counter</h3>
                        <Button label={'Increment'} className='p-button-success mr-2' />
                        <Button label={'Decrement'} className='p-button-warning' />
                    </Card>
                </div>
            </div>
        </>
    );
}
export default Counter;