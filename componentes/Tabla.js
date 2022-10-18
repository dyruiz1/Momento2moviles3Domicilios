import { Text, View } from "react-native";
import { tablaStyles } from "../assets/styles/styles";
import TablaRow from "./TablaRow";

export default function Tabla({ datos = [] }) {
  console.log({ datos });
  return (
    <View>
      <View style={tablaStyles.titulos}>
        <Text style={tablaStyles.titulo}>Número pedido</Text>
        <Text style={tablaStyles.titulo}>Identificacion</Text>
        <Text style={tablaStyles.titulo}>Nombre</Text>
        <Text style={tablaStyles.titulo}>Fecha</Text>
        <Text style={tablaStyles.titulo}>Dirección</Text>
        <Text style={tablaStyles.titulo}>Valor del pedido</Text>
      </View>
      <View style={tablaStyles.container}>
        {datos.map((pedido, index) => (
          <TablaRow pedido={pedido} key={`${pedido.pedidoNumero}-${index}`} />
        ))}
      </View>
    </View>
  );
}
