import React from 'react'
import { JsxElement } from 'typescript'

type Props = {
    children: JSX.Element
}

const Main: React.FC<Props> = ({ children }) => {
    return (
        <div className='col-span-6 bg-white'>
            {children}
        </div>
    )
}

export default Main