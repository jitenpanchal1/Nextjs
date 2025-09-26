"use client"
import { useDispatch, useSelector } from 'react-redux'
import "../../theme.css"
import { toggle } from '@/reduxstore/slices/themeslice'

export default function page() {

    const mode = useSelector((state) => state.theme.mode)
    const dispach = useDispatch()
    return (
        <div className={`w100 ${mode}`}>
            
            <button className='butn' onClick={() => dispach(toggle())}>
                Click to change background this is mode : {mode}
            </button>
        </div>
    )
}
