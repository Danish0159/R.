import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import PeopleIcon from '@mui/icons-material/People';
import MailIcon from '@mui/icons-material/Mail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Read.</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <li>
            <QuestionMarkIcon className="icon" />
            <span>Post a Question</span>
          </li>
          <li>
            <BorderStyleIcon className="icon" />
            <span>My Orders</span>
          </li>
          <li>
            <PeopleIcon className="icon" />
            <span>Browse Tutors</span>
          </li>
          <li>
            <MailIcon className="icon" />
            <span>Inbox</span>
          </li>
          <li>
            <InsertChartIcon className="icon" />
            <span>Referrals</span>
          </li>
          <li>
            <HelpOutlineIcon className="icon" />
            <span>Help Center</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
