import { useState } from "react"

const FindProductos=() => {
  const [filter, setFilter] = useState('')
  return (
    <div className="phone:text-center laptop:text-left phone:mx-3 mx-0">
    <h3 className="text-sm text-ic-gray">Buscar por codigo/texto</h3>
    <input
      className="px-1 phone:w-3/12 tablet:w-3/12 focus:w-2/3 tablet:focus:w-4/12 duration-200 bg-ic-disabled rounded focus:text-ic-white text-ic-black mx-2"
      type="text"
      onChange={(e)=> {
        setFilter(e.target.value.trim())
      }}
    />
    <a
      href={
        filter.length > 0 ?
        `/productos?text=${filter}`
        :
        "#"
      }
      className="text-sm px-1 rounded-sm bg-ic-disabled text-ic-gray hover:text-ic-white"
      >Buscar</a
    >
    </div>
)
}


export default FindProductos