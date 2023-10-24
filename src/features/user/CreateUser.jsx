function CreateUser(){
   return (
      <div>
         <h1 className="mb-4 font-medium">👋🏽Welcome! Please start by telling us your name:</h1>
         <input type="text" placeholder="Enter your name" className="rounded-full px-4 py-2
          focus:outline-none text-sm focus:ring focus:ring-yellow-500 focus:ring-offset-2 bg-yellow-100 w-[60%]" />
      </div>
   );
}

export default CreateUser;
