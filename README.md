# SalarySync - Professional Salary Increment Calculator

A comprehensive web-based tool for calculating employee salary increments with advanced allocation controls, secure sharing capabilities, and modern UI/UX design.

## 🚀 Key Features

### Core Functionality
- **Excel Integration**: Import/export XLSX files with automatic column validation
- **Multi-tier Increment System**:
  - **Base Increments**: Location-based or uniform percentage increases
  - **Performance Adjustments**: Rating-based multipliers (1-5 scale)
  - **Department Allocations**: Flexible fund distribution (even, percentage, or direct amounts)
- **Real-time Preview**: Live calculation updates and budget tracking
- **Secure File Sharing**: Encrypted file uploads with time-limited signed URLs

### User Experience
- **Modern Dark UI**: Professional dark mode interface with smooth animations
- **Mobile Responsive**: Optimized for all device sizes
- **Step-by-step Wizard**: Intuitive 5-step process with progress tracking
- **Client-side Processing**: All calculations happen in browser (no data leaves your device)

## 🛠️ Technology Stack

### Frontend Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: ES6+ features with async/await patterns
- **SheetJS (XLSX.js)**: Excel file processing and manipulation

### Backend & Infrastructure
- **Vercel**: Serverless deployment platform
- **Supabase**: Backend-as-a-Service for authentication and storage
- **Supabase Storage**: Secure file storage with bucket management
- **Supabase Auth**: User authentication and authorization

### Development Tools
- **Environment Variables**: Secure configuration management
- **Git**: Version control with proper .gitignore patterns
- **Responsive Design**: Mobile-first CSS approach

## 📋 Data Requirements

Your Excel file must contain these exact column headers:

| Column Name        | Required | Format       | Example        | Description |
|--------------------|----------|--------------|----------------|-------------|
| Employee Code      | Yes      | Text         | EMP2023-001    | Unique identifier |
| Employee Name      | Yes      | Text         | Sarah Chen     | Full name |
| Current Salary     | Yes      | Number       | 85000.00       | Base salary amount |
| Location           | Yes      | Text         | Singapore      | Work location |
| Rating             | No       | Number (1-5) | 4              | Performance rating |
| Department         | Yes      | Text         | Product Design | Department name |

📁 **[Download Template File](header.xlsx)** - Use this as a starting point for your data

## 🎯 Usage Instructions

### Step-by-Step Process
1. **Upload Data**: Import your Excel file with employee information
2. **Base Increments**: Choose between location-based or uniform percentage increases
3. **Performance Ratings**: Set multiplier percentages for each rating level
4. **Department Funds**: Distribute additional budget across employees
5. **Review & Export**: Preview calculations and download the updated file

### Secure Sharing (Optional)
1. Navigate to the **Secure Sharing** tab
2. Sign up/sign in with your credentials
3. Upload the processed file to generate a secure, time-limited download link
4. Share the signed URL with authorized personnel

## ⚙️ Setup & Deployment

### Local Development
1. Clone the repository
2. Copy `.env.local.example` to `.env.local`
3. Configure Supabase credentials (optional for basic functionality)
4. Open `index.html` in a modern web browser

### Production Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-anon-key
   BUCKET_NAME=salarysync
   SHARED_PREFIX=shared
   ADMIN_EMAILS=admin@company.com
   ```
3. Deploy automatically on git push

### Supabase Configuration
1. Create a new Supabase project
2. Set up a storage bucket named `salarysync`
3. Configure Row Level Security (RLS) policies
4. Add your domain to allowed origins

## 🔒 Security Features

- **Client-side Processing**: No sensitive data transmitted to servers
- **Encrypted Storage**: Supabase provides encryption at rest
- **Time-limited URLs**: Shared files expire automatically
- **Authentication**: Secure user management with Supabase Auth
- **RLS Policies**: Database-level security controls

## 📱 Browser Compatibility

- **Chrome** 90+ (Recommended)
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🏗️ Project Structure

```
SalarySync/
├── index.html              # Main application
├── styles.css              # Dark theme styling
├── header.xlsx             # Excel template file
├── api/
│   └── config.js           # Serverless function for configuration
├── .env.local.example      # Environment variables template
├── .gitignore             # Git ignore patterns
└── README.md              # Project documentation
```

## 🤝 Support & Licensing

**Proprietary Software** - All rights reserved by HariCodesHere

This software and documentation are proprietary. Unauthorized distribution, modification, or commercial use is prohibited.

**For licensing inquiries**: [harikrishnansanthsh06@gmail.com](mailto:harikrishnansanthsh06@gmail.com)

## 📊 Technical Specifications

- **File Size Limit**: 10MB per Excel file
- **Browser Storage**: Uses IndexedDB for temporary data
- **Performance**: Handles 1000+ employee records efficiently
- **Calculations**: Precision to 2 decimal places
- **Export Format**: Excel 2013+ compatible XLSX files

