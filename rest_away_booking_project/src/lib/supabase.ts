import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";
//the first database for users
export const supabase = createClientComponentClient({
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY!,
});

// Second Supabase client for property data (Second database)
export const supabaseProperty = createClient(
   process.env.NEXT_PUBLIC_SUPABASE_URL_2!, // URL for the second database
  process.env.NEXT_PUBLIC_SUPABASE_KEY_2! // Key for the second database
);
