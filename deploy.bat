@echo off
echo Deploying updates...
git add .
git commit -m "feat: replace YouTube embeds with local video reel"
git push
echo Deployment command finished.
pause
