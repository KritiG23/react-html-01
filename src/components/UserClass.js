import React from 'react';
class UserClass extends React.Component{
    constructor(props)
    {
        super(props)
        // this.state={
        //     count : 0
        //     // count1 : "0"
        // }
        this.state={
            useInfo:[]
        }
       
    }
    async componentDidMount() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data)
        this.setState({
             useInfo:data
        })

    }
    componentDidUpdate() {
            console.log("update")
    }
  componentWillUnmount() {
    console.log("unmount")
  }
   
    render(){
         //const {name} = this.state;
         const{useInfo} = this.state
         console.log(useInfo)
        return(
            
        <div className="userCrad">
            {/* <h2>count: {this.state.count}</h2> */}
            {/* <button onClick={()=>{this.setState({count:this.state.count+1})}}>increase</button> */}
            {/* <h2>count: {this.state.count1}</h2> */}
            {useInfo?.map((item)=>{
                return(
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                    </div>
                )
            })}
        {/* <h5>username{name}</h5> */}
        {/* <h5>education {edu}</h5> */}
    </div>
        )
    }
}
export default UserClass