import axios from 'axios';
import HomeFavicon from '../../assets/images/home-favicon.png'
import './HomePage.css';
import {Header} from '../components/Header.jsx'
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import { ProductsGrid } from './ProductsGrid.jsx';

export default function HomePage({ cart, loadCart }){
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');



    useEffect( () => { 
        const getHomeData = async () => {
            const urlPath = search ? `http://localhost:3000/api/products?search=${search}` : "http://localhost:3000/api/products";
            const response = await axios.get(urlPath);
            setProducts(response.data);
        }  
        getHomeData();
    },[search])
    return (
        <>
            <title>Ecommerce Project</title>
            <link rel="icon" type="image/svg+xml" href={HomeFavicon} />
            <Header cart = {cart}/>
            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    );
}
