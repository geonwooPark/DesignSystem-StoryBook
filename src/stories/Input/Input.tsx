import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
}

export default function Input({ register, ...otherProps }: InputProps) {
  return <input {...register} {...otherProps} />
}
