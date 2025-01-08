// import { useNavigate } from "react-router-dom";
import "../CSS/teamListMember.css";
function MemberCard({ member, onCardClick }) {
  // const navigate = useNavigate();

  // const handleNavigation = () => {
  //   navigate("/personnel", { state: props.setCmp }); // Pass data via 'state'
  // };

  return (
    <div className=" p-1 md:p-4">
      <div
        className="w-[210px] md:w-full bg-white shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        onClick={onCardClick} // Trigger the modal opening
      >
        <div className="relative overflow-hidden">
          <img
            src={member.image}
            alt={member.title}
            className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
        <div className="p-2 md:p-6">
          <span className="text-lg font-bold text-gray-800 hover:text-gray-600 cursor-pointer block md:mb-2">
            {member.title}
          </span>
          <p className="text-sm  font-semibold text-gray-500 mb-1">
            {member.designation}
          </p>
          <span className="read text-sm font-thin text-gray-800 hover:text-yellow-600 cursor-pointer block  md:mb-2">
            Read more
          </span>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
