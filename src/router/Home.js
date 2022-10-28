import React from 'react';

const Home = ({userName}) => {
    return (
        <div style={{display:'flex', alignItems:'center',justifyContent:"center", flexGrow:1}}>
            <h1>Добро пожаловать, {userName}</h1>
        </div>
    );
};

export default Home;