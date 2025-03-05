import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts() {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(contentDirectory);
  
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');
    
    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    
    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });
  
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
  });
}

export async function getPostData(id) {
  const fullPath = path.join(contentDirectory, `${id}.md`);
  
  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();
  
  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  };
} 