import { Link, useLocation } from 'react-router-dom'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { cn } from '@/lib/utils'

interface NavigationItem {
  label: string
  to: string
}

const Navigation = () => {
  const location = useLocation()

  const items: NavigationItem[] = [
    {
      label: 'Star Wars',
      to: '/starwars',
    },
    {
      label: 'Rick and Morty',
      to: '/rick-and-morty',
    },
    {
      label: 'Botanix',
      to: '/botanix',
    },
  ]

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src="./logo.png"
                  alt="Huckleberry Logo"
                  className="h-8 w-8"
                />
                <span className="text-2xl font-bold text-brand-dark">
                  HuckleLab
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <NavigationMenu.Root className="relative">
                <NavigationMenu.List className="flex space-x-1">
                  {items.map((item) => {
                    const isActive = location.pathname === item.to

                    return (
                      <NavigationMenu.Item key={item.to}>
                        <NavigationMenu.Link asChild>
                          <Link
                            to={item.to}
                            className={cn(
                              'inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors',
                              'hover:bg-gray-100 hover:text-gray-900',
                              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
                              isActive
                                ? 'text-gray-900 bg-gray-50'
                                : 'text-gray-500'
                            )}
                          >
                            {item.label}
                          </Link>
                        </NavigationMenu.Link>
                      </NavigationMenu.Item>
                    )
                  })}

                  <NavigationMenu.Indicator className="data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-gray-200" />
                  </NavigationMenu.Indicator>
                </NavigationMenu.List>

                <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
                  <NavigationMenu.Viewport className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-white shadow-lg transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                </div>
              </NavigationMenu.Root>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {/* This space can be used for additional navigation items like profile, settings, etc. */}
          </div>
          <div className="flex items-center sm:hidden">
            {/* Mobile menu button can be added here in the future */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
