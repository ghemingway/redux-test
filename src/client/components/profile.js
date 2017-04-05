
import React, { Component }             from 'react';

const Profile = ({match}) => {
    return <div>
        <h3>Profile: {match.params.user}</h3>
    </div>;
};

export { Profile };