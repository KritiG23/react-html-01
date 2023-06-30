{/* <div id="parent">
    <div id="child">
        <h1>child</h1>
         <h2>child</h2>
    </div>
    <div id="parent">
    <div id="child">
        <h1>child</h1>
         <h2>child</h2>
    </div>
</div> */}
//react element(object) = html(browser understood) 
const parent =[React.createElement("div" , {id: "parent"},
React.createElement("div" , {id: "child"}, [
    React.createElement("h1" , {}, "hello nested"
    ),
    React.createElement("h2" , {}, "hello nested inner")]
)),
React.createElement("div" , {id: "parent"},
React.createElement("div" , {id: "child"}, [
    React.createElement("h1" , {}, "hello2 nested"
    ),
    React.createElement("h2" , {}, "hello nested2 inner")]
))
]

//const heading = React.createElement("h1", {id:"xyz"} ,"hello world")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);