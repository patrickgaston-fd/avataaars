import * as React from 'react'

export default class WarPaint extends React.Component {
    static optionValue = 'WarPaint'

    render () {
        return (
            <g id='Marking/WarPaint'>
                {/* Left eye warpaint */}
                <path
                    d='M15 44 Q32.5 38, 50 44 Q32.5 52, 15 44'
                    fill='#cc0000'
                    opacity='0.85'
                />

                {/* Right eye warpaint */}
                <path
                    d='M67 44 Q84.5 38, 102 44 Q84.5 52, 67 44'
                    fill='#cc0000'
                    opacity='0.85'
                />
            </g>
        )
    }
}
