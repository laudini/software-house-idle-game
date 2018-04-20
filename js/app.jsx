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
            <div className="Main-Header"><h1><span>Software House Idle</span></h1></div>
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

        if (this.state.workerOneLevel >= 10) {
            this.setState({
                moneyPerClick: 60
            })
        }
        if (this.state.workerTwoLevel >= 10) {
            this.setState({
                moneyPerClick: 300
            })
        }
        if (this.state.workerThreeLevel >= 10) {
            this.setState({
                moneyPerClick: 1750
            })
        }
        if (this.state.workerFourLevel >= 10) {
            this.setState({
                moneyPerClick: 8000
            })
        }
        if (this.state.workerFiveLevel >= 10) {
            this.setState({
                moneyPerClick: 35000
            })
        }
        if (this.state.workerSixLevel >= 10) {
            this.setState({
                moneyPerClick: 170000
            })
        }
        if (this.state.workerSevenLevel >= 10) {
            this.setState({
                moneyPerClick: 660000
            })
        }
        if (this.state.workerEightLevel >= 10) {
            this.setState({
                moneyPerClick: 3500000
            })
        }
        if (this.state.workerNineLevel >= 10) {
            this.setState({
                moneyPerClick: 14000000
            })
        }
        if (this.state.workerTenLevel >= 10) {
            this.setState({
                moneyPerClick: 60000000
            })
        }
        if (this.state.workerElevenLevel >= 10) {
            this.setState({
                moneyPerClick: 300000000
            })
        }
        if (this.state.workerTwelveLevel >= 10) {
            this.setState({
                moneyPerClick: 1500000000
            })
        }
        if (this.state.workerThirteenLevel >= 10) {
            this.setState({
                moneyPerClick: 7500000000
            })
        }
        if (this.state.workerFourteenLevel >= 10) {
            this.setState({
                moneyPerClick: 37500000000
            })
        }
        if (this.state.workerFifteenLevel >= 10) {
            this.setState({
                moneyPerClick: 150000000000
            })
        }
        if (this.state.workerSixteenLevel >= 10) {
            this.setState({
                moneyPerClick: 750000000000
            })
        }
        if (this.state.workerSeventeenLevel >= 10) {
            this.setState({
                moneyPerClick: 3500000000000
            })
        }
        if (this.state.workerEighteenLevel >= 10) {
            this.setState({
                moneyPerClick: 16000000000000
            })
        }


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
        if (this.state.workerOneLevel === 2) {
            let a = document.getElementById("feet1");
            a.classList.add('showFeet1');
        }
        if (this.state.workerTwoLevel === 2) {
            let b = document.getElementById("feet2");
            b.classList.add('showFeet2');
        }
        if (this.state.workerThreeLevel === 2) {
            let c = document.getElementById("feet3");
            c.classList.add('showFeet3');
        }
        if (this.state.workerFourLevel === 2) {
            let d = document.getElementById("feet4");
            d.classList.add('showFeet4');
        }
        if (this.state.workerFiveLevel === 2) {
            let e = document.getElementById("feet5");
            e.classList.add('showFeet5');
        }
        if (this.state.workerSixLevel === 2) {
            let f = document.getElementById("feet6");
            f.classList.add('showFeet6');
        }
        if (this.state.workerSevenLevel === 2) {
            let g = document.getElementById("feet7");
            g.classList.add('showFeet7');
        }
        if (this.state.workerEightLevel === 2) {
            let h = document.getElementById("feet8");
            h.classList.add('showFeet8');
        }
        if (this.state.workerNineLevel === 2) {
            let i = document.getElementById("feet9");
            i.classList.add('showFeet9');
        }
        if (this.state.workerTenLevel === 2) {
            let j = document.getElementById("feet10");
            j.classList.add('showFeet10');
        }
        if (this.state.workerElevenLevel === 2) {
            let k = document.getElementById("feet11");
            k.classList.add('showFeet11');
        }
        if (this.state.workerTwelveLevel === 2) {
            let l = document.getElementById("feet12");
            l.classList.add('showFeet12');
        }
        if (this.state.workerThirteenLevel === 2) {
            let m = document.getElementById("feet13");
            m.classList.add('showFeet13');
        }
        if (this.state.workerFourteenLevel === 2) {
            let n = document.getElementById("feet14");
            n.classList.add('showFeet14');
        }
        if (this.state.workerFifteenLevel === 2) {
            let o = document.getElementById("feet15");
            o.classList.add('showFeet15');
        }
        if (this.state.workerSixteenLevel === 2) {
            let p = document.getElementById("feet16");
            p.classList.add('showFeet16');
        }
        if (this.state.workerSeventeenLevel === 2) {
            let r = document.getElementById("feet17");
            r.classList.add('showFeet17');
        }
        if (this.state.workerEighteenLevel === 2) {
            let s = document.getElementById("feet18");
            s.classList.add('showFeet18');
        }

        return (
            <div className="Main-Body">
                <MainClickSection>
                    <ClickElement addMoneyPerClick={this.addMoneyPerClick}/>
                    <Stats moneyPerClick={this.state.moneyPerClick} moneyPerIdleSecond={this.state.moneyPerIdleSecond}
                           totalMoney={parseInt(this.state.totalMoney)}/>
                </MainClickSection>
                <MainImageSection/>
                <Assets buyWorkerOne={this.buyWorkerOne}
                        workerOneButtonActive={this.state.workerOneButtonActive}
                        currentPrice={this.state.workerOnePrice * this.state.workerOneLevel}

                        buyWorkerTwo={this.buyWorkerTwo}
                        workerTwoButtonActive={this.state.workerTwoButtonActive}

                        buyWorkerThree={this.buyWorkerThree}
                        workerThreeButtonActive={this.state.workerThreeButtonActive}

                        buyWorkerFour={this.buyWorkerFour}
                        workerFourButtonActive={this.state.workerFourButtonActive}

                        buyWorkerFive={this.buyWorkerFive}
                        workerFiveButtonActive={this.state.workerFiveButtonActive}

                        buyWorkerSix={this.buyWorkerSix}
                        workerSixButtonActive={this.state.workerSixButtonActive}

                        buyWorkerSeven={this.buyWorkerSeven}
                        workerSevenButtonActive={this.state.workerSevenButtonActive}

                        buyWorkerEight={this.buyWorkerEight}
                        workerEightButtonActive={this.state.workerEightButtonActive}

                        buyWorkerNine={this.buyWorkerNine}
                        workerNineButtonActive={this.state.workerNineButtonActive}

                        buyWorkerTen={this.buyWorkerTen}
                        workerTenButtonActive={this.state.workerTenButtonActive}

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
        this.state = {
            text: 'SMASH ME <.<'
        }
    }

    generateText = () => {
        let texts = ['class Coders extends..', 'hoist.. what?', '{this.props.childr..', 'twitch.tv/laudagaming', '<strong>{text}</st..', 'U makin NOIZ bruh', 'Is HL3 coming?', 'Free itans plx', '<input typ...', '..stackoverflo..', '$(\'aja..)', 'https://por..', 'THIS TEXT IS RED', 'lorem10'];
        let textsLength = texts.length - 1;
        let codeIt = texts[Math.round(Math.random() * textsLength)];
        this.setState({
            text: codeIt
        })
    };

    render() {
        return (
            <div className="Click-Image">
                <button onClick={() => {
                    this.props.addMoneyPerClick();
                    this.generateText()
                }}
                        className="Click-Button">
                    <pre>{this.state.text}</pre>
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
            <div className="Center-Col">
                <div id="feet1" className="feet"></div>
                <div id="feet2" className="feet"></div>
                <div id="feet3" className="feet"></div>
                <div id="feet4" className="feet"></div>
                <div id="feet5" className="feet"></div>
                <div id="feet6" className="feet"></div>
                <div id="feet7" className="feet"></div>
                <div id="feet8" className="feet"></div>
                <div id="feet9" className="feet"></div>
                <div id="feet10" className="feet"></div>
                <div id="feet11" className="feet"></div>
                <div id="feet12" className="feet"></div>
                <div id="feet13" className="feet"></div>
                <div id="feet14" className="feet"></div>
                <div id="feet15" className="feet"></div>
                <div id="feet16" className="feet"></div>
                <div id="feet17" className="feet"></div>
                <div id="feet18" className="feet"></div>

            </div>
        )
    }

}

class Assets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oneLevel: 1,
            onePrice: 5,
            twoLevel: 1,
            twoPrice: 200,
            threeLevel: 1,
            threePrice: 1000,
            fourLevel: 1,
            fourPrice: 5000,
            fiveLevel: 1,
            fivePrice: 25000,
            sixLevel: 1,
            sixPrice: 125000,
            sevenLevel: 1,
            sevenPrice: 625000,
            eightLevel: 1,
            eightPrice: 3125000,
            nineLevel: 1,
            ninePrice: 15625000,
            tenLevel: 1,
            tenPrice: 78125000,
            elevenLevel: 1,
            elevenPrice: 390625000,
            twelveLevel: 1,
            twelvePrice: 1953125000,
            thirteenLevel: 1,
            thirteenPrice: 9765625000,
            fourteenLevel: 1,
            fourteenPrice: 48828125000,
            fifteenLevel: 1,
            fifteenPrice: 1220703125000,
            sixteenLevel: 1,
            sixteenPrice: 6103515625000,
            seventeenLevel: 1,
            seventeenPrice: 30517578120000,
            eighteenLevel: 1,
            eighteenPrice: 152587890600000
        }
    }

    oneCalc = () => {
        this.setState({
            oneLevel: this.state.oneLevel + 1,
            onePrice: 5 * (this.state.oneLevel + 1)
        })
    };
    twoCalc = () => {
        this.setState({
            twoLevel: this.state.twoLevel + 1,
            twoPrice: 200 * (this.state.twoLevel + 1)
        })
    };
    threeCalc = () => {
        this.setState({
            threeLevel: this.state.threeLevel + 1,
            threePrice: 1000 * (this.state.threeLevel + 1)
        })
    };
    fourCalc = () => {
        this.setState({
            fourLevel: this.state.fourLevel + 1,
            fourPrice: 5000 * (this.state.fourLevel + 1)
        })
    };
    fiveCalc = () => {
        this.setState({
            fiveLevel: this.state.fiveLevel + 1,
            fivePrice: 25000 * (this.state.fiveLevel + 1)
        })
    };
    sixCalc = () => {
        this.setState({
            sixLevel: this.state.sixLevel + 1,
            sixPrice: 125000 * (this.state.sixLevel + 1)
        })
    };
    sevenCalc = () => {
        this.setState({
            sevenLevel: this.state.sevenLevel + 1,
            sevenPrice: 625000 * (this.state.sevenLevel + 1)
        })
    };
    eightCalc = () => {
        this.setState({
            eightLevel: this.state.eightLevel + 1,
            eightPrice: 3125000 * (this.state.eightLevel + 1)
        })
    };
    nineCalc = () => {
        this.setState({
            nineLevel: this.state.nineLevel + 1,
            ninePrice: 15625000 * (this.state.nineLevel + 1)
        })
    };
    tenCalc = () => {
        this.setState({
            tenLevel: this.state.tenLevel + 1,
            tenPrice: 78125000 * (this.state.tenLevel + 1)
        })
    };
    elevenCalc = () => {
        this.setState({
            elevenLevel: this.state.elevenLevel + 1,
            elevenPrice: 39062500 * (this.state.elevenLevel + 1)
        })
    };
    twelveCalc = () => {
        this.setState({
            twelveLevel: this.state.twelveLevel + 1,
            twelvePrice: 1953125000 * (this.state.twelveLevel + 1)
        })
    };
    thirteenCalc = () => {
        this.setState({
            thirteenLevel: this.state.thirteenLevel + 1,
            thirteenPrice: 9765625000 * (this.state.thirteenLevel + 1)
        })
    };
    fourteenCalc = () => {
        this.setState({
            fourteenLevel: this.state.fourteenLevel + 1,
            fourteenPrice: 48828125000 * (this.state.fourteenLevel + 1)
        })
    };
    fifteenCalc = () => {
        this.setState({
            fifteenLevel: this.state.fifteenLevel + 1,
            fifteenPrice: 1220703125000 * (this.state.fifteenLevel + 1)
        })
    };
    sixteenCalc = () => {
        this.setState({
            sixteenLevel: this.state.sixteenLevel + 1,
            sixteenPrice: 6103515625000 * (this.state.sixteenLevel + 1)
        })
    };
    seventeenCalc = () => {
        this.setState({
            seventeenLevel: this.state.seventeenLevel + 1,
            seventeenPrice: 30517578120000 * (this.state.seventeenLevel + 1)
        })
    };
    eighteenCalc = () => {
        this.setState({
            eighteenLevel: this.state.eighteenLevel + 1,
            eighteenPrice: 152587890600000 * (this.state.eighteenLevel + 1)
        })
    };


    render() {
        if (this.props.workerOneButtonActive) {
            var workerOne = <button onClick={() => {
                this.props.buyWorkerOne();
                this.oneCalc()
            }}>BUY 1</button>
        } else {
            workerOne = <button>Not Enough Money</button>
        }
        if (this.props.workerTwoButtonActive) {
            var workerTwo = <button onClick={() => {
                this.props.buyWorkerTwo();
                this.twoCalc()
            }}>BUY 1</button>
        } else {
            workerTwo = <button>Not Enough Money</button>
        }
        if (this.props.workerThreeButtonActive) {
            var workerThree = <button onClick={() => {
                this.props.buyWorkerThree();
                this.threeCalc()
            }}>BUY 1</button>
        } else {
            workerThree = <button>Not Enough Money</button>
        }
        if (this.props.workerFourButtonActive) {
            var workerFour = <button onClick={() => {
                this.props.buyWorkerFour();
                this.fourCalc()
            }}>BUY 1</button>
        } else {
            workerFour = <button>Not Enough Money</button>
        }
        if (this.props.workerFiveButtonActive) {
            var workerFive = <button onClick={() => {
                this.props.buyWorkerFive();
                this.fiveCalc()
            }}>BUY 1</button>
        } else {
            workerFive = <button>Not Enough Money</button>
        }
        if (this.props.workerSixButtonActive) {
            var workerSix = <button onClick={() => {
                this.props.buyWorkerSix();
                this.sixCalc()
            }}>BUY 1</button>
        } else {
            workerSix = <button>Not Enough Money</button>
        }
        if (this.props.workerSevenButtonActive) {
            var workerSeven = <button onClick={() => {
                this.props.buyWorkerSeven();
                this.sevenCalc()
            }}>BUY 1</button>
        } else {
            workerSeven = <button>Not Enough Money</button>
        }
        if (this.props.workerEightButtonActive) {
            var workerEight = <button onClick={() => {
                this.props.buyWorkerEight();
                this.eightCalc()
            }}>BUY 1</button>
        } else {
            workerEight = <button>Not Enough Money</button>
        }
        if (this.props.workerNineButtonActive) {
            var workerNine = <button onClick={() => {
                this.props.buyWorkerNine();
                this.nineCalc()
            }}>BUY 1</button>
        } else {
            workerNine = <button>Not Enough Money</button>
        }
        if (this.props.workerTenButtonActive) {
            var workerTen = <button onClick={() => {
                this.props.buyWorkerTen();
                this.tenCalc()
            }}>BUY 1</button>
        } else {
            workerTen = <button>Not Enough Money</button>
        }
        if (this.props.workerElevenButtonActive) {
            var workerEleven = <button onClick={() => {
                this.props.buyWorkerEleven();
                this.elevenCalc()
            }}>BUY 1</button>
        } else {
            workerEleven = <button>Not Enough Money</button>
        }
        if (this.props.workerTwelveButtonActive) {
            var workerTwelve = <button onClick={() => {
                this.props.buyWorkerTwelve();
                this.twelveCalc()
            }}>BUY 1</button>
        } else {
            workerTwelve = <button>Not Enough Money</button>
        }
        if (this.props.workerThirteenButtonActive) {
            var workerThirteen = <button onClick={() => {
                this.props.buyWorkerThirteen();
                this.thirteenCalc()
            }}>GBUY 1</button>
        } else {
            workerThirteen = <button>Not Enough Money</button>
        }
        if (this.props.workerFourteenButtonActive) {
            var workerFourteen = <button onClick={() => {
                this.props.buyWorkerFourteen();
                this.fourteenCalc()
            }}>BUY 1</button>
        } else {
            workerFourteen = <button>Not Enough Money</button>
        }
        if (this.props.workerFifteenButtonActive) {
            var workerFifteen = <button onClick={() => {
                this.props.buyWorkerFifteen();
                this.fifteenCalc()
            }}>BUY 1</button>
        } else {
            workerFifteen = <button>Not Enough Money</button>
        }
        if (this.props.workerSixteenButtonActive) {
            var workerSixteen = <button onClick={() => {
                this.props.buyWorkerSixteen();
                this.sixteenCalc()
            }}>BUY 1</button>
        } else {
            workerSixteen = <button>Not Enough Money</button>
        }
        if (this.props.workerSeventeenButtonActive) {
            var workerSeventeen = <button onClick={() => {
                this.props.buyWorkerSeventeen();
                this.seventeenCalc()
            }}>BUY 1</button>
        } else {
            workerSeventeen = <button>Not Enough Money</button>
        }
        if (this.props.workerEighteenButtonActive) {
            var workerEighteen = <button onClick={() => {
                this.props.buyWorkerEighteen();
                this.eighteenCalc()
            }}>BUY GABEN</button>
        } else {
            workerEighteen = <button>Can't buy Gaben!</button>
        }
        return (
            <div className="Right-Col">
                <header className="Header-Workforce">Your Workforce</header>
                <div id="space"></div>
                <div id="worker1">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.oneLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.onePrice}</div>
                        </div>
                    </div>
                    <div id="worker1image" className="names">Junior Dev</div>
                    <div>{workerOne}</div>
                </div>
                <div id="worker2">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.twoLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.twoPrice}</div>
                        </div>
                    </div>
                    <div id="worker2image" className="names">Mid Dev</div>
                    <div>{workerTwo}</div>
                </div>
                <div id="worker3">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.threeLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.threePrice}</div>
                        </div>
                    </div>
                    <div id="worker3image" className="names">Senior Dev</div>
                    <div>{workerThree}</div>
                </div>
                <div id="worker4">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.fourLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.fourPrice}</div>
                        </div>
                    </div>
                    <div id="worker4image" className="names">Spec1al1st</div>
                    <div>{workerFour}
                    </div>
                </div>
                <div id="worker5">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.fiveLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.fivePrice}</div>
                        </div>
                    </div>
                    <div id="worker5image" className="names">Programming Manager</div>
                    <div>{workerFive}
                    </div>
                </div>
                <div id="worker6">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.sixLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.sixPrice}</div>
                        </div>
                    </div>
                    <div id="worker6image" className="names">Analyst</div>
                    <div>{workerSix}
                    </div>
                </div>
                <div id="worker7">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.sevenLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.sevenPrice}</div>
                        </div>
                    </div>
                    <div id="worker7image" className="names">Experienced Analyst</div>
                    <div>{workerSeven}
                    </div>
                </div>
                <div id="worker8">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.eightLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.eightPrice}</div>
                        </div>
                    </div>
                    <div id="worker8image" className="names">Analyze Manager</div>
                    <div>{workerEight}
                    </div>
                </div>
                <div id="worker9">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.nineLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.ninePrice}</div>
                        </div>
                    </div>
                    <div id="worker9image" className="names">Junior Tester</div>
                    <div>{workerNine}
                    </div>
                </div>
                <div id="worker10">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.tenLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.tenPrice}</div>
                        </div>
                    </div>
                    <div id="worker10image" className="names">Mid Tester</div>
                    <div>{workerTen}
                    </div>
                </div>
                <div id="worker11">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.elevenLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.elevenPrice}</div>
                        </div>
                    </div>
                    <div id="worker11image" className="names">Senior Tester</div>
                    <div>{workerEleven}
                    </div>
                </div>
                <div id="worker12">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.twelveLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.twelvePrice}</div>
                        </div>
                    </div>
                    <div id="worker12image" className="names">Testing Manager</div>
                    <div>{workerTwelve}
                    </div>
                </div>
                <div id="worker13">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.thirteenLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.thirteenPrice}</div>
                        </div>
                    </div>
                    <div id="worker13image" className="names">Graphic Designer</div>
                    <div>{workerThirteen}</div>
                </div>
                <div id="worker14">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.fourteenLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.fourteenPrice}</div>
                        </div>
                    </div>
                    <div id="worker14image" className="names">Grzegorz</div>
                    <div>{workerFourteen}</div>
                </div>
                <div id="worker15">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.fifteenLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.fifteenPrice}</div>
                        </div>
                    </div>
                    <div id="worker15image" className="names">Graphic Manager</div>
                    <div>{workerFifteen}
                    </div>
                </div>
                <div id="worker16">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.sixteenLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.sixteenPrice}</div>
                        </div>
                    </div>
                    <div id="worker16image" className="names">Vice-President</div>
                    <div>{workerSixteen}
                    </div>
                </div>
                <div id="worker17">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.seventeenLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.seventeenPrice}</div>
                        </div>
                    </div>
                    <div id="worker17image" className="names">Assistant</div>
                    <div>{workerSeventeen}
                    </div>
                </div>
                <div id="worker18">
                    <div className="info">
                        <div>
                            <div>LEVEL:</div>
                            <div>{this.state.eighteenLevel}</div>
                        </div>
                        <div>
                            <div>PRICE:</div>
                            <div>{this.state.eighteenPrice}</div>
                        </div>
                    </div>
                    <div id="worker18image" className="names">Gaben Himself</div>
                    <div>{workerEighteen}</div>
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