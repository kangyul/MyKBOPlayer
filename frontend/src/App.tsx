function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="content-center">
          <h1 className="m-4 font-extrabold text-gray-700 text-4xl">My KBO Player</h1>
        </div>
        <div className="flex justify-center flex-row">
          <div className="flex flex-col mr-20">
            <div className="bg-slate-100 m-5 rounded-md">
              <div className="pt-1 px-4 pb-0.5 px-16px border-b divide-solid">
                <h2>KBO리그 팀 순위</h2>
              </div>
              <div className="pt-2 pb-1.5 border-b divide-solid border-neutral-100">
                <table>
                  <thead>
                    <th className="w-8">
                      <span className="hidden">순번</span>
                    </th>
                    <th className="w-24 text-left text-xs">
                      <span>팀명</span>
                    </th>
                    <th className="text-xs">
                      <span className="px-1">경기</span>
                    </th>
                    <th className="text-xs">
                      <span className="px-1">승</span>
                    </th>
                    <th className="text-xs">
                      <span className="px-1">무</span>
                    </th>
                    <th className="text-xs">
                      <span className="px-1">패</span>
                    </th>
                    <th className="text-xs">
                      <span className="px-1">승률</span>
                    </th>
                    <th className="text-xs">
                      <span className="pr-3">게임차</span>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <th></th>  
                      <td className="font-bold pt-[11px] pb-[8px] border-b divide-solid border-neutral-100 text-center">
                        <div className="block text-left text-[0px] my-[-2px]">
                          <div className="mt-[-4px] mr-[6px] mb-[-2px] ml-[0px] inline-block align-middle">
                            <img width="20" height="20" src="https://sports-phinf.pstatic.net/team/kbo/default/HT.png?type=f25_25" className="imageLazyLoad" lazy-src="https://sports-phinf.pstatic.net/team/kbo/default/HT.png?type=f25_25" alt="" onerror="imageOnError(this);"/>
                          </div>
                          <div className="inline-block align-middle">
                            <span className="text-[12px]">KIA</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="text-sky-500 text-sm px-1">110</span>
                      </td>
                      <td>
                        <span className="text-sky-500 text-sm px-1">2</span>
                      </td>
                      <td>
                        <span className="text-sky-500 text-sm px-1">45</span>
                      </td>
                      <td>
                        <span className="text-sky-500 text-sm px-1">110</span>
                      </td>
                      <td>
                        <span className="text-sky-500 text-sm px-1">0.583</span>
                      </td>
                      <td>
                        <span className="text-sky-500 text-sm px-1">0.0</span>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
            <div className="h-90 bg-slate-100 p-5 m-5 rounded-md">1</div>
            <div className="h-90 bg-slate-100 p-5 m-5 rounded-md">1</div>
          </div>
          <div className="bg-slate-100 p-5 rounded-md">2</div>
        </div>
      </div>
    </>
  )
}

export default App
