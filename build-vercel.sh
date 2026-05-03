#!/bin/bash
set -e
pnpm --filter @workspace/leonida-vice run build:vercel
cp -r artifacts/leonida-vice/dist ./dist
ls -la dist
