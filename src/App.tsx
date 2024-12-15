import React, {useState} from 'react';

const App: React.FC = () => {
    const [name, setName] = useState<string>('React');
    return (
        <h1>Bonjour, {name} !</h1>
    )
}

export default App;