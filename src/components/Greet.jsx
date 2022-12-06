import React, { useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const Greet = () => {
    let toast = useRef(null);

    const [state, setState] = useState({
        msg: ''
    });

    const greet = (event) => {
        event.preventDefault();
        toast.current.show({severity: 'success', summary: 'Success Message', detail: state.msg});
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
                <Toast ref={toast} />
                </div>
            </div>
        </>
    );
};
export default Greet;