import * as React from 'react'

export default class Tattoo extends React.Component {
    static optionValue = 'Tattoo'

    render () {
        return (
            <g id='Marking/Tattoo' transform='translate(68, 16)'>
                {/* Crescent moon under left eye */}
                <path
                    d='M28 36
             A5 5 0 1 1 34 36
             A3 3 0 1 0 28 36Z'
                    fill='#333'
                    opacity='0.8'
                />
                {/* Decorative dots below moon */}
                <circle cx='31' cy='43' r='0.8' fill='#333' opacity='0.8' />
                <circle cx='31' cy='46' r='0.6' fill='#333' opacity='0.8' />
                <circle cx='31' cy='49' r='0.4' fill='#333' opacity='0.8' />
            </g>
        )
    }
}
