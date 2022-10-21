import estilos from "./Caixa.module.css";

const Caixa = (children, listaDeClasses) => {
  return (
    <div className={`${estilos.caixa} ${listaDeClasses || ""}`}>{children}</div>
  );
};

export default Caixa;
