import { redirect } from 'react-router-dom';
import { z } from 'zod';
import { register } from '../../services/authService';

export const action = async (data) => {
  const { request } = data;
  const formData = await request.formData();
  const registerData = Object.fromEntries(formData);

  try {
    console.log(registerData, 'lo q recibe');
    const isEqualPass = registerData.password === registerData.repeatPassword;
    const isEqualEmail = registerData.Email === registerData.repeatEmail;
    if (!isEqualPass) {
      throw new Error('Los passwords no coinciden!');
    }
    if (!isEqualEmail) {
      throw new Error('Los mails no coinciden!');
    }

    delete registerData.repeatPassword;
    delete registerData.repeatEmail;
    registerData.name = registerData.name.toLowerCase();
    registerData.email = registerData.email.toLowerCase();

    await register(registerData);

    console.log('register ok');

    return redirect('/login');
  } catch (error) {
    return redirect('/register');
  }
};

export const validateRegisterFields = (data) => {
  const Register = z.object({
    name: z.string().nonempty('Name is required'),
    lastName: z.string().nonempty('Last name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
  });
  try {
    const [key, value] = Object.entries(data)[0];
    const partialSchema = Register.pick({ [key]: true });
    const parsedData = partialSchema.parse({ [key]: value });
    return '';
  } catch (e) {
    return e.errors[0].message;
  }

  //console.log(`Validation succeeded for ${key}, parsed data:`, parsedData);
};
