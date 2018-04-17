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
            moneyPerClick: 1
        }
    }

    addMoneyPerClick = () => {
        this.setState({
            totalMoney: this.state.totalMoney + this.state.moneyPerClick
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
                <Assets/>
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
                    <button>Junior Programmer</button>
                </div>
                <div id="worker2">Mid Programmer</div>
                <div id="worker3">Senior Programmer</div>
                <div id="worker4">Programming Specialist</div>
                <div id="worker5">Programming Manager</div>
                <div id="worker6">Analyst</div>
                <div id="worker7">Experienced Analyst</div>
                <div id="worker8">Analyze Manager</div>
                <div id="worker9">Junior Tester</div>
                <div id="worker10">Mid Tester</div>
                <div id="worker11">Senior Tester</div>
                <div id="worker12">Testing Manager</div>
                <div id="worker13">Graphic Designer</div>
                <div id="worker14">Experienced Graphic Designeer</div>
                <div id="worker15">Graphic Manager</div>
                <div id="worker16">Vice-President</div>
                <div id="worker17">Assistant</div>
                <div id="worker18">Head of Development</div>

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