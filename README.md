# falkadeh mohsen pasha 1099
آینده در دستان شماست — فالکدهٔ محسن پاشا مبتنی بر ترکیبی از هوش مصنوعی، منطق انسانی، دانش باستانی و علم نجوم.

این مخزن شامل یک رابط کاربری استاتیک (index.html) و یک Serverless proxy (api/anthropic.js) است که تماس‌های کلاینت را به API Anthropic فوروارد می‌کند بدون اینکه کلید API در سمت کاربر منتشر شود.

---

## آنچه در مخزن هست
- `index.html` — کلاینت استاتیک (فرانت‌اند)
- `api/anthropic.js` — Serverless proxy با اعتبارسنجی و rate‑limit ساده
- `.github/workflows/deploy-to-vercel.yml` — GitHub Action برای deploy خودکار به Vercel (push → deploy)
- `vercel.json` — پیکربندی توابع سرورلس برای Vercel
- `README.md` — همین فایل (راهنمای کامل‌سازی و deploy)
- `LICENSE.md` — مجوز MIT

---

## کارهایی که من انجام دادم
1. اضافه کردن `index.html` (کلاینت) و به‌روزرسانی کد تا به `/api/anthropic` درخواست بفرستد.
2. افزودن `api/anthropic.js` به‌عنوان proxy؛ بعدتر آن را با اعتبارسنجی و rate‑limit پایه‌ای ارتقاء دادم.
3. اضافه کردن workflow برای deploy به Vercel، `vercel.json` و `LICENSE.md`.
4. به‌روزرسانی این README با دستورالعمل‌های کامل.

---

## دستورالعمل گام‌به‌گام: انتشار با Vercel (پیشنهادی)
پیش‌نیاز: حساب GitHub و حساب Vercel و دسترسی به پنل دامنه (DNS).

1) وارد Vercel شوید و مخزن را import کنید
- به https://vercel.com وارد شوید.
- از منوی "New Project" → "Import Git Repository" → مخزن `Drmohsenkhoshbahar788-sys/falkadeh1099` را انتخاب کنید.
- Vercel به‌صورت خودکار فایل‌های `index.html` و پوشهٔ `api/` را شناسایی می‌کند.

2) ایجاد توکن و گرفتن شناسه‌ها (برای GitHub Action)
- در Vercel: Account Settings → Tokens → Create Token → یک نام بزنید و توکن بسازید. این مقدار را کپی کنید.
- برای یافتن Org ID و Project ID:
  - Org ID: در URL داشبورد یا در Organization settings پیدا کنید یا از API Vercel استفاده کنید.
  - Project ID: پس از import کردن پروژه، به صفحهٔ project settings بروید و Project ID را کپی کنید.

3) اضافه کردن secrets به GitHub (برای اکشن deploy)
- در GitHub → مخزن → Settings → Secrets and variables → Actions → New repository secret
  - `VERCEL_TOKEN` = (توکن Vercel که ساختید)
  - `VERCEL_ORG_ID` = (Org ID)
  - `VERCEL_PROJECT_ID` = (Project ID)

این سه مقدار برای اجرای workflow `.github/workflows/deploy-to-vercel.yml` لازم‌اند تا پس از هر push به main، deploy خودکار انجام شود.

4) اضافه کردن متغیر محیطی Anthropic در Vercel (برای runtime)
- در Vercel → Projects → [پروژهٔ شما] → Settings → Environment Variables
  - Key: `ANTHROPIC_API_KEY`
  - Value: (کلید Anthropic که از پنل Anthropic گرفتید)
  - Scope: Production (و در صورت نیاز Preview)

توجه: هرگز کلیدها و توکن‌ها را در کد سمت کلاینت یا در README عمومی قرار ندهید.

5) تنظیم دامنهٔ سفارشی (DNS)
- در Vercel → Projects → Domains → Add
  - وارد کنید: `falkadehmohsenpasha1099.com` (یا دامنهٔ شما)
- Vercel راهنمای اختصاص رکورد DNS را نمایش می‌دهد. معمولاً گزینه‌ها:
  - برای `www.yourdomain.com`: اضافه کردن یک CNAME به `cname.vercel-dns.com` (مناسب و ساده)
  - برای apex (yourdomain.com بدون www): استفاده از ALIAS/ANAME یا A records که Vercel مشخص می‌کند. اگر پنل دامنه شما ALIAS/ANAME پشتیبانی می‌کند از آن استفاده کنید، در غیر این صورت دستورالعمل Vercel را دنبال کنید.
- پس از افزودن رکوردها در پنل DNS (Registrar)، ممکن است تا چند دقیقه/چند ساعت طول بکشد تا پراپگیشن انجام شود. پس از تأیید، Vercel HTTPS را خودکار فعال می‌کند.

راهنمای سادهٔ مثال (Registrar مثل Cloudflare یا GoDaddy):
- برای www:
  - Type: CNAME
  - Name: www
  - Value: cname.vercel-dns.com
- برای apex (اگر پنل شما ALIAS یا ANAME دارد): اضافه کنید ALIAS → @ → cname.vercel-dns.com. در غیر این صورت از A records استفاده کنید مطابق راهنمای Vercel.

6) اجرای تست اولیه
- پس از اینکه secrets و env vars را اضافه کردید، یک push به `main` بزنید یا commit جدیدی ایجاد کنید تا GitHub Action اجرا و Vercel deploy شود.
- تست endpoint (غیر streaming):

  curl -X POST "https://<YOUR_DOMAIN>/api/anthropic" \
    -H "Content-Type: application/json" \
    -d '{"model":"claude-sonnet-4-6","max_tokens":100,"system":"سلام","messages":[{"role":"user","content":"سلام"}],"stream":false}'

- اگر ردی از Anthropic دریافت شد، پراسس درست کار می‌کند. اگر خطا برگشت، لاگ‌های Vercel و GitHub Action را بررسی کنید.

---

## ارتقاءهای پیشنهادی (عملیاتی)
1) rate‑limit قابل‌اطمینان (Production):
   - مکانیزم فعلی rate‑limit داخل `api/anthropic.js` مبتنی بر حافظه (in‑memory Map) است و فقط best‑effort برای instance‌های گرم کار می‌کند.
   - برای production توصیه می‌شود از یک سرویس اشتراک‌پذیر counters مثل Redis (مثلاً Upstash) استفاده کنید. من می‌توانم پیاده‌سازی Upstash-backed را آماده کنم؛ تنها چیزی که نیاز دارم مقادیر `UPSTASH_REDIS_REST_URL` و `UPSTASH_REDIS_REST_TOKEN` است تا در Vercel اضافه کنید.

2) احراز هویت سادهٔ سمت سرور (اختیاری):
   - اگر می‌خواهید کنترل مصرف برای کاربران داشته باشید (مثلاً X-Client-Id و quota)، می‌توانیم header مخصوص قرار دهیم و quota را بر اساس آن مدیریت کنیم.

3) لاگ‌برداری و مانیتورینگ:
   - فعال کردن logging در Vercel و اتصال به Sentry / Logflare برای مشاهدهٔ خطاها و آنالیز درخواست‌ها مفید است.

---

## توسعهٔ محلی
- با Vercel CLI (پیشنهاد):
  1. نصب: `npm i -g vercel`
  2. ورود: `vercel login`
  3. در ریشهٔ پروژه: `vercel dev`
  4. قبل از `vercel dev` مقدار `ANTHROPIC_API_KEY` را در فایل `.env` محلی قرار دهید (فقط برای تست محلی؛ دقت کنید `.env` را در .gitignore داشته باشید).

- یا اجرای محلی proxy با Node/Express (در صورتی که بخواهید من نمونه را اضافه کنم).

---

## فعال‌سازی Upstash-backed rate-limit (در صورت تمایل)
1. در https://upstash.com ثبت‌نام کنید و یک Redis ایجاد کنید، سپس URL و Token را دریافت کنید.
2. در Vercel → Project → Settings → Environment Variables مقدارها را اضافه کنید:
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
3. من کدی آماده دارم تا جایگزین نسخهٔ in‑memory شود و counters را در Upstash نگهداری کند.

---

## نکات امنیتی مهم
- هرگز ANTHROPIC_API_KEY یا توکن Vercel را در کد سمت کلاینت یا README عمومی قرار ندهید.
- محدودیت نرخ (rate limiting) را شدیداً توصیه می‌کنم تا از هزینه‌های ناخواسته جلوگیری شود.
- اعتبارسنجی ورودی را نگه دارید تا از ارسال payload‌های بسیار بزرگ یا محتوای مخرب جلوگیری شود.

---

اگر می‌خواهید من:
- تصاویر مرحله‌به‌مرحله و اسکرین‌شات برای README اضافه کنم (نیاز به تصاویر دارید یا من نمونهٔ تصویرسازی‌شده می‌سازم)،
- پیاده‌سازی Upstash-backed rate‑limit را اکنون اضافه کنم (در این صورت UPSTASH credentials را تأمین کنید)،
- یا GitHub Action را بلافاصله تنظیم و تست کنم (نیاز به GitHub secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`) — بگویید کدام را انجام دهم تا ادامه دهم.
