import * as React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import CreateTask from '../components/CreateTask'
import EditTask from '../components/EditTask'
import AllTask from '../components/AllTask'
import NewTask from '../components/NewTask'
import DoingTask from '../components/DoingTask';
import DoneTask from '../components/DoneTask';
import SearchTask from '../components/SearchTask';

const Body = () => {
    const container = {
        width: '80%',
        height: '85%',
    }
    return (
        <div style={container}>
            <Switch>
                <Route exact path="/" component={AllTask} />
                <Route path="/new" component={NewTask} />
                <Route path="/doing" component={DoingTask} />
                <Route path="/done" component={DoneTask} />
                <Route path="/create" component={CreateTask} />
                <Route path="/edit" component={EditTask} />
                <Route path="/search" component={SearchTask} />
            </Switch>
        </div>
    )
}
export default Body