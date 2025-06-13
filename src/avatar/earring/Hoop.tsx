import * as React from 'react'

export default class Hoop extends React.Component {
    static optionValue = 'Hoop'

    render () {
        return (
            <g id='Earring/Hoop'>
                {/* Left gold hoop - lowered by updating transform center */}
                <path
                    d='M36,129 A8,8 0 1,1 44,129'
                    stroke='#FFD700'
                    strokeWidth='4'
                    fill='none'
                    strokeLinecap='round'
                    transform='rotate(180, 40, 129)'  // Moved from y=115 to y=129
                />

                {/* Right gold hoop - lowered by updating transform center */}
                <path
                    d='M218,129 A8,8 0 1,1 226,129'
                    stroke='#FFD700'
                    strokeWidth='4'
                    fill='none'
                    strokeLinecap='round'
                    transform='rotate(180, 222, 129)'
                />
            </g>
        )
    }
}
