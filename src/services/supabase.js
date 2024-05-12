import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jwrypowglldivwmsbpqa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3cnlwb3dnbGxkaXZ3bXNicHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2NDUyMjMsImV4cCI6MjAzMDIyMTIyM30.0fszM-Lvdc_L-mz3VhTTtmiRjBizCLiGEJ0gVcyL7bs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
