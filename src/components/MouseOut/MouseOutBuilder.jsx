/* eslint-disable react/prop-types */


export const MouseOutBuilder = ({img, title, text}) => { 
  return (
    <div className="flex group flex-col justify-between align-middle p-8 w-full  hover:col-span-2 ">
        <img className="rotate-45 transition w-50 h-25 group-hover:rotate-0" src={img}/>
        <h2 className="text-2xl">{title}</h2>
        <p className="hidden">{text}</p>
        <button>Read More...</button>
    </div>
  )
}
