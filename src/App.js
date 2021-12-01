import React from 'react';
import Button from "./components/button";
import './App.css';

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
        </>
    );
}

export default App;



