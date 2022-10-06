import React from "react"

export function Header() {
    const styles = {
        padding: '.7rem',
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        boxShadow: '0 0 3px rgba(0,0,0, .5)',
    }
    return <nav style={{...styles}}>
        <h1>ToDoApp</h1>
    </nav>
}