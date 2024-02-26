

export default function Home() {
  return (
    <section className="text-center">
      <h1 className="text-white font-bold text-9xl mt-52">$</h1>

      <div className="mt-32 flex flex-wrap justify-center gap-7">
        <button><a href="/SignUp" className="bg-white text-blue-500 p-4 px-10 font-bold  rounded-2xl hover:bg-blue-800 hover:transition">Sign Up</a></button>
        <button><a href="/Login" className="bg-#1152FD text-white p-4 px-10 font-bold rounded-2xl  hover:bg-white hover:text-blue-500 hover:transition">Login</a></button>
      </div>
    </section>
  );
}
