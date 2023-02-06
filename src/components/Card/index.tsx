import { Text, View, Image } from "react-native";
import { styles } from "./styles";

interface ICard {
  name: string;
  user: string;
  message: string;
  date: string;
}

export function Card({ name, user, message, date }: ICard) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/icons/stacked-logo.png")}
        />
        <View style={{ flex: 1 }}>
          <View style={styles.nameAndDate}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.userAndMessage}>
            <Text style={styles.user}>@{user}</Text>
            <Text style={styles.lastMessage}>{message}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
