import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Switch,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Keyboard,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      save_name: "",
      save_phone: "",
      save_email: "",
      save_local: "",
      save_occupation: "",
      save_qualification: "",
      save_amount: "",
      save: false,
      local: 0,
      locals: [
        { key: 1, name: "Local Residência (UF)" },
        { key: 2, name: "Acre" },
        { key: 3, name: "Alagoas" },
        { key: 4, name: "Amapá" },
        { key: 5, name: "Amazonas" },
        { key: 6, name: "Bahia" },
        { key: 7, name: "Ceará" },
        { key: 8, name: "Distrito Federal" },
        { key: 9, name: "Espírito Santo" },
        { key: 10, name: "Goiás" },
        { key: 11, name: "Maranhão" },
        { key: 12, name: "Mato Grosso" },
        { key: 13, name: "Mato Grosso do Sul" },
        { key: 14, name: "Minas Gerais" },
        { key: 15, name: "Pará" },
        { key: 16, name: "Paraíba" },
        { key: 17, name: "Paraná" },
        { key: 18, name: "Pernambuco" },
        { key: 19, name: "Piauí" },
        { key: 20, name: "Rio de Janeiro" },
        { key: 21, name: "Rio Grande do Norte" },
        { key: 22, name: "Rio Grande do Sul" },
        { key: 23, name: "Rondônia" },
        { key: 24, name: "Roraima" },
        { key: 25, name: "Santa Catarina" },
        { key: 26, name: "São Paulo" },
        { key: 27, name: "Sergipe" },
        { key: 28, name: "Tocantins" },
      ],
      occupation: 0,
      occupations: [
        { key: 1, name: "Área de Atuação" },
        { key: 2, name: "Advogado" },
        { key: 3, name: "Analista de Sistemas" },
        { key: 4, name: "Dentista" },
        { key: 5, name: "Engenheiro" },
        { key: 6, name: "Fisioterapeuta" },
        { key: 7, name: "Geólogo" },
        { key: 8, name: "Médico" },
        { key: 9, name: "Professor" },
      ],
      enabled: false,
      amount: 1000,
    };
  }

  runAlert() {
    let state_qualification = this.state.enabled ? "Sim" : "Não";
    let data =
      "Nome: " +
      this.state.name +
      "\n" +
      "Telefone: " +
      this.state.phone +
      "\n" +
      "E-mail: " +
      this.state.email +
      "\n" +
      "Residência: " +
      this.state.locals[this.state.local].name +
      "\n" +
      "Área de Atuação: " +
      this.state.occupations[this.state.occupation].name +
      "\n" +
      "Habilitação: " +
      state_qualification +
      "\n" +
      "Pretensão Salarial: R$" +
      this.state.amount;

    Alert.alert("Deseja salvar os dados?", data, [
      {
        text: "Não",
        onPress: () => {},
      },
      {
        text: "Sim",
        onPress: () => {
          this.setState({
            save_name: this.state.name,
            save_phone: this.state.phone,
            save_email: this.state.email,
            save_local: this.state.locals[this.state.local].name,
            save_occupation: this.state.occupations[this.state.occupation].name,
            save_qualification: state_qualification,
            save_amount: this.state.amount,
            save: true,
          });
          Keyboard.dismiss();
          Alert.alert(
            "RH - Recrutamento",
            "Os dados foram salvos com sucesso!"
          );
        },
      },
    ]);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>RH - Recrutamento</Text>
        </View>
        <View>
          <TextInput
            style={styles.txtinput}
            placeholder="nome"
            onChangeText={(text) => this.setState({ name: text })}
          />
          <TextInput
            style={styles.txtinput}
            placeholder="telefone"
            onChangeText={(text) => this.setState({ phone: text })}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.txtinput}
            placeholder="email"
            onChangeText={(text) => this.setState({ email: text })}
            keyboardType="email-address"
          />
        </View>
        <View>
          <Picker
            style={styles.picker}
            selectedValue={this.state.local}
            onValueChange={(item, index) => this.setState({ local: index })}
          >
            {this.state.locals.map((item, index) => {
              return (
                <Picker.Item
                  style={{
                    backgroundColor: "white",
                    color: "grey",
                    fontSize: 24,
                    marginBottom: 40,
                  }}
                  key={index}
                  value={item}
                  label={item.name}
                />
              );
            })}
          </Picker>
          <Picker
            style={styles.picker}
            selectedValue={this.state.occupation}
            onValueChange={(item, index) =>
              this.setState({ occupation: index })
            }
          >
            {this.state.occupations.map((item, index) => {
              return (
                <Picker.Item
                  style={{
                    backgroundColor: "white",
                    color: "grey",
                    fontSize: 24,
                  }}
                  key={index}
                  value={item}
                  label={item.name}
                />
              );
            })}
          </Picker>
        </View>
        <View style={styles.qualification}>
          <Text
            style={{
              paddingLeft: 20,
              color: "grey",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Possui Habilitação:
          </Text>
          <Switch
            style={styles.switch}
            trackColor={{ false: "#A00", true: "#0A0" }}
            thumbColor={this.state.enabled ? "#DFD" : "#FDD"}
            onValueChange={() =>
              this.setState({ enabled: !this.state.enabled })
            }
            value={this.state.enabled}
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          />
        </View>
        <View style={styles.slider}>
          <Text>Pretenção Salarial</Text>
          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={0}
            maximumValue={10000}
            minimumTrackTintColor="#292"
            maximumTrackTintColor="#888"
            value={this.state.amount}
            onValueChange={(value) =>
              this.setState({ amount: parseInt(value.toFixed(0)) })
            }
          />
          <Text style={styles.txtamount}>(R$){this.state.amount}.00</Text>
        </View>
        <View style={styles.img}>
          <View style={styles.circle}>
            <TouchableOpacity
              onPress={() => {
                this.runAlert();
              }}
            >
              <Image
                style={styles.check}
                source={require("./assets/check.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "lightgrey",
  },
  top: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "#313030",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    borderBottomWidth: 5,
    borderColor: "white",
  },
  txtinput: {
    alignSelf: "center",
    width: "90%",
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    height: 60,
    backgroundColor: "white",
    fontSize: 20,
  },
  picker: {
    marginBottom: 10,
    marginLeft: 20,
    height: 90,
    width: "78%",
    backgroundColor: "white",
  },
  qualification: {
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    width: "90%",
    marginLeft: 20,
    borderRadius: 5,
    height: 60,
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  slider: {
    flex: 1,
    width: "90%",
    flexDirection: "column",
    borderColor: "#777",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    alignItems: "center",
    marginLeft: 20,
    paddingVertical: 30,
  },
  img: {
    flex: 1,
    justifyContent: "center",
    paddingRight: 15,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "rgba(37, 37, 35, .8)",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
    bottom: 4,
  },
  check: {
    tintColor: "white",
  },
});

export default App;
