import * as React from 'react'

export default class Tribal extends React.Component {
    static optionValue = 'Tribal'

    render () {
        return (
            <g id='Earring/Tribal'>
                 {/*Tribal earring with extended loop */}
                <path
                    d='M63,129 A8,8 0 0,0 71,129'
                    stroke='#222'
                    strokeWidth='3'
                    fill='none'
                />

                {/* Right tribal earring - shifted left by 27px total */}
                <path
                    d='M193,129 A8,8 0 0,0 201,129'
                    stroke='#222'
                    strokeWidth='3'
                    fill='none'
                />
            </g>
        )
    }
}
