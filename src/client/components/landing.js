
import React                            from 'react';
import { Link }                         from 'react-router-dom';

const Landing = () => (
    <div>
        <h3>Landing Page</h3>
        <Link to="/login">Go to Login</Link>
    </div>
);

export { Landing };