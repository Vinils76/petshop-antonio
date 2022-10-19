import estilos from "./Cabecalho.module.css";
import logo from "../../assets/images/logo.png";
import Menu from "../Menu/Menu";

const Cabecalho = () => {
  return (
    <header className={estilos.topo}>
      <div className="limitador">
        <h1>
          <a href="">
            <img src={logo} alt="Patinha dentro de um coração"></img>
            PetShop
          </a>
        </h1>

        <Menu />
      </div>
    </header>
  );
};

export default Cabecalho;
