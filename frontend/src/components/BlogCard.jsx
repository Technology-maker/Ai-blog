import { Link } from "react-router-dom";
import Footer from "./Footer";

const BlogCard = ({ id, title, excerpt, category, date, readTime, image }) => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Link to={`/blog/${id}`} onClick={handleClick}>
      <div className="group h-full overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] border-4 border-slate-400 border-border/50 rounded-xl bg-background m-3 ">
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-video ">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          {/* Custom Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <p className="mt-2 text-muted-foreground line-clamp-3">{excerpt}</p>
        </div>

        {/* Footer Section */}
        <Footer date={date} readTime={readTime} />
      </div>
    </Link>
  );
};

export default BlogCard;