interface NumberProps {
  num: number
  color: string
  textColor?: string
}
const Number: React.FC<NumberProps> = ({ num, color, textColor }) => {
  const className = `flex justify-self-center m-1 h-6 w-8 pl-2 pr-2 text-center ${color} rounded-xl ${
    textColor ?? 'text-gray-600'
  }`
  return <div className={className}>{ num < 10 ? `0${num}` :  num === 100 ? '00' : num }</div>
}
export default Number
