export const UserSectionInputs = [
  {
    label: 'First Name',
    placeholder: 'Enter your first name',
    type: 'text',
    name: 'firstName',
    required: true
  },
  {
    label: 'Last Name',
    type: 'text',
    placeholder: 'Enter your last name',
    name: 'lastName',
    required: true
  },
  {
    label: 'Age',
    type: 'text',
    placeholder: 'Enter your age',
    name: 'age'
  }
];

export const AddressSectionInputs = [
  {
    label: 'State',
    placeholder: 'Enter your state',
    type: 'text',
    name: 'state',
    required: false
  },
  {
    label: 'City',
    type: 'text',
    placeholder: 'Enter your city',
    name: 'city',
    required: false
  },
  {
    label: 'Street',
    type: 'text',
    placeholder: 'Enter your street',
    name: 'street',
    required: false
  }
];

export const AccountSectionInputs = [
  {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email',
    name: 'email',
    required: true
  },
  {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    name: 'password',
    required: true
  },
  {
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Confirm your password',
    name: 'confirmPassword',
    required: true
  }
];

export type SectionProps = {
  regFormData: {
    firstName: string;
    lastName: string;
    age: string;
    state: string;
    city: string;
    street: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  updateFields: any;
  register: any;
  errors: any;
};
