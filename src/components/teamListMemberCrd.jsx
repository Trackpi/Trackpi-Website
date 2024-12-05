import MemberCard from "./memberCard";


const memberList = [
    {
        image: 'src/images/personnel-1-400x310.jpg',
        title: 'Paul Walker',
        designation: 'Chief Executive Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
    },
    {
        image: 'src/images/personnel-2-400x310.jpg',
        title: 'Jeanette Kingston',
        designation: 'Vice President',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
    },
    {
        image: 'src/images/personnel-3-400x310.jpg',
        title: 'John Smithy',
        designation: 'Chief Financial Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
    },
    {
        image: 'src/images/personnel-4-400x310.jpg',
        title: 'Linda Kloe',
        designation: 'Senior Engineer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
    },
    {
        image: 'src/images/personnel-5-400x310.jpg',
        title: 'Ricardo Gomez',
        designation: 'HR Manager',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
    },
    {
        image: 'src/images/personnel-6-400x310.jpg',
        title: 'Jeneth Kings',
        designation: 'Chief Technology Officer',
        ph: '+1-334-3452-345',
        mail: 'Johnsm@financitytheme.com',
        titleLink: '/personnel',
    },
];

 function TeamListMemberCrd() {
   
    return (
        <div className="w-full">
            <div>
                <div className="max-w-7xl mx-auto px-4">
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {memberList?.map((item, index) => (
                            <div key={index}>
                            
                                { <MemberCard setCmp={item} /> }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TeamListMemberCrd;