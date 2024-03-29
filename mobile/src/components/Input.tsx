import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>

      <NativeBaseInput
        bg='gray.700'
        fontSize="md"
        color="white"
        fontFamily="body"
        placeholderTextColor='gray.300'
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: "red.500"
        }}
        _focus={{
          bg: 'gray.700',
          borderWidth: 1,
          borderColor: 'yellow.400'
        }}
        h={14}
        px={4}
        mb={4}
        borderWidth={0}
        {...rest}
      />
      
      <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}