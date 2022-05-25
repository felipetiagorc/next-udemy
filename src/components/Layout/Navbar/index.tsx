import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
const Sidebar = () => {
  // const [activeMenu, setActiveMenu] = useState(false)
  const activeMenu = true
  return (
    <>
      <div className="bg-slate-400 ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {activeMenu && (
          <>
            <div className="flex justify-between items-center">
              <h1 className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                Home
              </h1>
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
              >
                <GiHamburgerMenu />
              </button>
            </div>
            <div className="mt-10">
              {['link1', 'link2', 'link3'].map((item) => (
                <div className="text-gray-400 m-3 mt-4 uppercase">
                  {item.toString()}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
export default Sidebar
