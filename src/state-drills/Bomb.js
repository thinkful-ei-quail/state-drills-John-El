import React,{Component} from 'react';


class Bomb extends React.Component{
    state={
        count:10

    };

    componentDidMount(){
        this.interval = setInterval(() =>{
            this.setState({count: this.state.count-1})
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
      }

     tickOrTock() {

         const{count} = this.state

         if ( count <= 0){
            clearInterval(this.interval)
             return 'заграждение!!!'
         }
         else if (count % 2 === 0)
          {return 'ТИК'}
          else{ return 'Так'}
     }

    render(){
        return(
            <div className='countdown'>
                <p>{this.tickOrTock()}</p>
            </div>
        )
    }
}


export default Bomb;
