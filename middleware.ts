import { NextResponse, type  NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    console.log(req.nextUrl);

    const res = NextResponse.next();
    res.headers.append('ACCESS-CONTROL-ALLOW-ORIGIN', "*")
    return res;

  return req;
}

export const config ={
  matcher : ['/api/:path*']
}