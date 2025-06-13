import * as React from 'react'

export default class Scar extends React.Component {
    static optionValue = 'Scar'

    render () {
        return (
            <g id='Marking/Scar' transform='translate(0, -30)'>
                {/* Jagged scar over the right eyebrow area */}
                <path
                    d='M75,13 L78,16 L76,18 L80,20 L78,23 L82,25'
                    stroke='#8B0000'
                    strokeWidth='2'
                    strokeLinecap='round'
                    fill='none'
                />
            </g>
        )
    }
}
