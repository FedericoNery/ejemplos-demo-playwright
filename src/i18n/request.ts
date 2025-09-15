import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
/*   const browserHeaders = headers();
  const acceptLanguage = await browserHeaders.get('accept-language');
  // Extrae el primer idioma y elimina la región si existe
  const browserLocale = acceptLanguage?.split(',')[0]?.split('-')[0] || 'en'; */

  const cookieLocale = await cookies()
  const cookieValue = cookieLocale.get('locale')?.value;
  const browserLocale = cookieValue || 'en'; 
  
  console.log("Locale detectada: " + browserLocale);
  return {
    locale: browserLocale,
    messages: (await import(`../../messages/${browserLocale}.json`)).default
  };
});
