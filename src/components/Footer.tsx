export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] text-center p-6 mt-10 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto">
        <h3 className="text-lg font-semibold mb-2">Liên hệ</h3>
        <p>
          SĐT:{" "}
          <a
            href="tel:0123456789"
            className="text-blue-600 dark:text-blue-400 font-medium"
          >
            0123 456 789
          </a>
        </p>
        <p>
          Facebook:{" "}
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-medium"
          >
            facebook.com/yourprofile
          </a>
        </p>
        <p>
          Zalo:{" "}
          <a
            href="https://zalo.me/yourzalo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 font-medium"
          >
            zalo.me/yourzalo
          </a>
        </p>
      </div>
    </footer>
  );
}
