import { NextResponse } from 'next/server'
import { getCategoryStats } from '@/lib/articles'

export async function GET() {
  try {
    const stats = getCategoryStats()
    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching category stats:', error)
    return NextResponse.json({ error: 'Failed to fetch category stats' }, { status: 500 })
  }
}