import Textarea from './Textarea'
import Button from './Button'


const OutputContainer = () => {
  return (
    <div className="bg-white min-h-1/2 w-full p-2">
      <Textarea />
      <Button>
        COPY
      </Button>
    </div>
  )
}

export default OutputContainer