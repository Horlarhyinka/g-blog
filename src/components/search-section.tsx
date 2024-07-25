import { RefObject, useRef } from "react"

interface Props {
    handler: Function
}

export const SearchSection = (props: Props)=>{
    const filters = [
        "content","title", "tag", "keyword"
    ]

    const filterRef = useRef() as RefObject<HTMLSelectElement>
    const valueRef = useRef() as RefObject<HTMLInputElement>





    return <div className="search-section text-left w-full inline-block box-border xl:w-full md:w-full sm:w-full bg-white">
    <div className="label w-2/5 relative top-8 text-gray-700">Filter by:</div>
    <div className="search-component inline-block mx-6 my-12 w-full text-left">
        <select ref={filterRef} className="p-4" >    
            {
                filters.map((filter: string, i)=><option value={filter} key={i} >{filter}</option>)
            }
        </select>
        <input ref={valueRef} type="text" className="ml-2 border-2 border-slate-100 px-4  w-3/5 rounded-md py-3" placeholder="search blogs" />
    </div>
    <button onClick={()=>props.handler(filterRef.current!.value, valueRef.current!.value)} className="text-white bg-blue-500 p-3 lg:max-w-40 md:max-w-40 w-full sm:ml-4 sm:w-full rounded-sm" >Search</button>
    </div>
}