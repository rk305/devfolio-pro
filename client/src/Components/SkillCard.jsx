import React from 'react'

function SkillCard({ icon: Icon, name, color }) {
    return (
        <div className='group bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-blue-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer'>
            <Icon className={`text-5xl ${color} transition-all duration-300 group-hover:scale-110`} />
            <h3 className='font-semibold text-lg'>
                {name}
            </h3>

        </div>
    )
}

export default SkillCard
