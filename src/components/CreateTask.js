import { Button, Input } from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { addTask } from '../listTask/listTaskSlice'

const CreateTask = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [isTitle, setIsTitle] = React.useState(null)
    const [isCreator, setIsCreate] = React.useState(null)
    const [isTime, setIsTime] = React.useState(null)
    const [isDescription, setIsDescription] = React.useState(null)
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
                    <Input placeholder="Title" value={isTitle} onChange={(e) => setIsTitle(e.target.value)} />
                    <label>Creator</label>
                    <Input placeholder="Name of Creator" value={isCreator} onChange={(e) => setIsCreate(e.target.value)} />
                    <Space direction="vertical" size={12}>
                        <label>Created at</label>
                        <DatePicker disabledDate={disabledDate}
                            disabledTime={disabledDateTime}
                            renderExtraFooter={() => 'extra footer'} showTime onChange={(date, dateString) => setIsTime(dateString)} />
                    </Space><br />
                    <label>Description</label>
                    <Input placeholder="Description Details" value={isDescription} onChange={(e) => setIsDescription(e.target.value)} />
                </div><br></br>
                <div style={{ textAlign: 'center' }}>
                    <Button type='primary' onClick={() => {
                        if (isTitle && isCreator && isTime && isDescription) {
                            dispatch(addTask({ title: isTitle, creator: isCreator, createAt: isTime, status: 'New', description: isDescription }))
                            history.push('/new')
                        }
                        else {
                            return alert("Vui lòng nhập đầy đủ dữ liệu vào")
                        }
                    }}>Save</Button>
                </div>
            </div>
        </div>
    )
}
export default CreateTask