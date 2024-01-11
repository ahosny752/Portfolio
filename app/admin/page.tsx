import React from 'react';

interface Props {
    name: string;
}

const Admin: React.FC<Props> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default Admin;
