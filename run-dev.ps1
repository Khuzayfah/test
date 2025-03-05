# PowerShell script to run Next.js development server
# This script handles the development environment setup and provides a workaround for PowerShell limitations
# with the && operator in package.json scripts

# Navigate to project directory
Set-Location -Path $PSScriptRoot

# Clean previous build files and node_modules cache if needed
# Uncomment the lines below if you need to clean before starting
# Write-Host "Cleaning previous build files..." -ForegroundColor Yellow
# if (Test-Path ".next") {
#     Remove-Item -Recurse -Force ".next"
# }

# Run Next.js development server
Write-Host "Starting Next.js development server..." -ForegroundColor Green
npm run dev

# Keep the console open if the script is run directly
if ($Host.Name -eq "ConsoleHost") {
    Write-Host "Press any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
} 