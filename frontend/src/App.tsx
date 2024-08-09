function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="content-center">
          <h1 className="m-4 font-extrabold text-gray-700 text-4xl">My KBO Player</h1>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col basis-1/2 h-90">
            <div className="h-90 bg-slate-100 p-5 m-5 rounded-md">1</div>
            <div className="h-90 bg-slate-100 p-5 m-5 rounded-md">1</div>
            <div className="h-90 bg-slate-100 p-5 m-5 rounded-md">1</div>
          </div>
          <div className="basis-1/2 bg-slate-100 p-5 m-5 rounded-md">2</div>
        </div>
      </div>
    </>
  )
}

export default App
