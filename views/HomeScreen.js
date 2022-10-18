import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { View, Text } from "react-native-web";
import { Formik } from "formik";
import * as yup from "yup";

import { formStyles } from "../assets/styles/styles";

const styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
  image: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const loginValidationSchema = yup.object().shape({
  usuario: yup
    .string("Ingresa tu nombre de Usuario")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g, "Usuario solo puede contener letras.")
    .required("*Campo requerido"),
  rol: yup
    .string("Ingresa tu Rol")
    .oneOf(["admin", "usuario"], 'El Rol solo puede ser "admin" o "usuario"')
    .required("*Campo requerido"),
  contrasenia: yup.string("Ingresa tu Contraseña").required("*Campo requerido"),
});

export default function HomeScreen({ navigation }) {
  const onFormSubmit = (values) => {
    console.log(values);
    if (values.rol === "admin" && values.usuario === "dyruiz") {
      navigation.navigate("Domicilios", {
        usuario: values.usuario,
        rol: values.rol,
      });
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.outer}>
      <ImageBackground
        source={require("../assets/banner.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Formik
          validateOnMount={true}
          validationSchema={loginValidationSchema}
          initialValues={{
            usuario: "",
            rol: "",
            contrasenia: "",
          }}
          style={formStyles.formulario}
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
                placeholder="Usuario"
                onChangeText={handleChange("usuario")}
                onBlur={handleBlur("usuario")}
                value={values.usuario}
                keyboardType="default"
              />
              {errors.usuario && touched.usuario && (
                <Text style={formStyles.errorText}>{errors.usuario}</Text>
              )}

              <TextInput
                style={formStyles.inputs}
                placeholder="Rol"
                onChangeText={handleChange("rol")}
                onBlur={handleBlur("rol")}
                value={values.rol}
                keyboardType="default"
              />
              {errors.rol && touched.rol && (
                <Text style={formStyles.errorText}>{errors.rol}</Text>
              )}

              <TextInput
                style={formStyles.inputs}
                placeholder="Contraseña"
                onChangeText={handleChange("contrasenia")}
                onBlur={handleBlur("contrasenia")}
                value={values.contrasenia}
                keyboardType="default"
                secureTextEntry={true}
              />
              {errors.contrasenia && touched.contrasenia && (
                <Text style={formStyles.errorText}>{errors.contrasenia}</Text>
              )}

              <TouchableOpacity
                style={formStyles.button}
                onPress={handleSubmit}
              >
                <Text style={formStyles.buttonText}>Iniciar Sesion</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </ImageBackground>
    </ScrollView>
  );
}
