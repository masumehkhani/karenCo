
const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12 bg-sectionBg text-text">
      {/* فرم تماس */}
      <div className="md:w-1/2 w-full bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-primary">تماس با ما</h2>
        <p className="text-mutedText mb-6">در صورت داشتن هرگونه سؤال یا درخواست، لطفاً فرم زیر را پر کنید.</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="نام شما"
            className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
          />
          <input
            type="email"
            placeholder="ایمیل شما"
            className="w-full border border-gray-300 rounded px-4 py-2 outline-none"
          />
          <textarea
            rows={5}
            placeholder="پیام شما"
            className="w-full border border-gray-300 rounded px-4 py-2 outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-primary hover:bg-hoverPrimary text-white px-6 py-2 rounded"
          >
            ارسال پیام
          </button>
        </form>
      </div>

      {/* اطلاعات تماس + نقشه */}
      <div className="md:w-1/2 w-full flex flex-col gap-4">
        <div className="bg-white p-6 rounded-lg shadow space-y-2">
          <h3 className="text-xl font-bold mb-2 text-primary">اطلاعات تماس</h3>
          <p>📞 025-3892202</p>
          <p>📧 info@example.com</p>
          <p>📍 قم، خیابان بسیج</p>
          <p>🕒 ساعت کاری: ۹ تا ۱۷ (شنبه تا پنجشنبه)</p>
        </div>

        {/* نقشه */}
        <div className="rounded-lg overflow-hidden shadow h-64">
          <iframe
            title="موقعیت ما روی نقشه"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.765555955287!2d51.38681647551906!3d35.689197230442794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e019bed231f9f%3A0xabb55389d68590ef!2sEnghelab%20Square!5e0!3m2!1sen!2s!4v1715082815006!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
