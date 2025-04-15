// server/api/login.post.ts
import { eventHandler, readBody } from 'h3';
import { createClient } from '@supabase/supabase-js';

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  // Initialize Supabase client with credentials from environment
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  );

  // Sign in with email and password
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // Handle error or return session
  if (error) {
    return { error: true, message: error.message };
  }

  return {
    error: false,
    session: data.session,
    user: data.user,
  };
});
