import fs from 'fs'
import path from 'path'

export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  content: string
}

export interface ArticleMetadata {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
}

// Simple frontmatter parser (without external dependencies)
function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (!match) {
    return { metadata: {}, content }
  }

  const [, frontmatter, bodyContent] = match
  const metadata: any = {}

  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim()
      const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '')
      metadata[key] = value
    }
  })

  return { metadata, content: bodyContent.trim() }
}

export function getAllArticles(): ArticleMetadata[] {
  const contentDir = path.join(process.cwd(), 'content')
  const categories = ['politics', 'business', 'culture', 'personal']
  const articles: ArticleMetadata[] = []

  categories.forEach(category => {
    const categoryDir = path.join(contentDir, category)
    
    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir).filter(file => file.endsWith('.md'))
      
      files.forEach(file => {
        const filePath = path.join(categoryDir, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const { metadata } = parseFrontmatter(content)
        
        articles.push({
          slug: metadata.slug || file.replace('.md', ''),
          title: metadata.title || '',
          excerpt: metadata.excerpt || '',
          date: metadata.date || '',
          category: metadata.category || category,
          readTime: metadata.readTime || '5 min read'
        })
      })
    }
  })

  // Sort by date (newest first)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticleBySlug(slug: string): Article | null {
  const contentDir = path.join(process.cwd(), 'content')
  const categories = ['politics', 'business', 'culture', 'personal']

  for (const category of categories) {
    const categoryDir = path.join(contentDir, category)
    
    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir)
      const file = files.find(f => {
        const content = fs.readFileSync(path.join(categoryDir, f), 'utf-8')
        const { metadata } = parseFrontmatter(content)
        return metadata.slug === slug
      })

      if (file) {
        const filePath = path.join(categoryDir, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const { metadata, content: bodyContent } = parseFrontmatter(content)
        
        return {
          slug: metadata.slug || slug,
          title: metadata.title || '',
          excerpt: metadata.excerpt || '',
          date: metadata.date || '',
          category: metadata.category || category,
          readTime: metadata.readTime || '5 min read',
          content: bodyContent
        }
      }
    }
  }

  return null
}

export function getArticlesByCategory(category: string): ArticleMetadata[] {
  const contentDir = path.join(process.cwd(), 'content', category.toLowerCase())
  
  if (!fs.existsSync(contentDir)) {
    return []
  }

  const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'))
  const articles: ArticleMetadata[] = []

  files.forEach(file => {
    const filePath = path.join(contentDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const { metadata } = parseFrontmatter(content)
    
    articles.push({
      slug: metadata.slug || file.replace('.md', ''),
      title: metadata.title || '',
      excerpt: metadata.excerpt || '',
      date: metadata.date || '',
      category: metadata.category || category,
      readTime: metadata.readTime || '5 min read'
    })
  })

  // Sort by date (newest first)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllArticlesWithContent(): Article[] {
  const contentDir = path.join(process.cwd(), 'content')
  const categories = ['politics', 'business', 'culture', 'personal']
  const articles: Article[] = []

  categories.forEach(category => {
    const categoryDir = path.join(contentDir, category)
    
    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir).filter(file => file.endsWith('.md'))
      
      files.forEach(file => {
        const filePath = path.join(categoryDir, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const { metadata, content: bodyContent } = parseFrontmatter(content)
        
        articles.push({
          slug: metadata.slug || file.replace('.md', ''),
          title: metadata.title || '',
          excerpt: metadata.excerpt || '',
          date: metadata.date || '',
          category: metadata.category || category,
          readTime: metadata.readTime || '5 min read',
          content: bodyContent
        })
      })
    }
  })

  // Sort by date (newest first)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getCategoryStats() {
  const categories = ['politics', 'business', 'culture', 'personal']
  const stats: Record<string, number> = {}

  categories.forEach(category => {
    const contentDir = path.join(process.cwd(), 'content', category)
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'))
      stats[category] = files.length
    } else {
      stats[category] = 0
    }
  })

  return stats
}