import * as React from 'react'

export default class Stud extends React.Component {
    static optionValue = 'Stud'

    render () {
        return (
            <g id='Earring/Stud'>
                {/* Left stud */}
                <circle cx='73' cy='129' r='2.5' fill='#FFD700' />
                {/* Right stud */}
                <circle cx='191' cy='129' r='2.5' fill='#FFD700' />
            </g>
        )
    }
}
