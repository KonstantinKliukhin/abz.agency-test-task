'use client';
import { mixed, object, string } from 'yup';

import { emailValidationRegExp, phoneValidationRegExp } from '@shared/constants';
import {
  createFileExtensionValidation,
  createFileImageDimensionsValidation,
  createFileSizeValidation,
  mbToByte,
} from '@shared/lib';

const photoDimensionsValidation = createFileImageDimensionsValidation(70, 70);
const photoSizeValidation = createFileSizeValidation(mbToByte(5));
const photoExtensionsValidation = createFileExtensionValidation(['jpeg', 'jpg']);

export const userValidation = object().shape({
  name: string().min(2).max(60).required('Name is required'),
  email: string()
    .matches(emailValidationRegExp, 'Invalid email')
    .min(2)
    .max(100)
    .required('Email is required'),
  phone: string()
    .matches(phoneValidationRegExp, 'Invalid phone number')
    .required('Phone is required'),
  position: string().required('Position is required'),
  photo: mixed<File>()
    .test(
      'photo-dimensions-size',
      'Minimum size of photo 70x70px',
      photoDimensionsValidation,
    )
    .test(
      'photo-size',
      'Max size of image is 5mb',
      photoSizeValidation,
    )
    .test(
      'photo-extensions',
      'Only jpeg and jpg extensions are allowed',
      photoExtensionsValidation,
    )
    .required('Photo is required'),
}).required();
