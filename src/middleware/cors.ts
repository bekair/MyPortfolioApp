import { NextResponse } from 'next/server';

export async function cors(request: Request) {
  if (request.method === 'OPTIONS') {
    return NextResponse.json({}, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }
} 