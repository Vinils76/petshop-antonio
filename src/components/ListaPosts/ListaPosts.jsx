import { useState, useEffect } from "react";
import serverApi from "../../api/servidor-api";
import estilos from "./ListaPosts.module.css";
const ListaPosts = () => {
  const [posts, setPosts] = useState([]);

  console.log(serverApi);

  const postsTemp = [];

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
      } catch (error) {
        console.log("deu ruim " + error.message);
      }
    }
    getPosts();
  }, []);

  return (
    <div className={estilos.lista_posts}>
      {postsTemp.map(({ id, titulo, subtitulo }) => (
        <article className={estilos.post} key={id}>
          <h3> {titulo} </h3>
          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
};

export default ListaPosts;
