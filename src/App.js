import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactAudioPlayer from 'react-audio-player';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        );
    }
}

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { seconds: 0, minutes: 0, hours: 0 };

    }

    tick() {
        const secondHand = document.querySelector('.second-hand');
        const minuteHand = document.querySelector('.min-hand');
        const hoursHand = document.querySelector('.hour-hand');
        var d = new Date();
        var Currentsecond = d.getSeconds();
        var CurrentMinute = d.getMinutes();
        var CurrentHour = d.getHours();

        this.setState(function (prevState, props) {
           // console.log(prevState);
            const secondsDegress = (Currentsecond / 60) * 360 + 90;
            secondHand.style.transform = `rotate(${secondsDegress}deg)`;
            console.log(secondsDegress);
            const minsDegrees = ((CurrentMinute / 60) * 360) + ((Currentsecond / 60) * 6) + 90;
            minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
            const hourDegrees = ((CurrentHour / 12) * 360) + ((CurrentMinute / 60) * 30) + 90;
            hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
             return {
                seconds: Currentsecond,
                minutes: CurrentMinute,
                hours: CurrentHour,
            }
        })

    }
  



    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Hours:{this.state.hours} :
                Minutes: {this.state.minutes} :
                seconds: {this.state.seconds}

                <div className="clock">
                    <div className="clock-face">
                        <div className="hand hour-hand"></div>
                        <div className="hand min-hand"></div>
                        <div className="hand second-hand"></div>
                    </div>

                </div>

            </div>

        );
    }
}

export default Timer;
