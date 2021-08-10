import { Button, Input, Radio } from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom';
import { editTask, deleteTask } from '../listTask/listTaskSlice'

const CreateTask = (props) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [isTitle, setIsTitle] = React.useState(null)
    const [isCreator, setIsCreate] = React.useState(null)
    const [isTime, setIsTime] = React.useState(null)
    const [isDescription, setIsDescription] = React.useState(null)
    const [isStatus, setIsStatus] = React.useState(props.location.state.status)
    const indexTask = props.location.state.index
    function range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }
    function disabledDate(current) {
        return current && current < moment().endOf('day');
    }

    function disabledDateTime() {
        return {
            disabledHours: () => range(0, 24).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }
    const container = {
        width: '100%'
    }
    const boxCreateTask = { width: '60%', margin: '0 auto', paddingTop: '30px' }
    return (
        <div style={container}>
            <div style={boxCreateTask}>
                <div>
                    <label>Title</label>
                    <Input placeholder={props.location.state.title} value={isTitle} onChange={(e) => setIsTitle(e.target.value)} />
                    <label>Creator</label>
                    <Input placeholder={props.location.state.create} value={isCreator} onChange={(e) => setIsCreate(e.target.value)} />
                    <Space direction="vertical" size={12}>
                        <label>Created at</label>
                        <DatePicker disabledDate={disabledDate}
                            placeholder={props.location.state.createAt}
                            disabledTime={disabledDateTime}
                            renderExtraFooter={() => 'extra footer'} showTime onChange={(date, dateString) => setIsTime(dateString)} />
                    </Space><br />
                    <label>Description</label>
                    <Input placeholder={props.location.state.description} value={isDescription} onChange={(e) => setIsDescription(e.target.value)} />
                    <Radio.Group onChange={(e) => { setIsStatus(e.target.value) }} value={isStatus}>
                        <Radio value={'New'}>New</Radio>
                        <Radio value={'Doing'}>Doing</Radio>
                        <Radio value={'Done'}>Done</Radio>
                    </Radio.Group>
                </div><br></br>
                <div style={{ width: '90%', display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button type="primary" onClick={() => {
                        if (isTitle && isCreator && isTime && isDescription) {
                            dispatch(editTask({ index: indexTask, title: isTitle, creator: isCreator, createAt: isTime, status: isStatus, description: isDescription }))
                            history.push('/')
                        }
                        else {
                            return alert("Vui lòng nhập dữ liệu vào")
                        }
                    }}>Save</Button>
                    <Button type="primary" onClick={() => {
                        setIsTitle("")
                        setIsCreate("")
                        setIsTime("")
                        setIsDescription("")
                    }}>Reset</Button>
                    <Button type="primary" onClick={() => {
                        const checkDelete = window.confirm("Bạn có muốn xóa task này không ?")
                        if (checkDelete) {
                            dispatch(deleteTask(indexTask))
                            history.push('/')
                        }
                    }}>Delete</Button>
                </div>
            </div>
        </div>
    )
}
export default CreateTask