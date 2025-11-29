export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-20 border-t-2 border-blue-500/30 mt-12">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-blue-300 mb-2 font-medium">
            &copy; {currentYear} AI株式診断サービス. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-blue-400 leading-relaxed max-w-3xl mx-auto">
            当サイトで提供される情報は投資勧誘を目的としたものではありません。
            投資に関する最終決定は、利用者ご自身の判断でなさるようお願いいたします。
            掲載されている情報の正確性については万全を期しておりますが、その内容の正確性、安全性、有用性を保証するものではありません。
          </p>
        </div>
      </div>
    </footer>
  );
}
