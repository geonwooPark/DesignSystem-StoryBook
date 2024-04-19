import React, { InputHTMLAttributes, useState } from 'react'

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
        className="size-full rounded-full border border-grey pl-5 pr-14 text-base font-medium text-secondary-main outline-none placeholder:font-medium placeholder:text-grey"
      />
      <div
        className="absolute right-0 top-0 flex size-12 cursor-pointer items-center justify-center rounded-full bg-primary-main text-white  duration-200 hover:bg-primary-strong"
        onClick={() => onSearchClick(value)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.5 15.5L21 21"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3.5"
            y="3.5"
            width="14"
            height="14"
            rx="7"
            stroke="currentColor"
          />
        </svg>
      </div>
    </div>
  )
}

export default SearchBar
