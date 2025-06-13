import * as React from 'react'

import Scar from './Scar'
import Tattoo from './Tattoo'
import WarPaint from './WarPaint'
import { MarkingOption, Selector } from '../../options'

export default class Marking extends React.Component {
    render () {
        return (
            <Selector defaultOption={Scar} option={MarkingOption}>
                <Scar />
                <Tattoo />
                <WarPaint />
            </Selector>
        )
    }
}
