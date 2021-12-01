import React from 'react';
import Button from "./components/button";
import Product from "./components/product";
import './App.css';
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonmessage="to the collection"
                    buttontitle="to the collection"
                    isdisabled={false}
                />
                <Button
                    buttonmessage="shop all bags"
                    buttontitle="shop all bags"
                    isdisabled={false}
                />
                <Button
                    buttonmessage="pre-order"
                    buttontitle="pre-order"
                    isdisabled={true}
                />
            </nav>
            <main>
                <Product
                    productstatus="Best seller"
                    image={bag_1}
                    productname="The handy bag"
                    productprice="€ 400,-"
                />
                <Product
                    productstatus="Best seller"
                    image={bag_2}
                    productname="The stylish bag"
                    productprice="€ 250,-"
                />
                <Product
                    productstatus="New Collection"
                    image={bag_3}
                    productname="The simple bag"
                    productprice="€ 300,-"
                />
                <Product
                    productstatus="New Collection"
                    image={bag_4}
                    productname="The trendy bag"
                    productprice="€ 150,-"
                />
            </main>
        </>
    );
}

export default App;



