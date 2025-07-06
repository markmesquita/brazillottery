interface NumberSelectorProps {
  minNumbers: number
  maxNumbers: number
  selectedNumbers: number
  onNumberChange: (value: number) => void
  label?: string
  className?: string
}

const NumberSelector: React.FC<NumberSelectorProps> = ({
  minNumbers,
  maxNumbers,
  selectedNumbers,
  onNumberChange,
  label = "Quantos números gerar:",
  className = ""
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = parseInt(event.target.value)
    onNumberChange(newValue)
  }

  const options = Array.from(
    { length: maxNumbers - minNumbers + 1 },
    (_, i) => i + minNumbers
  )

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label htmlFor="numberSelector" className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id="numberSelector"
        value={selectedNumbers}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      >
        {options.map(num => (
          <option key={num} value={num}>
            {num} números
          </option>
        ))}
      </select>
    </div>
  )
}

export default NumberSelector 