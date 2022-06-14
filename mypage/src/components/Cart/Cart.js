import React from 'react';
import { useContext } from 'react';
import { productContext } from '../providers/ProductProvider';
import { Breadcrumb, Button } from 'antd';

const Cart = () => {
    const { cart } = useContext(productContext)
    console.log(cart);
    return (
        <div>
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Cart</Breadcrumb.Item>
            </Breadcrumb>

            <h1>Total Items(3)</h1>
            <table className='tbl-cart'>
                <thead>
                    <tr>
                        <th class="product-remove">&nbsp;</th>
                        <th class="product-thumbnail">&nbsp;</th>
                        <th class="product-name">Product</th>
                        <th class="product-price">Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-subtotal">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="woocommerce-cart-form__cart-item cart_item">

                        <td class="product-remove">
                            <span class="remove" aria-label="Remove this item" data-product_id="15" data-product_sku="">×</span></td>

                        <td class="product-thumbnail">
                            <img width="100" height="100" src="http://localhost/woocommere/wp-content/uploads/woocommerce-placeholder-324x324.png" class="woocommerce-placeholder wp-post-image" alt="Placeholder" /></td>

                        <td class="product-name" data-title="Product">
                            product2						</td>

                        <td class="product-price" data-title="Price">
                            <span class="woocommerce-Price-amount amount"><bdi>333&nbsp;<span class="woocommerce-Price-currencySymbol">$</span></bdi></span>						</td>

                        <td class="product-quantity" data-title="Quantity">
                            <div class="quantity">
                                <input type="number" value={2}></input>
                            </div>
                        </td>

                        <td class="product-subtotal" data-title="Subtotal">
                            <span class="woocommerce-Price-amount amount"><bdi>333&nbsp;<span class="woocommerce-Price-currencySymbol">₫</span></bdi></span>						</td>
                    </tr>
                    <tr class="woocommerce-cart-form__cart-item cart_item">

                        <td class="product-remove">
                            <span class="remove" aria-label="Remove this item" data-product_id="15" data-product_sku="">×</span></td>

                        <td class="product-thumbnail">
                            <img width="100" height="100" src="http://localhost/woocommere/wp-content/uploads/woocommerce-placeholder-324x324.png" class="woocommerce-placeholder wp-post-image" alt="Placeholder" /></td>

                        <td class="product-name" data-title="Product">
                            product2						</td>

                        <td class="product-price" data-title="Price">
                            <span class="woocommerce-Price-amount amount"><bdi>333&nbsp;<span class="woocommerce-Price-currencySymbol">$</span></bdi></span>						</td>

                        <td class="product-quantity" data-title="Quantity">
                            <div class="quantity">
                                <input type="number" value={2}></input>
                            </div>
                        </td>

                        <td class="product-subtotal" data-title="Subtotal">
                            <span class="woocommerce-Price-amount amount"><bdi>333&nbsp;<span class="woocommerce-Price-currencySymbol">₫</span></bdi></span></td>
                    </tr>

                </tbody>
            </table>
            <div className='coupon'>
                <input placeholder='coupon code' className='border'></input><Button>Apply coupon</Button>
            </div>
            <h2>Cart totals</h2>
            <table>
                <tr class="cart-subtotal">
                    <th>Subtotal</th>
                    <td data-title="Subtotal"><span class="woocommerce-Price-amount amount"><bdi>2.599&nbsp;<span class="woocommerce-Price-currencySymbol">₫</span></bdi></span></td>
                </tr>
                <tr class="order-total">
                    <th>Total</th>
                    <td data-title="Total"><strong><span class="woocommerce-Price-amount amount"><bdi>2.599&nbsp;<span class="woocommerce-Price-currencySymbol">₫</span></bdi></span></strong> </td>
                </tr>
            </table>
        </div>
    );
}

export default Cart;
