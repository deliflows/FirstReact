function App(){
    let favoriteNumber = 10;
    let myFavoriteArray = ["a", "b", "c"];
    let aRandomnumber = Math.floor(Math.random()*10)
    // if (aRandomnumber < 5){
        return(
            <div>
                <h1>I'm building the App</h1>
                <p>But in a seperate file</p>
                <p style={{
                    color:"red",
                    border:"2px solid blue"}}>
                    My favorite number is {favoriteNumber}!</p>
                <p>My favorite array is {myFavoriteArray}!</p>
                <p>I can add here {5 + 7}!</p>
                <p>A random number:{Math.floor(Math.random()*10)}!</p>
                {/* Booleans do not show up */}
                <p>A boolean:{true}!</p>
                <p className="look-at-me"></p>
                <input type="text"/>
                <textarea autoFocus maxLength={12} ></textarea>
                <button>Click me!</button>
            </div>
        )
    }
    // else{
    //     return(
    //         <div>
    //             <h1>Whoa! a big number!</h1>
    //         </div>
    //     )
    // }

// }

export default App;