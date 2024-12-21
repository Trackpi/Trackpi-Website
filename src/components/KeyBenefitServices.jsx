import React from 'react'

function KeyBenefitServices() {
    const features = [
        {
            id: 1,
            name: "Enhanced Productivity",
            description: "Empower your team to work smarter and achieve more in less time.",
        },
        {
            id: 2,
            name: "Improved Communication",
            description: "Strengthen collaboration and create a cohesive team environment.",
        },
        {
            id: 3,
            name: "Increased Profitability",
            description: "Leverage efficient processes to maximize revenue and minimize waste.",
        },
    ];
  return (
    <div className='mt-20'>
         <div
                    className="w-full mt-10 mx-auto ">
                        <h1 style={{ color:"#FFC100" }} className=" mb-4 text-[2.75rem] text-center font-bold">
                        Key Benefits of Our Training
                        </h1>
                    </div>
                    <div className=" px-5 lg:px-20 mt-10 w-full mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center">
    {features.map((card) => (
        <div
            key={card.id}
            className=" p-7 bg-gradient-to-r from-[#FFD152] via-[#FFC100] to-[#FFD152] rounded-lg shadow-lg text-center cursor-pointer flex flex-col  h-full"
        >
            <h3 className="text-black mt-4 font-semibold text-base md:text-xl lg:text-3xl">
                {card.name}
            </h3>
            <p className="text-black font-medium mt-2 text-base md:text-xl lg:text-2xl">
                {card.description}
            </p>
        </div>
    ))}
</div>
    </div>
  )
}

export default KeyBenefitServices