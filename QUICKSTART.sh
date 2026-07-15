#!/usr/bin/env sh
# Quick Start Guide for Analytics Portfolio

echo "🚀 Analytics Portfolio - Quick Start"
echo "===================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo ""
echo "Choose an option:"
echo "1. Start development server (npm run dev)"
echo "2. Build for production (npm run build)"
echo "3. Start production server (npm start)"
echo "4. Lint code (next lint)"
echo ""
echo "Development server will be available at http://localhost:3000"
echo ""
echo "To get started:"
echo "  npm run dev"
echo ""
echo "To build:"
echo "  npm run build"
echo ""
