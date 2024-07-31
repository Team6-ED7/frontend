import { redirect } from 'react-router-dom';
import { register } from '../../services/authService';
export const action = async (data) => {
  const { request } = data;
  const formData = await request.formData();
  const registerData = Object.fromEntries(formData);

  try {
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
