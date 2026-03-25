import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, email, inquiry, message } = body

  if (!name || !phone) {
    return NextResponse.json(
      { error: 'Ime i telefon su obavezni.' },
      { status: 400 }
    )
  }

  console.log('Ital Gres – novi upit:', { name, phone, email, inquiry, message })
  return NextResponse.json({ ok: true })
}
