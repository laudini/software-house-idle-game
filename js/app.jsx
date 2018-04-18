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
            workerOneButtonActive: false,

            workerTwoPrice: 200,
            workerTwoLevel: 1,
            workerTwoButtonActive: false,

            workerThreePrice: 1000,
            workerThreeLevel: 1,
            workerThreeButtonActive: false,

            workerFourPrice: 5000,
            workerFourLevel: 1,
            workerFourButtonActive: false,

            workerFivePrice: 25000,
            workerFiveLevel: 1,
            workerFiveButtonActive: false,

            workerSixPrice: 125000,
            workerSixLevel: 1,
            workerSixButtonActive: false,

            workerSevenPrice: 625000,
            workerSevenLevel: 1,
            workerSevenButtonActive: false,

            workerEightPrice: 3125000,
            workerEightLevel: 1,
            workerEightButtonActive: false,

            workerNinePrice: 15625000,
            workerNineLevel: 1,
            workerNineButtonActive: false,

            workerTenPrice: 78125000,
            workerTenLevel: 1,
            workerTenButtonActive: false,

            workerElevenPrice: 390625000,
            workerElevenLevel: 1,
            workerElevenButtonActive: false
            ,
            workerTwelvePrice: 1953125000,
            workerTwelveLevel: 1,
            workerTwelveButtonActive: false
            ,
            workerThirteenPrice: 9765625000,
            workerThirteenLevel: 1,
            workerThirteenButtonActive: false,

            workerFourteenPrice: 48828125000,
            workerFourteenLevel: 1,
            workerFourteenButtonActive: false,

            workerFifteenPrice: 1220703125000,
            workerFifteenLevel: 1,
            workerFifteenButtonActive: false,

            workerSixteenPrice: 6103515625000,
            workerSixteenLevel: 1,
            workerSixteenButtonActive: false,

            workerSeventeenPrice: 30517578120000,
            workerSeventeenLevel: 1,
            workerSeventeenButtonActive: false,

            workerEighteenPrice: 152587890600000,
            workerEighteenLevel: 1,
            workerEighteenButtonActive: false,


        };
    }

    componentWillUpdate() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.calculateMoney, 1000);
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

        if (this.state.totalMoney >= (this.state.workerOnePrice * this.state.workerOneLevel)) {
            this.setState({
                workerOneButtonActive: true
            })
        } else {
            this.setState({
                workerOneButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerTwoPrice * this.state.workerTwoLevel)) {
            this.setState({
                workerTwoButtonActive: true
            })
        } else {
            this.setState({
                workerTwoButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerThreePrice * this.state.workerThreeLevel)) {
            this.setState({
                workerThreeButtonActive: true
            })
        } else {
            this.setState({
                workerThreeButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerFourPrice * this.state.workerFourLevel)) {
            this.setState({
                workerFourButtonActive: true
            })
        } else {
            this.setState({
                workerFourButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerFivePrice * this.state.workerFiveLevel)) {
            this.setState({
                workerFiveButtonActive: true
            })
        } else {
            this.setState({
                workerFiveButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerSixPrice * this.state.workerSixLevel)) {
            this.setState({
                workerSixButtonActive: true
            })
        } else {
            this.setState({
                workerSixButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerSevenPrice * this.state.workerSevenLevel)) {
            this.setState({
                workerSevenButtonActive: true
            })
        } else {
            this.setState({
                workerSevenButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerEightPrice * this.state.workerEightLevel)) {
            this.setState({
                workerEightButtonActive: true
            })
        } else {
            this.setState({
                workerEightButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerNinePrice * this.state.workerNineLevel)) {
            this.setState({
                workerNineButtonActive: true
            })
        } else {
            this.setState({
                workerNineButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerTenPrice * this.state.workerTenLevel)) {
            this.setState({
                workerTenButtonActive: true
            })
        } else {
            this.setState({
                workerTenButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerElevenPrice * this.state.workerElevenLevel)) {
            this.setState({
                workerElevenButtonActive: true
            })
        } else {
            this.setState({
                workerElevenButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerTwelvePrice * this.state.workerTwelveLevel)) {
            this.setState({
                workerTwelveButtonActive: true
            })
        } else {
            this.setState({
                workerTwelveButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerThirteenPrice * this.state.workerThirteenLevel)) {
            this.setState({
                workerThirteenButtonActive: true
            })
        } else {
            this.setState({
                workerThirteenButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerFourteenPrice * this.state.workerFourteenLevel)) {
            this.setState({
                workerFourteenButtonActive: true
            })
        } else {
            this.setState({
                workerFourteenButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerFifteenPrice * this.state.workerFifteenLevel)) {
            this.setState({
                workerFifteenButtonActive: true
            })
        } else {
            this.setState({
                workerFifteenButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerSixteenPrice * this.state.workerSixteenLevel)) {
            this.setState({
                workerSixteenButtonActive: true
            })
        } else {
            this.setState({
                workerSixteenButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerSeventeenPrice * this.state.workerSeventeenLevel)) {
            this.setState({
                workerSeventeenButtonActive: true
            })
        } else {
            this.setState({
                workerSeventeenButtonActive: false
            })
        }
        if (this.state.totalMoney >= (this.state.workerEighteenPrice * this.state.workerEighteenLevel)) {
            this.setState({
                workerEighteenButtonActive: true
            })
        } else {
            this.setState({
                workerEighteenButtonActive: false
            })
        }


        this.setState({
            totalMoney: this.state.totalMoney + this.state.moneyPerIdleSecond
        });

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
                <Assets buyWorkerOne={this.buyWorkerOne} workerOneButtonActive={this.state.workerOneButtonActive}
                        buyWorkerTwo={this.buyWorkerTwo} workerTwoButtonActive={this.state.workerTwoButtonActive}
                        buyWorkerThree={this.buyWorkerThree}
                        workerThreeButtonActive={this.state.workerThreeButtonActive}
                        buyWorkerFour={this.buyWorkerFour} workerFourButtonActive={this.state.workerFourButtonActive}
                        buyWorkerFive={this.buyWorkerFive} workerFiveButtonActive={this.state.workerFiveButtonActive}
                        buyWorkerSix={this.buyWorkerSix} workerSixButtonActive={this.state.workerSixButtonActive}
                        buyWorkerSeven={this.buyWorkerSeven}
                        workerSevenButtonActive={this.state.workerSevenButtonActive}
                        buyWorkerEight={this.buyWorkerEight}
                        workerEightButtonActive={this.state.workerEightButtonActive}
                        buyWorkerNine={this.buyWorkerNine} workerNineButtonActive={this.state.workerNineButtonActive}
                        buyWorkerTen={this.buyWorkerTen} workerTenButtonActive={this.state.workerTenButtonActive}
                        buyWorkerEleven={this.buyWorkerEleven}
                        workerElevenButtonActive={this.state.workerElevenButtonActive}
                        buyWorkerTwelve={this.buyWorkerTwelve}
                        workerTwelveButtonActive={this.state.workerTwelveButtonActive}
                        buyWorkerThirteen={this.buyWorkerThirteen}
                        workerThirteenButtonActive={this.state.workerThirteenButtonActive}
                        buyWorkerFourteen={this.buyWorkerFourteen}
                        workerFourteenButtonActive={this.state.workerFourteenButtonActive}
                        buyWorkerFifteen={this.buyWorkerFifteen}
                        workerFifteenButtonActive={this.state.workerFifteenButtonActive}
                        buyWorkerSixteen={this.buyWorkerSixteen}
                        workerSixteenButtonActive={this.state.workerSixteenButtonActive}
                        buyWorkerSeventeen={this.buyWorkerSeventeen}
                        workerSeventeenButtonActive={this.state.workerSeventeenButtonActive}
                        buyWorkerEighteen={this.buyWorkerEighteen}
                        workerEighteenButtonActive={this.state.workerEighteenButtonActive}
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
                <div>TOTAL MONEY:</div>
                <div>{this.props.totalMoney}</div>
                <div>MONEY PER SECOND:</div>
                <div>{this.props.moneyPerIdleSecond}</div>
                <div>MONEY PER CLICK:</div>
                <div>{this.props.moneyPerClick}</div>
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

    doSomething = () => {
        //this is going to be used to block multiple clicks
    };

    render() {
        if (this.props.workerOneButtonActive) {
            var workerOne = <button ref="btn" onClick={() => {
                this.props.buyWorkerOne();
                this.doSomething()
            }}>Junior Programmer</button>
        } else {
            workerOne = <button>Not Enough Money</button>
        }
        if (this.props.workerTwoButtonActive) {
            var workerTwo = <button onClick={() => {
                this.props.buyWorkerTwo();
                this.doSomething()
            }}>Mid Programmer</button>
        } else {
            workerTwo = <button>Not Enough Money</button>
        }
        if (this.props.workerThreeButtonActive) {
            var workerThree = <button onClick={() => {
                this.props.buyWorkerThree();
                this.doSomething()
            }}>Senior Programmer</button>
        } else {
            workerThree = <button>Not Enough Money</button>
        }
        if (this.props.workerFourButtonActive) {
            var workerFour = <button onClick={() => {
                this.props.buyWorkerFour();
                this.doSomething()
            }}>Programming Specialist</button>
        } else {
            workerFour = <button>Not Enough Money</button>
        }
        if (this.props.workerFiveButtonActive) {
            var workerFive = <button onClick={() => {
                this.props.buyWorkerFive();
                this.doSomething()
            }}>Programming Manager</button>
        } else {
            workerFive = <button>Not Enough Money</button>
        }
        if (this.props.workerSixButtonActive) {
            var workerSix = <button onClick={() => {
                this.props.buyWorkerSix();
                this.doSomething()
            }}>Analyst</button>
        } else {
            workerSix = <button>Not Enough Money</button>
        }
        if (this.props.workerSevenButtonActive) {
            var workerSeven = <button onClick={() => {
                this.props.buyWorkerSeven();
                this.doSomething()
            }}>Experienced Analyst</button>
        } else {
            workerSeven = <button>Not Enough Money</button>
        }
        if (this.props.workerEightButtonActive) {
            var workerEight = <button onClick={() => {
                this.props.buyWorkerEight();
                this.doSomething()
            }}>Analyze Manager</button>
        } else {
            workerEight = <button>Not Enough Money</button>
        }
        if (this.props.workerNineButtonActive) {
            var workerNine = <button onClick={() => {
                this.props.buyWorkerNine();
                this.doSomething()
            }}>Junior Tester</button>
        } else {
            workerNine = <button>Not Enough Money</button>
        }
        if (this.props.workerTenButtonActive) {
            var workerTen = <button onClick={() => {
                this.props.buyWorkerTen();
                this.doSomething()
            }}>Mid Tester</button>
        } else {
            workerTen = <button>Not Enough Money</button>
        }
        if (this.props.workerElevenButtonActive) {
            var workerEleven = <button onClick={() => {
                this.props.buyWorkerEleven();
                this.doSomething()
            }}>Senior Tester</button>
        } else {
            workerEleven = <button>Not Enough Money</button>
        }
        if (this.props.workerTwelveButtonActive) {
            var workerTwelve = <button onClick={() => {
                this.props.buyWorkerTwelve();
                this.doSomething()
            }}>Testing Manager</button>
        } else {
            workerTwelve = <button>Not Enough Money</button>
        }
        if (this.props.workerThirteenButtonActive) {
            var workerThirteen = <button onClick={() => {
                this.props.buyWorkerThirteen();
                this.doSomething()
            }}>Graphic Designer</button>
        } else {
            workerThirteen = <button>Not Enough Money</button>
        }
        if (this.props.workerFourteenButtonActive) {
            var workerFourteen = <button onClick={() => {
                this.props.buyWorkerFourteen();
                this.doSomething()
            }}>Experienced Graphic Designeer</button>
        } else {
            workerFourteen = <button>Not Enough Money</button>
        }
        if (this.props.workerFifteenButtonActive) {
            var workerFifteen = <button onClick={() => {
                this.props.buyWorkerFifteen();
                this.doSomething()
            }}>Graphic Manager</button>
        } else {
            workerFifteen = <button>Not Enough Money</button>
        }
        if (this.props.workerSixteenButtonActive) {
            var workerSixteen = <button onClick={() => {
                this.props.buyWorkerSixteen();
                this.doSomething()
            }}>Vice-President</button>
        } else {
            workerSixteen = <button>Not Enough Money</button>
        }
        if (this.props.workerSeventeenButtonActive) {
            var workerSeventeen = <button onClick={() => {
                this.props.buyWorkerSeventeen();
                this.doSomething()
            }}>Assistant</button>
        } else {
            workerSeventeen = <button>Not Enough Money</button>
        }
        if (this.props.workerEighteenButtonActive) {
            var workerEighteen = <button onClick={() => {
                this.props.buyWorkerEighteen();
                this.doSomething()
            }}>Head of Development</button>
        } else {
            workerEighteen = <button>Not Enough Money</button>
        }
        return (
            <div className="Right-Col">
                <header className="Header-Workforce">Your Workforce</header>
                <div id="space"></div>
                <div id="worker1">
                    {workerOne}
                </div>
                <div id="worker2">
                    {workerTwo}
                </div>
                <div id="worker3">
                    {workerThree}
                </div>
                <div id="worker4">
                    {workerFour}
                </div>
                <div id="worker5">
                    {workerFive}
                </div>
                <div id="worker6">
                    {workerSix}
                </div>
                <div id="worker7">
                    {workerSeven}
                </div>
                <div id="worker8">
                    {workerEight}
                </div>
                <div id="worker9">
                    {workerNine}
                </div>
                <div id="worker10">
                    {workerTen}
                </div>
                <div id="worker11">
                    {workerEleven}
                </div>
                <div id="worker12">
                    {workerTwelve}
                </div>
                <div id="worker13">
                    {workerThirteen}
                </div>
                <div id="worker14">
                    {workerFourteen}
                </div>
                <div id="worker15">
                    {workerFifteen}
                </div>
                <div id="worker16">
                    {workerSixteen}
                </div>
                <div id="worker17">
                    {workerSeventeen}
                </div>
                <div id="worker18">
                    {workerEighteen}
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