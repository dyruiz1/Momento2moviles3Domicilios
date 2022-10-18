import { Text, View } from "react-native";
import { tablaStyles } from "../assets/styles/styles";

export default function TablaRow({ pedido }) {
  return (
    <View style={tablaStyles.row}>
      <Text>{pedido.pedidoNumero}</Text>
      <Text>{pedido.identificacion}</Text>
      <Text>{pedido.fullname}</Text>
      <Text>{pedido.fecha}</Text>
      <Text>{pedido.direccion}</Text>
      <Text>{pedido.valor}</Text>
    </View>
  );
}
