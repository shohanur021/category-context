import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category,setCategory] = useContext(CategoryContext);
    return (
        <div style={{borderBottom:'2px solid gray'}}>
            <h1>This is Header </h1>
            <p>category is : {category}</p>
            <button onClick={() => {setCategory('laptop')}} className="laptop">Laptop</button>
            <button onClick={() => {setCategory('mobile')}} className="mobile">Mobile</button>
            <button onClick={() => {setCategory('camera')}} className="camera">Camera</button>
        </div>
    );
};

export default Header;