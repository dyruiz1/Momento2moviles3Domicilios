import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  StyleSheet,
} from "react-native";

import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";

import Tabla from "../componentes/Tabla";
import { formStyles } from "../assets/styles/styles";

const styles = StyleSheet.create({
  img: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

const pedidoValidationSchema = yup.object().shape({
  pedidoNumero: yup
    .string("Ingresa el número de pedido")
    .matches(/^[0-9]*(\.?)[0-9]+$/, "Solo se permiten números.")
    .required("*Campo requerido"),
  identificacion: yup
    .string("Ingresa el número de identificación")
    .matches(/^[0-9]*(\.?)[ 0-9]+$/, "Solo se permiten números.")
    .required("*Campo requerido")
    .min(8, "minimo 8 caracteres"),
  fullname: yup
    .string("Ingrese nombres y apellidos completos")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g, "Usuario solo puede contener letras.")
    .required("*Campo requerido")
    .min(3, "minimo 3 caracteres"),  
  fecha: yup.date().required("*Campo requerido Ingrese Mes-Dia-Año"),
  direccion: yup.string("Ingrese la direccion").required("*Campo requerido"),
  valor: yup
    .number()
    .required("*Campo requerido")
    .integer("ingresa numeros enteros")
    .positive("ingresa un número mayor que cero")
    .test("el valor del pedidos debe ser mayor a 200000", (value) => {
      if (value <= 20000) {
        return false;
      }
      return true;
    }),
});

export default function PedidoScreen() {
  const [datos, setDatos] = useState([
    {
      pedidoNumero: "1",
      identificacion: "1020",
      fullname: "juan",
      fecha: "05-20-2020",
      direccion: "calle 13",
      valor: "22000",
      
    },

  ]);

  const onFormSubmit = (values) => {
    setDatos((prevDatos) => [...prevDatos, values]);
  };
  return (
    <ScrollView>
      <View style={formStyles.container}>
        <ImageBackground
          source={require("../assets/huerta.jpeg")}
          resizeMode="cover"
          style={styles.img}
        >
          <Formik
            validateOnMount={true}
            validationSchema={pedidoValidationSchema}
            initialValues={{
              pedidoNumero: "",
              identificacion: "",
              fullname: "",
              fecha: "",
              direccion: "",
              valor: "",
            }}
            onSubmit={onFormSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <TextInput
                  style={formStyles.inputs}
                  placeholder="Número de pedido"
                  onChangeText={handleChange("pedidoNumero")}
                  onBlur={handleBlur("pedidoNumero")}
                  value={values.pedidoNumero}
                  keyboardType="default"
                />
                {errors.pedidoNumero && touched.pedidoNumero && (
                  <Text style={formStyles.errorText}>
                    {errors.pedidoNumero}
                  </Text>
                )}

                <TextInput
                  style={formStyles.inputs}
                  placeholder="Número de identificación"
                  onChangeText={handleChange("identificacion")}
                  onBlur={handleBlur("identificacion")}
                  value={values.identificacion}
                  keyboardType="default"
                />
                {errors.identificacion && touched.identificacion && (
                  <Text style={formStyles.errorText}>
                    {errors.identificacion}
                  </Text>
                )}

                <TextInput
                  style={formStyles.inputs}
                  placeholder="Nombres y apellidos completos"
                  onChangeText={handleChange("fullname")}
                  onBlur={handleBlur("fullname")}
                  value={values.fullname}
                  keyboardType="default"
                />
                {errors.fullname && touched.fullname && (
                  <Text style={formStyles.errorText}>{errors.fullname}</Text>
                )}

                <TextInput
                  style={formStyles.inputs}
                  placeholder="Fecha"
                  onChangeText={handleChange("fecha")}
                  onBlur={handleBlur("fecha")}
                  value={values.fecha}
                  keyboardType="default"
                />
                {errors.fecha && touched.fecha && (
                  <Text style={formStyles.errorText}>{errors.fecha}</Text>
                )}

                <TextInput
                  style={formStyles.inputs}
                  placeholder="Dirección"
                  onChangeText={handleChange("direccion")}
                  onBlur={handleBlur("direccion")}
                  value={values.direccion}
                  keyboardType="default"
                />
                {errors.direccion && touched.direccion && (
                  <Text style={formStyles.errorText}>{errors.direccion}</Text>
                )}

                <TextInput
                  style={formStyles.inputs}
                  placeholder="Valor"
                  onChangeText={handleChange("valor")}
                  onBlur={handleBlur("valor")}
                  value={values.valor}
                  keyboardType="default"
                />
                {errors.valor && touched.valor && (
                  <Text style={formStyles.errorText}>{errors.valor}</Text>
                )}

                <TouchableOpacity
                  style={formStyles.button}
                  onPress={handleSubmit}
                >
                  <Text style={formStyles.buttonText}>Guardar Pedido</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </ImageBackground>
      </View>
      <Tabla datos={datos} />
    </ScrollView>
  );
}
