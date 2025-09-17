import { useState, useCallback, ChangeEvent } from 'react';

interface ValidationRule<T> {
  validate: (value: T[keyof T], formData: T) => boolean;
  message: string;
}

interface FormConfig<T> {
  initialValues: T;
  validationRules?: Partial<Record<keyof T, ValidationRule<T>[]>>;
  onSubmit?: (values: T) => Promise<void> | void;
}

interface UseFormStateReturn<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (field: keyof T) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleBlur: (field: keyof T) => () => void;
  handleSubmit: (e?: React.FormEvent) => Promise<void>;
  setFieldValue: (field: keyof T, value: T[keyof T]) => void;
  setFieldError: (field: keyof T, error: string) => void;
  reset: () => void;
  validateField: (field: keyof T) => void;
  validateForm: () => boolean;
}

/**
 * Hook for managing form state, validation, and submission
 */
export function useFormState<T extends Record<string, any>>({
  initialValues,
  validationRules = {},
  onSubmit
}: FormConfig<T>): UseFormStateReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((field: keyof T) => {
    const rules = validationRules[field];
    if (!rules || rules.length === 0) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
      return;
    }

    for (const rule of rules) {
      if (!rule.validate(values[field], values)) {
        setErrors(prev => ({ ...prev, [field]: rule.message }));
        return;
      }
    }

    setErrors(prev => ({ ...prev, [field]: undefined }));
  }, [values, validationRules]);

  const validateForm = useCallback(() => {
    let isValid = true;
    const newErrors: Partial<Record<keyof T, string>> = {};

    Object.keys(validationRules).forEach((field) => {
      const rules = validationRules[field as keyof T];
      if (rules) {
        for (const rule of rules) {
          if (!rule.validate(values[field as keyof T], values)) {
            newErrors[field as keyof T] = rule.message;
            isValid = false;
            break;
          }
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validationRules]);

  const handleChange = useCallback((field: keyof T) => {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.type === 'checkbox' 
        ? (e.target as HTMLInputElement).checked 
        : e.target.value;
      
      setValues(prev => ({ ...prev, [field]: value }));
      
      // Validate field if it's been touched
      if (touched[field]) {
        setTimeout(() => validateField(field), 0);
      }
    };
  }, [touched, validateField]);

  const handleBlur = useCallback((field: keyof T) => {
    return () => {
      setTouched(prev => ({ ...prev, [field]: true }));
      validateField(field);
    };
  }, [validateField]);

  const setFieldValue = useCallback((field: keyof T, value: T[keyof T]) => {
    setValues(prev => ({ ...prev, [field]: value }));
  }, []);

  const setFieldError = useCallback((field: keyof T, error: string) => {
    setErrors(prev => ({ ...prev, [field]: error }));
  }, []);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    // Mark all fields as touched
    const allTouched = Object.keys(initialValues).reduce((acc, key) => {
      acc[key as keyof T] = true;
      return acc;
    }, {} as Partial<Record<keyof T, boolean>>);
    setTouched(allTouched);

    if (!validateForm()) {
      return;
    }

    if (onSubmit) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [values, validateForm, onSubmit, initialValues]);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const isValid = Object.keys(errors).length === 0 && Object.keys(touched).length > 0;

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    reset,
    validateField,
    validateForm
  };
}

// Common validation rules
export const validationRules = {
  required: <T>(message = 'This field is required'): ValidationRule<T> => ({
    validate: (value) => value != null && value !== '' && value !== false,
    message
  }),

  email: <T>(message = 'Please enter a valid email address'): ValidationRule<T> => ({
    validate: (value) => {
      if (!value) return true; // Allow empty values (use required rule for mandatory fields)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(String(value));
    },
    message
  }),

  minLength: <T>(length: number, message?: string): ValidationRule<T> => ({
    validate: (value) => {
      if (!value) return true;
      return String(value).length >= length;
    },
    message: message || `Must be at least ${length} characters`
  }),

  maxLength: <T>(length: number, message?: string): ValidationRule<T> => ({
    validate: (value) => {
      if (!value) return true;
      return String(value).length <= length;
    },
    message: message || `Must be no more than ${length} characters`
  }),

  pattern: <T>(regex: RegExp, message: string): ValidationRule<T> => ({
    validate: (value) => {
      if (!value) return true;
      return regex.test(String(value));
    },
    message
  })
};
