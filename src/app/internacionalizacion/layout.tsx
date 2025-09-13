import { NextIntlClientProvider } from 'next-intl';
import getRequestConfig from '../../i18n/request';

export default async function LocaleLayout({ children }) {
  const { locale, messages } = await getRequestConfig();
  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
