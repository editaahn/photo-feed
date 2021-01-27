const BASE_URL = "https://bucketplace-coding-test.s3.amazonaws.com/cards";

const errorDialog = (status) => {
  if (status >= 200 && status < 500) {
    return "모든 컨텐츠가 로딩되었습니다.";
  } else if (status >= 500) {
    return "서버 오류가 발생했습니다. 잠시 후 재시도해주세요.";
  }
  return "컨텐츠가 없습니다.";
};

export const requestCards = async (page = 1) => {
  try {
    const request = await fetch(`${BASE_URL}/page_${page}.json`);
    const status = request.status;
    const data = await request.json();

    if (status >= 200 && status < 300 && data.length) {
      return { data };
    } else {
      throw status;
    }
  } catch (status) {
    return { message: errorDialog(status), data: [] };
  }
};
