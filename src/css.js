const string = `
.minionContainer {
  position: relative;
  width: 180px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.minion-body::after {
  display: block;
  content: "";
  width: 140px;
  height: 250px;
  background-color: #ffcb4f;
  z-index: 2;
  border-radius: 80px 80px 50px 50px;
  overflow: hidden;
}
.minion-body{
  width: 140px;
  height: 250px;
  overflow: hidden;
  border-radius: 80px 80px 50px 50px;
}
.minion > .hair{
  top: -15px;
}
.minion > .hair li{
  list-style: none;
  height: 30px;
  width: 10px;
  float: left;
}
.minion > .hair li:nth-of-type(-n+4){
  border-right: 1px solid #333333;
  border-radius: 0 80% 0 0;
}
.minion > .hair.back li:nth-of-type(1){
  transform: rotate(-70deg);
  margin-top: 36px;
  position: absolute;
}
.minion > .hair li:nth-of-type(1){
  left: 8px;
  height: 30px;
}
.minion > .hair.back li:nth-of-type(2){
  transform: rotate(-50deg);
  margin-top: 19px;
 ;
}
.minion > .hair li:nth-of-type(2){
  left: 18px
}
.minion > .hair.back li:nth-of-type(3){
  transform: rotate(-30deg);
  margin-top: 12px;
}
.minion > .hair li:nth-of-type(3){
  left: 30px;
}
.minion > .hair.back li:nth-of-type(4){
  transform: rotate(-10deg);
  margin-top: 3px;
}
.minion > .hair li:nth-of-type(4) {
  left: 45px;
}
.minion > .hair li:nth-of-type(5) {
  left: 60px;
}
.minion > .hair li:nth-of-type(6) {
  left: 76px;
}
.minion > .hair li:nth-of-type(7) {
  left: 93px
}
.minion > .hair li:nth-of-type(8) {
  left: 107px;
}
.minion > .hair li:nth-of-type(9) {
  left: 119px;
  height: 30px;
}
.minion > .hair.back li:nth-of-type(5){
  transform: rotate(2deg);
  border-left: 1px solid #333333;
  border-radius: 80% 0 0 0;
}
.minion > .hair.back li:nth-of-type(6){
  transform: rotate(10deg);
  margin-top: 3px;
}
.minion > .hair li:nth-of-type(n+6) {
  border-left: 1px solid #333333;
  border-radius: 80% 0 0 0;
}
.minion > .hair.back li:nth-of-type(7){
  transform: rotate(30deg);
  margin-top: 12px;
}
.minion > .hair.back li:nth-of-type(8){
  transform: rotate(50deg);
  margin-top: 19px;
}
.minion > .hair.back li:nth-of-type(9){
  transform: rotate(70deg);
  margin-top: 36px;
}
.minion > .hair.front{
  margin-top: 3px;
  z-index: 4;
}
.minion .hair.front li:nth-of-type(1) {
  transform: rotate(-60deg);
  margin-top: 21px;
}
.minion .hair.front li:nth-of-type(2) {
  transform: rotate(-46deg);
  margin-top: 12px;
}
.minion .hair.front li:nth-of-type(3) {
  transform: rotate(-28deg);
  margin-top: 7px;
}
.minion .hair.front li:nth-of-type(4) {
  transform: rotate(-12deg);
  margin-top: 5px;
}
.minion .hair.front li:nth-of-type(5) {
  transform: rotate(-2deg);
  margin-top: 3px;
}
.minion .hair.front li:nth-of-type(6) {
  transform: rotate(12deg);
  margin-top: 6px;
}
.minion .hair.front li:nth-of-type(7) {
  transform: rotate(28deg);
  margin-top: 7px;
}
.minion .hair.front li:nth-of-type(8) {
  transform: rotate(46deg);
  margin-top: 12px;
}
.minion .hair.front li:nth-of-type(9) {
  transform: rotate(60deg);
  margin-top: 21px;
}

.goggle {
  height: 56px;
  width: 56px;
  border: 3px solid hsl(0, 0%, 40%);
  border-radius: 50%;
}
.goggle.left {
  left: -1px;
}
.goggle.right {
  right: -1px;
}
.eye {
  box-shadow: inset 0 2px 10px 0 rgba(51, 51, 51, 0.5),
    inset 0 -1px 5px 0 rgba(51, 51, 51, 0.3);
  width: 50px;
  height: 46px;
  background-color: whitesmoke;
  position: absolute;
  border-radius: 50%;
  margin: 1px 0;
  z-index: 3;
}

.eye::before {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #e7a452;
  background-image: radial-gradient(
    #e7a452 0%,
    #91695c 49%,
    #91695c 74%,
    #000000 99%
  );
  position: absolute;
  top: 50%;
  margin: -7.5px;
}
.eye::after {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #333333;
  position: absolute;
  top: 50%;
  margin: -2.5px;
}
.eye.left::before {
  right: 40%;
}
.eye.left::after {
  right: 40%;
}
.eye.right::before {
  left: 40%;
}
.eye.right::after {
  left: 40%;
}
.goggle-frame {
  position: absolute;
  width: 60px;
  height: 60px;
  border: 5px solid #cccccc;
  border-radius: 50%;
  top: 40px;
  overflow: hidden;
  z-index: 3;
}
.goggle-frame.left {
  left: 30%;
  margin-left: -30px;
}
.goggle-frame.right {
  right: 30%;
  margin-right: -30px;
}
.goggle-shadow {
  height: 75px;
  top: 45px;
  border-radius: 50%;
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 50%
  );
  z-index: 2;
}
.goggle-shadow.right {
  left: 55px;
  width: 100px;
}
.goggle-shadow.left {
  left: 5px;
  width: 130px;
}

.goggle-strap {
  top: 68px;
  height: 3px;
  background: black;
  width: 16px;
  z-index: 3;
}
.goggle-strap.left {
  left: -2px;
}
.goggle-strap.right {
  right: -2px;
}
.goggle-strap::before {
  position: absolute;
  top: -7px;
  border-right: 16px solid #444;
  border-top: 2px solid transparent;
  height: 8px;
}
.goggle-strap::after {
  position: absolute;
  top: 3px;
  border-right: 16px solid #444;
  border-bottom: 2px solid transparent;
  height: 8px;
}
.goggle-strap-link {
  height: 25px;
  width: 5px;
  top: 58px;
  background-color: #999999;
  z-index: 3;
}
.goggle-strap-link.left {
  left: 12px;
}
.goggle-strap-link.right {
  right: 12px;
}
.mouth {
  position: absolute;
  top: 110px;
  width: 60px;
  height: 20px;
  border-radius: 70%;
  border-bottom: 2px solid #de9a33;
  left: 50%;
  margin-left: -30px;
  box-shadow: inset 0 -1px 2px -1px rgba(0, 0, 0, 0.3);
  z-index: 3;
}

.dungarees{
  width: 100%;
  height: 90px;
  bottom: 0;
  z-index: 3;
}
.dungarees > .dungarees-front{
  bottom: 0;
  height: 90px;
  width: 140px;
  overflow: hidden;
  border-top: 1px solid #4883b8;
}
.dungarees > .dungarees-front::before{
  width: 56px;
  height: 75%;
  top: 0;
  border: 1px solid #4883b8;
  left: -30px;
  border-radius: 0 0 35% 0;
  box-shadow: 40px -40px 30px 40px #6D9CC6;
}
.dungarees > .dungarees-front::after {
  width: 56px;
  height: 75%;
  top: 0;
  border: 1px solid #4883b8;
  right: -30px;
  box-shadow: -40px -40px 30px 40px #6D9CC6;
  border-radius: 0 0 0 35%;
}

.dungarees-strap{
  width: 60px;
  height: 12px;
  background-color: #79a3ca;
  border: 1px solid #4883b8;
  overflow: hidden;
}
.dungarees-strap.left {
  top: 0;
  left: 0;
  transform: rotate(15deg) translateX(-10px);
}
.dungarees-strap.right {
  top: 0;
  right: 0;
  transform: rotate(-15deg) translateX(10px);
}
.dungarees-strap .button{
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #333333;
  top: 1px;
  z-index: 3;
}
.dungarees-strap.left > .button{
  right: 2px;
}
.dungarees-strap.right > .button{
  left: 2px;
}
.dungarees > .dungarees-bottom{
  bottom: 0;
  height: 40px;
  width: 140px;
  background-color: #6d9cc6;
  background-image: linear-gradient(top, #6d9cc6 45%, #4b6587 100%);
  border-top: 1px solid #4883b8;
}
.dungarees > .dungarees-pocket{
  bottom: 35px;
  left: 50%;
  margin-left: -17.5px;
  height: 35px;
  width: 35px;
  border-radius: 0 0 15px 15px;
  border-left: 1px solid #4883b8;
  border-right: 1px solid #4883b8;
  border-bottom: 1px solid #4883b8;
}
.dungarees > .dungarees-pocket::before{
  top: -13px;
  left: -2px;
  height: 15px;
  width: 37px;
  border-bottom: 1px solid #4883b8;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-radius: 20px;
}
.dungarees > .dungarees-pocket > .logo{
  top: 50%;
  left: 50%;
  margin-left: -12.5px;
  margin-top: -10.5px;
  height: 25px;
  width: 25px;
  background: #333333;
  border-radius: 50%;
}
.dungarees > .dungarees-pocket > .logo::before{
  top: 50%;
  left: 50%;
  margin-left: -7.5px;
  margin-top: -7.5px;
  height: 15px;
  width: 15px;
  background: #6D9CC6;
  transform: rotate(45deg);
}
.dungarees > .dungarees-pocket > .logo::after{
  top: 50%;
  left: 50%;
  margin-left: -3.5px;
  margin-top: -3.5px;
  height: 7px;
  width: 7px;
  background: #333333;
  border-radius: 50%;
  z-index: 5;

}
.dungarees > .dungarees-pocket > .logo span{
  height: 2px;
  background: #333333;
  border-bottom: 1px solid #6D9CC6;
  width: 12px;
  right: 0;
  top: 48%;
  margin-top: -1px;
  z-index: 6;
}
.arm{
  width: 14px;
  height: 40px;
  bottom: 21px;
  z-index: 3;
  background-color: #ffcb4f;
}
.arm.left{
  left: -11px;
  top: 164px;
  border-radius: 30% 0 0 0;
  transform: rotate(22deg);
}

.arm.right{
  right: -11px;
  top: 164px;
  border-radius: 0 30% 0 0;
  transform: rotate(-22deg);
}
.arm.left::after{
  width: 14px;
  height: 44px;
  bottom: 0;
  right: -14px;
  border-radius: 38% 0 0 48%;
  background-color: inherit;
  transform: translate(0, 28px) rotate(-88deg);
}
.arm.right::after{
  width: 14px;
  height: 42px;
  bottom: 0;
  right: -14px;
  border-radius: 0 38% 48% 0;
  background-color: inherit;
  transform:  rotate(88deg) translate(26px, 29px);
}
.arm-shadow{
  top: 180px;
  height: 30px;
  width: 5px;
  border-radius: 50%;
  z-index: 3;
}
.arm-shadow.left{
  left: 0;
  box-shadow: inset 2px 0 3px -1px rgba(0, 0, 0, 0.3);
  transform: rotate(5deg);
}
.arm-shadow.right{
  right: 0;
  box-shadow: inset -2px 0 3px -1px rgba(0, 0, 0, 0.3);
  transform: rotate(-5deg);
}

.leg{
  bottom: -15px;
  height: 15px;
  width: 25px;
  background: #4B6587;
  z-index: -1;
  border-left: 1px solid #4883b8;
  border-right: 1px solid #4883b8;
}
.leg.left{
  left: 40px;
  border-radius: 0 0 10% 20%/0 0 80% 80%;
}
.leg::after{
  top: -10px;
  background: #4B6587;
  height: 10px;
  width: 20px;
  border-bottom: 1px solid #4883b8;
}
.leg.left::after{
  transform: rotate(55deg);
  left: -12px;
}
.leg.right{
  right: 40px;
  border-radius: 0 0 20% 10%/0 0 80% 80%;
}
.leg.right::after{
  transform: rotate(-55deg);
  right: -12px;
}

.shoe{
  bottom: -26px;
  width: 30px;
  height: 10px;
  background: #222222;
  z-index: -2;
}
.shoe.left{
  right: 75.5px;
  border-radius: 50px 20px 15px 10px;
  transform: rotate(-3deg);
}
.shoe.left::before{
  right: 0;
}
.shoe::before{
  top: -10px;
  height: 15px;
  width: 22px;
  background: #222222;
}
.shoe.left::after{
  right: 0;
  border-radius: 10px 0 0 10px;
}
.shoe.right{
  left: 75px;
  border-radius: 20px 50px 10px 15px;
  transform: rotate(3deg);
}
`
export default string;