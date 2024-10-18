import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const nom = searchParams.get('nom') || 'Invité';

  return NextResponse.json({ message: `Bienvenue ${nom}` });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const nom = body.nom || 'Invité';

  return NextResponse.json({ message: `Bienvenue ${nom}` });
}

