import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';

export const metadata = {
  title: 'Blog - SingRank',
  description: 'Read our latest blog posts about digital marketing and SEO',
};

export default async function BlogPage() {
  const allPosts = getAllPosts();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
      
      {allPosts.length === 0 ? (
        <p>No blog posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map((post) => (
            <Link 
              href={`/blog/${post.id}`} 
              key={post.id}
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {post.thumbnail && (
                <div className="relative h-48 w-full">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 