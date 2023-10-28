import { useState } from "react";
import { setName } from "../../Context/UserContext/UserSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

function CreateUser(){
   const [nameInput, setNameInput] = useState("");
   const navigate = useNavigate();
   const dispatch = useDispatch();

   function handleOnChange(e){
      setNameInput(e.target.value);
   }

   function handleOnKeyPress(){
      dispatch(setName(nameInput));
      navigate("/menu");
   }

   return (
      <div>
         <h1 className="mb-4 font-medium">👋🏽Welcome! Please start by telling us your name:</h1>
         <input type="text" placeholder="Enter your name" className="rounded-full px-4 py-2 
         focus:outline-none text-sm focus:ring focus:ring-yellow-500 focus:ring-offset-2
         bg-yellow-100 sm:w-[40%] mx-auto" 
         value={nameInput} onChange={(e) => handleOnChange(e)} 
         onKeyDown={(e) => {
            if(e.key === "Enter"){
               handleOnKeyPress();
            }
         }}
         />
      </div>
   );
}

export default CreateUser;
