import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput, 
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Card, Button} from 'react-native-elements';
import { Formik } from 'formik';

import { globalStyles } from '../../../styles/global';

export const ContactScreen = () => (
    <SafeAreaView style={globalStyles.container}> 
        <View style={globalStyles.list}>
        <Card>
            <Card.Title >Login Or Create An Account</Card.Title>
        </Card>
        <Card>
            <Card.Title >REGISTERED CUSTOMERS</Card.Title>
            <Card.Divider/>
            {
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Formik 
                            initialValues={{ email: '', password: ''}}
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                            }}
                        >
                            {(formikProps) => (
                                <View>
                                    <Text style={globalStyles.formText}>Email Address *</Text>
                                    <TextInput 
                                        style={globalStyles.input}
                                        placeholder='Email'
                                        onChangeText={formikProps.handleChange('email')}
                                        value={formikProps.values.email}
                                    />
                                    <Text style={globalStyles.formText}>Password</Text>
                                    <TextInput 
                                        style={globalStyles.input}
                                        placeholder='Password'
                                        onChangeText={formikProps.handleChange('password')}
                                        value={formikProps.values.password}
                                        secureTextEntry= {true}
                                    />

                                    <Button title='Submit' color='maroon' onPress={formikProps.handleSubmit} />
                                </View>
                            )}
                        </Formik>
                    </View>
                </TouchableWithoutFeedback>
            }
        </Card>

        </View>

    </SafeAreaView>
);