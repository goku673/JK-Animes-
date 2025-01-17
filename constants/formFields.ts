import { FormField, SignUpFormValues, LogInValues} from "@/components/types/formTypes";

export const formFieldsSingUp: FormField<SignUpFormValues> [] = [
    {
      name: 'username',
      label: 'Username',
      icon: 'account',
      secureTextEntry: false,
    },
    {
      name: 'email',
      label: 'Email',
      icon: 'email',
      secureTextEntry: false,
    },
    {
      name: 'password',
      label: 'Password',
      icon: 'lock',
      secureTextEntry: true,
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      icon: 'lock-check',
      secureTextEntry: true,
    },
  ];


  export const formFieldsSingIn: FormField<LogInValues>[] = [
    {
      name: "email", // Asegúrate de que estos nombres coincidan con LogInValues
      label: "Email",
      icon: "email-outline",
      secureTextEntry: false,
    },
    {
      name: "password",
      label: "Password",
      icon: "lock-outline",
      secureTextEntry: true,
    },
  ];

