import Textarea from './Textarea'
import Button from './Button'

const Container = ({mode, children}) => {
  return (
    <div className={`${mode === 'input' ? 'bg-black text-white' : 'bg-white'} min-h-1/2 w-full p-2`}>
      {children}
    </div>
  )
}

export default Container