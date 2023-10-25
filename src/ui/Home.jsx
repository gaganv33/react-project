import CreateUser from "../features/user/CreateUser";

function Home(){
   return (
      <div className="py-6 text-center px-6 sm:pt-10 sm:gap-4 sm:pb-8">
         <h1 className="text-xl font-semibold pb-6">
            The best pizza 
            <br />
            <span className="text-yellow-500">
               Straight out of the oven, straight to you.
            </span>
         </h1>
         <CreateUser />
      </div>
   )
}

export default Home;