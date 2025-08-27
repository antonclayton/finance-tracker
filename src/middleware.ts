import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "./utils/supabase/server";

// On every request (going to a new page), this middleware activates
export async function middleware(request: NextRequest) {
  // Directly create the Supabase client instance here.
  const supabase = await createClient();

  // Get the user's session.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Define the protected route path.
  const protectedPaths = [
    "/dashboard",
    "/reports",
    "/profile",
    "/transactions",
  ];

  // Check if the user is not authenticated and the requested path is a protected one.
  if (!user && protectedPaths.includes(request.nextUrl.pathname)) {
    // Redirect to the login page or an auth-error page.
    return NextResponse.redirect(new URL("/auth-error", request.url));
  }

  // If the user is authenticated or the page is not protected, continue to the next step.
  return NextResponse.next();
}

// protects routes that match the following
export const config = {
  matcher: ["/dashboard", "/profile", "/reports", "/transactions"],
};
