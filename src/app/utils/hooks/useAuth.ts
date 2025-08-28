"use client";

import { useEffect, useState } from "react";
import type { SupabaseClient, User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    let subscription: ReturnType<
      SupabaseClient["auth"]["onAuthStateChange"]
    >["data"]["subscription"];

    const initializeAuth = async () => {
      const supabaseClient = await createClient();
      setSupabase(supabaseClient);

      const { data } = await supabaseClient.auth.getUser();
      setUser(data.user);
      setLoading(false);

      // Listen for auth changes
      const { data: sub } = supabaseClient.auth.onAuthStateChange(
        (_event, session) => {
          setUser(session?.user ?? null);
          setLoading(false);
        }
      );

      subscription = sub.subscription;
    };

    initializeAuth();

    // Cleanup function
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return { user, loading, supabase };
}
