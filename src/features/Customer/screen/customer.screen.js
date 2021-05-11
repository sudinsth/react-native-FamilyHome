import React, { useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput, 
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  ScrollView,
  CheckBox
} from 'react-native';
import { Card, Button, } from 'react-native-elements';
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';

import { globalStyles } from '../../../styles/global';

const customerSchema = yup.object({
    fn: yup
        .string()
        .required("First Name is Required"),
    ln: yup
        .string()
        .required("Last Name is required"),
    email: yup
        .string()
        .email("Please enter a valid email.")
        .required("Email Address is Required"),
})


export const CustomerRegScreen = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
    <SafeAreaView > 
    <ScrollView>
    {/* Modal for category */}
        <View style={{backgroundColor:'#6993BB', padding: 30}}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={globalStyles.modalContent}>
                <Icon.Button
                    name="close"
                    style={globalStyles.modalToggle}
                    onPress={() => setModalOpen(false)}
                    color="black"
                    size= {30}
                >
                <Text style={{color: "black", fontSize: 20}} >Categories </Text>
                </Icon.Button>
                <Text>From the Category Modal</Text>
                </View>
            </Modal>  

            <Icon.Button
                name="plus-circle"
                style={globalStyles.modalToggle}
                onPress={() => setModalOpen(true)}
                color="black"
                size= {30}
                iconStyle={{
                    alignSelf: 'flex-end'
                    
                }}
            >
               <Text style={{color: "black", fontSize: 20, alignSelf:'flex-start'}} > Categories </Text>
            </Icon.Button>
        </View>

        <View style={globalStyles.list}>
            
        <Card>
            <Card.Title 
                style={{textAlign:'left', fontSize: 20, fontWeight: 'normal'}}
            >Create An Account</Card.Title>
        </Card>
        <Card>
            {
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Formik 
                            initialValues={{ fn: '', ln: '', email: ''}}
                            validationSchema={customerSchema}
                            onSubmit={(values, actions) => {
                                actions.resetForm();
                                console.log(values);
                            }}
                        >
                            {(formikProps) => (
                                <View>
                                    <Text style={{textAlign:'left', fontSize: 16, fontWeight: 'bold', color: '#8cBc2C', paddingVertical: 10}}>PERSONAL INFORMATION</Text>
                                    <Text style={globalStyles.formText}>First Name<Text style={{color:'green'}}>*</Text></Text>
                                    <TextInput 
                                        style={globalStyles.input}
                                        onChangeText={formikProps.handleChange('fn')}
                                        value={formikProps.values.fn}
                                        onBlur={formikProps.handleBlur('fn')}
                                    />
                                    <Text style={globalStyles.errorText}>{ formikProps.touched.fn && formikProps.errors.fn }</Text>
                                    
                                    <Text style={globalStyles.formText}>Last Name<Text style={{color:'green'}}>*</Text></Text>
                                    <TextInput 
                                        style={globalStyles.input}
                                        onChangeText={formikProps.handleChange('ln')}
                                        value={formikProps.values.ln}
                                        onBlur={formikProps.handleBlur('ln')}
                                    />
                                    <Text style={globalStyles.errorText}>{ formikProps.touched.ln && formikProps.errors.ln }</Text>
                                    
                                    <Text style={globalStyles.formText}>Email Address<Text style={{color:'green'}}>*</Text></Text>
                                    <TextInput 
                                        style={globalStyles.input}
                                        onChangeText={formikProps.handleChange('email')}
                                        value={formikProps.values.email}
                                        onBlur={formikProps.handleBlur('email')}
                                    />
                                    <Text style={globalStyles.errorText}>{ formikProps.touched.email && formikProps.errors.email }</Text>
                                    <View 
                                        style={{
                                            flexDirection: "row",
                                            marginBottom: 20,
                                        }}
                                    >
                                        <CheckBox
                                        value={toggleCheckBox}
                                        onValueChange={setToggleCheckBox}
                                        style={{
                                            alignSelf: "flex-start",
                                            
                                        }}
                                        />
                                        <Text style={{margin: 8, fontWeight:'bold', fontSize: 16}}>Sign Up for Newsletter</Text>
                                    </View>

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
 )}

