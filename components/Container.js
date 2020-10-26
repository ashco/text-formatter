import Textarea from './Textarea'
import Button from './Button'

const Container = ({type, mode, children}) => {
  return (
    <div className={`w-full p-2 flex flex-col p-3 items-center space-y-3 justify-between sm:h-full sm:p-4 ${type == 'center' ? 'h-30 sm:w-64' : 'h-35'}`}>
      {children}
    </div>
  )
}

export default Container