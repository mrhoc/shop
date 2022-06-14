import React,{useContext} from 'react';
import ReactStars from 'react-rating-stars-component'
import { Breadcrumb, Button,Spin } from 'antd';
import { productContext } from '../providers/ProductProvider';

const Product = ({product}) => {
    const {isShowModal,setisShowModal,modalContent,setModalContent,isShow} = useContext(productContext);
    const handleDetail=(product)=>{
        setisShowModal(true)
        console.log(product);
        setModalContent(product)
    }
    return (
        <>  {
            isShow?<Spin />:
            <div key={product.id} className="group border bg-white px-4 py-4" >
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img style={{ width: '100%', height: '150px' }}
                    src={product.image}
                    alt={product.title}
                    className="bg-white  object-contain group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700 font-medium line-clamp-1">{product.title}</h3>
            <p className='line-clamp-2 mb-2'>{product.description}</p>
            <p className='product__cat' style={{ color: 'blue' }}>#{product.category}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}$</p>
            <div className='flex items-center'><span className='mr-2'>{product.rating.rate}</span>
            <ReactStars edit={false} value={product.rating.rate} size={30} /><div className='text-xs ml-2'>({product.rating.count} review)</div>
            </div>
            <Button className='mt-5'>Add To Cart</Button>
            <Button  className='mt-5 ml-3' onClick={()=>{handleDetail(product)}}>More Detail</Button>
        </div>
        }
            
        </>
    );
}

export default Product;
