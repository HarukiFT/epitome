import { useMutation } from '@tanstack/react-query';
import { axiosInstance } from '../api';
import { LoginUserDto } from '@myorg/contracts';

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ['user'],
    mutationFn: async (data: LoginUserDto) => {
      const { data: responseData } = await axiosInstance.post(
        '/users/login',
        data
      );

      return responseData;
    },
  });
};
