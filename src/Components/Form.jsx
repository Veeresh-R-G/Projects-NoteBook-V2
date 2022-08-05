import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Form = () => {

    const [host, setHost] = useState(false)
    return (
        <div className="flex justify-center items-center ">
            <div className="signIn bg-white text-center rounded-lg pb-10 w-2/3 md:w-1/2">


                <h1 className="font-black text-2xl text-gray-600 pt-3 md:pt-5">
                    <span className="underline">Project </span>
                    Details</h1>



                <input type="text" placeholder="Title" className="border outline-none py-2 mt-7 rounded-md text-center" />
                <br />
                <br />
                <input type="text" placeholder="Description" className="border outline-none py-2  rounded-md text-center" />
                <br />
                <br />
                <input type="text" placeholder="Github Link" className="border outline-none py-2  rounded-md text-center" />
                <br />
                <br />
                <input type="checkbox" name="Hosted?" id="" value={"Hosted ?"} onClick={() => { setHost(!host) }} /> Hosted ? <br />
                <input style={{ display: host ? "inline" : "none" }} type="text" placeholder="If Hosted The Link" className="border outline-none mt-1 py-2 rounded-md text-center" />
                <br />
                <button className="bg-gray-500 mb-10 rounded-md mt-4 py-2 px-5 text-white font-bold hover:bg-white border-2  hover:text-[#6B7280] hover:border-1 border-gray-400" onClick={() => {
                    console.log('I got Clicked')
                }
                }>SUBMIT</button>

                <div className="">
                    <hr className="h-1" />
                    <p className="font-bold">OR</p>
                    <hr className="h-1" />
                </div>


                <br />
                <button className="border rounded-full shadow-xl shadow-gray-300  "><FcGoogle className="h-10 w-10" /></button>



            </div>
        </div>
    );
}

export default Form;