interface Props {
  element?: 'li' | 'div' | 'span'
  value: string
}

export const Tag = ({ element, value }: Props) => {
  const Element = element || 'span'

  return (
    <Element className="rounded-md px-2 py-0.5 text-sm mr-2 border border-gray-200">
      {value}
    </Element>
  )
}
