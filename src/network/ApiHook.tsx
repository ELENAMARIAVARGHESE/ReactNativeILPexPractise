import api from './contentApi';

interface ContentResponse {
  contentResp: any;
  errorMessage: string;
}

export async function getBatchDetails(url: string): Promise<ContentResponse> {
  let errorMessage: string = '';
  let contentResp: any[] = [];
  try {
    const contentResponse = await api.get(url);
    contentResp = contentResponse.data;
    console.log(`Response for url ${url} is ${contentResp}`);
  } catch (error: any) {
    console.log('Error while logging in:', error);
    errorMessage = error.message;
  }

  return {contentResp, errorMessage};
}
