import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';
import FormSignUp from '@/components/formSingUp';
import { addUser } from '@/reducer/userReducer';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

describe('FormSignUp', () => {
  let dispatchMock: jest.Mock;
  let pushMock: jest.Mock;

  beforeEach(() => {
    // Reseteamos los mocks antes de cada test
    dispatchMock = jest.fn();
    pushMock = jest.fn();

    (useDispatch as unknown as jest.Mock).mockReturnValue(dispatchMock);
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
  });
  //1
  it('envía el formulario correctamente', async () => {

    const { getByTestId } = render(<FormSignUp />);

    const userNameInput = getByTestId('usename-input');
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const confirmPasswordInput = getByTestId('confirm-password-input');
    const submitButton = getByTestId('submit-button');

    fireEvent.changeText(userNameInput, 'TestUser');
    fireEvent.changeText(emailInput, 'testuser@example.com');
    fireEvent.changeText(passwordInput, 'TestPassword123');
    fireEvent.changeText(confirmPasswordInput, 'TestPassword123');

    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(dispatchMock).toHaveBeenCalledWith(
        addUser({
          username: 'TestUser',
          email: 'testuser@example.com',
          password: 'TestPassword123',
        })
      );
      expect(pushMock).toHaveBeenCalledWith('/autentication');
    });
  });
  //2
  it('muestra errores de validación cuando los inputs son inválidos', async () => {
    const { getByTestId, getByText } = render(<FormSignUp />);

    const submitButton = getByTestId('submit-button');
    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(getByText('El nombre de usuario es requerido')).toBeTruthy();
      expect(getByText('El correo electrónico es requerido')).toBeTruthy();
      expect(getByText('La contraseña es requerida')).toBeTruthy();
      expect(getByText('Confirmar contraseña es requerido')).toBeTruthy();
    });
  });
});
