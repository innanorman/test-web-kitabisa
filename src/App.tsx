import { useCallback, useEffect, useMemo, useState } from 'react'
import './scss/main.scss'
import Card from './component/Card'

function App() {
  const [result, setResult] = useState([]);
  const [selectedType, setSelectedType] = useState("default")
  
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    handleSortData(result)
  }, [selectedType])

  const fetchData = async() => {
    const response = await fetch("./campaign.json")
    const data = await response.json()

    setResult(data?.data)
  }


  const handleSortData = (data:any) =>{
    let sortedData;
    if (selectedType === 'goal'){
      sortedData = [...data].sort((a, b) => {
        return (a.donation_target - b.donation_target)
      }) 
        
      }else if (selectedType === 'days'){
        sortedData = [...data].sort((a, b) => {
          return (a.days_remaining - b.days_remaining)
        }) 
    } else {
      return sortedData
    }
    // eslint-disable-next-line
    setResult(sortedData) 
  }
  

  const handleSelectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const key = e.currentTarget.value
    setSelectedType(key)
  }

  return (
    <>
      <div className='w-full'>
        <header className="w-full flex justify-between items-center px-8 py-4"> 
          <div className="logo lg:w-3/4 xs:w-1/2">
            <img src="https://galang-dana.kitabisa.com/illustrations/galang-dana-kitabisa-logo.svg" />
          </div>
          <div className="button-sort lg:w-1/4 xs:w-1/2">
          <select 
            className="bg-gray-50 border border-secondary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={handleSelectType}
            
            defaultValue= "default"
          >
            <option value="default" disabled>Choose sort type</option>
            <option value="goal">Sort by Donating Goals</option>
            <option value="days_remaining">Sort by Donating Days</option>
          </select>
          </div>
        </header>
        {result ?
          <div className='flex flex-wrap gap-2 sm:gap-4 p-8 box-border items-center'>
            {result?.map((item:any) => 
            <Card {...item}/>
            )}
          </div>  : ''
        }


      </div>

    </>
  )
}

export default App
