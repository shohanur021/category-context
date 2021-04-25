import React from 'react';

const CategoryDetails = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h4>This is your category details</h4>
            <h6>selected product : <span style={{color:'red'}}> {name} </span></h6>
        </div>
    );
};

export default CategoryDetails;