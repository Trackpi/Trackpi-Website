//import React from 'react'

import PersonnelContactInfo from "./personnelContactInfo";
import SkillWithBiography from "./skillWithBiography";

export default function PersonnelDetailBlk() {
    return (
        <div>
            <div className='w-full h-full container'>
                <SkillWithBiography />
            </div>
            <PersonnelContactInfo />
        </div>
    )
}
