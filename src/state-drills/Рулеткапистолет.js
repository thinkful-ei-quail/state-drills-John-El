//Рулеткапистолет
import React, { Component } from 'react';

export default class Рулеткапистолет extends Component {
    static defaultProps = {
        bulletInChamber: 6
    };

    state = {
        chamber: null,
        spinning: false
    };

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handlePullTrigger = () => {
        this.setState({
            spinning: true,
         })
        this.timeout = setTimeout(() => {
            const chamberNum = Math.ceil(Math.random() * 6)

            this.setState({
                chamber: chamberNum,
                spinning: false
            })
            console.log({ chamberNum })
        }, 2000)
    }

    renderDisplay() {
        const { chamber, spinning } = this.state
        const { bulletInChamber } = this.props
        if (spinning) {
            return 'вращая камеру и нажимая на курок! ...'
        } else if (chamber === bulletInChamber) {
            return 'Взрыв !!!'
        }  else {
            return 'Все еще жив'
        }
    }

    render() {
        return (
            <div className='Gun Child'>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handlePullTrigger}>
                    Спусковой крючок
                </button>
            </div>
        )
    }
}
