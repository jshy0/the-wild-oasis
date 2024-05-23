import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jnulkupevcnnlexfvqyx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpudWxrdXBldmNubmxleGZ2cXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NDA3OTksImV4cCI6MjAyODUxNjc5OX0.cPRFhkntMrBT3TEEQY9FTYtoeYHmuXwny6O7y6qKT6w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
