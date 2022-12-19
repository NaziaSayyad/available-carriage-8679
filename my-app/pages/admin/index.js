// import { Box, HStack, useStatStyles } from "@chakra-ui/react";
// import Admin_nav from "../../component/Admin Navbar/Navbar";
// import Users from "../api/users";
// import User_details from "./allusers";

// export  default function Dashboard({users}){
//  console.log(users)
//     return(
//         <>
//         <Admin_nav />
        
//         <div>
//         <HStack bg={"#f3f4f6"} w="full">
//       <Box alignSelf={"center"} className="main__container">
//         {/* <!-- MAIN TITLE STARTS HERE --> */}

//         {/* <HStack className="main__title">
//           <img src={hello} alt="hello" />
//           <div style={{ textAlign: "start" }} className="main__greeting">
//             <h1>Hello Chief</h1>
//             <p>Welcome to your admin dashboard</p>
//           </div>
//         </HStack> */}

//         {/* <!-- MAIN TITLE ENDS HERE --> */}

//         {/* <!-- MAIN CARDS STARTS HERE --> */}
//         {/* <div className="main__cards">
//           <div className="card">
//             <i
//               className="fa fa-user-o fa-2x text-lightblue"
//               aria-hidden="true"
//             ></i>
//             <div className="card_inner">
//               <p className="text-primary-p">Number of Users</p>
//               <span className="font-bold text-title">
//                 {adminData.users.length}
//               </span>
//             </div>
//           </div>

//           <div className="card">
//             <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
//             <div className="card_inner">
//               <p className="text-primary-p">Number of Products</p>
//               <span className="font-bold text-title">{allProducts}</span>
//             </div>
//           </div>

//           <div className="card">
//             <i
//               className="fa fa-video-camera fa-2x text-yellow"
//               aria-hidden="true"
//             ></i>
//             <div className="card_inner">
//               <p className="text-primary-p">Number of Purchases</p>
//               <span className="font-bold text-title">
//                 {adminData.carts.length}
//               </span>
//             </div>
//           </div>

//           <div className="card">
//             <i
//               className="fa fa-thumbs-up fa-2x text-green"
//               aria-hidden="true"
//             ></i>
//             <div className="card_inner">
//               <p className="text-primary-p"> Number of employees </p>
//               <span className="font-bold text-title">5</span>
//             </div>
//           </div>
//         </div> */}
//         {/* <!-- MAIN CARDS ENDS HERE --> */}

//         {/* <!-- CHARTS STARTS HERE --> */}
//         {/* <div className="charts">
//           <div className="charts__left">
//             <div className="charts__left__title">
//               <div>
//                 <h1>Daily Reports</h1>
//                 <p>Bangalore, India</p>
//               </div>
//               <i className="fa fa-usd" aria-hidden="true"></i>
//             </div>
//             <Chart />
//           </div>

//           <div className="charts__right">
//             <div className="charts__right__title">
//               <div>
//                 <h1>Stats Reports</h1>
//                 <p>Bangalore, India</p>
//               </div>
//               <i className="fa fa-usd" aria-hidden="true"></i>
//             </div>

//             <div className="charts__right__cards">
//               <div className="card1">
//                 <h1>Income</h1>
//                 <p>$ {Income/2}</p>
//               </div>

//               <div className="card2">
//                 <h1>Sales</h1>
//                 <p>${Income}</p>
//               </div>

//               <div className="card3">
//                 <h1>Users</h1>
//                 <p> {adminData.users.length}</p>
//               </div>

//               <div className="card4">
//                 <h1>Orders</h1>
//                 <p> {adminData.carts.length}</p>
//               </div>
//             </div>
//           </div>
//         </div> */}
//         {/* <!-- CHARTS ENDS HERE --> */}
//       </Box>
//     </HStack>
//         </div>
//         </>
//     )
// }
// // export const getStaticProps = async () =>{
// //     const res = await fetch(`http://localhost:3000/api/users`);
// //     const data =  await res.json();
// //     return{
// //       props :{
// //         users :data
// //       }
// //     }
// // }

// // http://localhost:3000/api/users
import { Box } from "@chakra-ui/layout";
import { Heading, HStack, IconButton, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { IoTrashBinSharp } from "react-icons/io5";
import Admin_nav from "../../Components/Admin_component/Admin Navbar/Navbar";
import Users from "../../Components/Admin_component/Admin/All users";


export default function  Dashboard({users}){
    // console.log(users.length+"all uses")
    return(
        
        <>
        <Admin_nav />
       
        </>
        )
}

export const getStaticProps = async () =>{
    const res = await fetch(`https://revish.vercel.app/api/users`);
    const data =  await res.json();
    return{
      props :{
        users :data
      }
    }
}