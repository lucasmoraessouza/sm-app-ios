import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Card } from "../../../components/Card";
import { Separator } from "../../../components/Separator";
import { styles } from "./style";
import RNPickerSelect from "react-native-picker-select";
import {
  Select,
  SelectProvider,
} from "@mobile-reality/react-native-select-pro";

const data = [
  {
    label: "Option 1",
    value: "option1",
  },
  {
    label: "Option 2",
    value: "option2",
  },
  {
    label: "Option 3",
    value: "option3",
  },
  {
    label: "Option 4",
    value: "option4",
  },
];

export function Home() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.backgroundTwitter}>
          <Image
            source={require("../../../assets/icons/twitter-logo-fill.png")}
            style={styles.twitterLogo}
          />
        </View>
        <View style={styles.containerSelect}>
          <Select options={data} style={{ border: "none" }} />
        </View>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="#CCC"
        />
        <SafeAreaView style={styles.container}>
          <FlatList
            ItemSeparatorComponent={Separator}
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            keyExtractor={(item) => String(item)}
            renderItem={({ item }) => (
              <Card
                name="Lucas Moraes"
                date="Dec 22 2022"
                message="Testing"
                user="moraesluc4s"
              />
            )}
          >
            <Card
              name="Lucas Moraes"
              date="Dec 22 2022"
              message="Testing"
              user="moraesluc4s"
            />
          </FlatList>
        </SafeAreaView>
      </View>
    </View>
  );
}
