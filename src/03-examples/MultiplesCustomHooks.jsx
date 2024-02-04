import { useCounter, useFetch } from "../hook/index";
import { LoadingQuote, Quote } from "./";


export const MultiplesCustomHooks = () => {

  const { counter, increment } = useCounter(1)

  const { data, isLoading, hasError } = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${counter}` )

  const { author, quote } = !!data && data[0];

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr /> 

        {
          isLoading 
            ? <LoadingQuote />
            : <Quote 
                author={ author }
                quote={ quote }
              />
        }
        
        <button 
          className="btn btn-primary"
          disabled={ isLoading }
          onClick={ () => increment() }
        >
          Next Quote
        </button>
    </>
  )
}
