# PowerShell script to build and run Next.js in production mode
# This script handles the production environment setup and provides a workaround for PowerShell limitations
# with the && operator in package.json scripts

# Navigate to project directory
Set-Location -Path $PSScriptRoot

# Clean previous build files for a fresh build
Write-Host "Cleaning previous build files..." -ForegroundColor Yellow
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}

# Build Next.js application
Write-Host "Building Next.js application for production..." -ForegroundColor Green
npm run build

# Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful! Starting production server..." -ForegroundColor Green
    npm run start
} else {
    Write-Host "Build failed with exit code $LASTEXITCODE" -ForegroundColor Red
}

# Keep the console open if the script is run directly
if ($Host.Name -eq "ConsoleHost") {
    Write-Host "Press any key to exit..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
} 