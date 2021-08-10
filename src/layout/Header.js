import { Button, Input, Space } from 'antd';
import * as React from 'react'
import 'antd/dist/antd.css';
import {
    Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addTask, resetTask } from '../listTask/listTaskSlice'

const Header = () => {
    const taskData = useSelector(state => state.listTask.data)
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = React.useState(null)
    const container = {
        height: '15%',
        width: '100%',
        background: '#675BF1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    const createTaskStyle = {
        width: '200px', height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '10px'
    }
    return (
        <div style={container}>
            <div style={createTaskStyle}>
                <Link to="create">
                    <Button ghost size='large'>Create New Task</Button>
                </Link>
                <Button ghost size='large' style={{ marginLeft: '10px' }} onClick={() => dispatch(resetTask())}>Reset</Button>
            </div>
            <div style={{ display: 'flex', width: '40%' }}>
                <Input style={{ width: '70%' }} placeholder="Type something to search" onChange={(e) => setValueSearch(e.target.value)} />
                <Link to={{
                    pathname: `/search`,
                    state: { valueSearch }
                }}>
                    <Button type="primary">Search</Button>
                </Link>
            </div>

        </div >
    )
}

export default Header