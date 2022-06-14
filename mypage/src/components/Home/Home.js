import React from 'react';
import { Breadcrumb,Button } from 'antd';
import ListProducts from '../Products/List';
const Home = () => {
    return (
        <div>
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Breadcrumb>
            <div className="max-w-2xl mx-auto py-10 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <ListProducts></ListProducts>
                </div>
            </div>
        </div>
    );
}

export default Home;
