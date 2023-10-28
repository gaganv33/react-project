import { useSelector } from "react-redux";

function Username(){
   const user = useSelector((store) => {
      return store.user;
   });
   
   return (
      <div className="hidden sm:block">{user.name}</div>
   );
}

export default Username;
