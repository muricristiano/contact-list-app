import { AddressBook } from "phosphor-react"
import { Plus } from 'phosphor-react'

import { HeaderStyles } from "./Header-styles.ts"
import { NavLink } from 'react-router-dom'

export function Header(){
    return (
        <HeaderStyles> 
            <nav>
            <NavLink to="/" title="List">
                <AddressBook className="icon" size={36} />
                <p>Contacts</p>
            </NavLink>
            <NavLink to="/new" title="New">
                <Plus className="icon" size={36} /> 
                <p>New Contact</p>
            </NavLink>
            </nav>
        </HeaderStyles>
    )
}