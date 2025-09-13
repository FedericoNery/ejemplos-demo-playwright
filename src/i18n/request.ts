import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  const cookieLocale = await cookies()
  const cookieValue = cookieLocale.get('locale')?.value;
  const browserLocale = cookieValue || 'en'; // fallback
    console.log("Locale detectada: " + browserLocale);
  return {
    locale: browserLocale,
    messages: (await import(`../../messages/${browserLocale}.json`)).default
  };
});
