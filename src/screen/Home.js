import * as React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import CreateTask from '../components/CreateTask'
import Header from '../layout/Header'
import SideBar from '../layout/SideBar'
import EditTask from '../components/EditTask'
import AllTask from '../components/AllTask'
import Body from '../layout/Body'
const Home = () => {
    const container = {
        width: ' 1024px',
        margin: '0 auto',
        border: 'solid',
        height: '800px',
        display: 'flex',
        flexWrap: 'wrap'
    }
    return (
        <div style={container}>
            <BrowserRouter>
                <Header />
                <SideBar />
                <Body />
            </BrowserRouter>
        </div>
    )
}

export default Home