import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Form from "../Components/Form";
import Post from "../Components/Post";
import { colRef } from "../firebase_config";
const User = () => {


    const [data, setData] = useState([]);
    useEffect(() => {

        getDocs(colRef)
            .then(console.log(data))
            .catch((err) => {
                throw err
            })
    }
        , [])
    return (
        <div className="user bg-[#1AAC83] h-screen">
            <div className="bg-white flex justify-around py-3">
                <h1 className="text-xl font-semibold flex items-center">Hello, <br />
                    {localStorage.Name}
                </h1>
                <span>
                    <img className="items-center rounded-2xl my-auto h-16 " src={localStorage.Photo} alt="" />
                </span>

            </div>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 border-4 border-pink-400">
                    <Post />
                </div>
                <div className="md:col-span-1 border-4 border-green-400">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default User;