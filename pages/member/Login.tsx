export default function Login() {
    return (
        <div className="mx-auto text-center">
            <h2 className="font-bold">로그인</h2>

            <div className="flex flex-col mx-auto mt-8 w-[300px]">
                <input type="text" className="mb-3 w-full h-10 bg-slate-100" placeholder="ID" />
                <input type="password" className="mb-3 w-full h-10 bg-slate-100" placeholder="PW" />

                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">LOGIN</button>
            </div>
        </div>
    );
}
