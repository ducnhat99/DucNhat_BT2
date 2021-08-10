import Task from './Task'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react'

const SearchTask = (props) => {
    const taskData = useSelector(state => state.listTask.data)
    const container = {
        display: 'flex',
        marginTop: '10px',
        flexWrap: 'wrap',
    }
    return (
        <div style={container}>
            {
                taskData.map((item, index) => {
                    if ((item.title === props.location.state.valueSearch) || (item.creator === props.location.state.valueSearch)) {
                        return <Task key={index} index={index} title={item.title} creator={item.creator} createAt={item.createAt} status={item.status} description={item.description} />
                    }
                })
            }
        </div>
    )
}
export default SearchTask