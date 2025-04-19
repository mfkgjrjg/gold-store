import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, LogIn, Phone, Languages } from "lucide-react";

export default function GoldHome() {
  const [lang, setLang] = useState("ar");

  const t = {
    ar: {
      home: "الرئيسية",
      products: "المنتجات",
      contact: "تواصل معنا",
      login: "تسجيل الدخول",
      cart: "السلة",
      welcome: "مرحبًا بك في متجر ذهبي",
      explore: "تصفح المنتجات"
    },
    en: {
      home: "Home",
      products: "Products",
      contact: "Contact Us",
      login: "Login",
      cart: "Cart",
      welcome: "Welcome to Gold Store",
      explore: "Explore Products"
    }
  };

  const tr = t[lang];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="text-2xl font-bold text-yellow-600">
          ذهبي | Gold
        </div>
        <nav className="flex gap-4 items-center">
          <Button variant="ghost">{tr.home}</Button>
          <Button variant="ghost">{tr.products}</Button>
          <Button variant="ghost" className="flex gap-1 items-center">
            <Phone size={16} /> {tr.contact}
          </Button>
          <Button variant="ghost" className="flex gap-1 items-center">
            <LogIn size={16} /> {tr.login}
          </Button>
          <Button variant="ghost" className="flex gap-1 items-center">
            <ShoppingCart size={16} /> {tr.cart}
          </Button>
          <Button
            variant="outline"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="flex gap-1"
          >
            <Languages size={16} /> {lang === "ar" ? "EN" : "AR"}
          </Button>
        </nav>
      </header>

      <main className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-yellow-600">{tr.welcome}</h1>
        <p className="text-lg text-gray-600 mb-8">{tr.explore}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border rounded-2xl p-4 shadow hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-100 rounded mb-2"></div>
              <h3 className="font-semibold">منتج {item}</h3>
              <p className="text-sm text-gray-500">وصف قصير للمنتج.</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ذهبي. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
