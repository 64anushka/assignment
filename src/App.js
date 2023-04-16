import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Navbar from './components/pages/navbar';
import Login from './components/pages/Login';
import UsersList from './components/pages/UserList';
import HomePage from './components/pages/home';
import DefaultList from './components/pages/DefaultList';
const client = new ApolloClient({uri: 'http://172.232.70.228:8080/api/gql', cache: new InMemoryCache()});

function App() {
    const accessToken = localStorage.getItem('accessToken');
    if (! accessToken) {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <Navbar title="TextUtils"/>
                    <div>
                        <Routes>
                            <Route exact path="/navbar"
                                element={<Navbar/>}></Route>
                            <Route exact path="/"
                                element={<HomePage/>}></Route>
                            <Route exact path="/home"
                                element={<HomePage/>}></Route>
                            <Route exact path="/login"
                                element={<Login/>}></Route>
                            <Route exact path="/defaultlist"
                                element={<DefaultList/>}></Route>
                        </Routes>
                    </div>
                </Router>
                {/* <Login /> */} </ApolloProvider>
        );
    } else {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <Navbar title="TextUtils"/>
                    <div>
                        <Routes>
                            <Route exact path="/navbar"
                                element={<Navbar/>}></Route>
                            <Route exact path="/"
                                element={<HomePage/>}></Route>
                            <Route exact path="/home"
                                element={<HomePage/>}></Route>
                            <Route exact path="/login"
                                element={<UsersList/>}></Route>
                            <Route exact path="/defaultlist"
                                element={<DefaultList/>}></Route>
                        </Routes>
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
