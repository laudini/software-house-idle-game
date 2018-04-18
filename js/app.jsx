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
            workerOneLevel: 1,

            workerTwoPrice: 500,
            workerTwoLevel: 1,

            workerThreePrice: 5000,
            workerThreeLevel: 1,

            workerFourPrice: 50000,
            workerFourLevel: 1,

            workerFivePrice: 500000,
            workerFiveLevel: 1,

            workerSixPrice: 5000000,
            workerSixLevel: 1,

            workerSevenPrice: 50000000,
            workerSevenLevel: 1,

            workerEightPrice: 500000000,
            workerEightLevel: 1,

            workerNinePrice: 5000000000,
            workerNineLevel: 1,

            workerTenPrice: 50000000000,
            workerTenLevel: 1,

            workerElevenPrice: 500000000000,
            workerElevenLevel: 1,

            workerTwelvePrice: 5000000000000,
            workerTwelveLevel: 1,

            workerThirteenPrice: 50000000000000,
            workerThirteenLevel: 1,

            workerFourteenPrice: 500000000000000,
            workerFourteenLevel: 1,

            workerFifteenPrice: 5000000000000000,
            workerFifteenLevel: 1,

            workerSixteenPrice: 50000000000000000,
            workerSixteenLevel: 1,

            workerSeventeenPrice: 500000000000000000,
            workerSeventeenLevel: 1,

            workerEighteenPrice: 5000000000000000000,
            workerEighteenLevel: 1,


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
    buyWorkerTwo = () => {
        this.setState({
            workerTwoLevel: this.state.workerTwoLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerTwoPrice * this.state.workerTwoLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerTwoPrice * 0.5),
        })
    };
    buyWorkerThree = () => {
        this.setState({
            workerThreeLevel: this.state.workerThreeLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerThreePrice * this.state.workerThreeLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerThreePrice * 0.5),
        })
    };
    buyWorkerFour = () => {
        this.setState({
            workerFourLevel: this.state.workerFourLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerFourPrice * this.state.workerFourLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerFourPrice * 0.5),
        })
    };
    buyWorkerFive = () => {
        this.setState({
            workerFiveLevel: this.state.workerFiveLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerFivePrice * this.state.workerFiveLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerFivePrice * 0.5),
        })
    };
    buyWorkerSix = () => {
        this.setState({
            workerSixLevel: this.state.workerSixLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerSixPrice * this.state.workerSixLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerSixPrice * 0.5),
        })
    };
    buyWorkerSeven = () => {
        this.setState({
            workerSevenLevel: this.state.workerSevenLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerSevenPrice * this.state.workerSevenLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerSevenPrice * 0.5),
        })
    };
    buyWorkerEight = () => {
        this.setState({
            workerEightLevel: this.state.workerEightLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerEightPrice * this.state.workerEightLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerEightPrice * 0.5),
        })
    };
    buyWorkerNine = () => {
        this.setState({
            workerNineLevel: this.state.workerNineLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerNinePrice * this.state.workerNineLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerNinePrice * 0.5),
        })
    };
    buyWorkerTen = () => {
        this.setState({
            workerTenLevel: this.state.workerTenLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerTenPrice * this.state.workerTenLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerTenPrice * 0.5),
        })
    };
    buyWorkerEleven = () => {
        this.setState({
            workerElevenLevel: this.state.workerElevenLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerElevenPrice * this.state.workerElevenLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerElevenPrice * 0.5),
        })
    };
    buyWorkerTwelve = () => {
        this.setState({
            workerTwelveLevel: this.state.workerTwelveLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerTwelvePrice * this.state.workerTwelveLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerTwelvePrice * 0.5),
        })
    };
    buyWorkerThirteen = () => {
        this.setState({
            workerThirteenLevel: this.state.workerThirteenLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerThirteenPrice * this.state.workerThirteenLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerThirteenPrice * 0.5),
        })
    };
    buyWorkerFourteen = () => {
        this.setState({
            workerFourteenLevel: this.state.workerFourteenLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerFourteenPrice * this.state.workerFourteenLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerFourteenPrice * 0.5),
        })
    };
    buyWorkerFifteen = () => {
        this.setState({
            workerFifteenLevel: this.state.workerFifteenLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerFifteenPrice * this.state.workerFifteenLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerFifteenPrice * 0.5),
        })
    };
    buyWorkerSixteen = () => {
        this.setState({
            workerSixteenLevel: this.state.workerSixteenLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerSixteenPrice * this.state.workerSixteenLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerSixteenPrice * 0.5),
        })
    };
    buyWorkerSeventeen = () => {
        this.setState({
            workerSeventeenLevel: this.state.workerSeventeenLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerSeventeenPrice * this.state.workerSeventeenLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerSeventeenPrice * 0.5),
        })
    };
    buyWorkerEighteen = () => {
        this.setState({
            workerEighteenLevel: this.state.workerEighteenLevel + 1,
            totalMoney: this.state.totalMoney - (this.state.workerEighteenPrice * this.state.workerEighteenLevel),
            moneyPerIdleSecond: this.state.moneyPerIdleSecond + (this.state.workerEighteenPrice * 0.5),
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
                        buyWorkerTwo={this.buyWorkerTwo}
                        buyWorkerThree={this.buyWorkerThree}
                        buyWorkerFour={this.buyWorkerFour}
                        buyWorkerFive={this.buyWorkerFive}
                        buyWorkerSix={this.buyWorkerSix}
                        buyWorkerSeven={this.buyWorkerSeven}
                        buyWorkerEight={this.buyWorkerEight}
                        buyWorkerNine={this.buyWorkerNine}
                        buyWorkerTen={this.buyWorkerTen}
                        buyWorkerEleven={this.buyWorkerEleven}
                        buyWorkerTwelve={this.buyWorkerTwelve}
                        buyWorkerThirteen={this.buyWorkerThirteen}
                        buyWorkerFourteen={this.buyWorkerFourteen}
                        buyWorkerFifteen={this.buyWorkerFifteen}
                        buyWorkerSixteen={this.buyWorkerSixteen}
                        buyWorkerSeventeen={this.buyWorkerSeventeen}
                        buyWorkerEighteen={this.buyWorkerEighteen}
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
                <div>TOTAL MONEY:</div><div>{this.props.totalMoney}</div>
                <div>MONEY PER SECOND:</div><div>{this.props.moneyPerIdleSecond}</div>
                <div>MONEY PER CLICK:</div><div>{this.props.moneyPerClick}</div>
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
                    <button onClick={this.props.buyWorkerTwo}>Mid Programmer</button>
                </div>
                <div id="worker3">
                    <button onClick={this.props.buyWorkerThree}>Senior Programmer</button>
                </div>
                <div id="worker4">
                    <button onClick={this.props.buyWorkerFour}>Programming Specialist</button>
                </div>
                <div id="worker5">
                    <button onClick={this.props.buyWorkerFive}>Programming Manager</button>
                </div>
                <div id="worker6">
                    <button onClick={this.props.buyWorkerSix}>Analyst</button>
                </div>
                <div id="worker7">
                    <button onClick={this.props.buyWorkerSeven}>Experienced Analyst</button>
                </div>
                <div id="worker8">
                    <button onClick={this.props.buyWorkerEight}>Analyze Manager</button>
                </div>
                <div id="worker9">
                    <button onClick={this.props.buyWorkerNine}>Junior Tester</button>
                </div>
                <div id="worker10">
                    <button onClick={this.props.buyWorkerTen}>Mid Tester</button>
                </div>
                <div id="worker11">
                    <button onClick={this.props.buyWorkerEleven}>Senior Tester</button>
                </div>
                <div id="worker12">
                    <button onClick={this.props.buyWorkerTwelve}>Testing Manager</button>
                </div>
                <div id="worker13">
                    <button onClick={this.props.buyWorkerThirteen}>Graphic Designer</button>
                </div>
                <div id="worker14">
                    <button onClick={this.props.buyWorkerFourteen}>Experienced Graphic Designeer</button>
                </div>
                <div id="worker15">
                    <button onClick={this.props.buyWorkerFifteen}>Graphic Manager</button>
                </div>
                <div id="worker16">
                    <button onClick={this.props.buyWorkerSixteen}>Vice-President</button>
                </div>
                <div id="worker17">
                    <button onClick={this.props.buyWorkerSeventeen}>Assistant</button>
                </div>
                <div id="worker18">
                    <button onClick={this.props.buyWorkerEighteen}>Head of Development</button>
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