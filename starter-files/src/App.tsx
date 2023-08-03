const App = () => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-b from-sky-400 to-sky-200 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm mt-2">
          Enter below a place you want to know the weather of and select an
          option from the dropdown
        </p>
        <div>
          <input
            type="text"
            value={''}
            className="px-2 py-1 rounded-l-md border-white border-2"
          ></input>
          <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-800 hover:text-zinc-800 text-zinc-500 px-2 py-1 cursor-pointer">
            search
          </button>
        </div>
      </section>
    </main>
  )
}
export default App
