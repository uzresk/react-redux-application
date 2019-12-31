import React from 'react';

const App = () => {
    return (
        <div>
            <Cat/>
            <Cat/>
            <Cat/>
            <Cat/>
        </div>
    )
};

const Cat = () => {
    return <div>Meow!</div>
};

export default App;
