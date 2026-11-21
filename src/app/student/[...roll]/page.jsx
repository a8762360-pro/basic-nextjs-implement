import React from 'react';

const page = async ({params}) => {
    const {roll} = await params
    return (
        <div>
            this is catch routing : {roll}
        </div>
    );
};

export default page;