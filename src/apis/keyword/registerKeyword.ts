import { axiosAccessFn } from '../apiClient';

const axiosAccess = axiosAccessFn();

const registerKeyword = async (keywordName: string) => {
  try {
    const response = await axiosAccess.post('/users/keywords', null, { params: { keywordName } });
    return response.data;
  } catch (error) {
    throw new Error('키워드 등록에 실패했습니다.');
  }
};

export default registerKeyword;
