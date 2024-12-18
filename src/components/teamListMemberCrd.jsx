
import Personel from "../pages/personel";
import MemberCard from "./memberCard";
import { useState } from "react";


const memberList = [
    {
        image: 'src/images/personnel-1-400x310.jpg',
        title: 'Paul Walker',
        designation: 'Chief Executive Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
        selfIntroduction:'dolor sit amet consectetur. Rutrum sollicitudin ut urna magnis eget urna lectus suspendisse. Placerat faucibus leo pulvinar eu elementum etiam magna mauris. Leo mollis sem fermentum tellus euismod pharetra mauris lacinia nec. Mauris enim id arcu viverra vitae diam volutpat auctor',
    },
    {
        image: 'src/images/personnel-2-400x310.jpg',
        title: 'Jeanette Kingston',
        designation: 'Vice President',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
        selfIntroduction:'dolor sit amet consectetur. Rutrum sollicitudin ut urna magnis eget urna lectus suspendisse. Placerat faucibus leo pulvinar eu elementum etiam magna mauris. Leo mollis sem fermentum tellus euismod pharetra mauris lacinia nec. Mauris enim id arcu viverra vitae diam volutpat auctor',

    },
    {
        image: 'src/images/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
        selfIntroduction:' dolor sit amet consectetur. Rutrum sollicitudin ut urna magnis eget urna lectus suspendisse. Placerat faucibus leo pulvinar eu elementum etiam magna mauris. Leo mollis sem fermentum tellus euismod pharetra mauris lacinia nec. Mauris enim id arcu viverra vitae diam volutpat auctor',

    },
    {
        image: 'src/images/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
        selfIntroduction:'  dolor sit amet consectetur. Rutrum sollicitudin ut urna magnis eget urna lectus suspendisse. Placerat faucibus leo pulvinar eu elementum etiam magna mauris. Leo mollis sem fermentum tellus euismod pharetra mauris lacinia nec. Mauris enim id arcu viverra vitae diam volutpat auctor',

    },
    {
        image: 'src/images/personnel-5-400x310.jpg',
        title: 'Ricardo Gomez',
        designation: 'HR Manager',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
        selfIntroduction:' dolor sit amet consectetur. Rutrum sollicitudin ut urna magnis eget urna lectus suspendisse. Placerat faucibus leo pulvinar eu elementum etiam magna mauris. Leo mollis sem fermentum tellus euismod pharetra mauris lacinia nec. Mauris enim id arcu viverra vitae diam volutpat auctor',

    },
    {
        image: 'src/images/personnel-6-400x310.jpg',
        title: 'Jeneth Kings',
        designation: 'Chief Technology Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
        selfIntroduction:' dolor sit amet consectetur. Rutrum sollicitudin ut urna magnis eget urna lectus suspendisse. Placerat faucibus leo pulvinar eu elementum etiam magna mauris. Leo mollis sem fermentum tellus euismod pharetra mauris lacinia nec. Mauris enim id arcu viverra vitae diam volutpat auctor',

    },
];

 function TeamListMemberCrd() {
    const [showModal, setShowModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
  
    const handleCardClick = (member) => {
      setSelectedMember(member); // Set the clicked member's data
      setShowModal(true);        // Open the modal
    };
   
    return (
        <div className="w-full px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0 ">
            <div>
                <div className="max-w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {memberList.map((item, index) => (
                     <MemberCard key={index} member={item} onCardClick={() => handleCardClick(item)} />
                         ))}
                    </div>
                </div>
            </div>
             {/* Render modal */}
      {selectedMember && (
        <Personel
          show={showModal}
          onHide={() => setShowModal(false)}
          member={selectedMember}
        />
      )}
        </div>
    );
}
export default TeamListMemberCrd;