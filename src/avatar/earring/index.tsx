import * as React from 'react'

import None from './None'
import Hoop from './Hoop'
import Tribal from './Tribal'
import Stud from './Stud'
import {EarringOption, Selector} from '../../options'

export default class Earring extends React.Component {
    render () {
        return (
            <Selector defaultOption={None} option={EarringOption}>
                <None/>
                <Stud />
                <Hoop />
                <Tribal />
            </Selector>
        )
    }
}
