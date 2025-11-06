import { createClient } from "@supabase/supabase-js";

// القيم من ملف البيئة
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const SERVICE_ROLE_KEY = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

// 🧑‍💻 للمستخدمين العاديين
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ⚙️ للأدمن فقط (استخدمه مؤقتًا أثناء التطوير فقط)
export const adminClient = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
