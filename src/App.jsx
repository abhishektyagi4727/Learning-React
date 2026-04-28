// import React from "react";
// import LiveClock from "./LiveClock";
// import ChangeColor from "./ChangeColor";
// import ChangeName from "./ChangeName";
// import ShowArray from "./ShowArray";
// import ShowMsg from "./ShowMsg";
// import Profile from "./Profile";
// import IncrementAndDecrement from "./IncrementAndDecrement";
// import OnAndOff from "./OnAndOff";
// import InternalCss from "./InternalCss";
// import TextColor from "./TextColor";
// import Student from "./student";
// import Table from "./Table";
// import TableData from "./TableData";
// import Jsx from "./Object";
// // import data from "./data";
// // import data from "./Data";
// import Data from "./data";
// import Array from "./Array";
// import Demo from "./Demo";
// import Cart from "./Cart";
// import Api from "./Api";
// import Hello from "./hello";
// import Form from "./Form";
// import StudentClassComp from "./StudentClassComp";
// import { useState } from "react";
// import Form2 from "./Form2";

// function App() {
//   function sayHello() {
//     let x1 = confirm("Hello Abhishek Tyagi");
//     console.log(x1);
//   }
//   let arr = [
//     {
//       id: 1,
//       productName: "Classic Polo Shirt",
//       productColor: "Red",
//       productPrice: 1199,
//       img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
//     },
//     {
//       id: 2,
//       productName: "Formal Cotton Pant",
//       productColor: "Brown",
//       productPrice: 1599,
//       img: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400",
//     },
//     {
//       id: 3,
//       productName: "Slim Fit Blue Jeans",
//       productColor: "Blue",
//       productPrice: 1399,
//       img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
//     },
//   ];
//   const [name, setName] = useState("sidhu");
//   function updateName() {
//     setName("Abhi");
//   }
//   console.log("Render App Component");
import Form2 from "./Form2";
import MemoDemo from "./MemoDemo";
import UseCreate from "./UseCreate";
import UseMemoDemo from "./UseMemoDemo";
import ReactRouterDom from "./ReactRouterDom";
import ContextApi1 from "./ContextApi1";
import Counter from "./Counter";
import UseCallBack from "./UseCallBack";
import UseCallBackDemo from "./UseCallBackDemo";
function App() {
  return (
    <>
      {
        /* <LiveClock />
      <ChangeColor />
      <ChangeName />
      <ShowArray />
      <ShowMsg />
      <Profile />
      <IncrementAndDecrement />
      <OnAndOff />
      <InternalCss />
      <TextColor />
      <Student />

      <TableData />
      <Data data={{ hello: "abhi" }} />*/
        // <Array arr={["mango", "Banana"]} />
      }
      {/* <Jsx val={<h1>hello</h1>} /> */}
      {/* <Jsx>
        <h1>Abhishek</h1>
      </Jsx> */}
      {/* <Demo
        name={"Abhishek Tyagi"}
        age={21}
        skills={["Java", "React", "SQL"]}
        info={{ city: "Delhi", role: "Developer" }}
      >
        {sayHello}
        {
          <button
            onClick={() => {
              sayHello();
            }}
          >
            helo
          </button>
        }
      </Demo> */}

      {/* <Cart arr={arr} /> */}
      {/* <Api /> */}
      {/* <Hello /> */}
      {/* <Form /> */}
      {/* <button onClick={() => updateName()}>Parent Button</button> */}
      {/* <hr></hr> */}
      {/* <StudentClassComp name={name} /> */}
      {/* <Form2 /> */}
      {/* <MemoDemo /> */}
      {/* <UseMemoDemo /> */}
      {/* <UseCreate /> */}
      {/* <ReactRouterDom /> */}
      {/* <ContextApi1 name="helloo Abhsihek" /> */}
      {/* <Counter></Counter> */}
      {/* <UseCallBack /> */}
      <UseCallBackDemo />
    </>
  );
}
export default App;
