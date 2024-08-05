import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// wrong syntax
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

// right syntax
const reactAnotherElement = (
    <a href="https://google.com" target="_blank">Click me to visit Google</a>
)

const anotherUser= "Rup"

const reactNextElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Visit Google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
    // <App />
    // <MyApp />
    // reactElement
    // reactAnotherElement
    reactNextElement

)
