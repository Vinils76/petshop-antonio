import estilos from "./ListaCategorias.module.css";
import { useEffect, useState } from "React";
import serverApi from "../../api/servidor-api";
import { Link } from "react-router-dom";

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${serverApi}/categorias`);
        const dados = await resposta.json();
        setCategorias(dados);
      } catch (error) {
        console.log("Deu ruim " + error.message);
      }
    }

    console.log(categorias);

    getCategorias();
  }, []);

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map((categoria) => {
          return <li key={categoria.id}> {categoria.nome} </li>;
        })}
        ;
      </ul>
    </div>
  );
};
