import { NextResponse } from 'next/server'
import { getAllArticles } from '@/lib/articles'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const includeContent = searchParams.get('includeContent') === 'true'
    
    if (includeContent) {
      // For search functionality - get all articles with full content
      const { getAllArticlesWithContent } = await import('@/lib/articles')
      const articles = getAllArticlesWithContent()
      return NextResponse.json(articles)
    } else {
      // For regular article listing - metadata only
      const articles = getAllArticles()
      return NextResponse.json(articles)
    }
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}