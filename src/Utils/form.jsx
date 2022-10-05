import { FormControl, Text, Spinner,
         FormErrorMessage, Input, 
         InputGroup, InputLeftElement, InputRightElement,
        FormHelperText, Box, } from '@chakra-ui/react'
import { CustomButton } from '../Components/Global/button'
import { Formik, Field, Form } from 'formik'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import axios from 'axios'

function FormManager(values) {
    function validateName(value) {
      let error
      if (!value) {
        error = 'Name is required'
      }
      return error
    }
  
    function validateEmail(value){
      let error
      if (!value){
        error = 'Email is required'
      }
      return error
    }
  
return (
    <Formik
    initialValues={{name: "", email: ""}}
    onSubmit={(values, actions) => {
        try{
            handleSubmit(values)
            axios({
                method: 'POST',
                url: `https://api.staticforms.xyz/submit`,
                body: values
            //     headers: {'X-HTTP-Method-Override'}
            //     json: true,
            //     url: `${MailChimpConfig.URL}/lists/${MailChimpConfig.MAILING_LIST_ID}/members`,
            //     headers: {
            //         Authorization: `apiKey ${MailChimpConfig.apiKey}`
            //     },
            //     body: {
            //     email_address: email,
            //     status: 'subscribed',
            //     merge_fields: {
            //         'FNAME': firstName,
            //         'LNAME': lastName,
            //     }
              })
        } catch (error){
            console.log(error)
        } finally{
            actions.setSubmitting(false)
        }
    }}
    >
    {(props) => (
        <Form >
        <Field name='name' validate={validateName}>
            {({ field, form }) => (
            <FormControl style={{zIndex:1}} isInvalid={form.errors.name && form.touched.name}>
                <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<BsPersonFill size={'33px'} />}
                    color='black' _dark={{color: 'light'}}
                />
                { props.isSubmitting &&
                <InputRightElement width={'100%'} top={-10} children={<FormHelperText>We'll never share your information.</FormHelperText>} /> }
                <Input {...field}  rounded={'full'} color={'black'} _dark={{color:'light'}} size={'lg'} variant='flushed' type='name' placeholder='name' mb={2}/>
                </InputGroup>
                    <FormErrorMessage> 
                        <Text position={'absolute'} right={3} top={0}>{form.errors.name}</Text>              
                    </FormErrorMessage>
                </FormControl>
            )}
        </Field>
        <Field name='email' validate={validateEmail}>
            {({ field, form }) => (
            <FormControl style={{zIndex:1}} isInvalid={form.errors.email && form.touched.email}>
                <FormErrorMessage> 
                    <Text position={'absolute'} right={3}>{form.errors.email}</Text>
                </FormErrorMessage>
                <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<AiOutlineMail size={'30px'} />}
                    color='black' _dark={{color: 'light'}}
                />
                <Input {...field} color={'black'} rounded={'full'} _dark={{color:'light'}} size={'lg'} variant='flushed' type='mail' placeholder='email' mb={5}/>

                </InputGroup>
            </FormControl>
            )}
        </Field>
        <Box width={'100%'} display={'flex'} justifyContent={'center'}>
            {props.isSubmitting?
                (        <CustomButton type="submit" variant={'main-link'} accent_text={values.CTA_accent} regular_text={values.CTA_reg} icon={<Spinner mr={1} mt={1} size='xl' /> } buttonWidth={values.buttonWidth} /> )
                :
                (        <CustomButton type="submit" variant={'main-link'} accent_text={values.CTA_accent} regular_text={values.CTA_reg} icon={values.CTA_icon} buttonWidth={values.buttonWidth} top={values.top} right={values.right} border={values.border} pad={values.pad}/> )
            }
         </Box>
        </Form>
        )}
    </Formik>
    )
}

export default FormManager

