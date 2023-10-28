import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

function ErrorPage(){
   const error = useRouteError();

   return (
      <div className="flex flex-col items-center justify-center gap-5">
         <div className="flex flex-col items-center justify-center px-4 py-3 sm:w-[70%] mx-auto bg-red-200 text-red-700 sm:rounded-md mt-5 sm:flex-row">
            <h1>SomeThing went wrong</h1>
            <p>{error.data || error.message}</p>
         </div>
         <Link to="/" className="text-blue-400 hover:text-blue-700 hover:underline">Go Back</Link>
      </div>
   );
}

export default ErrorPage;
