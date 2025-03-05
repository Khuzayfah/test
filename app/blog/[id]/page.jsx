import { getPostData, getAllPosts } from '../../../lib/blog';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);
  
  if (!postData) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${postData.title} - SingRank Blog`,
    description: postData.description || `Read our blog post about ${postData.title}`,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }) {
  const postData = await getPostData(params.id);
  
  if (!postData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Post Not Found</h1>
        <p>The requested blog post could not be found.</p>
        <Link href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          ← Back to blog
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to blog
      </Link>
      
      <article className="prose lg:prose-xl mx-auto">
        {postData.thumbnail && (
          <div className="relative h-64 w-full mb-8">
            <img
              src={postData.thumbnail}
              alt={postData.title}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        )}
        
        <h1>{postData.title}</h1>
        <div className="text-gray-500 mb-8">
          {new Date(postData.date).toLocaleDateString()}
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
} 