import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/dashboard")) {
  }

  if (pathname.startsWith("/auth")) {
  }
}

export const config = {};
