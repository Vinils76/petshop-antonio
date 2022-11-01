import { useParams } from "react-router-dom";
import ListaCategorias from "../ListaCategorias/ListaCategorias";
import ListaPosts from "../ListaPosts/ListaPosts";
import estilos from "./Categoria.module.css";

const Categoria = () => {
  const { nome } = useParams();
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Categorias</h2>

      <ListaCategorias />
      <ListaPosts url={`posts?categoria=${nome}`} />
    </section>
  );
};

export default Categoria;
