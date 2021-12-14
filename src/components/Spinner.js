import React from 'react';
import Loader from 'react-loader-spinner';
import {useSelector} from 'react-redux';

const Spinner = () => {
    const spinner = useSelector(state => state.appReducer.isLoading)
    return (
        <div className="loader-styles">
            <Loader 
                type="TailSpin"
                color="#BB2E3E"
                height={100}
                width={100}
                visible={spinner}
            />
        </div>
    );
};

export default Spinner;