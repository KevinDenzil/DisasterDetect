import React, {useState, useEffect} from 'react'
import {Text, TextInput, View} from 'react-native';
import { Input, ViewIn } from '../App.style.js'

const Login = () => {
    const [aadhar, setAadhar] = useState(0);
    const [password, setPassword] = useState("");

    return(
        <View>
            <Text>Login</Text>
            <ViewIn>
                <Input placeholder='Enter Aadhar No.' onChangeText={updates => setAadhar(updates)} />
                <TextInput secureTextEntry={true} placeholder="Password" onChange={setPassword} />
            </ViewIn>
        </View>
    );
};

export default Login;