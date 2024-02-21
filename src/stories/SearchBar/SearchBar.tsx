import React, { InputHTMLAttributes, useState } from 'react'
import { ReactComponent as SearchIcon } from '../assets/search.svg'

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearchClick: (value: string) => void
}

function SearchBar({ onSearchClick, ...props }: SearchBarProps) {
  const [value, setValue] = useState('')

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    setValue(value)
  }
  return (
    <div className="relative h-12 w-[450px]">
      <input
        type="text"
        {...props}
        value={value}
        onChange={onValueChange}
        className="size-full rounded-full border border-gray pl-5 pr-14 text-base font-medium text-secondary-main outline-none placeholder:font-medium placeholder:text-gray"
      />
      <div
        className="absolute right-0 top-0 flex size-12 cursor-pointer items-center justify-center rounded-full bg-primary-main text-white  duration-200 hover:bg-primary-strong"
        onClick={() => onSearchClick(value)}
      >
        <SearchIcon />
      </div>
    </div>
  )
}

export default SearchBar
