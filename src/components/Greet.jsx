import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Greet = () => {
    return (
        <>
            <div className='grid mt-2' >
                <div className='col-4'>
                <Card className='bg-black-alpha-20'>
                    <form>
                        <InputText placeholder='Message'/>
                        <Button label={'Greet'} className="p-button-success ml-2" /> 
                    </form>
                </Card>
                </div>
            </div>
        </>
    );
};
export default Greet;