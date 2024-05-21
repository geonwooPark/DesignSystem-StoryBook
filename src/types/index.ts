export type OptionList = (
  | {
      value: string
      label: string
      disabled?: undefined
    }
  | {
      value: string
      label: string
      disabled: boolean
    }
)[]
