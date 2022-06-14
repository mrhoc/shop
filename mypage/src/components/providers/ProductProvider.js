import React from 'react';
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';


export const productContext = createContext();
export const ProductProvider = ({ children }) => {
    const [isShowModal, setisShowModal] = useState(false);
    const [modalContent,setModalContent]=useState({})
    const [products, setProducts] = useState([]);
    const [users,setUsers]=useState([]);
    const [author,setAuthor]=useState({})
    const [cart,setCart]=useState([])
    const [isShow,setIsShow]=useState(true)
    console.log('myUser',author);
    
    //api - get products 
    const URL = 'https://fakestoreapi.com';
    useEffect(() => {
        axios.get(`${URL}/products`)
            .then(res => {
                const products = res.data;
                setIsShow(false);
                setProducts(products)
            })
            .catch(error => console.log(error));
    }, []);

    //api - login
    useEffect(() => {
        var data = JSON.stringify(author);
          
          var config = {
            method: 'post',
            url: 'https://fakestoreapi.com/auth/login',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
           
          })
          .catch(function (error) {
            console.log(error);
          });
      
    }, [author]);
    console.log('currentUser',author);

    //api - Get all user
    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'https://fakestoreapi.com/users',
            headers: { }
          };
          axios(config)
          .then(function (response) {
            setUsers(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    },[])


      
    // api - Get user carts
    useEffect(()=>{
        var config = {
            method: 'get',
            url: `https://fakestoreapi.com/carts/user/${author.id}`,
            headers: { }
          };
          axios(config)
          .then(function (response) {
            setCart(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    },[author])

    console.log( `https://fakestoreapi.com/carts/user/${author.id}`);
    console.log('userCart',cart);



    return (
        <productContext.Provider value={
            {
                isShowModal,
                setisShowModal,
                products,
                setProducts,
                modalContent,
                setModalContent,
                author,
                setAuthor,
                users,
                setUsers,
                cart,
                setCart,
                isShow,
                setIsShow
            }
        }>
            {children}
        </productContext.Provider>
    );
}


