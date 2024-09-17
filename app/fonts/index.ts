import localFont from "next/font/local";

export const geistSans = localFont({
  src: "./GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "./GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const inter = localFont({
  src: "./InterVF.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const spaceGrotesk = localFont({
  src: "./SpaceGroteskVF.ttf",
  variable: "--font-spaceGrotesk",
  weight: "300 700",
});
