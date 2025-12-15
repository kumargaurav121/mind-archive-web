# Mind Archive - Landing Page

The official landing page for Mind Archive with waitlist functionality and email verification.

## Features

- 🎨 Dark-themed landing page with animated microphone
- 📧 Email waitlist with OTP verification
- ✅ Real-time form validation
- ⏱️ Rate limiting with countdown timer
- 🔐 Secure email verification flow
- 📱 Fully responsive design

## Prerequisites

- Node.js 18+
- Backend API running (see `../api-second-brain`)

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

The `.env.local` file is already configured with:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. Start the Backend API First

```bash
cd ../api-second-brain
npm run dev
```

The backend will start on port 3000.

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser.

## User Flow

1. **Registration Form**
   - User enters: Name, Email, Phone (optional)
   - Form submits to `/api/waitlist/register`
   - OTP sent to user's email via Resend

2. **OTP Verification**
   - User receives 6-digit code via email
   - Enters code in verification form
   - Code is valid for 10 minutes
   - Maximum 3 verification attempts

3. **Success**
   - User sees verification success message
   - User is added to the waitlist in Supabase

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | `http://localhost:3000` |

For production, update to your deployed backend URL.

## API Integration

The landing page connects to these backend endpoints:

- `POST /api/waitlist/register` - Register new user and send OTP
- `POST /api/waitlist/verify-otp` - Verify OTP code
- `POST /api/waitlist/resend-otp` - Resend OTP with 2-minute cooldown

See backend documentation: `../api-second-brain/README.md`

## Features in Detail

### Rate Limiting
- 1 OTP per 2 minutes per email
- Visual countdown timer shows remaining time
- Automatic cooldown on resend button

### Error Handling
- Network errors with helpful messages
- Backend validation errors displayed
- User-friendly error messages

### Form Validation
- Client-side validation for all fields
- Real-time OTP input formatting (digits only, max 6 characters)
- Phone number format hint (E.164 format: +1234567890)
- Disabled states during API requests

### Animations
- Pulsing rings around microphone icon
- Breathing glow effect
- Gentle floating animation
- All animations use CSS keyframes

## Development

```bash
# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Project Structure

```
mind-archive-web/
├── app/
│   ├── page.tsx              # Landing page with waitlist
│   ├── privacy-policy/
│   │   └── page.tsx          # Privacy policy & terms
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles & animations
├── .env.local                # Environment variables
├── package.json
└── README.md
```

## Testing the Waitlist

1. Ensure backend API is running on port 3000
2. Navigate to http://localhost:3001
3. Fill out the registration form with valid data
4. Check your email for the 6-digit OTP code
5. Enter the code in the verification form
6. See the success message

**Note**: You need a valid Resend API key configured in the backend for emails to be sent.

## Deployment

### Before Deploying

1. Update `.env.local` or add environment variable on hosting platform:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-domain.com
   ```

2. Build the app:
   ```bash
   npm run build
   ```

3. Ensure your backend API is deployed and accessible

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Set the `NEXT_PUBLIC_API_URL` environment variable
4. Deploy

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more options.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Backend**: Fastify API (see `../api-second-brain`)

## Support

For issues or questions, please contact the development team.
