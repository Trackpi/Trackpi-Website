import ProgressBar from '@ramonak/react-progress-bar';

const exper = [
    {
        WorkExpdate: '2013-Present',
        company: 'CTO, Senior Software Engineer of Apple Co.',
    },
    {
        WorkExpdate: '2008-2013',
        company: 'Senior Software Development, Project Manager, Cisco Network',
    },
    {
        WorkExpdate: '2000-2008',
        company: 'Team Leader, Software Design and Development, Asus',
    },
    {
        WorkExpdate: '1997-2000',
        company: 'Massachusetts Institute of Technology, Computer Engineering',
    },
];

function SkillWithBiography() {
    return (
        <div className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20 px-8">
                {/* Biography Section */}
                <div>
                    <div className="text-lg font-semibold tracking-wider text-gray-900 mb-5 uppercase">
                        BIOGRAPHY
                    </div>
                    <p className="leading-7 mt-0 mb-5 text-gray-500 text-base">
                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
                        which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot,
                        which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed
                        in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be
                        incapable of drawing a single stroke at the present moment. I throw myself down among the tall
                        grass by the trickling stream; and, as I lie close to the earth. Thousand unknown plants are
                        noticed by me. When I hear the buzz of the little world among the stalks, and grow familiar with
                        the countless. Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                    </p>
                </div>
                {/* Skills Section */}
                <div className="px-4">
                    <div className="text-lg font-semibold tracking-wider text-gray-900 mb-5 uppercase">SKILLS</div>
                    <div>
                        {[{ skill: 'PHOTOGRAPHY', level: 85 },
                        { skill: 'ANIMATION', level: 100 },
                        { skill: 'CODING SKILL', level: 90 },
                        { skill: 'WORDPRESS', level: 97 }].map((item, index) => (
                            <div key={index} className="mb-6">
                                <div className="flex justify-between">
                                    <div className="text-xs font-semibold uppercase tracking-wide text-gray-900 mb-3">
                                        {item.skill}
                                    </div>
                                    <div className="text-xs font-semibold text-gray-900">{item.level}%</div>
                                </div>
                                <ProgressBar
                                    barContainerClassName="w-full bg-gray-300"
                                    isLabelVisible={false}
                                    completed={item.level}
                                    bgColor="#4f46e5"
                                    height="7px"
                                    baseBgColor="#b7bfca"
                                    transitionDuration="4s"
                                    transitionTimingFunction="ease"
                                    animateOnRender
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Chronology Section */}
            <div className="px-8">
                <div className="text-lg font-semibold tracking-wider text-gray-900 mb-5 uppercase">CHRONOLOGY</div>
                <div>
                    {exper.map((item, index) => (
                        <div key={index} className="mb-4">
                            <div className="text-sm font-medium text-gray-900 leading-7">{item.WorkExpdate}</div>
                            <div className="text-sm font-medium text-gray-500 leading-7">{item.company}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillWithBiography;
