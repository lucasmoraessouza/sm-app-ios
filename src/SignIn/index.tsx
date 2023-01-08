import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

import { MyButton } from '../components/MyButton';
import { MyTextInput } from '../components/MyTextInput';
import { MyLink } from '../components/MyLink';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebaseConfig';

export function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function signUp(e) {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential);
                // ...
            })
            .catch((error) => {
                if (error.code === 'auth/email-in-already-in-use') {
                    console.log('email ja existente')
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('email invalido')
                }
            });
    }

    function signIn(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then(() => console.log('usuario logado')).catch(error => console.log(error))
    }

    return (
        <View style={[styles.container, { justifyContent: 'center' }]}>

            <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
            <MyTextInput
                placeholder="senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}

            />

            <MyButton title="Entrar no App" onPress={signIn} />

            <MyLink onPress={signUp} title="Cadastrar" />
        </View>
    );
}