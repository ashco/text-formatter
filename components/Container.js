import Textarea from './Textarea'
import Button from './Button'

const Container = ({mode, children}) => {
  return (
    <div className={`${mode === 'input' ? 'bg-black' : ''} ${mode === 'output' ? 'sm:flex-col-reverse sm:space-y-reverse justify-end' : ''} w-full p-2 flex flex-col p-2 space-y-2`}>
      {children}
    </div>
  )
}

export default Container