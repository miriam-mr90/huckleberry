import { Link, useLocation } from 'react-router-dom'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { cn } from '@/lib/utils'
import logoImg from '@/assets/images/logo.png'
import { NavigationSubmenu } from './NavigationSubmenu'
import { NavigationTrigger } from './NavigationTrigger'

interface NavigationItem {
  label: string
  to?: string
  children?: NavigationItem[]
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Themes',
    to: '/themes',
  },
  {
    label: 'Experiments',
    children: [
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
    ],
  },
]

const hasValidLink = (
  child: NavigationItem
): child is NavigationItem & { to: string } => child.to !== undefined

export const Navigation = () => {
  const location = useLocation()

  const renderMenuItem = (item: NavigationItem) => {
    const isActive = item.to && location.pathname === item.to

    if (item.children) {
      const validChildren = item.children.filter(hasValidLink)

      return (
        <>
          <NavigationTrigger label={item.label} />
          <NavigationSubmenu items={validChildren} />
        </>
      )
    }

    return (
      <NavigationMenu.Link asChild>
        <Link
          to={item.to || '/'}
          className={cn(
            'inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors',
            'hover:bg-gray-100 hover:text-gray-900',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
            isActive ? 'text-gray-900 bg-gray-50' : 'text-gray-500'
          )}
        >
          {item.label}
        </Link>
      </NavigationMenu.Link>
    )
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logoImg} alt="Huckleberry Logo" className="h-8 w-8" />
                <span className="text-2xl font-bold text-brand-dark">
                  HuckleLab
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <NavigationMenu.Root className="relative">
                <NavigationMenu.List className="flex space-x-1">
                  {NAVIGATION_ITEMS.map((item) => (
                    <NavigationMenu.Item key={item.label}>
                      {renderMenuItem(item)}
                    </NavigationMenu.Item>
                  ))}

                  <NavigationMenu.Indicator className="top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden">
                    <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-gray-200" />
                  </NavigationMenu.Indicator>
                </NavigationMenu.List>

                <div className="absolute top-full left-0 flex w-full justify-center">
                  <NavigationMenu.Viewport className="relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-white shadow-lg sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                </div>
              </NavigationMenu.Root>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
