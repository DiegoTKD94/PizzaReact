import React from "react";
import { Button, Icon, Input } from "semantic-ui-react";

const Pizza = ({ pequeñas, medianas, grandes, handleComensales, handleCantPizzas, calculatePizzas }) => {
  return (
    <div>
      <h1>Contador de pizzas</h1>
      <h2>Ingrese la cantidad de comensales:</h2>
      <Input loading icon='user' placeholder='Numero de comensales' onChange={ handleComensales }/>
      <h2>Ingrese la cantidad de pizzas que se comen por persona:</h2>
      <Input loading icon='user' placeholder='Cantidad de pizzas' onChange={ handleCantPizzas} />
      <Button animated="fade" onClick={ calculatePizzas }>
        <Button.Content visible>Calcular</Button.Content>
        <Button.Content hidden>enviar</Button.Content>
      </Button>
  <h1>El numero de pizzas es:</h1>
  <h3>Pequeñas: { pequeñas } ó</h3>
  <h3>Medianas: { medianas } ó</h3>
  <h3>Grandes: { grandes }</h3>
    </div>
  );
};

export default Pizza;
