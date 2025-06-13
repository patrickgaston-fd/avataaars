import * as React from 'react'

export default class Hoop extends React.Component {
    static optionValue = 'Hoop'

    render () {
        return (
            <g id='Earring/Hoop'>
                <path
                    d='M64,129 A8,8 0 1,1 72,129'
                    stroke='#FFD700'
                    strokeWidth='4'
                    fill='none'
                    strokeLinecap='round'
                    transform='rotate(180, 68, 129)'
                />

                <path
                    d='M191,129 A8,8 0 1,1 199,129'
                    stroke='#FFD700'
                    strokeWidth='4'
                    fill='none'
                    strokeLinecap='round'
                    transform='rotate(180, 195, 129)'
                />
            </g>
        )
    }
}
