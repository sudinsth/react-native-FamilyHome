import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput, 
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { Card, Button} from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from 'yup';

import { globalStyles } from '../../../styles/global';

const contactSchema = yup.object({
    email: yup
        .string()
        .email("Please enter a valid email.")
        .required("Email Address is Required"),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required("Password is required"),
})

export const ContactScreen = () => (
    <SafeAreaView style={globalStyles.container}> 
    <ScrollView>
        <View style={globalStyles.list}>
            <Card>
                <Card.Title 
                    style={{textAlign:'left', fontSize: 20, fontWeight: 'normal'}}
                > Login Or Create An Account
                </Card.Title>
            </Card>
            <Card>
            <Card.Title 
                style={{textAlign:'left', fontSize: 16, fontWeight: 'normal', color: 'green'}}
            >REGISTERED CUSTOMERS</Card.Title>
            <Card.Divider/>
                {
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                        <View >
                            <Text
                                 style={{fontSize: 14, color: 'grey', paddingBottom: 15}}
                            >If you have an account with us, please log in.</Text>
                            <Formik 
                                initialValues={{ email: '', password: ''}}
                                validationSchema={contactSchema}
                                onSubmit={(values, actions) => {
                                    actions.resetForm();
                                    console.log(values);
                                }}
                            >
                                {(formikProps) => (
                                    <View>
                                        <Text style={globalStyles.formText}>Email Address<Text style={{color:'green'}}>*</Text></Text>
                                        <TextInput 
                                            style={globalStyles.input}
                                            placeholder='Email'
                                            onChangeText={formikProps.handleChange('email')}
                                            value={formikProps.values.email}
                                            onBlur={formikProps.handleBlur('email')}
                                        />
                                        <Text style={globalStyles.errorText}>{ formikProps.touched.email && formikProps.errors.email }</Text>
                                        
                                        <Text style={globalStyles.formText}>Password<Text style={{color:'green'}}>*</Text></Text>
                                        <TextInput 
                                            style={globalStyles.input}
                                            placeholder='Password'
                                            onChangeText={formikProps.handleChange('password')}
                                            value={formikProps.values.password}
                                            onBlur={formikProps.handleBlur('password')}
                                            secureTextEntry= {true}
                                        />
                                        <Text style={globalStyles.errorText}>{ formikProps.touched.password && formikProps.errors.password }</Text>

                                        <Text style={{textAlign: 'right', color: 'green', paddingBottom: 10}}>* Required Fields</Text>
                                        <Text style={{paddingBottom: 10, color: '#7d7d7d', fontWeight: 'bold'}}>Forgot Your Password?</Text>

                                        <Button title='Submit' color='maroon' onPress={formikProps.handleSubmit} />
                                    </View>
                                )}
                            </Formik>
                        </View>
                    </TouchableWithoutFeedback>
                }
        </Card>

        </View>
        </ScrollView>
    </SafeAreaView>
);