import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://rljpaikrdsizlxsflhzt.supabase.co";
const supabaseAnonKey = "sb_publishable_E8M4E0h4J7Q2EFvzA2caEg_U6sNZDDS";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);