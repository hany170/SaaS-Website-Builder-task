# Project Installation Guide

## Step 1: Install Required Software

### Installing Node.js
1. Go to [Node.js website](https://nodejs.org/)
2. Download the "LTS" (Long Term Support) version for your operating system
3. Run the installer you downloaded
4. To verify installation:
   - Open Terminal (Mac/Linux) or Command Prompt (Windows)
   - Type `node --version` and press Enter
   - You should see a version number (like v18.0.0)

### Installing Bun
Bun is a fast package installer we'll use for this project.

#### For Mac or Linux:
1. Open Terminal
2. Copy and paste this command:
```bash
curl -fsSL https://bun.sh/install | bash
```
3. Press Enter and wait for installation to complete
4. Close and reopen your Terminal
5. Type `bun --version` to verify installation

#### For Windows:
   - Open PowerShell and run the Bun installation command:
```bash
powershell -c "irm bun.sh/install.ps1|iex"
```

## Step 2: Download the Project

### If you're using Git:
1. Open Terminal/Command Prompt
2. Navigate to where you want to save the project
3. Run:
```bash
git clone [[your-repository-url]](https://github.com/hany170/SaaS-Website-Builder-task)
```

### If you're downloading manually:
1. Download the project as a ZIP file
2. Extract it to your desired location
3. Open Terminal/Command Prompt
4. Navigate to the project folder:
   - On Windows: `cd C:\path\to\your\project`
   - On Mac/Linux: `cd /path/to/your/project`

## Step 3: Install Project Dependencies

1. Make sure you're in the project directory in Terminal/Command Prompt
2. Run this command:
```bash
bun install
```
3. Wait for installation to complete (this might take a few minutes)

## Step 4: Project Setup Instructions
1. Setting Up UploadThing

   - Open https://uploadthing.com/ in your browser.
   - Sign up for a new account or log in if you already have one.
   - Once you're logged in, create a new app or project on the dashboard.
   - After creating the app, you’ll see some API Keys. Copy the following keys:
     - UPLOADTHING_SECRET
     - UPLOADTHING_APP_ID
     - UPLOADTHING_TOKEN

   In your .env file, fill in the following:
   UPLOADTHING_SECRET=your-uploadthing-secret  
   UPLOADTHING_APP_ID=your-uploadthing-app-id  
   UPLOADTHING_TOKEN=your-uploadthing-token  

2. Setting Up Clerk

   - Open https://clerk.dev/ in your browser.
   - Sign up for a new account or log in if you already have one.
   - Create a new project and name it (you can pick any name).
   - In the API Keys section of your project dashboard, copy these keys:
     - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
     - CLERK_SECRET_KEY

   In your .env file, fill in the following:
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key  
   CLERK_SECRET_KEY=your-clerk-secret-key  

3. Setting Up Stripe

   - Open https://stripe.com/ in your browser.
   - Sign up for a new account or log in if you already have one.
   - Navigate to the Developers section in the dashboard.
   - Under the API keys tab:
     - Copy the Publishable key (starts with pk_live_ or pk_test_).
     - Copy the Secret key (starts with sk_live_ or sk_test_).

   In your .env file, fill in the following:
   STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key  
   STRIPE_SECRET_KEY=your-stripe-secret-key  

4. Setting Up the Database

   - If you're using a MySQL database:
     - Create a connection for the project and name it plura.
     - Use your MySQL root password (the main password you set up for MySQL).
     - Replace the word YourPassword in the following lines with your MySQL password:
       DATABASE_URL=mysql://root:YourPassword@localhost:3306/plura  
       LOCAL_DATABASE_URL=mysql://root:YourPassword@localhost:3306/plura  

   In your .env file, fill in the following:
   DATABASE_URL=mysql://root:YourPassword@localhost:3306/plura  
   LOCAL_DATABASE_URL=mysql://root:YourPassword@localhost:3306/plura

   then in the terminal run:
      - npx prisma generate
      - prisma db push

6.  Fill in the rest of the variables with the following:
   - NEXT_PUBLIC_URL=http://localhost:3000/  
   - NEXT_PUBLIC_DOMAIN=localhost:3000  
   - NEXT_PUBLIC_SCHEME=http://  
   - NEXT_PUBLIC_CLERK_SIGN_IN_URL=/main/agency/auth/sign-in  
   - NEXT_PUBLIC_CLERK_SIGN_UP_URL=/main/agency/auth/sign-up  
   - NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/  
   - NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/  
   - NEXT_PUBLIC_PLATFORM_SUBSCRIPTION_PERCENT=1  
   - NEXT_PUBLIC_PLATFORM_ONETIME_FEE=2  
   - NEXT_PUBLIC_PLATFORM_AGENCY_PERCENT=1  

## Step 5: Start the Project

After installation is complete, you can start the development server:
```bash
bun run dev
```

The project should now be running! You can view it by opening your web browser and going to:
```
http://localhost:3000
```

## Troubleshooting

### If you see "command not found":
- Try closing and reopening your Terminal/Command Prompt
- Make sure you installed Node.js and Bun as described above

### If installation fails:
1. Delete these folders/files if they exist:
   - `node_modules` folder
   - `bun.lockb` file
2. Try installing again:
```bash
bun install
```

