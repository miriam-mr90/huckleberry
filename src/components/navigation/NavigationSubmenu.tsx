import { Link, useLocation } from 'react-router-dom'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { cn } from '@/lib/utils'

interface NavigationItem {
  label: string
  to: string
}

interface Props {
  items: NavigationItem[]
}

export const NavigationSubmenu = ({ items }: Props) => {
  const location = useLocation()

  return (
    <NavigationMenu.Content className="absolute top-0 left-0 w-auto">
      <ul className="m-0 grid gap-1 p-4 w-48">
        {items.map((item) => (
          <li key={item.to}>
            <NavigationMenu.Link asChild>
              <Link
                to={item.to}
                className={cn(
                  'block px-3 py-2 text-sm rounded-md transition-colors',
                  'hover:bg-gray-100 hover:text-gray-900',
                  'focus:outline-none focus:ring-2 focus:ring-gray-500',
                  location.pathname === item.to
                    ? 'bg-gray-50 text-gray-900 font-medium'
                    : 'text-gray-700'
                )}
              >
                {item.label}
              </Link>
            </NavigationMenu.Link>
          </li>
        ))}
      </ul>
    </NavigationMenu.Content>
  )
}
