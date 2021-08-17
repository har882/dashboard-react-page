import React from "react";
import Sidebar from "reactrix-sidebar";
import "reactrix-sidebar/index.css";
import "../styles/RightPanel.css";
import Dashboard from "../components/Dashboard";
import {Card} from "react-bootstrap";
import Img from "../assets/vector.jpg";
import "../styles/Dashboard.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import DuoIcon from '@material-ui/icons/Duo';
import CallRoundedIcon from '@material-ui/icons/CallRounded';

export default class RightPanel extends React.Component {
    render() {
        const options = {
            side: "right",
            effect: "diverge"
        };
        return (
            <Sidebar {...options}>
                <nav >
                    <Card className="card-stats long-card" >


                            <div className="numbers">
                                <p className="card-category class-title-referrals">Hello John Bayer,<br/> You have 8 New Application Today! </p>
                                <img className="vector" src= {Img} alt="pic" />
                                <div className="newApplicants"></div>
                            </div>
                            <Card className="card-stats long-card" >
                                    <Card.Header>
                                        <div className="card-category">New Applicants
                                            <div className ="threeDots" style={{float:"right"}}><MoreHorizIcon /></div>
                                        </div>
                                    </Card.Header>
                                <Card.Body>
                                    <div className="applicants-list">
                                        <PermIdentityIcon/> &nbsp; Rossie Marts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<DuoIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CallRoundedIcon/>
                                    </div>
                                    <div className="applicants-list">
                                        <PermIdentityIcon/> &nbsp; Rossie Marts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<DuoIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CallRoundedIcon/>
                                    </div>
                                    <div className="applicants-list">
                                        <PermIdentityIcon/> &nbsp; Rossie Marts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<DuoIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CallRoundedIcon/>
                                    </div>
                                    <div className="applicants-list">
                                        <PermIdentityIcon/> &nbsp; Rossie Marts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<DuoIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CallRoundedIcon/>
                                    </div>
                                    <div className="applicants-list">
                                        <PermIdentityIcon/> &nbsp; Rossie Marts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<DuoIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CallRoundedIcon/>
                                    </div>
                                    <div className="applicants-list">
                                        <PermIdentityIcon/> &nbsp; Rossie Marts &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<DuoIcon/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CallRoundedIcon/>
                                    </div>
                                </Card.Body>
                            </Card>

                    </Card>
                </nav>


                <div className="content">
                    <Dashboard />
                </div>
            </Sidebar>
        );
    }
}
