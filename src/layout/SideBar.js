import * as React from 'react'
import {
    Link
} from "react-router-dom";
import EditTask from '../components/EditTask'

const SideBar = () => {
    const container = {
        height: '85%',
        width: '20%',
        background: '#F88F14'
    }
    return (
        <div style={container}>
            <div>
                <nav>
                    <ul style={{ listStyle: 'none', padding: '0' }}>
                        <li style={{ borderBottom: 'solid #fff' }}>
                            <Link to="/" style={{ color: '#fff' }}>All Task</Link>
                        </li>
                        <li style={{ borderBottom: 'solid #fff' }}>
                            <Link to="/new" style={{ color: '#fff' }}>New Task</Link>
                        </li>
                        <li style={{ borderBottom: 'solid #fff' }}>
                            <Link to="/doing" style={{ color: '#fff' }}>Doing Task</Link>
                        </li>
                        <li style={{ borderBottom: 'solid #fff' }}>
                            <Link to="/done" style={{ color: '#fff' }}>Done Task</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default SideBar