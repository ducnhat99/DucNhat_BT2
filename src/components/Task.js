import { Link } from "react-router-dom"

const Task = (props) => {
    const container = {
        border: 'solid 2px #675BF1',
        marginLeft: '20px',
        marginBottom: '10px',
        width: '22%',
        height: '190px',
        borderRadius: '5px',
        lineHeight: '16px'
    }
    const styleDescription = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        lineHeight: '20px',
        webkitLineClamp: '3',
        display: '-webkit-box',
        webkitBoxOrient: 'vertical',
        wordWrap: 'break-word',
    }
    const colorStatus = () => {
        if (props.status === 'New') {
            return '#04BE00'
        }
        if (props.status === 'Doing') {
            return '#F88F14'
        }
        else { return '#675BF1' }
    }
    return (
        <div style={container}>
            <Link to={{
                pathname: `/edit`,
                state: { index: props.index, title: props.title, create: props.creator, createAt: props.createAt, status: props.status, description: props.description }
            }}>
                <div style={{ color: '#000', lineHeight: '12px' }}>
                    <p><b>Title: {props.title}</b></p>
                    <p>Creator: {props.creator}</p>
                    <p>Create At: {props.createAt}</p>
                    <p style={{ color: colorStatus() }}>Status: {props.status}</p><hr />
                    <p style={styleDescription}><b>Description:</b><br />{props.description}</p>
                </div>
            </Link>
        </div >
    )
}
export default Task