import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PedidoScreen from "./PedidosScreen";
import MovimientoScreen from "./MovimientoScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function DomiciliosScreen({ navigation, route }) {
  const values = route.params;
  console.log(values);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Pedido"
        component={PedidoScreen}
        options={{
          title: "Haz tú Pedido",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={"blue"} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Movimientos"
        component={MovimientoScreen}
        options={{
          title: "Rastrea Pedido",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={"orange"} size={18} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
