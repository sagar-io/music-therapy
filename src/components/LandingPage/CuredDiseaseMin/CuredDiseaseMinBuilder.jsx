import {NavLink} from 'react-router-dom'

export const CuredDiseaseMinBuilder = (props) => {
  return (
    <div className="text-center shadow-2xl p-8 rounded-lg hover:scale-110 transition-all">
      <img
        className="block w-40 text-center m-auto"
        src={props.img}
        alt={props.title}
      />
      <div>
        <h2 className="text-2xl font-bold mt-4">{props.title}</h2>
        <p className="max-w-sm ">{props.text}</p>
      </div>
      <NavLink to={'/'+props.title} className="my-8 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Read More about {props.title}
        </span>
      </NavLink>
    </div>
  );
};
