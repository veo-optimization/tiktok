#!/bin/bash

# Скрипт для автоматичного деплою на GitHub Pages
# Використання: ./deploy.sh "Ваше повідомлення коміту"

echo "🚀 Початок процесу деплою..."

# Перевірка чи є зміни для коміту
if [[ -z $(git status --porcelain) ]]; then
    echo "❌ Немає змін для коміту"
    exit 1
fi

# Додавання всіх файлів
echo "📁 Додавання файлів..."
git add .

# Коміт з повідомленням
COMMIT_MESSAGE=${1:-"Update website"}
echo "💾 Коміт з повідомленням: $COMMIT_MESSAGE"
git commit -m "$COMMIT_MESSAGE"

# Відправка на GitHub
echo "📤 Відправка на GitHub..."
git push origin main

echo "✅ Деплой завершено!"
echo "🌐 Сайт буде оновлено через 1-2 хвилини"
echo "📋 Перевірте статус у GitHub Actions"
