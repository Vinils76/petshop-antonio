import estilos from "./ListaPosts.module.css";
const ListaPosts = () => {
  return (
    <div className={estilos.lista_posts}>
      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolorem facere quam mollitia eligendi dolor?
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolorem facere quam mollitia eligendi dolor?
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolorem facere quam mollitia eligendi dolor?
        </p>
      </article>
      <article className={estilos.post}>
        <h3>Título do post...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          dolorem facere quam mollitia eligendi dolor?
        </p>
      </article>
    </div>
  );
};

export default ListaPosts;
