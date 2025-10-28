import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface Props {
  label: string
}

export const NavigationTrigger = ({ label }: Props) => (
  <NavigationMenu.Trigger
    className={cn(
      'group inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors',
      'hover:bg-gray-100 hover:text-gray-900',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
      'data-[state=open]:bg-gray-50 data-[state=open]:text-gray-900',
      'text-gray-500'
    )}
  >
    {label}
    <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
  </NavigationMenu.Trigger>
)
