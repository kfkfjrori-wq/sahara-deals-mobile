const VideoSection = () => {
  return (
    <section className="py-8 px-4" style={{ marginTop: "40px" }}>
      <div className="container mx-auto max-w-md">
        <h2 className="text-xl font-bold text-center mb-6 text-foreground">
          فيديو توضيحي
        </h2>
        
        <div className="video-container bg-card p-2">
          <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/_AufUbQhYb4?controls=1&showinfo=1&rel=0"
              title="فيديو توضيحي للمنتجات"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground text-center mt-4">
          تعرف على منتجاتنا المميزة من الأثاث والأجهزة الإلكترونية
        </p>
      </div>
    </section>
  );
};

export default VideoSection;