import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CallMadeIcon from '@material-ui/icons/CallMade';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import "../styles/Dashboard.css";

import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import Chart from "./Home/Chart";
import ProgressBar from "@ramonak/react-progress-bar";
import DonutChart from "react-donut-chart";
import Img from "../assets/vector.jpg";


function Dashboard() {
    const reactDonutChartdata = [
        {
            label: "Open Position",
            value: 65,
            color: "#438ae0"
        },
        {
            label: "Close Position",
            value: 100,
            color: "#FF4560"
        },
        {
            label: " Position",
            value: 15,
            color: "#775DD0"
        }
    ];
    const pie_size=210;
    const reactDonutChartBackgroundColor = [
        "#438ae0",
        "#FF4560",
        "#775DD0"
    ];
    const reactDonutChartInnerRadius = 0.5;
    const reactDonutChartSelectedOffset = 0.04;
    const reactDonutChartHandleClick = (item, toggled) => {
        if (toggled) {
            console.log(item);
        }
    };
    let reactDonutChartStrokeColor = "#171717";
    const reactDonutChartOnMouseEnter = (item) => {
        let color = reactDonutChartdata.find((q) => q.label === item.label).color;
        reactDonutChartStrokeColor = color;
    };



    return (
        <>
            <Container >
                <Row>

                    <Col lg="4" sm="6" >
                        <Card className="card-stats card1" >
                            <Card.Body>
                                <Row>
                                    <Col xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Total Applicants</p>
                                            <Card.Title as="h4">7956</Card.Title>
                                            <div className ="up-percentage1 up-percentage"><CallMadeIcon/>+3.59%</div>
                                        </div>
                                    </Col>
                                    <Col xs="5">
                                        <div className ="threeDots"><MoreHorizIcon /></div>
                                        <div className="circular-progress-bar1">
                                            <CircularProgressbar value={70} text={`+${70}%`} />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" sm="6">
                        <Card className="card-stats" >
                            <Card.Body>
                                <Row>
                                    <Col xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Total Applicants</p>
                                            <Card.Title as="h4">7956</Card.Title>
                                            <div className ="up-percentage2 up-percentage"><CallMadeIcon/>+3.59%</div>
                                        </div>
                                    </Col>
                                    <Col xs="5">
                                        <div className ="threeDots"><MoreHorizIcon /></div>
                                        <div className="circular-progress-bar2">
                                            <CircularProgressbar value={70} text={`+${70}%`} />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" sm="6">
                        <Card className="card-stats" >
                            <Card.Body>
                                <Row>
                                    <Col xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Total Applicants</p>
                                            <Card.Title as="h4">7956</Card.Title>
                                            <div className ="up-percentage3 up-percentage"><CallMadeIcon/>+3.59%</div>
                                        </div>
                                    </Col>
                                    <Col xs="5">
                                        <div className ="threeDots"><MoreHorizIcon /></div>
                                        <div className="circular-progress-bar3">
                                            <CircularProgressbar value={70} text={`+${70}%`} />
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

                <Row>
                    <Col lg="7" md="6">
                        <Card className="card-stats">
                            <Card.Header>
                                <Row>
                                    <Col md="4">
                                        <p className="card-category">Applications Received</p>
                                    </Col>
                                    <Col md="8">
                                        <div className="chart-options">
                                    <p>This Year {" "}
                                            This Week
                                        Today</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <div className="ct-chart" id="chartHours">
                                    <Chart/>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col md="4" className="total-Applications">
                        <Card className="card-stats">
                            <Card.Header>
                                <p className="card-category">Total Applications</p>
                            </Card.Header>
                            <Card.Body>
                                <div className="legend">
                                    <div className="bar-box"><Row>
                                        {/*<Col md="1"><div className="circle" style={{color: "#f2e9ec"}}></div></Col>*/}
                                        <Col md="5"><p className="bar-name" style={{color: "#f2e9ec"}}>Applications</p></Col>
                                        <Col md="7"><ProgressBar completed={60} bgColor={"#f2e9ec"} baseBgColor={"#545252"} height={"8px"} isLabelVisible={false} />
                                        </Col>
                                        </Row>
                                    </div>
                                    <div className="bar-box"><Row>
                                        {/*<Col md="1"><div className="circle" style={{color: "#f2e9ec"}}></div></Col>*/}
                                        <Col md="5"><p className="bar-name" style={{color: "#438ae0"}}>Short Listed</p></Col>
                                        <Col md="7"><ProgressBar completed={90} bgColor={"#438ae0"} baseBgColor={"#545252"} height={"8px"} isLabelVisible={false}/>
                                        </Col>
                                    </Row>
                                    </div>
                                    <div className="bar-box"><Row>
                                        {/*<Col md="1"><div className="circle" style={{color: "#f2e9ec"}}></div></Col>*/}
                                        <Col md="5"><p className="bar-name" style={{color: "#c42f2f"}}>Rejected</p></Col>
                                        <Col md="7"><ProgressBar completed={60} bgColor={"#c42f2f"} baseBgColor={"#545252"} height={"8px"} isLabelVisible={false} />
                                        </Col>
                                    </Row>
                                    </div>
                                    <div className="bar-box"><Row>
                                        {/*<Col md="1"><div className="circle" style={{color: "#f2e9ec"}}></div></Col>*/}
                                        <Col md="5"><p className="bar-name" style={{color: "#f0c7d5"}}>On Hold</p></Col>
                                        <Col md="7"><ProgressBar completed={60} bgColor={"#f0c7d5"} baseBgColor={"#545252"} height={"8px"} isLabelVisible={false} />
                                        </Col>
                                    </Row>
                                    </div>
                                    <div className="bar-box"><Row>
                                        {/*<Col md="1"><div className="circle" style={{color: "#f2e9ec"}}></div></Col>*/}
                                        <Col md="5"><p className="bar-name" style={{color: "#945db0"}}>Finalised</p></Col>
                                        <Col md="7"><ProgressBar completed={60} bgColor={"#945db0"} baseBgColor={"#545252"} height={"8px"} isLabelVisible={false} />
                                        </Col>
                                    </Row>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>




                <Row>
                    <Col lg="7" md="6">
                        <Card className="card-stats">
                            <Card.Header>
                                <Row>
                                    <Col md="6">
                                        <p className="card-category">Referrals and Campaign Stats </p>
                                    </Col>
                                    <Col md="6">
                                        <div className="chart-options">
                                            <div className="campaign-red-icon"> <NearMeOutlinedIcon/></div>
                                            <div className="referrals-subheading"><p className="campaign-red"> 40 Campaign sent in total</p>
                                                4 Campaign sent in last month </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md="3">
                                        <div className="numbers">
                                            <p className="card-category">User's Reached</p>
                                            <div className =" up-percentage-referrals up-percentage"><CallMadeIcon/>+3.59%</div>
                                            <Card.Title as="h4" className="class-title-referrals">7956</Card.Title>
                                        </div>

                                    </Col>

                                    <Col md="3">
                                        <div className="numbers">
                                            <p className="card-category class-title-referrals">Referrals</p>
                                            <div className =" up-percentage-referrals up-percentage"><CallMadeIcon/>+3.59%</div>
                                            <Card.Title as="h4" className="class-title-referrals">0662</Card.Title>
                                        </div>
                                    </Col>
                                    <Col md="3">
                                        <div className="numbers">
                                            <p className="card-category class-title-referrals">Shares</p>
                                            <div className =" up-percentage-referrals up-percentage"><CallMadeIcon/>+3.59%</div>
                                            <Card.Title as="h4" className="class-title-referrals">1445</Card.Title>
                                        </div>
                                    </Col>
                                    <Col md="3">
                                        <div className="numbers">
                                            <p className="card-category class-title-referrals">Applications</p>
                                            <div className =" up-percentage-referrals up-percentage"><CallMadeIcon/>+3.59%</div>
                                            <Card.Title as="h4" className="class-title-referrals">0568</Card.Title>
                                        </div>
                                    </Col>
                                </Row>
                                <Button className="button1" variant="contained" >
                                    Start a new Campaign now
                                </Button>
                                <Button className="button2" variant="contained" color="secondary">
                                    Pause all running Campaign
                                </Button>
                            </Card.Body>

                        </Card>
                    </Col>
                    <Col md="4" className="total-Applications">
                        <Card className="card-stats">
                            <Card.Header>
                                <div className="card-category">Total Applications
                                <div className ="threeDots" style={{float:"right"}}><MoreHorizIcon /></div>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="legend">
                                    <DonutChart
                                        width={pie_size}
                                        height={pie_size}
                                        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
                                        strokeColor={reactDonutChartStrokeColor}
                                        data={reactDonutChartdata}
                                        colors={reactDonutChartBackgroundColor}
                                        legend={false}
                                        innerRadius={reactDonutChartInnerRadius}
                                        selectedOffset={reactDonutChartSelectedOffset}
                                        onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
                                    />
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>





            </Container>
        </>
    );
}

export default Dashboard;
