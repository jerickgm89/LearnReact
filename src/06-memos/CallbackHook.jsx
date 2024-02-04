import { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const incrementFather = () => {
    //     setCounter(counter + 1)
    // }

    const incrementFather = useCallback(
      () => {
        setCounter( (c) => c + 1 )
      },
      [],
    )
    

  return (
    <>
        <h1>use Callback Hook: { counter }</h1>
        <hr />
        < ShowIncrement increment={incrementFather}/>
    </>
  )
}
