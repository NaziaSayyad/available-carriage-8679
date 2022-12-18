import { NextResponse } from "next/server";

export default function middleware(req){
    // console.log("Middleware", req.nextUrl);
    // console.log();
    // return(NextResponse.rewrite(new URL('/admin', req.nextUrl)))
    
    return(NextResponse.rewrite(new URL('/login', req.nextUrl)))
}
export const config = {
    matcher:["/login:path", "/admin/:path"]
}