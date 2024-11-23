import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import FormLogIn from '@/components/formLogIn';
describe('FormLogIn', () => {
  //1
  it('Se procesa correctamente y gestiona el envío del formulario', async () => {
    const handleSignIn = jest.fn();

    const { getByTestId, getByText } = render(<FormLogIn handleSignIn={handleSignIn} />);

    
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(handleSignIn).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });

  //2
  it('muestra errores de validación cuando los campos están vacíos', async () => {
    const handleSignIn = jest.fn();

    const { getByTestId, getByText } = render(<FormLogIn handleSignIn={handleSignIn} />);
    const submitButton = getByTestId('submit-button');
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(getByText('Email es requerido')).toBeTruthy();
      expect(getByText('Contraseña es requerida')).toBeTruthy();
    });

    expect(handleSignIn).not.toHaveBeenCalled();
  });
  //3
  it('muestra un error de validación para un correo electrónico no válido', async () => {
    const handleSignIn = jest.fn();

    const { getByTestId, getByText } = render(<FormLogIn handleSignIn={handleSignIn} />);

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('submit-button');

  
    fireEvent.changeText(emailInput, 'invalid-email');
    fireEvent.changeText(passwordInput, 'password123');

    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(getByText('Email inválido')).toBeTruthy();
    });

    // Verifico el llamado a la función
    expect(handleSignIn).not.toHaveBeenCalled();
  });
});
