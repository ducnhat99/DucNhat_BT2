import Task from './Task'
import { useSelector, useDispatch } from 'react-redux'
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import * as React from 'react'

const AllTask = () => {
    const container = {
        display: 'flex',
        marginTop: '10px',
        flexWrap: 'wrap',
    }
    const pageLimit = 12;
    const [pageSlice, setPageSlice] = React.useState(0)
    const taskData = useSelector(state => state.listTask.data)
    const dispatch = useDispatch()
    const handleChange = (page, pageSize) => {
        setPageSlice((page - 1) * pageSize)
    }
    console.log(pageSlice)
    return (
        <div style={container}>
            {
                taskData.slice(pageSlice, pageLimit + pageSlice).map((item, index) => {
                    return <Task key={index} index={index} title={item.title} creator={item.creator} createAt={item.createAt} status={item.status} description={item.description} />
                })
            }
            <div style={{ width: '100%', textAlign: 'center' }}>
                <Pagination defaultCurrent={1} total={taskData.length} onChange={handleChange} pageSize={pageLimit} />
            </div>
        </div>
    )
}
export default AllTask