import { Link } from 'gatsby'
import React from 'react'

export default function Navbar () {
    return (
        <div>
            <b>Switchblade</b> <Link to='/commands'>Commands</Link> <Link to='/#'>Features</Link> <Link to='/help'>Help</Link>
            <hr/>
        </div>
    )
}