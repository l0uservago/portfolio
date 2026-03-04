# Next.js Architecture & Supabase Setup

## 1. Next.js App Router Architecture

Here is a scalable and clean folder structure for your Next.js project:

```text
/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (fonts, global providers)
│   │   ├── page.tsx           # Main landing page
│   │   ├── api/               # API Routes (if needed)
│   │   │   └── contact/route.ts
│   │   └── globals.css        # Tailwind imports
│   ├── components/
│   │   ├── ui/                # Reusable UI components (buttons, inputs)
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Expertise.tsx
│   │   │   ├── TechArsenal.tsx
│   │   │   ├── SelectedWorks.tsx
│   │   │   └── ContactForm.tsx
│   │   └── layout/            # Header, Footer, Navigation
│   ├── lib/
│   │   ├── supabase/          # Supabase client initialization
│   │   │   ├── client.ts      # Browser client
│   │   │   └── server.ts      # Server client (for RSCs)
│   │   ├── utils.ts           # Utility functions (cn, twMerge)
│   │   └── types.ts           # Global TypeScript definitions
│   └── hooks/                 # Custom React hooks
├── public/                    # Static assets (images, fonts)
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 2. Supabase Setup (SQL)

To securely receive messages from your contact form, you need to create a table and set up Row Level Security (RLS) policies. Run this SQL snippet in your Supabase SQL Editor:

```sql
-- 1. Create the table
CREATE TABLE public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'new'::text -- 'new', 'read', 'replied'
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 3. Create Policy: Allow anonymous users to INSERT messages
CREATE POLICY "Allow anonymous inserts" 
ON public.contact_messages 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- 4. Create Policy: Allow authenticated users (you) to SELECT/UPDATE/DELETE
CREATE POLICY "Allow authenticated full access" 
ON public.contact_messages 
FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);
```

### Environment Variables

In your `.env.local` file, add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```
