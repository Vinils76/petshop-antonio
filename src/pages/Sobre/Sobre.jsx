import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Sobre.module.css";
const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Sobre nosso PetShop</h2>
      <Caixa>
        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          quo maxime. Nesciunt aspernatur inventore iure delectus, mollitia
          adipisci dicta esse!
        </p>
        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          voluptates est repellat minus sequi, quis placeat eius eaque pariatur
          reprehenderit repellendus ducimus, molestias dolor quasi voluptatibus
          iure fugit id nobis dolorum aliquid necessitatibus. Labore alias fugit
          expedita ea asperiores tempora!
        </p>
        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          suscipit adipisci omnis nihil, incidunt eaque itaque laborum
          aspernatur sit libero!
        </p>
      </Caixa>
    </section>
  );
};

export default Sobre;
