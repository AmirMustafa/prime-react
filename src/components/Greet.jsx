import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Greet = () => {

    const [state, setState] = useState({
        msg: ''
    });

    const greet = () => {
        alert(state.msg);
    };
    return (
        <>
            <div className='grid mt-2' >
                <div className='col-4'>
                <Card className='bg-black-alpha-20'>
                    <form>
                        <InputText 
                            value={state.msg} 
                            onChange={(e) => setState({...state, msg: e.target.value})}
                            placeholder='Message'/>
                        <Button onClick={greet} label={'Greet'} className="p-button-success ml-2" /> 
                    </form>
                </Card>
                </div>
            </div>
        </>
    );
};
export default Greet;