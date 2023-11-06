import "./right.scss";
import { Avatar, Button, TextField } from "@mui/material";
import { styles } from "../../mui/styles";

const Right = () => {
  return (
    <div className="right">
      <div className="container">
        <div className="message">
          <Avatar src="https://s3-alpha-sig.figma.com/img/241a/3f17/61006efc5b8f57e28280b0b4cf1d476f?Expires=1699833600&Signature=QE~NMdFZGQ27uSHBpuujAok878E94m2xIeMZVlk6ORuSGwlYpSyhc531fY1K0K7wuW3KeXay1pF0xNx8IWQ9eAiCujTkn1P4IZc-lqKpDiMvW9w1B9vueAWl7KlOUB-crdLMhydy77jmkaYudh4pJAR-62B~jLpcDx6vxvqfXeem1YtK-lMVa-~vfnDU3Ytq4wjzIzDVuj4d0sScZVw3f9wK~BkaNshOEZ1ykv1Q4tnzajxsPsqtyROzCQxlxOQru2n9UyixXekMYyBD-dI1TsG8CH~j4mS3X3pgb7mg-bH3UysJYUWZqIRb0p4TMsBHFzIn-iuDGvPnJ4xi6W1egQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Zephyrus</p>
            <p>Hello? How Are You?</p>
          </div>
        </div>
        <div className="message">
          <Avatar src="https://s3-alpha-sig.figma.com/img/f6b4/206b/d7da86c18dad07edb2a8a244fc1941dc?Expires=1699833600&Signature=XA5aE9LacYm2~FQqmepHtwtZNJNCkLa18AzJlrpxYhvJmuKS-TXPxJ5T9WdZmBOoheuvdi0bYHthIOiNRaG4QQo1OAxZC-TMMnRkWZTfpYEdtnc-1NZWUK4xuBlwtNFIKms0no-VlSr3hJ183sqlco0e4DBTJz1VRZwK~TzZTJn7XXgg2tlXMwQLzhBWoLsLL~PLCeHpKOyDrFBY1RbOPAAxNbk8yUzvB7FBIWrScAFZYnQqqoarQcXIm~-1GsyDGFQ4NAw2oXfmz8V-5PXUQJbRk-u29I6ottsQ7R0TfYYlsbSAiW6BlSy6aImQ-UXEVjSp69qqkF-nT0SQuPNeQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Marcus Walton</p>
            <p>Hello? Good </p>
          </div>
        </div>

        <div className="message">
          <Avatar src="https://s3-alpha-sig.figma.com/img/241a/3f17/61006efc5b8f57e28280b0b4cf1d476f?Expires=1699833600&Signature=QE~NMdFZGQ27uSHBpuujAok878E94m2xIeMZVlk6ORuSGwlYpSyhc531fY1K0K7wuW3KeXay1pF0xNx8IWQ9eAiCujTkn1P4IZc-lqKpDiMvW9w1B9vueAWl7KlOUB-crdLMhydy77jmkaYudh4pJAR-62B~jLpcDx6vxvqfXeem1YtK-lMVa-~vfnDU3Ytq4wjzIzDVuj4d0sScZVw3f9wK~BkaNshOEZ1ykv1Q4tnzajxsPsqtyROzCQxlxOQru2n9UyixXekMYyBD-dI1TsG8CH~j4mS3X3pgb7mg-bH3UysJYUWZqIRb0p4TMsBHFzIn-iuDGvPnJ4xi6W1egQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Zephyrus</p>
            <p>Hello? How Are You?</p>
          </div>
        </div>
        <div className="message">
          <Avatar src="https://s3-alpha-sig.figma.com/img/f6b4/206b/d7da86c18dad07edb2a8a244fc1941dc?Expires=1699833600&Signature=XA5aE9LacYm2~FQqmepHtwtZNJNCkLa18AzJlrpxYhvJmuKS-TXPxJ5T9WdZmBOoheuvdi0bYHthIOiNRaG4QQo1OAxZC-TMMnRkWZTfpYEdtnc-1NZWUK4xuBlwtNFIKms0no-VlSr3hJ183sqlco0e4DBTJz1VRZwK~TzZTJn7XXgg2tlXMwQLzhBWoLsLL~PLCeHpKOyDrFBY1RbOPAAxNbk8yUzvB7FBIWrScAFZYnQqqoarQcXIm~-1GsyDGFQ4NAw2oXfmz8V-5PXUQJbRk-u29I6ottsQ7R0TfYYlsbSAiW6BlSy6aImQ-UXEVjSp69qqkF-nT0SQuPNeQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Marcus Walton</p>
            <p>Hello? Good </p>
          </div>
        </div>
        <div className="message">
          <Avatar src="https://s3-alpha-sig.figma.com/img/241a/3f17/61006efc5b8f57e28280b0b4cf1d476f?Expires=1699833600&Signature=QE~NMdFZGQ27uSHBpuujAok878E94m2xIeMZVlk6ORuSGwlYpSyhc531fY1K0K7wuW3KeXay1pF0xNx8IWQ9eAiCujTkn1P4IZc-lqKpDiMvW9w1B9vueAWl7KlOUB-crdLMhydy77jmkaYudh4pJAR-62B~jLpcDx6vxvqfXeem1YtK-lMVa-~vfnDU3Ytq4wjzIzDVuj4d0sScZVw3f9wK~BkaNshOEZ1ykv1Q4tnzajxsPsqtyROzCQxlxOQru2n9UyixXekMYyBD-dI1TsG8CH~j4mS3X3pgb7mg-bH3UysJYUWZqIRb0p4TMsBHFzIn-iuDGvPnJ4xi6W1egQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Zephyrus</p>
            <p>Hello? How Are You?</p>
          </div>
        </div>
        <div className="message">
          <Avatar src="https://s3-alpha-sig.figma.com/img/f6b4/206b/d7da86c18dad07edb2a8a244fc1941dc?Expires=1699833600&Signature=XA5aE9LacYm2~FQqmepHtwtZNJNCkLa18AzJlrpxYhvJmuKS-TXPxJ5T9WdZmBOoheuvdi0bYHthIOiNRaG4QQo1OAxZC-TMMnRkWZTfpYEdtnc-1NZWUK4xuBlwtNFIKms0no-VlSr3hJ183sqlco0e4DBTJz1VRZwK~TzZTJn7XXgg2tlXMwQLzhBWoLsLL~PLCeHpKOyDrFBY1RbOPAAxNbk8yUzvB7FBIWrScAFZYnQqqoarQcXIm~-1GsyDGFQ4NAw2oXfmz8V-5PXUQJbRk-u29I6ottsQ7R0TfYYlsbSAiW6BlSy6aImQ-UXEVjSp69qqkF-nT0SQuPNeQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Marcus Walton</p>
            <p>Hello? Good </p>
          </div>
        </div>
        <div className="message">
          <Avatar src="https://s3-alpha-sig.figma.com/img/241a/3f17/61006efc5b8f57e28280b0b4cf1d476f?Expires=1699833600&Signature=QE~NMdFZGQ27uSHBpuujAok878E94m2xIeMZVlk6ORuSGwlYpSyhc531fY1K0K7wuW3KeXay1pF0xNx8IWQ9eAiCujTkn1P4IZc-lqKpDiMvW9w1B9vueAWl7KlOUB-crdLMhydy77jmkaYudh4pJAR-62B~jLpcDx6vxvqfXeem1YtK-lMVa-~vfnDU3Ytq4wjzIzDVuj4d0sScZVw3f9wK~BkaNshOEZ1ykv1Q4tnzajxsPsqtyROzCQxlxOQru2n9UyixXekMYyBD-dI1TsG8CH~j4mS3X3pgb7mg-bH3UysJYUWZqIRb0p4TMsBHFzIn-iuDGvPnJ4xi6W1egQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Zephyrus</p>
            <p>Hello? How Are You?</p>
          </div>
        </div>
        <div className="message">
          <Avatar src="https://s3-alpha-sig.figma.com/img/f6b4/206b/d7da86c18dad07edb2a8a244fc1941dc?Expires=1699833600&Signature=XA5aE9LacYm2~FQqmepHtwtZNJNCkLa18AzJlrpxYhvJmuKS-TXPxJ5T9WdZmBOoheuvdi0bYHthIOiNRaG4QQo1OAxZC-TMMnRkWZTfpYEdtnc-1NZWUK4xuBlwtNFIKms0no-VlSr3hJ183sqlco0e4DBTJz1VRZwK~TzZTJn7XXgg2tlXMwQLzhBWoLsLL~PLCeHpKOyDrFBY1RbOPAAxNbk8yUzvB7FBIWrScAFZYnQqqoarQcXIm~-1GsyDGFQ4NAw2oXfmz8V-5PXUQJbRk-u29I6ottsQ7R0TfYYlsbSAiW6BlSy6aImQ-UXEVjSp69qqkF-nT0SQuPNeQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Marcus Walton</p>
            <p>Hello? Good </p>
          </div>
        </div>
        <div className="message">
          <Avatar src="https://s3-alpha-sig.figma.com/img/241a/3f17/61006efc5b8f57e28280b0b4cf1d476f?Expires=1699833600&Signature=QE~NMdFZGQ27uSHBpuujAok878E94m2xIeMZVlk6ORuSGwlYpSyhc531fY1K0K7wuW3KeXay1pF0xNx8IWQ9eAiCujTkn1P4IZc-lqKpDiMvW9w1B9vueAWl7KlOUB-crdLMhydy77jmkaYudh4pJAR-62B~jLpcDx6vxvqfXeem1YtK-lMVa-~vfnDU3Ytq4wjzIzDVuj4d0sScZVw3f9wK~BkaNshOEZ1ykv1Q4tnzajxsPsqtyROzCQxlxOQru2n9UyixXekMYyBD-dI1TsG8CH~j4mS3X3pgb7mg-bH3UysJYUWZqIRb0p4TMsBHFzIn-iuDGvPnJ4xi6W1egQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Zephyrus</p>
            <p>Hello? How Are You?</p>
          </div>
        </div>
        <div className="message">
          <Avatar src="https://s3-alpha-sig.figma.com/img/f6b4/206b/d7da86c18dad07edb2a8a244fc1941dc?Expires=1699833600&Signature=XA5aE9LacYm2~FQqmepHtwtZNJNCkLa18AzJlrpxYhvJmuKS-TXPxJ5T9WdZmBOoheuvdi0bYHthIOiNRaG4QQo1OAxZC-TMMnRkWZTfpYEdtnc-1NZWUK4xuBlwtNFIKms0no-VlSr3hJ183sqlco0e4DBTJz1VRZwK~TzZTJn7XXgg2tlXMwQLzhBWoLsLL~PLCeHpKOyDrFBY1RbOPAAxNbk8yUzvB7FBIWrScAFZYnQqqoarQcXIm~-1GsyDGFQ4NAw2oXfmz8V-5PXUQJbRk-u29I6ottsQ7R0TfYYlsbSAiW6BlSy6aImQ-UXEVjSp69qqkF-nT0SQuPNeQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></Avatar>
          <div className="content">
            <p>Marcus Walton</p>
            <p>Hello? Good </p>
          </div>
        </div>
        <div className="input">
          <TextField
            fullWidth
            placeholder="Write message"
            type="text"
            inputProps={{
              style: styles.textField,
            }}
          />
          <Button size="large" style={{ backgroundColor: "#ED712E", marginLeft: "1rem" }} variant="contained">Sent</Button>
        </div>
      </div>
    </div >
  );
};

export default Right;
