import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/style.css'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container/>
        )
    }

}

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Main-Container">
                <Header/>
                <Body/>
            </div>
        )
    }

}

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Main-Header">Software House Idle</div>
        )
    }

}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalMoney: 0,
            moneyPerIdleSecond: 0,
            moneyPerClick: 1,
            workerOnePrice: 5,
            workerOneLevel: 0,
        };
    }

    componentWillUpdate(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.calculateMoney,1000);
    }


    addMoneyPerClick = () => {
        this.setState({
            totalMoney: this.state.totalMoney + this.state.moneyPerClick
        })
    };

    buyWorkerOne = () => {
        this.setState({
            workerOneLevel: this.state.workerOneLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerOnePrice * this.state.workerOneLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerOnePrice * 0.5),
        })
    };
    calculateMoney = () => {
        this.setState({
            totalMoney: this.state.totalMoney + this.state.moneyPerIdleSecond
        })
    };

    render() {
        return (
            <div className="Main-Body">
                <MainClickSection>
                    <ClickElement addMoneyPerClick={this.addMoneyPerClick}/>
                    <Stats moneyPerClick={this.state.moneyPerClick} moneyPerIdleSecond={this.state.moneyPerIdleSecond}
                           totalMoney={this.state.totalMoney}/>
                </MainClickSection>
                <MainImageSection/>
                <Assets buyWorkerOne={this.buyWorkerOne}
                />
            </div>
        )
    }

}

class MainClickSection extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="Left-Col">
                {this.props.children}
            </div>
        )
    }

}

class ClickElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Click-Image">
                <button onClick={this.props.addMoneyPerClick} className="Click-Button">
                    <pre>CODE IS GOING TO BE HERE</pre>
                </button>
            </div>
        )
    }

}

class Stats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Stats">
                <div>TOTAL MONEY: {this.props.totalMoney}</div>
                <div>MONEY PER SECOND: {this.props.moneyPerIdleSecond}</div>
                <div>MONEY PER CLICK: {this.props.moneyPerClick}</div>
            </div>
        )
    }

}

class MainImageSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Center-Col"></div>
        )
    }

}

class Assets extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Right-Col">
                <header className="Header-Workforce">Your Workforce</header>
                <div id="space"></div>
                <div id="worker1">
                    <button onClick={this.props.buyWorkerOne}>Junior Programmer</button>
                </div>
                <div id="worker2">
                    <button>Mid Programmer</button>
                </div>
                <div id="worker3">
                    <button>Senior Programmer</button>
                </div>
                <div id="worker4">
                    <button>Programming Specialist</button>
                </div>
                <div id="worker5">
                    <button>Programming Manager</button>
                </div>
                <div id="worker6">
                    <button>Analyst</button>
                </div>
                <div id="worker7">
                    <button>Experienced Analyst</button>
                </div>
                <div id="worker8">
                    <button>Analyze Manager</button>
                </div>
                <div id="worker9">
                    <button>Junior Tester</button>
                </div>
                <div id="worker10">
                    <button>Mid Tester</button>
                </div>
                <div id="worker11">
                    <button>Senior Tester</button>
                </div>
                <div id="worker12">
                    <button>Testing Manager</button>
                </div>
                <div id="worker13">
                    <button>Graphic Designer</button>
                </div>
                <div id="worker14">
                    <button>Experienced Graphic Designeer</button>
                </div>
                <div id="worker15">
                    <button>Graphic Manager</button>
                </div>
                <div id="worker16">
                    <button>Vice-President</button>
                </div>
                <div id="worker17">
                    <button>Assistant</button>
                </div>
                <div id="worker18">
                    <button>Head of Development</button>
                </div>

            </div>
        )
    }

}

document.addEventListener('DOMContentLoaded', function () {

    ReactDOM.render(
        <App/>,
        document.querySelector('#app')
    );

});