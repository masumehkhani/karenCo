import MainLayout from "../layouts/MainLayout";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">درباره ما</h1>
        <p className="text-gray-700 leading-7">
          اینجا می‌تونی درباره شرکت یا برندت توضیح بدی. 
          مثلا تاریخچه، خدمات و ارزش‌هایی که داری.
        </p>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
