import React from 'react'

const App = () => {

    return (

        <div>

            <h3>dasjdghqwle</h3>
            <h1>Hodas</h1>
            <button onClick={() => {
                electron.notificationApi.sendNotification("Hola");
            }}>Notify</button>

        </div>
  
    )

}

export default App
