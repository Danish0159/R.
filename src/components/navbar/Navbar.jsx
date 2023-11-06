import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="wrapper">
        <span className="nav_logo">Inbox</span>
        <div className="items">
          <div className="search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Search Courses" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://s3-alpha-sig.figma.com/img/4c57/d372/1216c0dc72d66a989c19ddcc453027e4?Expires=1699833600&Signature=lxv9a2SVsMLwq10lLDzdAa6Q-4oSvs-q2WvrB0CGM2dIWwV8nDT0X2FWb9bfyJYc~VMmx8ZhBuhAybKLHYNqzj4a5f6fT5Y-06jUvSEYbI1rxJXw6EK1ptLCoWc01cSQB~4eiBE7vtxyxB0-Ayz6w22jXE9Y-lzIpcjMFg8jMKYCMBsbHk5~Y69gN5oiXfEWVjoyzPU8QtmIlVuFKZcMYFJrJ8ODZEN3KnJuaJQUasWFZHkmUE4BHjV7HPS6zW0X6ceQ~hKDmJeGcHJgHUzLAT~J5yYr2Qu8SsY~-C05-9Ye7MF2M5zw~i3X6ZgNFRi0m~wj~69kdKSbfQAe~H3GIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
