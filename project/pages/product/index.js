export default function  Products ({users}) {
    console.log(users, "in");
 return(
    <>
    {/* {console.log(users)} */}
    {
        users.map((el) =>(
            <h1> {el.name}</h1>
        ))
    }
    <h1> Products </h1>
    </>
 )
}
export const getStaticProps = async () =>{
    const res = await fetch(`http://localhost:3000/api/shop/makeup`);
    const data =  await res.json();
    return{
      props :{
        users :data
      }
    }

}
// http://localhost:3000/api/shop/makeup