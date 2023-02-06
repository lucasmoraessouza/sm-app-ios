import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { TouchableOpacity, Text, Touchable, View } from "react-native";
import { GiftedChat, InputToolbar } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, database } from "../../../config/firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../../theme";
import { EvilIcons } from "@expo/vector-icons";

export function Chat() {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  const OnSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };

  const customtInputToolbar = (props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "white",
          borderTopColor: "#a91f1f",
          borderTopWidth: 1,
          padding: 8,
        }}
      />
    );
  };

  const customSystemMessage = (props: any) => {
    return (
      <View>
        <EvilIcons name="lock" color="#9d9d9d" size={16} />
        <Text>
          Your chat is secured. Remember to be cautious about what you share
          with others.
        </Text>
      </View>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={OnSignOut}
        ></TouchableOpacity>
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return () => unsubscribe();
  }, []);

  const onSend = useCallback((messages: any = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: auth?.currentUser.email,
        avatar: "https://github.com/lucasmoraessouza.png",
      }}
      messagesContainerStyle={{
        backgroundColor: COLORS.WHITE,
      }}
    />
  );
}
