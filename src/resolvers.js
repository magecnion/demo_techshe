import { bebidas, comidas, ingredientes } from "./db";

const resolvers = {
  Query: {
    bebidas: (parent, args, context, info) => {
      return bebidas;
    },
    comida: (parent, { nombre }, context, info) => {
      let comida = comidas.find(comida => comida.nombre == nombre);
      comida.ingredientes = comida.ingredientes.map(nombre_ingrediente =>
        ingredientes.find(i => i.nombre == nombre_ingrediente)
      );
      return comida;
    }
  },
  Mutation: {
    addBebida: (parent, { bebida }, context, info) => {
      bebidas.push(bebida);
      return bebida;
    },
    addComida: (parent, { comida }, context, info) => {
      comidas.push(comida);
      return comida;
    }
  }
};

export default resolvers;
