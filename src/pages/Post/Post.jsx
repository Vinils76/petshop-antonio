import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import serverApi from "../../api/servidor-api";
import LoadingDesenho from "../../components/LoadingDesenho/LoadingDesenho";
import ArtigoPost from "../../components/ArtigoPost/ArtigoPost";

const Post = () => {
  const { id } = useParams();

  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPost() {
      try {
        const resposta = await fetch(`${serverApi}/posts/${id}`);
        const dados = await resposta.json();
        setPost(dados);
        setLoading(false);
        //console.log(dados);
      } catch (error) {
        console.log("Deu ruim na busca do post.. " + error.message);
      }
    }
    getPost();
  }, [id]);

  if (loading) return <LoadingDesenho />;

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <ArtigoPost
          key={id}
          titulo={titulo}
          subtitulo={subtitulo}
          classe={estilos.post}
        />
      ))}
    </div>
  );
};

export default Post;
