import "./root.css";
import localFont from 'next/font/local';
import ThemeProviderComponent from "@/components/ThemeProviderComponent";
import crypto from 'crypto';
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";


const roboto = localFont({
  src: [
    {
      path: '../../public/fonts/Roboto/Roboto-Thin.ttf',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: "--font-roboto",
});



const playfair = localFont({
  src: [
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-SemiBold.ttf',
      weight: '600',
      style: 'semi-bold',
    },
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-ExtraBold.ttf',
      weight: '800',
      style: 'extra-bold',
    },
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Black.ttf',
      weight: '900',
      style: 'black',
    },
  ],
  variable: "--font-playfair",
});



const rocksalt = localFont({
  src: [
    {
      path: '../../public/fonts/Rock_Salt/RockSalt-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
  ],
  variable: "--font-rocksalt",
});

export const metadata = {
  title: "Sameer Portfolio",
};

export default function RootLayout({ children }) {
  const nonce = crypto.randomBytes(16).toString('base64');

  return (
    <html lang="en" className={`${roboto.variable} ${playfair.variable} ${rocksalt.variable}`}>
      <body className={roboto.className}>
        <ThemeProviderComponent nonce={nonce}>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
