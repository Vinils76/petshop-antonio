import { useState, useEffect } from "react";

import serverApi from "../../api/servidor-api";
import ArtigoPost from "../ArtigoPost/ArtigoPost";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import estilos from "./ListaPosts.module.css";
const ListaPosts = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(serverApi);

  const postsTemp = [];

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/${props.url}`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("deu ruim " + error.message);
      }
    }
    getPosts();
  }, [props.url]);

  if (loading) {
    return <LoadingDesenho style={{ backgroundColor: "red" }} />;
  }

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <ArtigoPost
          key={id}
          id={id}
          titulo={titulo}
          subtitulo={subtitulo}
          classe={estilos.post}
        />
      ))}
    </div>
  );
};

export default ListaPosts;
