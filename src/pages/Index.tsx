import NewsHeader from "@/components/NewsHeader";
import NewsArticle from "@/components/NewsArticle";
import NewsFooter from "@/components/NewsFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />
      <main>
        <NewsArticle />
      </main>
      <NewsFooter />
    </div>
  );
};

export default Index;
