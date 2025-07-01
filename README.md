# Salary Increment Calculator



A secure web tool for calculating employee salary increments with advanced allocation controls.

## Key Features
- Excel file import/export (XLSX format)
- Three-tier increment calculation:
  1. Base increment (location or uniform)
  2. Performance-based adjustment
  3. Departmental fund allocation
- Real-time budget tracking
- Dark mode interface

## Data Requirements
Your Excel file must contain these exact column headers:

| Column Name        | Required | Format       | Example        |
|--------------------|----------|--------------|----------------|
| Employee Code      | Yes      | Text         | EMP2023-001    |
| Employee Name      | Yes      | Text         | Sarah Chen     |
| Current Salary     | Yes      | Number       | 85000.00       |
| Location           | Yes      | Text         | Singapore      |
| Rating             | No       | Number (1-5) | 4              |
| Department         | Yes      | Text         | Product Design |

[Download Template File](#) (Contact administrator for access)


## Usage Instructions
1. Upload employee data file
2. Set increment rules:
   - Step 1: Base increments
   - Step 2: Performance multipliers
   - Step 3: Department budget
3. Download processed file

## Technical Details
- Client-side processing (no data leaves your browser)
- Compatible with Excel 2013+ files
- Mobile-responsive design

## Proprietary Notice
This software and all included documentation are property of HariCodesHere. Unauthorized distribution, modification, or commercial use is prohibited.

For licensing inquiries, contact: [harikrishnansanthosh06@gmail.com]

## Security
- No server-side storage
- All calculations occur in browser memory
- Recommended for use on secure, company-managed devices only
