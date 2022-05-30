import { Tooltip } from 'components/Tooltip'
import Link from 'next/link'
import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useThemeContext } from '../../../contexts/ThemeProvider'
import { links } from '../../../data/dummy'

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } =
    useThemeContext()

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const activeLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2'
  const normalLink =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  //criei esse componente pq é assim q passa prop pra dentro de um Link/next ...
  const ButtonLink = React.forwardRef(
    ({ onClick, href, label, children }, ref) => {
      return (
        <a
          href={href}
          onClick={onClick}
          ref={ref}
          className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
          label={label}
        >
          {children}
        </a>
      )
    }
  )
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link href="/" passHref>
              <ButtonLink />
            </Link>

            <Tooltip content="Menus" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </Tooltip>
            {/* <Tooltip.Provider delayDuration={0} skipDelayDuration={500}>
              <Tooltip.Root
                style={{ color: currentColor }}
                onOpenChange={() => setActiveMenu(!activeMenu)}
              >
                <Tooltip.Trigger asChild>
                  <FiPlusCircle />
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider> */}
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <Link
                    href={`/${link.name}`}
                    passHref
                    key={link.name}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : ''
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <ButtonLink>
                      {link.icon}
                      <span onClick={handleCloseSideBar} className="capitalize">
                        {link.name}
                      </span>
                    </ButtonLink>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
