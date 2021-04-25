import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allproducts = [{name:'Asus',category:"laptop"},{name:'Lenevo',category:"laptop"},{name:'Dell',category:"laptop"},{name:'samsung',category:"mobile"},{name:'Iphone',category:"mobile"},{name:'Nokia',category:"mobile"},{name:'Canon',category:"camera"},{name:'Nikkon',category:"camera"},
{name:'Sony',category:"camera"}];

const Category = () => {
    const [category] = useContext(CategoryContext);
    const [products,setproducts] = useState([]);
    useEffect(() => {
        const matchedProducts = allproducts.filter(pd => pd.category === category);
        console.log(matchedProducts);
        setproducts(matchedProducts);
    },[category])

    return (
        <div>
            <h2>Select your category : {category}</h2>
            {
                products.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
            }
            
        </div>
    );
};

export default Category;