import React from 'react'

const SectionHeading = ({title, subtitle}) => {
    return (
        <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded  overflow-hidden">
                <div class="w-48  h-full bg-indigo-500 "></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">{title}</h1>
                <p class="sm:w-3/5 leading-relaxed text-lg sm:pl-10 pl-0">{subtitle}</p>
            </div>
        </div>
    )
}

export default SectionHeading
