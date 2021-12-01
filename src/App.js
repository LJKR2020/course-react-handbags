import React from "react";
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import "./App.css";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";

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
            <footer>
                <Tile
                    subtitle="the brand"
                    p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum fugiat harum optio tenetur unde vel? Aut, cumque dicta? Illum!"
                    p2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum fugiat harum optio tenetur unde vel? Aut, cumque dicta? Illum!"
                />
                <Tile
                    image={brand}
                    alttext="brandlabel"
                />
                <Tile
                    image={our_story}
                    alttext="Two hugging ladies"
                />
                <Tile
                    subtitle="Our story"
                    p1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid animi autem, deserunt
                        dignissimos dolorem ea eaque facilis ipsa minima mollitia nam nulla odio, provident quaerat
                        quasi quidem, quis sequi."
                />
            </footer>
        </>
    );
}

export default App;
