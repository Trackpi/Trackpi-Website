import { Link } from "react-router-dom";

 function MemberCard(props) {

    return (
        <div className="p-4">
            <div className="w-full bg-white shadow-lg transform transition-transform duration-300 hover:scale-105">
            <Link  className='text-light text-decoration-none'to={"/personel"}>
                <div className="relative overflow-hidden">
               
                    <img
                        src={props?.setCmp?.image}
                        alt={props?.setCmp?.title || "Member"}
                        className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-110"
                    />
                </div>
                <div className="p-6">
                    <Link  className='text-dark text-decoration-none'to={"/personel"}>
                        <span className="text-lg font-semibold text-gray-800 hover:text-gray-600 cursor-pointer block mb-2">
                            {props?.setCmp?.title}
                        </span>
                    </Link>
                    <p className="text-sm text-gray-500 mb-1">{props?.setCmp?.designation}</p>
                    
                        <span className="text-sm font-thin text-gray-800 hover:text-yellow-600 cursor-pointer block mb-2">
                          Read more
                        </span>
                   
                </div>
            </Link>
                  
                   
                
            </div>
        </div>
    );
}
export default MemberCard;