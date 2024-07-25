import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Layout/Navbar';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import ProfileForm from './components/Profile/ProfileForm';
import TaskList from './components/Tasks/TaskList';

const App = () => {
    return (
        <AuthProvider>
            <TaskProvider>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/login" component={LoginForm} />
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/profile" component={ProfileForm} />
                        <Route path="/tasks" component={TaskList} />
                        <Route path="/" exact component={TaskList} />
                    </Switch>
                </Router>
            </TaskProvider>
        </AuthProvider>
    );
};

export default App;
