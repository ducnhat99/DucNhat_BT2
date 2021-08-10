import Task from './Task'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react'
const NewTask = () => {
    const container = {
        display: 'flex',
        marginTop: '10px',
        flexWrap: 'wrap',
    }
    const taskData = useSelector(state => state.listTask.data)
    return (
        <div style={container}>
            {
                taskData.map((item, index) => {
                    if (item.status === 'New') {
                        return <Task key={index} index={index} title={item.title} creator={item.creator} createAt={item.createAt} status={item.status} description={item.description} />
                    }
                })
            }
        </div>
    )
}
export default NewTask