import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://advjnuvtupczhvqjjzob.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkdmpudXZ0dXBjemh2cWpqem9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1OTcxNzksImV4cCI6MjAyNjE3MzE3OX0.LNmq_NbQs409Cat6WExXeHst2m-fZIqJvf7owjP49Ro";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
