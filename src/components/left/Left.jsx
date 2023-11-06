import React from "react";
import "./left.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";

const Left = () => {
  return (
    <div className="left">

      <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search" />
      </div>

      <div className="center">

        <div className="tab" style={{ backgroundColor: "#F5F6F7" }}>
          <Avatar src="https://s3-alpha-sig.figma.com/img/241a/3f17/61006efc5b8f57e28280b0b4cf1d476f?Expires=1699833600&Signature=QE~NMdFZGQ27uSHBpuujAok878E94m2xIeMZVlk6ORuSGwlYpSyhc531fY1K0K7wuW3KeXay1pF0xNx8IWQ9eAiCujTkn1P4IZc-lqKpDiMvW9w1B9vueAWl7KlOUB-crdLMhydy77jmkaYudh4pJAR-62B~jLpcDx6vxvqfXeem1YtK-lMVa-~vfnDU3Ytq4wjzIzDVuj4d0sScZVw3f9wK~BkaNshOEZ1ykv1Q4tnzajxsPsqtyROzCQxlxOQru2n9UyixXekMYyBD-dI1TsG8CH~j4mS3X3pgb7mg-bH3UysJYUWZqIRb0p4TMsBHFzIn-iuDGvPnJ4xi6W1egQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Zephyrus</p>
            <p>Current message is a soft...</p>
          </div>
        </div>

        <div className="tab" >
          <Avatar src="https://s3-alpha-sig.figma.com/img/241a/3f17/61006efc5b8f57e28280b0b4cf1d476f?Expires=1699833600&Signature=QE~NMdFZGQ27uSHBpuujAok878E94m2xIeMZVlk6ORuSGwlYpSyhc531fY1K0K7wuW3KeXay1pF0xNx8IWQ9eAiCujTkn1P4IZc-lqKpDiMvW9w1B9vueAWl7KlOUB-crdLMhydy77jmkaYudh4pJAR-62B~jLpcDx6vxvqfXeem1YtK-lMVa-~vfnDU3Ytq4wjzIzDVuj4d0sScZVw3f9wK~BkaNshOEZ1ykv1Q4tnzajxsPsqtyROzCQxlxOQru2n9UyixXekMYyBD-dI1TsG8CH~j4mS3X3pgb7mg-bH3UysJYUWZqIRb0p4TMsBHFzIn-iuDGvPnJ4xi6W1egQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Zephyrus</p>
            <p>Current message is a soft...</p>
          </div>
        </div>

        <div className="tab" >
          <Avatar src="https://s3-alpha-sig.figma.com/img/241a/3f17/61006efc5b8f57e28280b0b4cf1d476f?Expires=1699833600&Signature=QE~NMdFZGQ27uSHBpuujAok878E94m2xIeMZVlk6ORuSGwlYpSyhc531fY1K0K7wuW3KeXay1pF0xNx8IWQ9eAiCujTkn1P4IZc-lqKpDiMvW9w1B9vueAWl7KlOUB-crdLMhydy77jmkaYudh4pJAR-62B~jLpcDx6vxvqfXeem1YtK-lMVa-~vfnDU3Ytq4wjzIzDVuj4d0sScZVw3f9wK~BkaNshOEZ1ykv1Q4tnzajxsPsqtyROzCQxlxOQru2n9UyixXekMYyBD-dI1TsG8CH~j4mS3X3pgb7mg-bH3UysJYUWZqIRb0p4TMsBHFzIn-iuDGvPnJ4xi6W1egQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Zephyrus</p>
            <p>Current message is a soft...</p>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Left;