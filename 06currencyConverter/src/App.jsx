import { useState } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  
  const [amount, setAmount]= useState(0)
  const [from, setFrom]= useState("usd")
  const [to, setTo]= useState("inr")
  const [convertedAmount, setConvertedAmount]= useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options= Object.keys(currencyInfo)

  const swap= () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(setConvertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div className="flex flex-wrap items-center justify-center w-full h-screen" style={{backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,}}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60">
          <form onSubmit={(e)=>{
            e.preventDefault();
          }}>
            <div className="w-full mb-1">
              <InputBox 
                label="Form"
                amount= {amount}
                currencyOptions= {options}
                onCurrencyChange={(currency)=>setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
              type="button"
              className= "absolute left-1 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}>
              Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
                label="To"
                amount= {convertedAmount}
                currencyOptions= {options}
                onCurrencyChange={(currency)=>setTo(currency)}
                selectCurrency={from}
                amountDisable
               />
            </div>
            <button type="submit" className="w-full bg-blue-600">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
        </form>
        </div>
      </div>
    </div>
);
}

export default App
