// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://icruclijbpkvbdzwulqz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljcnVjbGlqYnBrdmJkend1bHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTM4ODgsImV4cCI6MjA1ODU2OTg4OH0.CBTcdu5J8TOIJ82Ok0SMkFo2LG4l7avIPYYFkN0XNoU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);