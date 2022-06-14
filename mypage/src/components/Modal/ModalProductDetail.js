import React,{useContext} from 'react';
import { productContext } from '../providers/ProductProvider';
import {Modal,Button} from 'antd'

const ModalProductDetail = () => {
    const {isShowModal,setisShowModal,modalContent}=useContext(productContext);
    console.log(isShowModal);
    return (
        <>
            <Modal title={`${modalContent.title}`} footer={null} visible={isShowModal} onOk={()=>{setisShowModal(false)}} onCancel={()=>{setisShowModal(false)}}>
            <div key={modalContent.id} className="group border bg-white px-4 py-4" >
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img style={{ width: '100%', maxHeight: '250px' }}
                            src={modalContent.image}
                            alt={modalContent.title}
                            className="bg-white  object-contain group-hover:opacity-75"
                        />
                    </div>
                    <p className=' mb-2'>{modalContent.description}</p>
                    <p className='modalContent__cat' style={{ color: 'blue' }}>#{modalContent.category}</p>
                    <p className="mt-1 text-lg font-medium text-gray-900">{modalContent.price}$</p>
                    <div className='text-center'><Button className='mt-5'>Add To Cart</Button></div>
                   
                </div>
            </Modal>
        </>
    );
}

export default ModalProductDetail;
