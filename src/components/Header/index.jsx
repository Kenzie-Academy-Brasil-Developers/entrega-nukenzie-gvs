import nuLogo from "../../assets/NuKenzie.svg";
import style from "./style.module.scss";
function Header() {
  return (
    <header className={style.container}>
      <figure>
        <img src={nuLogo} alt="logo nu-kenzie" />
      </figure>
    </header>
  );
}
export default Header;
