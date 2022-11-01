import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const TermsAndConditions = () => {
    useTitle('Terms and Condition')
    return (
        <div>
            <h3>Here is our Teems and coditions</h3>
            <p>Go back to: <Link to='/register'>Register</Link> </p>

        </div>
    );
};

export default TermsAndConditions;