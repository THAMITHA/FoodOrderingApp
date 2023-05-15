import React from "react";
import ReactDOM from "react-dom/client";


const data=1000;

const Title=()=>(
    
    <h1 className="head" tabIndex="1">
Namaste React using JSX 🚀
</h1>);

const HeadingComponent=()=>(
    <>
    <div id="container">
        {Title()}
        <Title/>
        <Title></Title>
        <h1 className="heading">Namaste React arrow functional Component inside container1</h1>
    </div>
    <div id="container2">
        <h1 className="heading2">Namaste React arrow functional Component inside container-2</h1>
    </div>
    </>
    );
    


// const number=1000;




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
