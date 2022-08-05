const Home = () => {
    return (
        <div className="home py-10 mx-0 md:mx-10 rounded-md flex justify-center text-center mt-5 md:mt-10 items-center ">
            <div className="shadow-xl bg-white rounded-lg w-2/3 md:w-1/2 pb-10 text-center ">

                <h1 className="font-black text-gray-500 text-3xl mb-3 pt-3">Welcome to Project Book</h1>
                <p>A place to store your projects built by you , FOR YOU 🚀</p>

                <p className="uppercase my-2 text-lg font-semibold">Tech Stack Used</p>

                <div className="flex justify-center">
                    <p className="my-2"><span className="underline ">Backend :</span>  Firebase Firestore  </p>
                    <img className="h-12 w-10 md:ml-7" src="https://seeklogo.com/images/F/firestore-logo-3828671CC5-seeklogo.com.png" alt="" />
                </div>

                <div className="flex justify-center md:mt-3 ">
                    <p className="my-2"><span className="underline ">Frontend :</span>  ReactJs </p>
                    <img className="animate-spin delay-1000 h-11 w-12 ml-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="" />
                </div>

                <div className="buttons flex flex-col items-center justify-center">

                    <a className="decoration-none" href=""></a>
                    <a className="decoration-none" href=""></a>
                    <button className="uppercase mx-2 lg:w-1/3 bg-blue-500 rounded-md mt-14 py-2 px-5 text-white font-bold hover:bg-white border-2  hover:text-[#6B7280] hover:border-1 border-gray-400"><a href="">Check Github Repo ➡️</a> </button>
                    <button className="uppercase mx-2 lg:w-1/3 bg-emerald-500 rounded-md mt-4 py-2 px-5 text-white font-bold hover:bg-white border-2  hover:text-[#6B7280] hover:border-1 border-gray-400"><a href="/login">Check Project here ➡️</a> </button>
                </div>
            </div>
        </div>
    );
}

export default Home;